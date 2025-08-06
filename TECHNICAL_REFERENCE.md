# 🔧 Velocity Sphere Technical Reference

**Complete technical documentation for developers and AI agents**

## 🎯 Tech Stack Overview

### Core Dependencies
```json
{
  "three": "^0.169.0",      // 3D graphics and WebGL
  "cannon-es": "^0.20.0",   // Physics simulation  
  "stats.js": "^0.17.0",    // Performance monitoring
  "vite": "^6.0.3"          // Build system
}
```

### Architecture Pattern
- **Modular ES6** with zero global variables
- **Event-driven** communication between systems
- **Component-based** design with clear separation
- **Fixed timestep** physics with interpolated rendering

## 🏗️ System Architecture

### Core Game Loop
```javascript
// Fixed timestep physics with interpolated rendering
const FIXED_TIME_STEP = 1/60;
let accumulator = 0;

function gameLoop(currentTime) {
  const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
  accumulator += deltaTime;
  
  // Fixed physics updates
  while (accumulator >= FIXED_TIME_STEP) {
    physicsWorld.step(FIXED_TIME_STEP);
    accumulator -= FIXED_TIME_STEP;
  }
  
  // Interpolated rendering
  const interpolation = accumulator / FIXED_TIME_STEP;
  render(interpolation);
}
```

### Component Lifecycle
```javascript
class Component {
  constructor(dependencies) { /* Initialize */ }
  init() { /* Setup after construction */ }
  update(deltaTime) { /* Frame update */ }
  dispose() { /* Cleanup resources */ }
}
```

## 🎮 Ball Physics System

### Physics Constants
```javascript
const BALL_CONFIG = {
  // Movement
  mass: 5,
  radius: 1.0,
  linearDamping: 0.1,
  angularDamping: 0.1,
  
  // Forces
  ACCELERATION: 30,
  JUMP_VELOCITY: 8,
  MAX_SPEED: 999,
  
  // Boost
  BOOST_MULTIPLIER: 4.0,
  BOOST_DURATION: 3,
  BOOST_COOLDOWN: 8,
  
  // Materials
  friction: 0.8,
  restitution: 0.3
};
```

### Ground Detection
```javascript
isGrounded() {
  const rayResult = new CANNON.RaycastResult();
  const from = this.body.position;
  const to = new CANNON.Vec3(from.x, from.y - this.radius - 0.5, from.z);
  
  this.physicsWorld.world.raycastClosest(from, to, {}, rayResult);
  
  return rayResult.hasHit && 
         rayResult.body && 
         rayResult.body.mass === 0 &&
         rayResult.distance <= (this.radius + 1.0);
}
```

## 🛤️ Track Generation System

### Track Segment Structure
```javascript
interface TrackSegment {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  lanes: Array<{
    offset: number,    // Lateral offset from center
    width: number      // Lane width (min 6 units)
  }>;
  properties: {
    yawDelta?: number;      // Horizontal turn (radians)
    pitchDelta?: number;    // Vertical angle (radians)
    rollDelta?: number;     // Banking/tilt (radians)
    isGap?: boolean;        // Creates jump gap
    isBoost?: boolean;      // Places boost pad
    isBoostPowerup?: boolean; // Places boost powerup
    isStartLine?: boolean;  // Starting position
    isFinishLine?: boolean; // Finish line
  };
}
```

### Track Building Best Practices
```javascript
// GOOD: Smooth banking transitions
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: Math.PI / 40 }); // Gradual bank
}
// Turn with consistent banking
for (let i = 0; i < 30; i++) {
  addSegment({ yawDelta: Math.PI / 60 });
}
// Unbank gradually
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: -Math.PI / 40 });
}

// BAD: Sudden banking changes
addSegment({ rollDelta: Math.PI / 4 });  // Too sudden!

// GOOD: Boost before climbs
addSegment({ isBoost: true });
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 70 }); // Now climbable
}

// BAD: Steep climb without boost
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 40 }); // Too steep!
}
```

### Generation Pipeline
```javascript
// 1. Generate segments
const segments = level.generateTrack(addSegment);

// 2. Categorize for optimization
const { boxSegments, curveSegments, wallData } = categorizeSegments(segments);

// 3. Apply optimizations
const mergedBoxes = mergeGeometries(boxSegments);
const instancedWalls = createInstancedMesh(wallData);

// 4. Create physics bodies
const trackBodies = createStaticBodies(segments);
```

