# 🌐 Velocity Sphere: High-Performance 3D Racing Game

**A browser-based 3D racing game with 30 unique tracks across 3 circuits, built with Three.js and Cannon.js**

## 🎮 Game Overview

Velocity Sphere is a high-speed 3D racing game where players control a holographic sphere through increasingly challenging tracks. The game features:

- **30 Unique Tracks** across 3 distinct circuits
- **Progressive Difficulty** from tutorial to extreme challenges
- **Real-time Physics** with Cannon.js physics engine
- **Dynamic Visuals** with custom shaders and effects
- **60+ FPS Performance** with heavily optimized rendering

## 🏁 Circuits & Tracks

### Circuit 1: Prismatic (Tracks 1-10)
- **Theme**: Introduction to core mechanics
- **Difficulty**: Easy to Hard
- **Highlights**: Tutorial level, split paths, loops, technical challenges

### Circuit 2: Nova (Tracks 11-20)
- **Theme**: Advanced techniques and extreme challenges
- **Difficulty**: Medium to Extreme
- **Highlights**: Multi-path choices, vertical climbs, complex geometries

### Circuit 3: Zenith (Tracks 21-30)
- **Theme**: Ultimate mastery and performance optimized
- **Difficulty**: Medium to Extreme
- **Highlights**: Time distortions, zen gardens, ultimate challenges
- **Special**: Heavily optimized for 60+ FPS despite complex designs

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Game Controls

- **W/↑**: Accelerate forward
- **S/↓**: Brake/Reverse
- **A/←**: Turn left
- **D/→**: Turn right
- **Space**: Jump (when grounded)
- **Shift**: Boost (8 second cooldown)
- **R**: Reset position if stuck
- **P**: Pause game
- **ESC**: Return to menu

## 🏗️ Technical Architecture

### Core Systems

```
src/
├── game/               # Core game loop and logic
│   ├── Ball.js        # Player physics and controls
│   ├── Game.js        # Main orchestrator
│   └── Timer.js       # Lap timing system
├── tracks/            # Track generation system
│   ├── TrackBuilder.js # Optimized track construction
│   └── levels/        # 30 individual track definitions
├── rendering/         # Visual systems
│   ├── Camera.js      # Dynamic chase camera
│   ├── Lighting.js    # Professional lighting setup
│   └── Skybox.js      # Procedural backgrounds
├── physics/           # Physics world management
├── input/             # Input handling
└── ui/                # User interface components
    ├── StartScreen.js # Circuit selection
    ├── HUD.js         # In-game UI with FPS counter
    └── StartBackground.js # Animated menu background
```

### Performance Optimizations

#### Circuit 3 Specific Optimizations (Fixed January 2025)
- **Segment Reduction**: Levels reduced from 200-440 to 130-200 segments
- **Roll Optimization**: Removed excessive banking changes that prevented geometry merging
- **Calculation Simplification**: Removed complex sin/cos calculations in tight loops
- **Geometry Merging**: Box segments merged into single meshes where possible
- **Instanced Rendering**: Walls rendered as InstancedMesh for massive performance gains

#### General Optimizations
- **Geometry Caching**: Reused geometries across similar segments
- **Material Sharing**: Single material instance for track segments
- **LOD System**: Automatic quality adjustment based on performance
- **Efficient Physics**: Static bodies for track, optimized collision detection

## 🎨 Visual Features

### Shader System
Each level can specify custom shaders for unique visual effects:
- `rainbow-flow`: Dynamic rainbow gradients
- `matrix-rain`: Digital rain effects
- `lava-flow`: Molten rock simulation
- `ice-crystal`: Frozen surface effects
- `energy-pulse`: Pulsating energy waves
- `zen-sand`: Peaceful sand patterns
- And many more...

### Dynamic Skyboxes
- Procedurally generated backgrounds
- Level-specific themes (space, sunset, storm, etc.)
- Real-time color transitions

