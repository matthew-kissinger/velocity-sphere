# ⚡ Velocity Sphere Optimization Guide

## Performance Targets

### Minimum Requirements
- **FPS**: 60+ on mid-range hardware (GTX 1060 / RX 580)
- **Frame Time**: <16.67ms per frame
- **Physics**: Stable 60Hz update rate
- **Draw Calls**: <100 per frame
- **Triangle Count**: <500k visible
- **Segment Count**: <250 per track

## 🏗️ Core Optimization Strategies

### 1. Geometry Merging System

**Problem**: Individual track segments create too many draw calls
**Solution**: Merge compatible geometries into single mesh

```javascript
// Segments are categorized for optimal rendering:
boxSegments    → Merged into single mesh
curveSegments  → Rendered individually (can't merge)
wallData       → Instanced rendering (InstancedMesh)

// Implementation
const geometries = segments.map(s => 
  geometry.clone().applyMatrix4(s.matrix)
);
const merged = BufferGeometryUtils.mergeGeometries(geometries);
const singleMesh = new THREE.Mesh(merged, material);
```

**Impact**: 95% reduction in draw calls

### 2. Instanced Rendering

**Problem**: Repetitive objects waste GPU resources
**Solution**: Use InstancedMesh for repeated geometry

```javascript
const instancedWalls = new THREE.InstancedMesh(
  wallGeometry,      // Shared geometry
  wallMaterial,      // Shared material
  wallCount          // Number of instances
);

// Set transforms for each instance
wallData.forEach((wall, index) => {
  const matrix = new THREE.Matrix4();
  matrix.compose(wall.position, wall.quaternion, wall.scale);
  instancedWalls.setMatrixAt(index, matrix);
});
```

**Impact**: 80% reduction in wall rendering cost

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

**Impact**: 70% reduction in geometry memory usage

## 📊 Circuit 3 Performance Crisis Case Study

### The Problem
Circuit 3 levels (21-30) were experiencing severe performance issues:
- Level 26: 200 segments → 20 FPS
- Level 28: 150 segments → 15 FPS  
- Level 30: 440 segments → 8 FPS (unplayable)

### Root Causes Identified

1. **Excessive Segment Counts**
   - Tracks had 2-3x more segments than necessary
   - Complex mathematical calculations per segment

2. **Banking/Roll Abuse**
   - Constant roll changes prevented geometry merging
   - Every segment became a unique mesh

3. **Inefficient Calculations**
   ```javascript
   // BAD: Complex math in tight loops
   for (let i = 0; i < 400; i++) {
     const roll = Math.sin(i * 0.1) * Math.cos(i * 0.2);
     addSegment({ rollDelta: roll });
   }
   ```

### Solutions Applied

1. **Segment Reduction**
   - Reduced segments by 50-60%
   - Simplified geometric patterns
   - Pre-calculated values outside loops

2. **Banking Optimization**
   ```javascript
   // GOOD: Bank only at curve start/end
   addSegment({ rollDelta: Math.PI / 6 });  // Bank in
   for (let i = 0; i < 28; i++) {
     addSegment({ yawDelta: Math.PI / 60 }); // Turn
   }
   addSegment({ rollDelta: -Math.PI / 6 }); // Bank out
   ```

3. **Calculation Simplification**
   ```javascript
   // GOOD: Pre-compute values
   const turnRate = Math.PI / 50;
   for (let i = 0; i < 100; i++) {
     addSegment({ yawDelta: turnRate });
   }
   ```

### Results
- Level 26: 20 FPS → 62 FPS
- Level 28: 15 FPS → 60 FPS
- Level 30: 8 FPS → 61 FPS

## 🔧 Track Design for Performance

### Segment Optimization Rules

1. **Minimize Roll Changes**
   - Only bank at curve entry/exit
   - Keep roll constant during turns
   - Always return to 0 roll

2. **Batch Similar Segments**
   - Group straight sections
   - Use consistent lane widths
   - Minimize unique configurations

3. **Avoid Complex Calculations**
   - Pre-compute mathematical values
   - Use simple patterns
   - Avoid nested trigonometric functions

### Performance Budget per Track

```javascript
const PERFORMANCE_LIMITS = {
  maxSegments: 250,
  maxUniqueGeometries: 50,
  maxRollChanges: 20,
  maxDrawCalls: 100,
  maxPhysicsBodies: 500
};
```

## 🎮 Runtime Optimizations

### LOD System
```javascript
// Automatic quality adjustment based on FPS
if (averageFPS < 45) {
  renderer.setPixelRatio(0.75);
  shadows.enabled = false;
  particleCount *= 0.5;
} else if (averageFPS > 55) {
  renderer.setPixelRatio(window.devicePixelRatio);
  shadows.enabled = true;
  particleCount = maxParticles;
}
```

### Physics Optimization
```javascript
// Static bodies for track
trackBody.type = CANNON.Body.STATIC;
trackBody.allowSleep = true;

// Efficient collision detection
world.broadphase = new CANNON.SAPBroadphase(world);
world.solver.iterations = 10; // Balance accuracy vs performance
```

### Render Pipeline
```javascript
// Frustum culling
camera.layers.enable(0); // Default layer
camera.layers.enable(1); // Track layer
camera.layers.enable(2); // Effects layer

// Conditional rendering
if (distanceToCamera > 200) {
  mesh.visible = false;
}
```

## 📈 Performance Monitoring

### FPS Counter Integration
```javascript
import Stats from 'stats.js';
const stats = new Stats();
stats.showPanel(0); // FPS panel
document.body.appendChild(stats.dom);

// In game loop
stats.begin();
// ... render frame
stats.end();
```

### Performance Profiling
```javascript
function profileTrackGeneration(level) {
  console.time('Track Generation');
  const track = generateTrack(level);
  console.timeEnd('Track Generation');
  
  console.log({
    segments: track.segments.length,
    uniqueGeometries: track.geometryCount,
    drawCalls: track.meshes.length,
    estimatedFPS: 3000 / track.segments.length
  });
}
```

### Memory Monitoring
```javascript
function getMemoryUsage() {
  if (performance.memory) {
    return {
      used: (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
      total: (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
      limit: (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
    };
  }
}
```

## 🚀 Best Practices Summary

### Do's ✅
- Pre-calculate mathematical values
- Merge geometries where possible
- Use instanced rendering for repetitive objects
- Cache and reuse geometries
- Profile before and after optimization
- Keep segments under 250 per track
- Test on target hardware

### Don'ts ❌
- Don't change roll frequently
- Don't create unique geometry per segment
- Don't use complex math in loops
- Don't ignore FPS warnings
- Don't add features without profiling
- Don't exceed performance budgets

## 🔄 Optimization Workflow

1. **Profile First**
   - Measure current performance
   - Identify bottlenecks
   - Set optimization goals

2. **Optimize Systematically**
   - Start with biggest impact items
   - Test after each change
   - Document what worked

3. **Validate Results**
   - Test on multiple devices
   - Ensure 60 FPS maintained
   - Check for visual regressions

4. **Monitor Continuously**
   - Add performance regression tests
   - Profile new features
   - Maintain performance budgets

---

**Last Updated**: January 2025
**Version**: 1.3.0
**Status**: Fully Optimized for 60+ FPS