### Performance Features
- **Geometry Merging**: Compatible segments merged into single mesh
- **Instanced Rendering**: Walls use InstancedMesh
- **Material Sharing**: Single material instance
- **Geometry Caching**: Reused geometries across segments
- **Chunk Processing**: 20 segments per chunk

## 🎨 Rendering Pipeline

### Three.js Configuration
```javascript
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: "high-performance",
  precision: "highp",
  alpha: false,
  depth: true,
  stencil: false
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.outputColorSpace = THREE.SRGBColorSpace;
```

### Shader System
```javascript
// Shader structure
export default {
  vertexShader: `...`,
  fragmentShader: `...`,
  uniforms: {
    time: { value: 0 },
    baseColor: { value: [r, g, b] }
  }
};

// Integration
const material = new THREE.ShaderMaterial({
  vertexShader: shader.vertexShader,
  fragmentShader: shader.fragmentShader,
  uniforms: shader.uniforms,
  side: THREE.DoubleSide
});
```

### Camera System
```javascript
// Orbital camera with following
class Camera {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 3000);
    this.controls = new OrbitControls(this.camera, domElement);
    
    // Configuration
    this.controls.enableDamping = false;
    this.controls.enablePan = false;
    this.controls.minDistance = 15;
    this.controls.maxDistance = 50;
    this.controls.maxPolarAngle = Math.PI - 0.01;
    this.controls.minPolarAngle = 0.01;
  }
  
  update() {
    // Maintain orbital position while following target
    const offset = this.camera.position.clone().sub(this.controls.target);
    this.controls.target.copy(this.target.position);
    this.camera.position.copy(this.target.position).add(offset);
    this.camera.lookAt(this.controls.target);
    this.controls.update();
  }
}
```

## 🌐 Physics World Configuration

### World Setup
```javascript
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -20, 0),
  broadphase: new CANNON.SAPBroadphase(world),
  allowSleep: true
});

world.defaultContactMaterial = new CANNON.ContactMaterial(
  ballMaterial,
  trackMaterial,
  {
    friction: 0.6,
    restitution: 0.1,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 3
  }
);
```

### Collision Groups
```javascript
const COLLISION_GROUPS = {
  BALL: 1,
  TRACK: 2,
  POWERUP: 4,
  TRIGGER: 8
};

// Ball collides with track and triggers
ballBody.collisionFilterGroup = COLLISION_GROUPS.BALL;
ballBody.collisionFilterMask = COLLISION_GROUPS.TRACK | COLLISION_GROUPS.TRIGGER;
```

## 📊 Performance Monitoring

### FPS Tracking
```javascript
class FPSTracker {
  constructor() {
    this.frames = 0;
    this.lastTime = performance.now();
    this.fps = 60;
  }
  
  update() {
    this.frames++;
    const currentTime = performance.now();
    
    if (currentTime >= this.lastTime + 1000) {
      this.fps = Math.round((this.frames * 1000) / (currentTime - this.lastTime));
      this.frames = 0;
      this.lastTime = currentTime;
      
      // Auto quality adjustment
      if (this.fps < 45) {
        this.reduceQuality();
      } else if (this.fps > 55) {
        this.increaseQuality();
      }
    }
  }
}
```

### Memory Management
```javascript
// Proper disposal pattern
function disposeObject3D(object) {
  object.traverse((child) => {
    if (child.geometry) {
      child.geometry.dispose();
    }
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
  
  object.parent?.remove(object);
}
```

## 🔌 Integration Points for AI Agents

### Level Creation API
```javascript
// Level definition format
export default {
  name: "Level Name",
  description: "Level description",
  difficulty: 1-5,  // 1=Easy, 5=Hard (NO 6/Extreme - proven unplayable)
  shader: "shader-name",
  skybox: "skybox-name",
  
  generateTrack(addSegment) {
    // Use addSegment() to build track
    addSegment({
      yawDelta: Math.PI / 30,    // Turn angle (max π/30 per segment)
      pitchDelta: Math.PI / 60,  // Climb angle (max π/60 without boost)
      rollDelta: Math.PI / 40,   // Banking (max π/4 total)
      lanes: [{ offset: 0, width: 10 }],
      isBoost: false,
      isGap: false
    });
  }
};
```

### Shader Creation API
```javascript
// Shader format
export default {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec3 color = vec3(vUv.x, vUv.y, sin(time));
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  uniforms: {
    time: { value: 0 }
  }
};
```

