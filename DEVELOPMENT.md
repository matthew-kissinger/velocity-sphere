# 🛠️ Velocity Sphere Development Guide

## Architecture Overview

Velocity Sphere is built with a modular architecture optimized for performance and maintainability. This guide provides comprehensive technical documentation for developers and AI agents working on the codebase.

## 🏗️ System Architecture

### Core Game Loop (`src/game/Game.js`)

The game uses a fixed timestep physics simulation with interpolated rendering:

```javascript
// Physics runs at 60Hz
const fixedTimeStep = 1/60;
let accumulator = 0;

function gameLoop(currentTime) {
  const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
  accumulator += deltaTime;
  
  // Fixed physics updates
  while (accumulator >= fixedTimeStep) {
    physicsWorld.step(fixedTimeStep);
    accumulator -= fixedTimeStep;
  }
  
  // Interpolated rendering
  const interpolation = accumulator / fixedTimeStep;
  render(interpolation);
}
```

### Track Generation System

#### Segment-Based Architecture
Tracks are built from segments, each containing:
- **Position**: 3D center point
- **Orientation**: Quaternion for rotation
- **Lanes**: Array of lane configurations
- **Properties**: isGap, isBoost, isStartLine, etc.

#### Performance Optimization Strategy
```javascript
// Segments are categorized for optimal rendering:
boxSegments    → Merged into single mesh
curveSegments  → Rendered individually (can't merge)
wallData       → Instanced rendering (InstancedMesh)
```

### Physics System (`cannon-es`)

#### World Configuration
```javascript
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -20, 0),
  broadphase: new CANNON.SAPBroadphase(world),
  allowSleep: true,
  solver: {
    iterations: 10,
    tolerance: 0.001
  }
});
```

#### Material Properties
- **Ball**: Friction 0.8, Restitution 0.3
- **Track**: Friction 0.4, Restitution 0.1
- **Contact**: Combined friction 0.6

## 📊 Performance Optimization Techniques

### 1. Geometry Merging
```javascript
// Box segments with same orientation are merged
const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
const mergedMesh = new THREE.Mesh(mergedGeometry, sharedMaterial);
```

### 2. Instanced Rendering
```javascript
// Walls use InstancedMesh for massive performance gains
const instancedWalls = new THREE.InstancedMesh(
  wallGeometry,
  wallMaterial,
  wallCount
);
```

### 3. Geometry Caching
```javascript
const geometryCache = new Map();

function getOrCreateGeometry(key, createFn) {
  if (!geometryCache.has(key)) {
    geometryCache.set(key, createFn());
  }
  return geometryCache.get(key);
}
```

### 4. LOD System
```javascript
// Automatic quality adjustment based on FPS
if (averageFPS < 45) {
  renderer.setPixelRatio(0.75);
  shadows.enabled = false;
} else if (averageFPS > 55) {
  renderer.setPixelRatio(window.devicePixelRatio);
  shadows.enabled = true;
}
```

## 🎮 Ball Physics Implementation

### Movement System
```javascript
class Ball {
  update(deltaTime, inputs) {
    // Calculate forward direction
    const forward = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(cameraQuaternion)
      .projectOnPlane(new THREE.Vector3(0, 1, 0))
      .normalize();
    
    // Apply forces
    const force = forward.multiplyScalar(
      inputs.forward * this.ACCELERATION
    );
    
    if (this.isBoostActive) {
      force.multiplyScalar(this.BOOST_MULTIPLIER);
    }
    
    this.body.applyForce(force);
  }
}
```

### Ground Detection
```javascript
isGrounded() {
  const raycast = new CANNON.RaycastResult();
  const from = this.body.position;
  const to = new CANNON.Vec3(
    from.x,
    from.y - this.radius - 0.5,
    from.z
  );
  
  this.physicsWorld.raycastClosest(
    from, to, {}, raycast
  );
  
  return raycast.hasHit;
}
```

## 🎨 Rendering Pipeline

### Three.js Setup
```javascript
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: "high-performance"
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
```

### Custom Shaders
Each level can specify custom shaders:

```glsl
// Vertex Shader Example
varying vec2 vUv;
varying float vElevation;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vElevation = worldPos.y;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}

// Fragment Shader Example  
uniform float time;
varying vec2 vUv;
varying float vElevation;

void main() {
  vec3 color = mix(
    vec3(0.1, 0.2, 0.8),  // Low color
    vec3(0.8, 0.2, 0.1),  // High color
    vElevation * 0.1
  );
  
  // Animated pattern
  float pattern = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
  color *= pattern;
  
  gl_FragColor = vec4(color, 1.0);
}
```

## 🏁 Track Building Best Practices

### Segment Optimization Rules

1. **Minimize Roll Changes**
```javascript
// BAD - Creates many unmergeable segments
for (let i = 0; i < 30; i++) {
  addSegment({ rollDelta: Math.sin(i) * 0.1 });
}

// GOOD - Roll changes only at start/end
addSegment({ rollDelta: Math.PI / 6 });  // Bank in
for (let i = 0; i < 28; i++) {
  addSegment({ yawDelta: Math.PI / 60 }); // Turn
}
addSegment({ rollDelta: -Math.PI / 6 }); // Bank out
```

