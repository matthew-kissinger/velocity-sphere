# 📁 Velocity Sphere Project Structure

**Complete codebase organization for AI agent navigation**

## 🗂️ ROOT DIRECTORY OVERVIEW

```
velocity-sphere/
├── 📋 META-PROMPT DOCUMENTATION
│   ├── README.md                          # Main meta-prompt and agent instructions
│   ├── AGENT_CIRCUIT_GENERATION_GUIDE.md # Detailed circuit generation patterns
│   ├── AGENT_TASK_SPECIFICATIONS.md      # Step-by-step task breakdown
│   ├── HUMAN_PLAYTEST_PROTOCOL.md        # Feedback format for human testing
│   ├── TECHNICAL_STACK_REFERENCE.md      # Complete technical documentation
│   └── SHADER_SYSTEM_GUIDE.md            # Modular shader system for visual variety
│
├── 📊 DESIGN & OPTIMIZATION GUIDES  
│   ├── TRACK_DESIGN_GUIDE.md             # Track building patterns and constraints
│   ├── TRACK_OPTIMIZATION_GUIDE.md       # Performance optimization strategies
│   └── PROCEDURAL_TRACK_GENERATION.md    # Future procedural generation notes
│
├── 🏗️ CORE APPLICATION
│   ├── index.html                         # Main UI with circuit selection system
│   ├── package.json                       # Dependencies and build scripts
│   ├── package-lock.json                  # Dependency lock file
│   ├── vite.config.js                     # Build system configuration
│   └── src/                               # Source code directory
│
├── 🎯 BUILD & DEPLOYMENT
│   ├── dist/                              # Production build output
│   └── public/                            # Static assets
│       └── favicon.ico
│
└── 📦 DEPENDENCIES
    └── node_modules/                      # Package dependencies
```

## 🔧 SOURCE CODE ARCHITECTURE (`src/`)

```
src/
├── 🎮 CORE GAME SYSTEMS
│   ├── game/
│   │   ├── Ball.js                        # Player physics and enhanced boost system
│   │   ├── Game.js                        # Main game loop with FPS integration
│   │   └── Timer.js                       # Lap timing and detection system
│   │
│   ├── physics/
│   │   └── PhysicsWorld.js                # Cannon.js world management
│   │
│   └── input/
│       └── InputManager.js                # Centralized input handling
│
├── 🎨 VISUAL SYSTEMS
│   ├── rendering/
│   │   ├── Camera.js                      # Dynamic following camera
│   │   ├── Lighting.js                    # Professional lighting setup
│   │   ├── Renderer.js                    # WebGL renderer configuration
│   │   ├── ShaderManager.js               # Modular shader system
│   │   └── Skybox.js                      # Procedural space backgrounds
│   │
│   ├── shaders/                           # MODULAR SHADER LIBRARY
│   │   ├── rainbow-flow.js                # Classic rainbow track shader
│   │   ├── tech-grid.js                   # Futuristic grid pattern
│   │   ├── energy-pulse.js                # Pulsating energy effects
│   │   ├── crystal-surface.js             # Ice/crystal surface
│   │   ├── lava-flow.js                   # Molten lava surface
│   │   └── matrix-rain.js                 # Digital rain effect
│   │
│   └── styles/
│       └── main.css                       # Complete UI styling system
│
├── 🛤️ TRACK GENERATION SYSTEM
│   ├── tracks/
│   │   ├── TrackBuilder.js                # Optimized track construction engine
│   │   ├── CurveUtils.js                  # Mathematical curve utilities
│   │   │
│   │   ├── levels/                        # CIRCUIT ALPHA (Complete & Tested)
│   │   │   ├── Level1.js                  # Easy: Tutorial track
│   │   │   ├── Level2.js                  # Hard: Technical challenge
│   │   │   ├── Level3.js                  # Medium: Banking and jumps
│   │   │   ├── Level4.js                  # Medium: Narrow passages
│   │   │   ├── Level5.js                  # Medium: Precision jumps + shortcuts
│   │   │   ├── Level6.js                  # Medium: Figure-eight design
│   │   │   ├── Level7.js                  # Medium: Jump circuit mastery
│   │   │   ├── Level8.js                  # Extreme: High-speed banking (FIXED)
│   │   │   ├── Level9.js                  # Extreme: Technical flow (FIXED)
│   │   │   └── Level10.js                 # Extreme: Ultimate challenge (FIXED)
│   │   │
│   │   └── generation/                    # Alternative generation strategies
│   │       ├── TrackGenerationStrategies.js # Strategy pattern implementations
│   │       ├── SplineBasedStrategy.js     # Smooth curve generation
│   │       └── ExtrudeGeometryStrategy.js # Complex cross-section tracks
│
└── 🖥️ USER INTERFACE SYSTEMS
    └── ui/
        ├── StartScreen.js                 # Circuit selection with Three.js background
        ├── StartBackground.js             # Custom shader background effects
        ├── HUD.js                         # Performance monitoring + game stats
        ├── LoadingScreen.js               # Loading state management
        └── CompletionScreen.js            # Race completion handling
```

## 🎯 KEY FILES FOR AGENT CIRCUIT GENERATION