### Performance Constraints & Physics Limits
```javascript
const TRACK_LIMITS = {
  maxSegments: 250,           // Hard limit for performance
  maxRollChanges: 20,         // Minimize for geometry merging
  maxClimbAngle: Math.PI / 60,// Without boost assistance
  maxBankAngle: Math.PI / 4,  // 45° maximum banking
  minLaneWidth: 6,            // Ball needs room to maneuver
  maxLaneWidth: 30,           // Beyond this feels too open
  segmentLength: 6,           // Fixed segment size
  maxTurnRate: Math.PI / 30   // Per segment to prevent impossible turns
};

// CRITICAL: Features that DO NOT WORK
const BROKEN_FEATURES = [
  'corkscrews',        // Ball cannot handle inverted sections
  'vertical_loops',    // Insufficient grip/speed to complete
  'extreme_banking',   // >45° causes ball to slide off
  'steep_climbs',      // >π/60 without boost causes rollback
  'rail_shaders'       // Removed - track shaders handle visibility
];
```

## 🚀 Build & Deployment

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
```

### Build Configuration
```javascript
// vite.config.js
export default {
  base: '/velocity-sphere/',
  build: {
    target: 'es2015',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'cannon': ['cannon-es']
        }
      }
    }
  }
};
```

## 🎮 Common Track Generation Patterns

### Working Patterns (Proven in Playtesting)
```javascript
// 1. The S-Curve Flow
const sCurve = [
  { angle: Math.PI / 3, segments: 30 },
  { angle: -Math.PI / 2, segments: 35 },
  { angle: Math.PI / 3, segments: 30 }
];

for (const turn of sCurve) {
  for (let i = 0; i < turn.segments; i++) {
    addSegment({
      yawDelta: turn.angle / turn.segments,
      lanes: [{ offset: 0, width: 14 }]
    });
  }
}

// 2. The Multi-Path Choice
for (let i = 0; i < 10; i++) {
  const factor = i / 10;
  addSegment({
    lanes: [
      { offset: -15 * factor, width: 12 },
      { offset: 15 * factor, width: 12 }
    ]
  });
}
// Parallel paths
for (let i = 0; i < 40; i++) {
  addSegment({
    lanes: [
      { offset: -15, width: 12 },
      { offset: 15, width: 12 }
    ]
  });
}
// Merge back
for (let i = 0; i < 10; i++) {
  const factor = 1 - i / 10;
  addSegment({
    lanes: [
      { offset: -15 * factor, width: 12 },
      { offset: 15 * factor, width: 12 }
    ]
  });
}

// 3. The Boost Jump
addSegment({ isBoost: true });
for (let i = 0; i < 5; i++) {
  addSegment({ pitchDelta: Math.PI / 100 }); // Launch ramp
}
for (let i = 0; i < 8; i++) {
  addSegment({ isGap: true }); // Jump gap
}
for (let i = 0; i < 5; i++) {
  addSegment({ pitchDelta: -Math.PI / 100 }); // Landing
}
```

### Broken Patterns (Do NOT Use)
```javascript
// ❌ CORKSCREW - Players cannot navigate
for (let i = 0; i < 40; i++) {
  addSegment({
    yawDelta: Math.PI / 20,
    rollDelta: Math.PI * 2 / 40  // Full rotation = impossible
  });
}

// ❌ VERTICAL LOOP - Physics don't support
for (let i = 0; i < 40; i++) {
  addSegment({
    pitchDelta: Math.PI * 2 / 40  // Vertical loop = fall off
  });
}

// ❌ EXTREME BANKING - Ball slides off
addSegment({ rollDelta: Math.PI / 2 });  // 90° = instant failure

// ❌ IMPOSSIBLE CLIMB - Ball rolls backward
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 30 });  // Too steep!
}
```

## 🔧 Shader System Details

### Shader Registration
```javascript
// Shaders are auto-discovered from src/shaders/
// File naming: shader-name.js
// Export format:
export default {
  name: 'shader-name',
  uniforms: {
    time: { value: 0 },
    // ShaderManager auto-injects:
    // - time
    // - resolution
    // - cameraPosition
  },
  vertexShader: `...`,
  fragmentShader: `...`
};
```

### Rail System (Visual Only)
```javascript
// Rails are automatically generated for track edges
// Colors are determined by track shader for visibility
// No separate rail shader system (removed after testing)
const railColors = {
  'default': 0xcccccc,
  'dark-track': 0xffffff,  // White rails on dark tracks
  'bright-track': 0x333333  // Dark rails on bright tracks
};
```

---

**Last Updated**: January 2025
**Version**: 2.0.0
**Status**: Production Ready
**Based on**: Extensive playtesting and iteration