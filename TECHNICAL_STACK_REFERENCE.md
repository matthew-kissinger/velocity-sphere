# 🔧 Technical Stack Reference for AI Agents

**Complete technical documentation for autonomous development**

## 🎯 TECH STACK OVERVIEW

### Core Dependencies
```json
{
  "three": "^0.158.0",      // 3D graphics and WebGL
  "cannon-es": "^0.20.0",   // Physics simulation  
  "stats.js": "^0.17.0",    // Performance monitoring
  "vite": "^5.0.0"          // Build system
}
```

### Architecture Pattern
**Modular ES6 with Zero Global Variables**
- Clean separation of concerns
- Event-driven communication
- Proper memory management
- Component-based design

## 🏗️ SYSTEM ARCHITECTURE

### Core Game Loop (`src/game/Game.js`)
```javascript
class Game {
  animate() {
    // 1. FPS monitoring start
    this.hud.updateFPS();
    
    // 2. Input processing
    this.handlePlayerInput();
    
    // 3. Physics step (fixed 60 FPS)
    this.physicsWorld.step(1/60);
    
    // 4. Visual updates
    this.ball.update();
    this.camera.update();
    
    // 5. UI updates
    this.hud.update(gameData);
    
    // 6. Rendering
    this.renderer.render(this.scene, this.camera.camera);
    
    // 7. FPS monitoring end
    this.hud.endFPS();
  }
}
```

### Physics Integration (`src/game/Ball.js`)
```javascript
class Ball {
  // Enhanced physics constants
  JUMP_VELOCITY = 8;
  JUMP_COOLDOWN = 0.3;
  ACCELERATION = 30;
  BOOST_ACCELERATION = 80;  // Enhanced during boost
  BOOST_MULTIPLIER = 4.0;   // 4x speed boost
  BOOST_COOLDOWN = 8;       // Reduced cooldown
  BOOST_DURATION = 3;       // Extended duration
  
  // Improved ground detection
  isGrounded() {
    const rayResult = new CANNON.RaycastResult();
    this.physicsWorld.world.raycastClosest(from, to, {}, rayResult);
    
    const hasValidHit = rayResult.hasHit && 
                       rayResult.body && 
                       rayResult.body.mass === 0 &&
                       rayResult.distance <= (this.radius + 1.0);
    
    const hasLowVerticalVelocity = Math.abs(this.body.velocity.y) < 2.0;
    
    return hasValidHit || (hasLowVerticalVelocity && rayResult.hasHit);
  }
}
```

## 🛤️ TRACK GENERATION SYSTEM

### Segment-Based Architecture (`src/tracks/TrackBuilder.js`)
```javascript
class TrackBuilder {
  // Performance optimization features
  - Geometry caching and merging
  - Instanced wall rendering  
  - Material sharing
  - Chunk-based processing (20 segments per chunk)
  - Physics body optimization
  
  // Visual features
  - Rainbow vertex coloring
  - Dynamic track thickness (0.6 units)
  - Configurable segment length (6 units)
  - Wall generation (2.0 height, 0.4 thickness)
}
```

### Level Definition Pattern
```javascript
// Template for all tracks
export default {
  name: "Track Name",
  description: "Brief description", 
  difficulty: 1-4, // 1=Easy, 2=Medium, 3=Hard, 4=Extreme
  
  generateTrack(addSegment) {
    // Start line
    addSegment({ 
      yawDelta: 0, 
      pitchDelta: 0, 
      rollDelta: 0, 
      isStartLine: true 
    });
    
    // Track segments with strategic boost placement
    for (let i = 0; i < segmentCount; i++) {
      addSegment({
        yawDelta: turnAngle / segments,
        pitchDelta: climbAngle / segments,
        rollDelta: bankAngle / segments,
        isBoost: strategicBoostLogic(i),
        isGap: jumpLogic(i),
        lanes: splitLaneLogic(i)
      });
    }
    
    // Finish line
    addSegment({ 
      yawDelta: 0, 
      pitchDelta: 0, 
      rollDelta: 0, 
      isFinishLine: true 
    });
  }
};
```

## 🎨 VISUAL SYSTEM

### Rendering Pipeline (`src/rendering/`)
```javascript
// Renderer setup
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: "high-performance"
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Camera system - dynamic following
class Camera {
  update() {
    // Smooth following with look-ahead
    const targetPos = ball.position.clone();
    const velocity = ball.velocity.normalize();
    targetPos.add(velocity.multiplyScalar(5)); // Look ahead
    
    this.camera.position.lerp(targetPos, 0.05);
    this.camera.lookAt(ball.position);
  }
}

// Lighting setup
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.setScalar(2048);
```

