# Development Notes & Lessons Learned

## 🎮 Comprehensive Playtesting Results (January 2025)

### Critical Discoveries from 50 Levels of Testing

#### ❌ Features That Don't Work (Must Avoid)

1. **Corkscrews**
   - Ball physics cannot handle inverted track sections
   - Players lose all control when track rotates past 90°
   - Even with perfect banking, the ball falls off
   - **Solution**: Remove all corkscrews, replace with banked turns

2. **Vertical Loops**
   - Insufficient grip and momentum to complete loops
   - Ball falls at the top of the loop every time
   - Boost doesn't provide enough speed to compensate
   - **Solution**: Use hills and jumps instead

3. **Extreme Banking (>π/4)**
   - Banking over 45° causes ball to slide sideways off track
   - Physics system treats steep banks as walls
   - **Solution**: Maximum banking of π/4, with gradual transitions

4. **Steep Climbs Without Boost**
   - Angles over π/60 cause ball to roll backward
   - Players get stuck and frustrated
   - **Solution**: Always place boost before climbs >π/80

5. **Narrow Tracks (<6 units)**
   - No margin for error in controls
   - Slight deviation = fall off track
   - **Solution**: Minimum 6 units, recommend 12-16 for flow

6. **Dark Shaders on Dark Backgrounds**
   - Players can't see track boundaries
   - Examples: matrix-rain on cyber backgrounds
   - **Solution**: Test all shader/skybox combinations for visibility

#### ✅ Patterns That Work Well

1. **S-Curves with Banking**
   - Natural flow that players intuitively understand
   - Banking helps maintain speed through turns
   - Multiple S-curves create rhythm

2. **Multi-Path Sections**
   - Give players choice without punishment
   - All paths should be equally viable
   - Gradual splits and merges (10+ segments)

3. **Boost-Assisted Climbs**
   - Place boost pad before any climb >π/80
   - Wide boost pads (16+ units) for easy targeting
   - Boost gives satisfying speed burst

4. **Wide Comfortable Tracks**
   - 14-16 units optimal for most sections
   - 20+ units for "breather" sections
   - Allows recovery from mistakes

### Performance Insights 📊

#### What Causes Frame Drops
1. **Too Many Segments (>250)**
   - Each segment creates geometry and physics bodies
   - Browser struggles with large track counts
   - **Fix**: Keep levels under 200 segments ideally

2. **Frequent Roll Changes**
   - Prevents geometry merging optimization
   - Each unique roll creates new geometry batch
   - **Fix**: Bank only at turn entry/exit

3. **Complex Multi-Lane Sections**
   - Multiple simultaneous lanes increase draw calls
   - Especially bad with different widths per lane
   - **Fix**: Limit to 2-3 paths maximum

4. **Heavy Shaders on Long Tracks**
   - Some shaders have expensive calculations
   - Impact multiplies with track length
   - **Fix**: Use simpler shaders on longer tracks

#### Optimization Strategies That Work
```javascript
// GOOD: Group similar segments
for (let i = 0; i < 30; i++) {
  addSegment({ lanes: [{ offset: 0, width: 14 }] });
}

// BAD: Unique geometry each segment
for (let i = 0; i < 30; i++) {
  addSegment({ 
    lanes: [{ offset: 0, width: 10 + Math.random() * 5 }],
    rollDelta: Math.sin(i) * 0.1
  });
}
```

## Circuit 4 Development (January 2025)

### What Went Right ✅

1. **Zen Theme Execution**
   - Wide tracks (12-20+ units) created comfortable racing experience
   - Multiple viable paths eliminated "wrong choice" frustration
   - Gentle banking and curves maintained flow without difficulty spikes

2. **Shader Development**
   - Created 6 cohesive zen-themed shaders that enhanced the aesthetic
   - Aurora rails shader solved visibility issues on dark backgrounds
   - Shaders were performant and didn't impact frame rates

3. **Playtesting Feedback Loop**
   - Quick iteration based on specific playtesting feedback
   - Fixed steep climbs, consecutive speed pads, and visibility issues
   - Adjusted difficulty ratings based on actual player experience

4. **Camera System Fix**
   - Successfully fixed long-standing orbital camera limitation on PC
   - Maintained camera position relative to ball during movement
   - Mobile control positioning fixed to prevent screen overlap

### What Went Wrong ❌

