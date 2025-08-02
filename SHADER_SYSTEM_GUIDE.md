# 🎨 Shader System Guide for AI Agents

**Modular shader system for visual track customization in Velocity Sphere**

## 🎯 OVERVIEW

The Velocity Sphere shader system allows for **per-track visual customization** using modular shader files. Each track can specify a unique shader to create distinct visual themes while maintaining performance.

## 🏗️ SYSTEM ARCHITECTURE

### **Core Components**

```
src/
├── rendering/
│   └── ShaderManager.js          # Central shader management system
├── shaders/                      # Modular shader library
│   ├── rainbow-flow.js           # Classic rainbow track (default)
│   ├── tech-grid.js              # Futuristic grid pattern
│   ├── energy-pulse.js           # Pulsating energy effects
│   ├── crystal-surface.js        # Ice/crystal surface
│   ├── lava-flow.js              # Molten lava surface
│   └── matrix-rain.js            # Digital rain effect
└── tracks/
    ├── TrackBuilder.js           # Integrates shader system
    └── levels/Level*.js          # Tracks specify shaders
```

### **Integration Points**

1. **Level Definition**: Tracks specify shader in their config
2. **TrackBuilder**: Applies shaders during track construction
3. **Game Loop**: Updates shader uniforms every frame
4. **Performance**: Automatic caching and optimization

## 🎨 SHADER LIBRARY

### **rainbow-flow** (Default)
```javascript
// Classic rainbow track shader
tags: ['rainbow', 'flow', 'classic', 'circuit-alpha']
performance: 'good'
description: 'Classic rainbow track with flowing color transitions'
```

### **tech-grid** 
```javascript
// Futuristic grid pattern
tags: ['tech', 'grid', 'cyberpunk', 'neon', 'futuristic']
performance: 'good'  
description: 'Futuristic grid pattern with neon highlights and data streams'
```

### **energy-pulse**
```javascript
// Pulsating energy effects
tags: ['energy', 'pulse', 'electric', 'boost', 'power']
performance: 'medium'
description: 'Pulsating energy shader with electric discharge effects'
```

### **crystal-surface**
```javascript
// Ice/crystal themed
tags: ['crystal', 'ice', 'refractive', 'cold', 'transparent']
performance: 'medium'
description: 'Crystalline surface with refractive highlights'
```

### **lava-flow**
```javascript
// Volcanic/fire themed
tags: ['lava', 'fire', 'volcanic', 'hot', 'glowing']
performance: 'medium'
description: 'Molten lava surface with flowing patterns and heat glow'
```

### **matrix-rain**
```javascript
// Digital/cyberpunk themed
tags: ['matrix', 'digital', 'cyberpunk', 'rain', 'code']
performance: 'good'
description: 'Digital rain effect with scrolling characters'
```

## 🔧 USAGE FOR AI AGENTS

### **Adding Shader and Skybox to Track**

```javascript
// In src/tracks/levels/LevelX.js
export default {
  name: "Crystal Caverns",
  description: "Ice-cold precision track",
  difficulty: 2,
  shader: "crystal-surface", // Track surface shader
  skybox: "crystal-sky",     // Environment skybox shader
  
  generateTrack(addSegment) {
    // Track generation code...
  }
};
```

### **Available Skybox Shaders**

```javascript
const SKYBOX_LIBRARY = {
  'sunset-vibes': 'Bright colorful sunset (current default)',
  'space-deep': 'Dark space with twinkling stars',
  'neon-city': 'Cyberpunk city atmosphere',
  'aurora-dance': 'Magical dancing northern lights',
  'crystal-sky': 'Crystalline ice atmosphere',
  'lava-storm': 'Volcanic atmosphere with ash clouds'
};
```

### **Performance Considerations**

```javascript
// Shader performance ratings
const PERFORMANCE_GUIDE = {
  'good': {
    description: 'Minimal performance impact',
    examples: ['rainbow-flow', 'tech-grid', 'matrix-rain'],
    recommended: 'Use freely for any track'
  },
  'medium': {
    description: 'Moderate performance impact',
    examples: ['energy-pulse', 'crystal-surface', 'lava-flow'],
    recommended: 'Use for special tracks, limit in difficult levels'
  },
  'heavy': {
    description: 'Significant performance impact',
    examples: [], // None currently
    recommended: 'Use sparingly, only for finale tracks'
  }
};
```

## 🎨 CREATING NEW SHADERS

### **Shader File Template**