## ⚙️ Physics System

### Ball Physics
- **Mass**: 5 units
- **Radius**: 1.0 units
- **Linear Damping**: 0.1 (maintains momentum)
- **Jump Velocity**: 8 units/s
- **Base Acceleration**: 30 units/s²
- **Boost Multiplier**: 4x speed
- **Max Speed**: Unlimited (999 units/s)

### Track Physics
- **Segment Length**: 6 units
- **Track Thickness**: 0.6 units
- **Default Width**: 10 units
- **Wall Height**: 4 units
- **Material Friction**: 0.8 (ball), 0.4 (track)

## 🐛 Known Issues & Fixes

### Recent Fixes (January 2025)
- ✅ **Speed Powerup Collision**: Changed to trigger-only (no physical collision)
- ✅ **Circuit 3 Performance**: Reduced segment counts by 50-60%
- ✅ **Track Flipping**: Fixed banking limits and proper reset sequences
- ✅ **Frame Drops**: Optimized levels 26, 28, 30 for 60+ FPS

### Current Limitations
- Browser must support WebGL 2.0
- Best performance on Chrome/Edge
- Mobile support experimental

## 🛠️ Development Guide

### Adding New Tracks

1. Create a new file in `src/tracks/levels/`
2. Follow the established pattern:

```javascript
export default {
  name: "Track Name",
  description: "Track description",
  difficulty: 1-5, // 1=Easy, 5=Extreme
  shader: "shader-name", // Optional custom shader
  skybox: "skybox-name", // Optional skybox
  
  generateTrack(addSegment) {
    // Track generation logic
    // Use addSegment() to build track pieces
  }
};
```

### Performance Guidelines

1. **Segment Count**: Keep under 250 segments per track
2. **Roll Changes**: Minimize banking changes to allow geometry merging
3. **Calculations**: Avoid complex math in tight loops
4. **Lane Width**: Keep consistent to reduce geometry variations
5. **Testing**: Always test at 60 FPS target

### Physics Best Practices

- **Maximum Climb**: π/60 radians without boost
- **Safe Descent**: π/40 radians (steeper feels like falling)
- **Minimum Lane Width**: 6 units for stability
- **Banking Limits**: π/4 radians (45°) maximum
- **Always Reset Banking**: Return to 0 after turns

## 📊 Performance Metrics

### Target Performance
- **FPS**: 60+ on mid-range hardware
- **Physics**: 60Hz update rate
- **Render Budget**: <16ms per frame
- **Draw Calls**: <100 per frame
- **Triangle Count**: <500k visible

### Monitoring Tools
- Built-in FPS counter (top-right corner)
- Stats.js integration for detailed metrics
- Chrome DevTools Performance profiler compatible

## 🤝 Contributing

### Code Style
- ES6 modules with clear exports
- Descriptive variable names
- Comments for complex logic
- Performance annotations for critical paths

### Testing Checklist
- [ ] Track completes without errors
- [ ] Maintains 60 FPS throughout
- [ ] Physics behavior stable
- [ ] Visual design consistent
- [ ] No console errors

## 📦 Dependencies

- **three**: ^0.169.0 - 3D graphics engine
- **cannon-es**: ^0.20.0 - Physics engine  
- **vite**: ^6.0.3 - Build tool
- **stats.js**: (bundled) - Performance monitoring

## 🎯 Future Enhancements

- [ ] Multiplayer racing support
- [ ] Ghost replay system
- [ ] Track editor
- [ ] Mobile touch controls
- [ ] VR support
- [ ] Procedural track generation
- [ ] Global leaderboards

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Three.js community for excellent documentation
- Cannon.js for robust physics
- PlayCanvas for inspiration
- All playtesters for valuable feedback

---

**Current Version**: 1.2.0 (January 2025)
**Status**: Production Ready
**Performance**: Optimized for 60+ FPS