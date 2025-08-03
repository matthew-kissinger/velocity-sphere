# 🔧 Velocity Sphere Troubleshooting Guide

## Overview

This guide helps developers and AI agents quickly diagnose and fix common issues in Velocity Sphere. Each issue includes symptoms, root causes, and proven solutions.

## 🚨 Performance Issues

### Problem: Circuit 3 Performance Crisis

**Critical Case Study**: Levels 22, 24, 20, and 23 dropped to 15-30 FPS

**Symptoms:**
- Severe frame drops on specific levels only
- Other levels run at 60+ FPS normally
- Performance issues appeared after adding "advanced" features
- Stuttering and unplayable gameplay

**Root Cause**: Dynamic lane offsets and widths preventing geometry optimization

**Example of Problem Code:**
```javascript
// CRITICAL ERROR: This breaks all optimization
for (let i = 0; i < segments; i++) {
  const progress = i / segments;
  addSegment({
    lanes: [{
      offset: Math.sin(i * 0.1) * 3,      // Unique every segment!
      width: 10 + progress * 5             // Dynamic width!
    }]
  });
}
```

**Why This Kills Performance:**
- Each segment becomes geometrically unique
- Geometry merging system cannot combine segments
- GPU must render 200+ separate draw calls instead of 1-5 merged calls
- Memory usage increases 3x due to duplicate geometry data

### Problem: Frame Drops on Specific Levels (General)

**Common Causes:**
1. **Dynamic properties** (most critical) - see above
2. Too many track segments (>250)
3. Excessive roll/banking changes preventing geometry merging
4. Complex calculations in segment generation loops
5. Varying lane widths creating extra geometry

**Solutions:**

```javascript
// 1. Reduce segment count
// BAD: 40 segments for simple curve
for (let i = 0; i < 40; i++) {
  addSegment({ yawDelta: Math.PI / 80 });
}

// GOOD: 20 segments achieve same result
for (let i = 0; i < 20; i++) {
  addSegment({ yawDelta: Math.PI / 40 });
}

// 2. Minimize roll changes
// BAD: Roll changes prevent merging
for (let i = 0; i < 30; i++) {
  addSegment({ 
    rollDelta: Math.sin(i * 0.1) * 0.1 
  });
}

// GOOD: Roll only at start/end
addSegment({ rollDelta: Math.PI / 6 });
for (let i = 0; i < 28; i++) {
  addSegment({ yawDelta: Math.PI / 60 });
}
addSegment({ rollDelta: -Math.PI / 6 });

// 3. Simplify calculations
// BAD: Complex math every iteration
for (let i = 0; i < 50; i++) {
  const complex = Math.sin(i * 0.1) * Math.cos(i * 0.2);
  addSegment({ yawDelta: complex });
}

// GOOD: Precompute or simplify
const turnRate = Math.PI / 100;
for (let i = 0; i < 50; i++) {
  addSegment({ yawDelta: turnRate });
}
```

**Diagnostic Commands:**
```javascript
// Check segment count
console.log(`Level ${level} segments:`, trackBuilder.segments.length);

// Monitor merge efficiency  
console.log(`Merged segments:`, boxSegments.length);
console.log(`Unmerged segments:`, curveSegments.length);

// Check for dynamic properties
trackData.segments.forEach((segment, i) => {
  segment.lanes.forEach(lane => {
    if (typeof lane.offset !== 'number' || typeof lane.width !== 'number') {
      console.error(`Dynamic properties found in segment ${i}:`, lane);
    }
  });
});
```

### Problem: Powerups and Boost Pads Not Visible

**Symptoms:**
- Players report not seeing powerups
- Boost pads sometimes invisible or interfere with track rendering
- Asset visibility inconsistent across different lighting conditions

**Root Cause**: Complex shader materials and poor color choices

**Example of Problem Code:**
```javascript
// BAD: Complex shader that can fail to compile or render
const material = new THREE.ShaderMaterial({
  vertexShader: `// 20+ lines of complex shader code`,
  fragmentShader: `// 50+ lines of complex effects`,
  transparent: true,
  blending: THREE.AdditiveBlending
});
```

**Solution: Simple, High-Contrast Materials**
```javascript
// GOOD: Simple, reliable materials with bright colors
const powerupMaterial = new THREE.MeshBasicMaterial({ 
  color: 0xffff00  // Bright yellow - always visible
});