1. **Initial Track Design Issues**
   - Level 32: Too steep descent made climb impossible
   - Level 37: End twist was frustrating and rails were invisible
   - Level 38: Consecutive speed pads created uncontrollable speed
   - Level 39: Wrong shader choice (forest-floor didn't fit theme)

2. **Difficulty Miscategorization**
   - Level 33 was marked as hard but played like medium
   - Need better playtesting before difficulty assignment

3. **Visibility Problems**
   - Clear/transparent track shaders need rails for visibility
   - Dark skyboxes require special consideration for track elements
   - Should have anticipated this during design phase

4. **Camera Implementation**
   - Initial fix attempt broke camera tracking
   - Required deeper understanding of OrbitControls interaction
   - PC vs mobile differences weren't properly considered

### Technical Insights 💡

1. **Track Generation Best Practices**
   - Wider tracks are more forgiving and fun
   - Multiple paths should be equally viable, not punishing
   - Gentle elevation changes (π/200 rad) work better than steep ones
   - Always playtest climb angles - what looks good may be unplayable

2. **Shader System**
   - Rail shaders are essential for transparent/dark track sections
   - Themed shader sets create cohesive circuit identity
   - Performance impact should be tested on all shaders

3. **Camera Controls**
   - OrbitControls needs to manage its own positioning
   - Manual position overrides break the spherical coordinate system
   - Mobile and PC controls need separate consideration

### Process Improvements 📈

1. **Playtesting Protocol**
   - Test each level individually before circuit completion
   - Check all difficulty aspects: speed, visibility, climb angles
   - Test on both PC and mobile platforms

2. **Documentation**
   - Keep track of shader/skybox combinations that work well
   - Document camera system interactions for future reference
   - Maintain list of "safe" track parameters

3. **Iterative Design**
   - Quick fixes based on specific feedback work well
   - Don't be afraid to completely change problematic sections
   - User experience trumps original design vision

## Future Circuit Design Guidelines

### Theme Coherence
- Choose a strong central theme early
- All elements (shaders, track design, difficulty) should support theme
- Player feedback on theme (like "quantum fufu") is valuable

### Technical Considerations
- Plan for visibility issues in design phase
- Consider rail shaders for any non-standard track shader
- Test camera angles for all track configurations
- Mobile controls need extra bottom margin

### Player Experience
- Wide tracks reduce frustration
- Multiple paths should reward exploration, not punish mistakes
- Difficulty should come from track complexity, not control fighting
- Aesthetic beauty can coexist with good gameplay

## 🔧 Track Generation System Deep Dive

### The addSegment() Function
```javascript
addSegment({
  // Rotation deltas (in radians)
  yawDelta: 0,      // Left/right turn
  pitchDelta: 0,    // Up/down angle  
  rollDelta: 0,     // Banking/tilt
  
  // Lane configuration
  lanes: [
    { offset: 0, width: 14 },    // Center lane
    { offset: -15, width: 10 },  // Left path
    { offset: 15, width: 10 }    // Right path
  ],
  
  // Special properties
  isGap: false,         // Creates a jump gap
  isBoost: false,       // Places boost pad
  isBoostPowerup: false,// Places collectible boost
  isStartLine: false,   // Level start
  isFinishLine: false   // Level end
});
```

### Key Physics Constraints
- **Segment Length**: Fixed at 6 units
- **Max Turn Rate**: π/30 per segment
- **Max Climb**: π/60 without boost
- **Max Bank**: π/4 total (not per segment)
- **Min Width**: 6 units for ball physics

### Common Implementation Mistakes

#### 1. Forgetting to Reset Banking
```javascript
// BAD: Banking never resets
addSegment({ rollDelta: Math.PI / 6 });
// ... turn segments ...
// Player stays banked forever!

// GOOD: Always reset banking
addSegment({ rollDelta: Math.PI / 6 });
// ... turn segments ...
addSegment({ rollDelta: -Math.PI / 6 });
```

#### 2. Impossible Climb Angles
```javascript
// BAD: Too steep without boost
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 40 }); // Will cause rollback
}

// GOOD: Boost before steep climbs
addSegment({ isBoost: true });
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 50 });
}
```

#### 3. Abrupt Path Splits
```javascript
// BAD: Instant split
addSegment({ lanes: [{ offset: 0, width: 14 }] });
addSegment({ lanes: [
  { offset: -15, width: 10 },
  { offset: 15, width: 10 }
]});

// GOOD: Gradual split
for (let i = 0; i < 10; i++) {
  const factor = i / 10;
  addSegment({
    lanes: [
      { offset: -15 * factor, width: 12 },
      { offset: 15 * factor, width: 12 }
    ]
  });
}
```

## 👥 For Future AI Agents

### Quick Checklist for Level Creation

1. **Before Starting**
   - [ ] Check difficulty range (1-5 only, no 6)
   - [ ] Test shader/skybox visibility
   - [ ] Plan segment count (<250)

2. **While Building**
   - [ ] Keep track width ≥12 units
   - [ ] Bank gradually in/out of turns
   - [ ] Place boosts before climbs
   - [ ] Avoid corkscrews/loops/extreme banking

3. **After Building**
   - [ ] Verify start/finish lines placed
   - [ ] Count total segments
   - [ ] Check all banking resets to 0
   - [ ] Test climb angles

### Working With Existing Levels

When modifying levels based on feedback:
1. **Complete Redesign** is often better than patching
2. **Preserve Theme** while fixing gameplay
3. **Test Specific Sections** mentioned in feedback
4. **Consider Performance** if adding complexity

### Common Feedback Patterns

- "Impossible section" = Check banking/climb angles
- "Can't see track" = Wrong shader/skybox combo
- "Too hard" = Make track wider, reduce angles
- "Corkscrew doesn't work" = Remove entirely
- "Frame drops" = Reduce segments or complexity

### The Rail Shader Saga

**What Happened**: User requested rail shader implementation for visibility. After implementing across multiple files (TrackBuilder.js, ShaderManager.js, levels), discovered it didn't work as expected. User decided to remove entire system.

**Lesson**: Rails already have adequate visibility through automatic coloring based on track shader. Don't over-engineer solutions.

**Current State**: No rail shader system. Rails use simple colored materials for contrast.