```javascript
// src/shaders/your-shader.js
export default {
  name: 'your-shader',
  description: 'Brief description of visual effect',
  author: 'AI Agent Name',
  version: '1.0.0',
  tags: ['tag1', 'tag2', 'theme'],
  performance: 'good|medium|heavy',
  
  uniforms: {
    // Custom uniforms for this shader
    customColor: { value: new THREE.Color(0xff0000) },
    speed: { value: 1.0 },
    intensity: { value: 1.5 }
  },
  
  vertexShader: `
    // Global uniforms available automatically:
    // uniform float time;
    // uniform vec2 resolution;
    // uniform vec3 cameraPosition;
    // uniform vec3 lightDirection;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fragmentShader: `
    uniform float time;
    uniform vec3 customColor;
    uniform float speed;
    uniform float intensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      // Your shader logic here
      vec3 color = customColor;
      
      // Apply lighting
      float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  
  // Optional: override default material properties
  transparent: false,
  side: THREE.FrontSide,
  blending: THREE.NormalBlending
};
```

### **Global Uniforms Available**

All shaders automatically receive these uniforms:

```javascript
const GLOBAL_UNIFORMS = {
  time: 'Elapsed time in seconds (for animations)',
  resolution: 'Screen resolution as Vector2',
  cameraPosition: 'Current camera position as Vector3', 
  lightDirection: 'Main light direction as Vector3'
};
```

### **Shader Development Tips**

1. **Start Simple**: Begin with basic color patterns before adding complexity
2. **Use World Position**: `vWorldPosition` for consistent patterns across track segments
3. **Performance**: Avoid expensive operations in fragment shader
4. **Lighting**: Always apply basic lighting for visual consistency
5. **Testing**: Test on various hardware for performance validation

## 🎯 AGENT IMPLEMENTATION WORKFLOW

### **Step 1: Choose Appropriate Shader**

```javascript
// Match shader to track theme
const THEME_SHADER_MAPPING = {
  'ice/crystal': 'crystal-surface',
  'fire/volcanic': 'lava-flow', 
  'tech/cyberpunk': 'tech-grid',
  'digital/matrix': 'matrix-rain',
  'energy/electric': 'energy-pulse',
  'classic/rainbow': 'rainbow-flow'
};
```

### **Step 2: Add to Level Definition**

```javascript
export default {
  name: "Volcanic Speedway",
  difficulty: 3,
  shader: "lava-flow", // Theme-appropriate shader
  generateTrack(addSegment) {
    // Create challenging volcanic track
  }
};
```

### **Step 3: Performance Validation**

- **Good Performance Shaders**: Safe for any track
- **Medium Performance Shaders**: Test on target hardware
- **Custom Shaders**: Always benchmark before deployment

### **Step 4: Circuit Theming**

Consider shader progression across circuits:

```javascript
// Example circuit theming strategy
const CIRCUIT_THEMES = {
  'Circuit Alpha': 'rainbow-flow',     // Classic rainbow
  'Circuit Beta': 'energy-pulse',     // High-energy theme
  'Circuit Gamma': 'tech-grid',       // Futuristic theme
  'Circuit Delta': 'crystal-surface'   // Elegant ice theme
};
```

## 🚀 ADVANCED FEATURES

### **Dynamic Shader Switching**

```javascript
// Future: Runtime shader switching
await trackBuilder.setShader('energy-pulse');
```

### **Shader Variants**

```javascript
// Create shader variations with different uniforms
const lavaVariant = {
  ...lavaShader,
  uniforms: {
    ...lavaShader.uniforms,
    heatIntensity: { value: 3.0 }, // Hotter variant
    crackSize: { value: 0.5 }     // Bigger cracks
  }
};
```

### **Performance Monitoring**

The system automatically monitors shader performance and provides feedback for optimization.

## 📊 PERFORMANCE BENCHMARKS

### **Target Performance**
- **60 FPS**: All 'good' performance shaders
- **45+ FPS**: All 'medium' performance shaders
- **Memory**: <50MB additional GPU memory per shader

### **Optimization Features**
- **Automatic Caching**: Shaders loaded once, reused efficiently
- **Uniform Batching**: Global uniforms updated once per frame
- **Fallback System**: Automatic fallback to basic material if shader fails

---

**The shader system provides AI agents with powerful visual customization tools while maintaining the performance standards established in Circuit Alpha. Use this system to create visually distinct and engaging track experiences!**