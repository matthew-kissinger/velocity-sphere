# 🤖 Agent Task Specifications

**Detailed task breakdown for autonomous circuit generation**

## 🎯 PRIMARY MISSION

**Generate the next circuit (10 tracks)** following established patterns from Circuit Alpha while introducing innovative track designs within proven constraints.

## 📋 TASK BREAKDOWN

### Phase 1: Codebase Analysis (Required First)

#### **Task 1.1: Study Successful Patterns**
```
Analyze files:
- src/tracks/levels/Level1.js through Level10.js
- TRACK_DESIGN_GUIDE.md (lessons learned section)
- AGENT_CIRCUIT_GENERATION_GUIDE.md (pattern analysis)

Extract patterns for:
- Segment count by difficulty
- Boost placement strategies  
- Safe climbing/descending angles
- Split lane implementations
- Jump sequence designs
```

#### **Task 1.2: Understand Technical Constraints**
```
Review systems:
- src/tracks/TrackBuilder.js (geometry optimization)
- src/game/Ball.js (physics constraints)
- src/game/Game.js (performance requirements)

Identify limits:
- Physics simulation boundaries
- Performance bottlenecks
- Memory usage patterns
- Rendering optimization techniques
```

#### **Task 1.3: Analyze UI Integration**
```
Study interface:
- index.html (circuit selection structure)
- src/ui/StartScreen.js (level button handling)
- src/styles/main.css (visual design patterns)

Understand integration:
- How tracks appear in circuit selection
- Keyboard shortcut handling (1-9, 0)
- Progress tracking mechanisms
```

### Phase 2: New Circuit Design

#### **Task 2.1: Plan Track Distribution**
```
Design 10 tracks following proven distribution:
- Track 1: Easy (intro to new circuit)
- Tracks 2-8: Medium (varied challenges)
- Track 9: Hard (technical mastery)
- Track 10: Extreme (circuit culmination)

Estimated completion times:
- Easy: 45-60 seconds
- Medium: 60-90 seconds  
- Hard: 90-120 seconds
- Extreme: 90-120 seconds (technique over speed)
```

#### **Task 2.2: Innovation Within Constraints**
```
Introduce new elements respecting physics:
- Multi-level track sections
- Rhythm-based hill sequences
- Technical chicane combinations
- Advanced split path designs
- Environmental theming opportunities

Innovation constraints:
- Climbing angles ≤ Math.PI/80 for sustained sections
- Descent angles ≤ Math.PI/40 for safety
- Split lane widths ≥ 6 units
- Boost placement before challenges
- Total segments 80-300 based on difficulty
```

### Phase 3: Implementation

#### **Task 3.1: Create Track Files**
```
Generate files: src/tracks/levels/LevelX.js through LevelY.js (next 10 tracks)

Each file must:
- Follow established export pattern
- Include proper difficulty rating
- Implement strategic boost placement
- Use safe physics angles
- Provide engaging progression
- Stay within segment limits

File template:
export default {
  name: "Descriptive Track Name",
  description: "Brief engaging description",
  difficulty: 1-4,
  generateTrack(addSegment) {
    // Implementation following established patterns
  }
};
```

#### **Task 3.2: UI Integration**
```
Modify files:
- index.html: Add new circuit section with next 10 tracks
- src/ui/StartScreen.js: Update button handlers if needed
- Ensure keyboard shortcuts work correctly for new tracks

Integration requirements:
- New circuit appears as collapsible section
- Track buttons follow established styling
- Circuit-specific color theming applied
- Progress tracking functions properly
```

#### **Task 3.3: Quality Assurance**
```
Validate each track:
- Completes without physics errors
- Maintains target FPS (45+ minimum)
- Difficulty feels appropriate for tier
- Boost placement enhances gameplay
- Visual design maintains coherence

Test circuit-wide:
- Progression feels logical across 10 tracks
- Variety sufficient across medium tracks
- Performance stable across all tracks
- Integration with existing systems works
```

### Phase 4: Documentation & Delivery

#### **Task 4.1: Document Design Decisions**
```
Create: [CIRCUIT_NAME]_DESIGN_NOTES.md

Include:
- Track-by-track design rationale
- Innovation explanations
- Technical implementation details
- Performance optimization notes
- Integration approach
```

#### **Task 4.2: Update Progress Tracking**
```
Modify:
- README.md: Update status to include new circuit
- index.html: Update progress indicators
- Any other files referencing circuit completion
```

## ⚡ RAPID DEVELOPMENT WORKFLOW

### Recommended Sequence
1. **Study Level2.js** (hard difficulty reference)
2. **Study Level5.js** (medium with innovation)  
3. **Study Level8.js** (extreme with boost assistance)
4. **Plan track concepts** for each difficulty tier
5. **Implement easy track first** (validate workflow)
6. **Iterate through medium tracks** (build variety)
7. **Create hard track** (technical challenge)
8. **Design extreme finale** (circuit culmination)
9. **Test complete circuit** (progression validation)
10. **Document and deliver** (comprehensive notes)

### Quality Gates
Each track must pass:
- [ ] Physics stability test
- [ ] Performance benchmark (45+ FPS)
- [ ] Difficulty appropriateness 
- [ ] Integration verification
- [ ] Playtest readiness

## 🎯 SUCCESS CRITERIA

### Technical Success
- All 10 tracks complete without errors
- Performance maintains established standards
- Integration with UI systems functional
- Code follows established patterns
- Memory usage remains stable

### Design Success  
- Clear difficulty progression 11→20
- Engaging variety within each tier
- Strategic boost placement effective
- Innovation enhances without breaking physics
- Circuit feels cohesive and complete

### Integration Success
- Circuit Beta appears correctly in selection
- All keyboard shortcuts functional
- Progress tracking operational
- Visual design maintains consistency
- Human playtest-ready state achieved

## 🔧 IMPLEMENTATION RESOURCES

### Primary Reference Files
```
Core Patterns:
- src/tracks/levels/Level1.js (easy template)
- src/tracks/levels/Level5.js (medium innovation)  
- src/tracks/levels/Level2.js (hard reference)
- src/tracks/levels/Level8.js (extreme fixed)

Technical Systems:
- src/tracks/TrackBuilder.js (implementation details)
- src/game/Ball.js (physics constraints)
- TRACK_DESIGN_GUIDE.md (lessons learned)
```

### Development Tools
```
Testing:
- npm run dev (development server)
- F key toggle (FPS monitoring)
- R key (quick restart)
- 1-9, 0 keys (rapid level switching)

Validation:
- Browser DevTools (performance monitoring)
- Console output (physics warnings)
- Visual inspection (track integrity)
- Playtest protocols (human feedback preparation)
```

---

**Execute these tasks in sequence to generate the next circuit that builds upon Circuit Alpha's success while introducing engaging innovations for the human playtester to evaluate.**