### Rainbow Color System
```javascript
// Vertex coloring for performance
generateRainbowColors() {
  const colors = [];
  for (let i = 0; i < segmentCount; i++) {
    const hue = (i / segmentCount) * 0.65; // Rainbow spectrum
    const color = new THREE.Color();
    color.setHSL(hue, 1.0, 0.5);
    colors.push(color);
  }
  return colors;
}
```

## 📊 PERFORMANCE MONITORING

### FPS Integration (`src/ui/HUD.js`)
```javascript
import Stats from 'stats.js';

class HUD {
  constructor() {
    // Professional FPS monitoring
    this.stats = new Stats();
    this.stats.showPanel(0); // FPS panel
    this.stats.dom.style.position = 'absolute';
    this.stats.dom.style.top = '80px';
    this.stats.dom.style.left = '10px';
    document.body.appendChild(this.stats.dom);
  }
  
  updateFPS() { this.stats.begin(); }
  endFPS() { this.stats.end(); }
  
  toggleFPS() {
    this.showFPS = !this.showFPS;
    this.stats.dom.style.display = this.showFPS ? 'block' : 'none';
  }
}
```

### Performance Targets
- **60 FPS**: Target performance on mid-range hardware
- **45+ FPS**: Minimum acceptable performance  
- **Memory stable**: No memory leaks over extended play
- **Load time**: <3 seconds per track
- **Physics stable**: No collision detection failures

## 🎛️ INPUT SYSTEM

### Centralized Input (`src/input/InputManager.js`)
```javascript
class InputManager {
  state = {
    up: false, down: false, left: false, right: false,
    jumpRequested: false,
    boostRequested: false
  };
  
  // Handles keyboard, gamepad, and touch inputs
  // Prevents key repeat spam
  // Manages input state consumption
}
```

### Control Mapping
```javascript
const CONTROLS = {
  movement: ['WASD', 'Arrow Keys'],
  jump: ['Space'],
  boost: ['Shift'], 
  restart: ['R'],
  fps_toggle: ['F'],
  level_select: ['1-9', '0'],
  menu_return: ['Escape']
};
```

## 🌐 UI SYSTEM

### Start Screen with Three.js Background
```javascript
// Custom shader background
class StartBackground {
  createBackground() {
    const material = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `...`, // Position calculation
      fragmentShader: `...` // Flowing energy patterns
    });
    
    // Animated sphere with particles and wireframe
    this.sphere = new THREE.Mesh(geometry, material);
    this.createParticles(); // Floating ambient particles
    this.createWireframe(); // Subtle geometric structure
  }
}
```

### Circuit Selection System
```javascript
// Collapsible circuit organization
<div class="circuit-container">
  <div class="circuit-header" onclick="toggleCircuit('beta')">
    <span class="circuit-name">Circuit Beta</span>
    <span class="circuit-progress">0/10 tracks</span>
  </div>
  <div class="circuit-content" id="circuit-beta">
    <!-- Difficulty-organized track buttons -->
  </div>
</div>
```

## 🔧 BUILD SYSTEM

### Vite Configuration (`vite.config.js`)
```javascript
export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: { port: 3000, open: true },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: { main: './index.html' }
    }
  }
});
```

### Development Workflow
```bash
npm run dev    # Development server with hot reload
npm run build  # Production build with optimization
npm run preview # Preview production build
```

## 🎯 AI AGENT INTEGRATION POINTS

### Key Files for Circuit Generation
```
src/tracks/levels/Level11.js    # Template for new tracks
src/ui/StartScreen.js           # Circuit integration
index.html                      # UI button configuration
```

### Required Modifications for New Circuits
1. **Create track files**: `Level11.js` through `Level20.js`
2. **Update start screen**: Add Circuit Beta to HTML
3. **Modify level selection**: Update button handlers for tracks 11-20
4. **Test integration**: Verify keyboard shortcuts (1-9, 0 for level 20)

### Quality Assurance Hooks
```javascript
// Performance monitoring integration
const performanceMetrics = {
  fps: this.hud.stats.getFPS(),
  frameTime: this.hud.stats.getFrameTime(),
  memoryUsage: performance.memory?.usedJSHeapSize
};

// Physics validation
const physicsChecks = {
  trackIntegrity: noFloatingSegments(),
  collisionStability: noFallingThroughWorld(),
  boostEffectiveness: speedIncreaseVerified(),
  jumpReliability: groundDetectionWorking()
};
```

## 🚀 DEPLOYMENT CONSIDERATIONS

### Production Optimizations
- Asset compression and bundling
- Texture optimization for various GPU tiers
- Progressive loading for large circuits
- Error handling and graceful degradation

### Browser Compatibility
- WebGL 2.0 required for optimal shaders
- Fallback materials for older browsers
- Mobile touch control adaptation
- Performance scaling based on device capabilities

---

**This technical reference provides AI agents with complete implementation details for autonomous circuit development while maintaining the established architecture and performance standards.**