2. **Batch Similar Segments**
```javascript
// Create longer segments when possible
for (let i = 0; i < 10; i++) {
  addSegment({
    yawDelta: 0,
    pitchDelta: 0,
    rollDelta: 0,
    lanes: [{ offset: 0, width: 10 }]
  });
}
```

3. **Avoid Complex Calculations**
```javascript
// BAD - Heavy computation per segment
for (let i = 0; i < 100; i++) {
  const complex = Math.sin(i * 0.1) * Math.cos(i * 0.2) * Math.tan(i * 0.3);
  addSegment({ yawDelta: complex });
}

// GOOD - Precompute or simplify
const turnRate = Math.PI / 50;
for (let i = 0; i < 100; i++) {
  addSegment({ yawDelta: turnRate });
}
```

## 🔧 Debugging Tools

### Performance Monitoring
```javascript
// FPS Counter
import Stats from 'stats.js';
const stats = new Stats();
document.body.appendChild(stats.dom);

// In game loop
stats.begin();
// ... render frame
stats.end();
```

### Physics Debug Rendering
```javascript
// Enable cannon-es debug renderer
import CannonDebugger from 'cannon-es-debugger';

const cannonDebugger = new CannonDebugger(scene, world);
// In render loop
cannonDebugger.update();
```

### Track Validation
```javascript
function validateTrack(segments) {
  let totalRoll = 0;
  let maxPitch = 0;
  
  segments.forEach(segment => {
    totalRoll += segment.rollDelta || 0;
    maxPitch = Math.max(maxPitch, Math.abs(segment.pitchDelta || 0));
  });
  
  console.assert(Math.abs(totalRoll) < 0.01, "Track roll doesn't reset!");
  console.assert(maxPitch < Math.PI / 3, "Track too steep!");
}
```

## 🚀 Build & Deployment

### Development Build
```bash
npm run dev
# Starts Vite dev server with HMR
# Available at http://localhost:5173
```

### Production Build
```bash
npm run build
# Outputs to dist/
# Includes optimization:
# - Tree shaking
# - Minification
# - Code splitting
# - Asset optimization
```

### Performance Profiling
```bash
npm run build -- --mode profiling
# Builds with source maps for profiling
```

## 📝 Code Style Guidelines

### Module Structure
```javascript
// Standard module template
import * as THREE from 'three';
import { CONSTANTS } from '../constants.js';

export class ModuleName {
  constructor(dependencies) {
    // Initialize
  }
  
  init() {
    // Setup after construction
  }
  
  update(deltaTime) {
    // Frame update logic
  }
  
  dispose() {
    // Cleanup resources
  }
}
```

### Performance Annotations
```javascript
// Mark performance-critical sections
function criticalPath() {
  // PERF: This runs 60 times per second
  // Avoid allocations here
  
  // PERF: Cached calculation
  if (!this._cachedValue) {
    this._cachedValue = expensiveCalculation();
  }
  return this._cachedValue;
}
```

## 🔄 Testing Strategy

### Unit Tests (Planned)
```javascript
describe('Ball Physics', () => {
  test('jump velocity applied when grounded', () => {
    const ball = new Ball();
    ball.isGrounded = () => true;
    ball.jump();
    expect(ball.body.velocity.y).toBe(8);
  });
});
```

### Performance Tests
```javascript
function performanceTest(trackLevel) {
  const samples = [];
  
  for (let i = 0; i < 100; i++) {
    const start = performance.now();
    trackBuilder.build(trackLevel);
    samples.push(performance.now() - start);
  }
  
  const avg = samples.reduce((a, b) => a + b) / samples.length;
  console.log(`Track build time: ${avg.toFixed(2)}ms`);
}
```

## 🎯 Common Patterns

### Singleton Services
```javascript
class PhysicsWorld {
  constructor() {
    if (PhysicsWorld.instance) {
      return PhysicsWorld.instance;
    }
    PhysicsWorld.instance = this;
    // Initialize
  }
}
```

### Event System
```javascript
class EventEmitter {
  on(event, callback) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}
```

### Resource Management
```javascript
class ResourceManager {
  async load(url) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }
    
    const resource = await this.loader.load(url);
    this.cache.set(url, resource);
    return resource;
  }
}
```

## 🌟 Advanced Topics

### WebGL Optimizations
- Use VAOs (Vertex Array Objects)
- Minimize state changes
- Batch draw calls
- Use texture atlases
- Implement frustum culling

### Physics Optimizations
- Use spatial hashing for broad phase
- Sleep inactive bodies
- Reduce solver iterations for distant objects
- Use simplified collision shapes
- Implement LOD for physics

### Memory Management
- Pool frequently created objects
- Dispose Three.js geometries/materials
- Remove physics bodies when not needed
- Clear event listeners
- Use WeakMaps for metadata

---

**Last Updated**: January 2025
**Version**: 1.2.0
**Status**: Production Ready