const boostPadMaterial = new THREE.MeshBasicMaterial({ 
  color: 0x00ffff  // Bright cyan - high contrast
});
```

**Asset Design Rules:**
1. **Use bright, contrasting colors** (yellow, cyan, green)
2. **Avoid complex shaders** - use MeshBasicMaterial when possible
3. **Position assets above track surface** to prevent z-fighting
4. **Use simple geometry** - spheres, cones, boxes
5. **Test in all lighting conditions**

### Problem: Memory Leaks

**Symptoms:**
- Performance degrades over time
- Browser tab crashes after extended play
- Increasing memory usage in DevTools

**Common Causes:**
1. Three.js geometries/materials not disposed
2. Physics bodies not removed
3. Event listeners not cleaned up
4. Cached resources never released

**Solutions:**

```javascript
// Proper cleanup in Game.js
dispose() {
  // Dispose Three.js resources
  this.scene.traverse(child => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
  
  // Clear physics world
  while (this.physicsWorld.bodies.length > 0) {
    this.physicsWorld.removeBody(
      this.physicsWorld.bodies[0]
    );
  }
  
  // Remove event listeners
  window.removeEventListener('resize', this.handleResize);
  document.removeEventListener('keydown', this.handleKeyDown);
  
  // Clear caches
  this.geometryCache.clear();
  this.textureCache.clear();
}
```

## 🎮 Gameplay Issues

### Problem: Ball Falls Through Track

**Symptoms:**
- Ball clips through track at high speeds
- Falls through track on landing
- Passes through narrow lanes

**Common Causes:**
1. Physics timestep too large
2. Ball velocity exceeding collision detection limits
3. Track segments too thin
4. Lane width too narrow (<6 units)

**Solutions:**

```javascript
// 1. Fixed timestep physics
const FIXED_TIMESTEP = 1/60; // Never exceed
world.step(FIXED_TIMESTEP, deltaTime, 3); // Max 3 substeps

// 2. Continuous collision detection for ball
ballBody.ccdSpeedThreshold = 10;
ballBody.ccdRadius = 0.5;

// 3. Minimum lane width
addSegment({
  lanes: [{ 
    offset: 0, 
    width: Math.max(6, requestedWidth) // Never less than 6
  }]
});

// 4. Thicker track segments
const TRACK_THICKNESS = 0.6; // Standard thickness
```

### Problem: Track Flips Upside Down

**Symptoms:**
- Track gradually inverts during play
- Player thrown off on loops
- Banking doesn't reset properly

**Common Causes:**
1. Banking accumulation without reset
2. Roll exceeding safe limits (>π/3)
3. Incorrect banking direction on exit

**Solutions:**

```javascript
// 1. Always reset banking
let totalRoll = 0;

// Bank into turn
addSegment({ rollDelta: Math.PI / 6 });
totalRoll += Math.PI / 6;

// Turn segments...

// Bank out - MUST equal opposite
addSegment({ rollDelta: -Math.PI / 6 });
totalRoll -= Math.PI / 6;

console.assert(Math.abs(totalRoll) < 0.01, "Banking not reset!");

// 2. Enforce banking limits
const MAX_BANKING = Math.PI / 4; // 45° maximum
const safeBanking = Math.min(
  Math.abs(requestedBanking), 
  MAX_BANKING
) * Math.sign(requestedBanking);

// 3. Proper loop implementation
// Entry ramp
for (let i = 0; i < 10; i++) {
  addSegment({ 
    pitchDelta: Math.PI / 40,
    rollDelta: 0 // No roll during loop!
  });
}
```

### Problem: Speed Powerup Bounces Player

**Symptoms:**
- Collecting powerup pushes ball backward
- Powerup acts as physical obstacle
- Momentum lost on collection

**Root Cause:**
Powerup body has physical collision instead of trigger-only

**Solution:**

```javascript
// In TrackBuilder.js buildBoostPowerup()
const powerupBody = new CANNON.Body({ 
  mass: 0,
  type: CANNON.Body.STATIC,
  shape: powerupShape,
  isTrigger: true  // This is the fix!
});
```

### Problem: Can't Jump

**Symptoms:**
- Space bar doesn't work
- Jump feels inconsistent
- Double jumping occurs

**Common Causes:**
1. Ground detection failing
2. Jump cooldown too long
3. Raycast distance incorrect

**Solutions:**

```javascript
// Improved ground detection
isGrounded() {
  const raycast = new CANNON.RaycastResult();
  const from = this.body.position;
  const to = new CANNON.Vec3(
    from.x,
    from.y - this.radius - 0.5, // Slightly below ball
    from.z
  );
  
  this.physicsWorld.raycastClosest(
    from, to, 
    { collisionFilterMask: TRACK_COLLISION_GROUP },
    raycast
  );
  
  return raycast.hasHit && 
         raycast.distance < this.radius + 0.6;
}

// Jump with cooldown
jump() {
  const now = performance.now();
  if (this.isGrounded() && 
      now - this.lastJumpTime > 300) { // 300ms cooldown
    this.body.velocity.y = 8;
    this.lastJumpTime = now;
  }
}
```

## 🎨 Visual Issues

### Problem: Black Screen on Load

**Symptoms:**
- Game doesn't render
- Console shows WebGL errors
- Works in some browsers but not others

**Common Causes:**
1. WebGL not supported
2. GPU blacklisted
3. Context lost

**Solutions:**

```javascript
// 1. Check WebGL support
if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
  return;
}