### **PRIMARY REFERENCES**
```
📋 REQUIRED READING:
├── README.md                              # Meta-prompt overview
├── AGENT_CIRCUIT_GENERATION_GUIDE.md     # Detailed patterns and examples
├── AGENT_TASK_SPECIFICATIONS.md          # Step-by-step implementation guide
└── TRACK_DESIGN_GUIDE.md                 # Physics constraints and lessons learned

🛤️ SUCCESSFUL TRACK EXAMPLES:
├── src/tracks/levels/Level1.js            # Easy difficulty template
├── src/tracks/levels/Level2.js            # Hard difficulty reference  
├── src/tracks/levels/Level5.js            # Medium with innovation
└── src/tracks/levels/Level8.js            # Extreme with boost assistance

🔧 TECHNICAL IMPLEMENTATION:
├── src/tracks/TrackBuilder.js             # Track construction system
├── src/game/Ball.js                       # Physics constraints and mechanics
└── TECHNICAL_STACK_REFERENCE.md          # Complete API documentation
```

### **INTEGRATION POINTS**
```
🖥️ UI INTEGRATION:
├── index.html                             # Add Circuit Beta section
├── src/ui/StartScreen.js                  # Update button handlers
└── src/styles/main.css                    # Styling patterns

🎮 GAME INTEGRATION:
├── src/game/Game.js                       # Level loading system
└── src/input/InputManager.js              # Keyboard shortcuts (1-9, 0)
```

## 📊 CIRCUIT PRISMATIC STATUS (BASELINE FOR AGENTS)

### **Completed & Tested Tracks**
```
✅ Level 1  (Easy)    - Sunrise: Perfect tutorial, 95 segments
✅ Level 2  (Hard)    - Neon Grid: Technical mastery, ~200 segments  
✅ Level 3  (Medium)  - Spectrum: Flowing rainbow aesthetics, ~150 segments
✅ Level 4  (Medium)  - Matrix: Digital precision navigation, ~180 segments
✅ Level 5  (Medium)  - Crystaline: Crystal formations + shortcuts, ~200 segments
✅ Level 6  (Medium)  - Inferno: Volcanic flow patterns, ~160 segments
✅ Level 7  (Medium)  - Voltage: Electric jump circuits, ~170 segments
✅ Level 8  (Extreme) - Hyperdrive: Extreme energy bursts (FIXED), ~190 segments
✅ Level 9  (Extreme) - Cyberflow: Digital rhythm flow (FIXED), ~220 segments
✅ Level 10 (Extreme) - Apex: Ultimate digital challenge (FIXED), ~250 segments
```

### **Performance Benchmarks**
```
🎯 Established Standards:
- FPS: 60 target, 45+ minimum
- Memory: Stable over extended play
- Load time: <3 seconds per track  
- Physics: Zero falling-through-world incidents
- Completion: 30-120 seconds per track based on difficulty
```

### **Design Patterns Validated**
```
✅ Strategic boost placement before climbs
✅ Safe climbing angles (≤Math.PI/80 sustained)
✅ Safe descent angles (≤Math.PI/40 to avoid cliff feeling)
✅ Wide split lanes (≥6 units) for reliable navigation
✅ Performance optimization with geometry merging
✅ Rainbow color system with vertex coloring
✅ Modular track generation with addSegment() API
```

## 🚀 NEXT CIRCUIT TARGET (AGENT TASK)

### **Required Deliverables**
```
📁 New Files Needed:
├── src/tracks/levels/Level11.js           # Easy: New circuit introduction
├── src/tracks/levels/Level12.js           # Medium: Track concept A
├── src/tracks/levels/Level13.js           # Medium: Track concept B  
├── src/tracks/levels/Level14.js           # Medium: Track concept C
├── src/tracks/levels/Level15.js           # Medium: Track concept D
├── src/tracks/levels/Level16.js           # Medium: Track concept E
├── src/tracks/levels/Level17.js           # Medium: Track concept F
├── src/tracks/levels/Level18.js           # Medium: Track concept G
├── src/tracks/levels/Level19.js           # Hard: Technical mastery
└── src/tracks/levels/Level20.js           # Extreme: Circuit finale

📋 Documentation:
└── [CIRCUIT_NAME]_DESIGN_NOTES.md        # Agent-generated design rationale
```

### **Integration Updates**
```
🖥️ UI Updates Required:
├── index.html                             # Add new circuit collapsible section
└── Update progress indicators             # Show 10/10 tracks when complete

🎮 Functional Requirements:
├── Keyboard shortcuts                     # Must work for new track range  
├── Circuit selection toggle              # Expand/collapse new circuit
└── Performance monitoring                # FPS stats functional across new tracks
```

## 🔍 DEVELOPMENT WORKFLOW

### **Agent Development Cycle**
```
1. 📖 Study established patterns in Circuit Alpha
2. 🎯 Plan 10-track progression for new circuit  
3. 🔨 Implement tracks following proven constraints
4. 🧪 Test integration with existing systems
5. 📊 Validate performance benchmarks
6. 📋 Document design decisions
7. 🚀 Deliver complete circuit for human testing
```

### **Quality Assurance Checkpoints**
```
Per Track:
├── ✅ Physics stability (no falling through world)
├── ✅ Performance target (45+ FPS maintained)
├── ✅ Difficulty appropriate for tier
├── ✅ Boost placement enhances gameplay
└── ✅ Visual design maintains coherence

Per Circuit:
├── ✅ Progressive difficulty across 10 tracks
├── ✅ Variety sufficient across medium tracks  
├── ✅ UI integration functional
├── ✅ Keyboard shortcuts operational
└── ✅ Ready for human playtest feedback
```

---

**This structure provides AI agents with complete navigation context for autonomous circuit development while maintaining the established architecture and quality standards.**