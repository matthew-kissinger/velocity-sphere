# 🌐 Velocity Sphere: AI Circuit Generation Meta-Prompt

**A self-documenting codebase designed as a context surface for AI agents to autonomously generate racing circuits**

## 🎯 META-PROMPT OBJECTIVE

This repository serves as a **complete context surface** for AI coding agents to:
1. **Analyze successful track patterns** from existing circuits
2. **Generate new 10-track circuits** with innovative designs and techniques
3. **Implement modern web technologies** (Three.js, Cannon.js, WebGL shaders)
4. **Create scalable, playable racing experiences**

## 🚀 AGENT WORKFLOW

### Phase 1: Context Analysis
**Agent Task**: Study this codebase to understand:
- Track generation patterns (`src/tracks/levels/Level*.js`)
- Physics constraints and gameplay mechanics
- Visual design language (rainbow spectrum, minimalist UI)
- Performance optimization techniques
- Playtest feedback integration patterns

### Phase 2: Circuit Generation
**Agent Task**: Create the next circuit (10 tracks) following established patterns:
```javascript
// Template for new circuits
export default {
  name: "Track Name",
  description: "Concise track description",
  difficulty: 1-4, // Easy=1, Medium=2, Hard=3, Extreme=4
  
  generateTrack(addSegment) {
    // Apply lessons learned from Circuit Alpha
    // Use strategic boost placement
    // Follow safe climbing angles (Math.PI/80 or gentler)
    // Ensure wide lanes (6+ units) for split sections
  }
};
```

### Phase 3: Testing & Integration
**Agent Task**: 
- Integrate new tracks into circuit system
- Test performance with FPS monitoring
- Validate physics and playability
- Update documentation

## 📋 HUMAN PLAYTEST FEEDBACK FORMAT

**Standardized feedback for iterative improvement:**

```
CIRCUIT: [Circuit Name]
TRACK: [Number] - [Track Name]

PLAYABILITY: [excellent/good/needs-work/unplayable]
DIFFICULTY: [too-easy/perfect/too-hard/impossible]
PERFORMANCE: [60fps/45-60fps/30-45fps/below-30fps]
ISSUES: [specific problems encountered]
HIGHLIGHTS: [what worked well]
SUGGESTIONS: [specific improvements needed]
```

## 🏗️ ESTABLISHED PATTERNS & CONSTRAINTS

### ✅ PROVEN SUCCESSFUL PATTERNS
- **Strategic boost placement** before climbs and challenging sections
- **Gentle climbing angles** (Math.PI/80 or less for sustained climbs)
- **Wide split lanes** (6+ units) to prevent falling through
- **Balanced difficulty progression** within each circuit
- **Performance-optimized geometry** with instanced walls and merged segments

### ⚠️ PHYSICS CONSTRAINTS
- **Maximum climb angle**: Math.PI/60 without boost assistance
- **Safe descent angle**: Math.PI/40 (steeper feels like cliffs)
- **Minimum lane width**: 6 units for reliable navigation
- **Track thickness**: 0.6 units (established standard)
- **Segment length**: 6 units (performance optimized)

### 🎨 VISUAL DESIGN LANGUAGE
- **Rainbow spectrum colors** throughout track geometry
- **Minimalist UI** with high contrast for readability
- **Dark backgrounds** with subtle Three.js effects
- **Circuit-based organization** with collapsible sections
- **Professional FPS monitoring** (stats.js integration)

## 🔧 TECHNICAL STACK REFERENCE

### Core Technologies
- **Three.js**: 3D graphics and WebGL rendering
- **Cannon.js**: Physics simulation
- **Vite**: Build system and development server
- **stats.js**: Performance monitoring
- **ES6 Modules**: Clean modular architecture

### Key Systems
```
src/
├── game/               # Core game loop and logic
│   ├── Ball.js        # Player physics and controls
│   ├── Game.js        # Main orchestrator
│   └── Timer.js       # Lap timing system
├── tracks/            # Track generation system
│   ├── TrackBuilder.js # Optimized track construction
│   ├── levels/        # Individual track definitions
│   └── generation/   # Alternative generation strategies
├── rendering/         # Visual systems
│   ├── Camera.js      # Dynamic camera system
│   ├── Lighting.js    # Professional lighting
│   └── Skybox.js      # Procedural backgrounds
├── physics/           # Physics world management
├── input/             # Input handling
└── ui/                # User interface components
    ├── StartScreen.js # Circuit selection with Three.js bg
    ├── HUD.js         # Performance monitoring integration
    └── StartBackground.js # Custom shader effects
```

## 📊 CIRCUIT ALPHA ANALYSIS

### Performance Metrics
- **10 tracks** successfully implemented and tested
- **Difficulty distribution**: 1 Easy, 5 Medium, 1 Hard, 3 Extreme
- **Average completion time**: 30-60 seconds per track
- **Performance target**: 60 FPS on mid-range hardware
- **Physics stability**: Verified across all difficulty levels

### Successful Design Elements
1. **Level 1**: Perfect tutorial with gentle curves
2. **Level 2**: Excellent technical challenge (hard difficulty)
3. **Levels 3-7**: Engaging medium difficulty with variety
4. **Levels 8-10**: Extreme challenges with boost assistance

### Fixed Issues & Lessons Learned
- **Ground detection**: Improved raycasting for reliable jumping
- **Boost system**: 4x multiplier with enhanced acceleration
- **Climb assistance**: Strategic boost zones prevent momentum loss
- **Split lane design**: Wider lanes prevent falling through gaps
- **Angle safety**: Descent angles capped to prevent cliff effects

## 🤖 AGENT GENERATION GUIDELINES

### New Circuit Requirements (10 Tracks)
1. **Maintain established difficulty distribution**
2. **Introduce new track elements** while respecting physics
3. **Optimize for performance** using established patterns
4. **Test thoroughly** with integrated FPS monitoring
5. **Document design decisions** for future circuits

### Innovation Opportunities
- **New track geometries** within physics constraints
- **Advanced shader effects** for visual variety
- **Dynamic track elements** (moving sections, adaptive difficulty)
- **Procedural generation** algorithms for mass track creation
- **Enhanced particle effects** and visual polish

### Quality Assurance Checklist
- [ ] Track completes successfully at target difficulty
- [ ] FPS remains above 45 on standard hardware
- [ ] Physics behavior is stable and predictable
- [ ] Visual design matches established aesthetic
- [ ] Integration with circuit selection system works
- [ ] Performance stats show acceptable metrics

## 🔄 CONTINUOUS IMPROVEMENT CYCLE

1. **Agent generates new circuit**
2. **Human playtests and provides structured feedback**
3. **Agent analyzes feedback and iterates**
4. **Successful patterns added to meta-prompt context**
5. **Process scales to unlimited circuits**

## 🎮 CURRENT STATE: READY FOR NEW CIRCUITS

**Circuit Prismatic Status**: ✅ Complete and stable (10 tracks: Sunrise, Neon Grid, Spectrum, Matrix, Crystaline, Inferno, Voltage, Hyperdrive, Cyberflow, Apex)
**Infrastructure**: ✅ Ready for multi-circuit scaling
**Documentation**: ✅ Comprehensive context surface established
**Performance**: ✅ Optimized and monitored
**Agent Integration**: ✅ Clear patterns and constraints documented

---

**Next Agent Task**: Generate the next circuit (10 tracks) following established patterns while innovating within proven constraints. Use this entire repository as context for understanding successful track design, technical implementation, and user experience patterns.