// 2. Handle context loss
renderer.domElement.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  console.error('WebGL context lost');
  // Attempt recovery
  setTimeout(() => {
    this.initRenderer();
    this.resume();
  }, 1000);
});

// 3. Fallback renderer settings
try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance"
  });
} catch (e) {
  // Try without antialiasing
  renderer = new THREE.WebGLRenderer({
    antialias: false,
    powerPreference: "default"
  });
}
```

### Problem: Textures Not Loading

**Symptoms:**
- Checkered pattern missing
- Skybox appears black
- Materials look flat

**Common Causes:**
1. CORS issues
2. Incorrect file paths
3. Texture size too large

**Solutions:**

```javascript
// 1. Handle loading errors
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  'path/to/texture.jpg',
  (texture) => {
    material.map = texture;
    material.needsUpdate = true;
  },
  (progress) => {
    console.log('Loading...', progress);
  },
  (error) => {
    console.error('Texture load failed:', error);
    // Use fallback color
    material.color = new THREE.Color(0x808080);
  }
);

// 2. Ensure correct MIME types
// In vite.config.js
export default {
  assetsInclude: ['**/*.glb', '**/*.hdr'],
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    }
  }
};
```

## 🔧 Development Issues

### Problem: Hot Reload Not Working

**Symptoms:**
- Changes don't appear without refresh
- Vite HMR disconnected
- Console shows HMR errors

**Solutions:**

```javascript
// 1. Check Vite config
// vite.config.js
export default {
  server: {
    hmr: {
      overlay: true,
      port: 3001 // Use different port if blocked
    }
  }
};

// 2. Module exports for HMR
// In your modules
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    // Cleanup code
  });
}
```

### Problem: Build Fails

**Symptoms:**
- npm run build errors
- Module not found
- Syntax errors in production only

**Common Causes:**
1. Import path issues
2. Missing dependencies
3. Environment variables

**Solutions:**

```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Check imports
# Use explicit extensions
import { Ball } from './Ball.js'; // Not './Ball'

# 3. Build with source maps for debugging
npm run build -- --sourcemap

# 4. Test production build locally
npm run build && npm run preview
```

## 📊 Diagnostic Tools

### Performance Profiling Script

```javascript
class Diagnostics {
  static analyzeTrack(level) {
    const segments = trackBuilder.segments;
    let rollAccumulation = 0;
    let maxPitch = 0;
    let minWidth = Infinity;
    let rollChanges = 0;
    let prevRoll = 0;
    
    segments.forEach(s => {
      rollAccumulation += s.rollDelta || 0;
      maxPitch = Math.max(maxPitch, Math.abs(s.pitchDelta || 0));
      s.lanes?.forEach(l => {
        minWidth = Math.min(minWidth, l.width);
      });
      if (s.rollDelta && s.rollDelta !== prevRoll) {
        rollChanges++;
        prevRoll = s.rollDelta;
      }
    });
    
    console.table({
      'Total Segments': segments.length,
      'Roll Accumulation': rollAccumulation.toFixed(3),
      'Roll Changes': rollChanges,
      'Max Pitch': (maxPitch * 180 / Math.PI).toFixed(1) + '°',
      'Min Lane Width': minWidth,
      'Performance Impact': segments.length > 250 ? 'HIGH' : 
                           segments.length > 150 ? 'MEDIUM' : 'LOW'
    });
  }
  
  static checkPhysics() {
    console.table({
      'Bodies': world.bodies.length,
      'Sleeping': world.bodies.filter(b => b.sleepState === 2).length,
      'Constraints': world.constraints.length,
      'Gravity': world.gravity.toString(),
      'Step Time': world.dt * 1000 + 'ms'
    });
  }
  
  static checkMemory() {
    if (performance.memory) {
      console.table({
        'Used JS Heap': (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
        'Total JS Heap': (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
        'Limit': (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
      });
    }
  }
}
```

### Quick Fixes Checklist

When encountering issues:

1. **Check console** for errors
2. **Verify segment count** (<250)
3. **Test roll accumulation** (should be ~0)
4. **Monitor FPS** counter
5. **Check lane widths** (>6 units)
6. **Validate physics** timestep
7. **Inspect memory** usage
8. **Test in Chrome** first
9. **Clear cache** and reload
10. **Verify dependencies** are installed

---

**Last Updated**: January 2025
**Version**: 1.2.0
**Support**: GitHub Issues