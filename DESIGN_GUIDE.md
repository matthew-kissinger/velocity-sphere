# 🎮 Velocity Sphere Track & Level Design Guide

## Core Design Principles

### 1. Flow Over Frustration
- **Wide tracks** (10-30 units) are more forgiving than narrow ones
- **Multiple paths** should be equally viable, not punishing
- **Smooth transitions** between track elements
- **Clear visual cues** for upcoming challenges

### 2. Physics-Based Constraints
- **Maximum climb angle**: π/60 radians without boost
- **Comfortable descent**: π/40 radians (steeper feels like falling)
- **Minimum lane width**: 6 units for player stability
- **Maximum banking**: π/4 radians (45°)
- **Always reset banking**: Return to 0 after turns

### 3. Performance-First Design
- **Segment budget**: 250 segments maximum per track
- **Roll changes**: Minimize to allow geometry merging
- **Consistent widths**: Reduces unique geometry count
- **Simple calculations**: Avoid complex math in loops

## 📐 Track Building System

### Segment Structure
```javascript
addSegment({
  // Rotation deltas (radians)
  yawDelta: 0,      // Left/right turn
  pitchDelta: 0,    // Up/down angle
  rollDelta: 0,     // Banking/tilt
  
  // Lane configuration
  lanes: [
    { offset: 0, width: 10 },     // Center lane
    { offset: -15, width: 8 },    // Left path
    { offset: 15, width: 8 }      // Right path
  ],
  
  // Special properties
  isGap: false,         // Creates a jump
  isBoost: false,       // Places boost pad
  isBoostPowerup: false,// Places boost powerup
  isStartLine: false,   // Start position
  isFinishLine: false   // Finish position
});
```

### Design Patterns

#### 1. The Perfect Turn
```javascript
// Bank into turn
addSegment({ rollDelta: Math.PI / 6 });

// Execute turn with consistent banking
const turnSegments = 30;
for (let i = 0; i < turnSegments; i++) {
  addSegment({ 
    yawDelta: (Math.PI / 2) / turnSegments,
    lanes: [{ offset: 0, width: 12 }]
  });
}

// Bank out
addSegment({ rollDelta: -Math.PI / 6 });
```

#### 2. The Hill Climb
```javascript
// Gradual climb with wider track
for (let i = 0; i < 20; i++) {
  addSegment({
    pitchDelta: Math.PI / 100, // Gentle climb
    lanes: [{ offset: 0, width: 14 }] // Wider for stability
  });
}
```

#### 3. The Multi-Path
```javascript
// Split paths gradually
for (let i = 0; i < 10; i++) {
  const factor = i / 10;
  addSegment({
    lanes: [
      { offset: -12 * factor, width: 10 },
      { offset: 12 * factor, width: 10 }
    ]
  });
}
```

## 🎯 Difficulty Scaling

### Easy (Difficulty 1-2)
- Wide tracks (14-20 units)
- Gentle curves (< π/4 total)
- Minimal elevation changes
- No mandatory jumps
- Forgiving boost placement

### Medium (Difficulty 3-4)
- Standard tracks (10-14 units)
- Moderate curves and banking
- Some elevation variety
- Optional advanced paths
- Strategic boost placement

### Hard (Difficulty 5)
- Narrower tracks (8-12 units)
- Sharp turns with banking
- Significant elevation changes
- Precision jump requirements
- Limited boost opportunities

### Extreme (Difficulty 6)
- Minimum viable width (6-10 units)
- Complex turn combinations
- Extreme elevation changes
- Mandatory precision jumps
- Punishing boost placement

## 🛠️ Optimization Rules

### Do's ✅
```javascript
// Group similar segments
for (let i = 0; i < 20; i++) {
  addSegment({ lanes: [{ offset: 0, width: 10 }] });
}

// Pre-calculate values
const turnAngle = Math.PI / 30;
for (let i = 0; i < 30; i++) {
  addSegment({ yawDelta: turnAngle });
}

// Bank only at transitions
addSegment({ rollDelta: bankAngle });    // Enter
// ... turn segments ...
addSegment({ rollDelta: -bankAngle });   // Exit
```

### Don'ts ❌
```javascript
// DON'T: Change roll constantly
for (let i = 0; i < 100; i++) {
  addSegment({ rollDelta: Math.sin(i) * 0.1 }); // Bad!
}

// DON'T: Complex math per segment
for (let i = 0; i < 100; i++) {
  const complex = Math.sin(i * 0.1) * Math.cos(i * 0.2) * Math.tan(i * 0.3);
  addSegment({ yawDelta: complex }); // Bad!
}

// DON'T: Exceed climb limits
addSegment({ pitchDelta: Math.PI / 20 }); // Too steep!
```

## 🎨 Visual Design Integration

### Shader Selection
- Match shader to track theme
- Consider visibility (dark shaders need rails)
- Test performance impact
- Ensure readability at high speeds

### Skybox Pairing
```javascript
// Good combinations
"zen-garden" + "sunset-vibes"      // Peaceful
"lava-flow" + "lava-storm"         // Intense
"ice-surface" + "arctic-wind"      // Cohesive
"aurora-zen" + "aurora-dance"      // Atmospheric
```

## 📋 Design Checklist

Before finalizing a track, verify:

- [ ] **Segment count** < 250
- [ ] **Banking resets** to 0
- [ ] **Climb angles** < π/60
- [ ] **Minimum width** >= 6 units
- [ ] **Boost placement** is fair
- [ ] **Visual clarity** at speed
- [ ] **Performance** maintains 60 FPS
- [ ] **Start/finish** lines placed
- [ ] **Difficulty** matches rating
- [ ] **Theme** is cohesive

## 🚀 Advanced Techniques

### Dynamic Width Variation
```javascript
for (let i = 0; i < 30; i++) {
  const progress = i / 30;
  const width = 10 + Math.sin(progress * Math.PI) * 5;
  addSegment({ lanes: [{ offset: 0, width }] });
}
```

### Elevation Waves
```javascript
for (let i = 0; i < 40; i++) {
  const wave = Math.sin(i * 0.15) * Math.PI / 150;
  addSegment({ pitchDelta: wave });
}
```

### Spiral Patterns
```javascript
const radius = 50;
const height = 20;
const rotations = 2;

for (let i = 0; i < 100; i++) {
  const progress = i / 100;
  const angle = progress * Math.PI * 2 * rotations;
  
  addSegment({
    yawDelta: (Math.PI * 2 * rotations) / 100,
    pitchDelta: height / 100 / radius,
    rollDelta: Math.PI / 30 * Math.sin(angle)
  });
}
```

## 💡 Lessons from Development & Playtesting

### What Players Love ✅
- Wide comfortable tracks for flow (14-20 units)
- Multiple viable route choices that converge smoothly
- Visual spectacle with good performance
- Fair boost pad placement on challenging sections
- Smooth difficulty progression within circuits
- Natural banking that follows the curve direction
- Gentle elevation changes that maintain momentum

### What Players Hate ❌
- Narrow tracks with no margin for error
- Punishing alternate paths that slow you down
- Sudden difficulty spikes or impossible sections
- Invisible obstacles or poor visibility
- Frame rate drops from too many segments
- Extreme banking angles that throw you off track
- Steep climbs without boost assistance
- Dark shaders on dark backgrounds

### Critical Failures to Avoid 🚫

#### 1. Corkscrews
```javascript
// DON'T DO THIS - Players cannot navigate corkscrews
for (let i = 0; i < segments; i++) {
  addSegment({
    yawDelta: angle,
    rollDelta: Math.PI * 2 / segments // Full rotation = unplayable
  });
}
```
**Why it fails**: The ball physics cannot handle inverted sections. Players lose control and fall off.

#### 2. Extreme Banking
```javascript
// DON'T DO THIS - Banking over π/4 throws players off
addSegment({ rollDelta: Math.PI / 2 }); // 90° banking = guaranteed failure
```
**Why it fails**: Banking angles over 45° cause the ball to slide off the track.

#### 3. Vertical Loops
```javascript
// DON'T DO THIS - Loops are physically impossible
for (let i = 0; i < 40; i++) {
  addSegment({
    pitchDelta: Math.PI * 2 / 40 // Full vertical loop
  });
}
```
**Why it fails**: The ball doesn't have enough speed/grip to complete vertical loops.

#### 4. Steep Climbs Without Boost
```javascript
// DON'T DO THIS - Too steep without assistance
addSegment({ pitchDelta: Math.PI / 30 }); // Exceeds climb limit
```
**Why it fails**: Ball loses momentum and rolls backward.

### The Sweet Spot 🎯
- **Track width**: 12-16 units (wider for easier difficulty)
- **Segment count**: 150-200 per level (max 250 for performance)
- **Banking angles**: π/6 to π/4 maximum (30°-45°)
- **Climb angles**: π/80 to π/60 (gentle to moderate)
- **Turn radius**: Minimum 20 segments for 90° turn
- **Alternate paths**: 2-3 maximum, all equally viable

### Proven Patterns That Work 🏆

#### 1. The Flow State Turn
```javascript
// Smooth banking transition
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: Math.PI / 30 }); // Gradual bank in
}
// Main turn
for (let i = 0; i < 30; i++) {
  addSegment({ 
    yawDelta: Math.PI / 60,
    lanes: [{ offset: 0, width: 14 }]
  });
}
// Unbank
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: -Math.PI / 30 }); // Gradual bank out
}
```

#### 2. The Boost Climb
```javascript
// Place boost before steep section
addSegment({ 
  isBoost: true,
  lanes: [{ offset: 0, width: 16 }] // Wide for easy targeting
});
// Now safe to climb
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 70 });
}
```

#### 3. The Safe Split
```javascript
// Gradual split with equal paths
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

### Performance Optimization Insights 📊

#### What Kills Performance
- Too many unique roll values (prevents geometry merging)
- Complex multi-path sections with many lanes
- Excessive segment count (>250)
- Heavy shaders on long tracks

#### Optimization Techniques
```javascript
// GOOD: Consistent geometry allows merging
const standardWidth = 14;
for (let i = 0; i < 50; i++) {
  addSegment({ lanes: [{ offset: 0, width: standardWidth }] });
}

// GOOD: Bank only at key points
addSegment({ rollDelta: bankAngle });     // Single bank operation
// ... many segments with no roll change ...
addSegment({ rollDelta: -bankAngle });    // Single unbank operation
```

### Shader Visibility Guidelines 🎨

#### Problem Combinations
- `matrix-rain` + dark backgrounds = invisible track
- `void-black` + underground theme = can't see anything
- Dark track shaders without bright skyboxes = poor visibility

#### Solution
- Always test shader/skybox combinations
- Ensure sufficient contrast
- Bright skyboxes help with dark track shaders
- Consider adding emission or glow to dark shaders
- Rails are automatically colored for visibility

### Difficulty Progression Rules 📈

#### Circuit Organization
- Start each circuit with easier tracks
- Mix difficulties within circuits for variety
- Save extreme challenges for later circuits
- Provide "breather" levels between hard sections

#### Within-Level Progression
1. **Start gentle**: Wide track, no obstacles
2. **Build complexity**: Add turns, elevation
3. **Peak challenge**: Tightest section 60-70% through
4. **Cool down**: Easier final section to finish
5. **Satisfying end**: Wide finish area

### Common Pitfalls for AI Agents 🤖

1. **Over-engineering**: Don't create overly complex math
2. **Ignoring physics**: Test climb angles and banking limits
3. **Poor pacing**: Maintain consistent difficulty
4. **Feature creep**: Not every level needs every feature
5. **Performance blind**: Always consider segment budget

---

## 🎮 Quick Reference for Track Generation

### Essential Limits
```javascript
const LIMITS = {
  maxSegments: 250,          // Performance limit
  maxClimbAngle: Math.PI/60, // Without boost
  maxBankAngle: Math.PI/4,   // 45 degrees
  minTrackWidth: 6,          // Absolute minimum
  comfortWidth: 14,          // Recommended
  maxTurnRate: Math.PI/30    // Per segment
};
```

### Track Generation Template
```javascript
export default {
  name: "Track Name",
  description: "Brief description",
  difficulty: 3, // 1-5 only (no 6/extreme)
  shader: "shader-name",
  skybox: "skybox-name",
  
  generateTrack(addSegment) {
    // Start section - always straight
    for (let i = 0; i < 20; i++) {
      addSegment({
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Main track sections...
    
    // Finish - mark last segment
    addSegment({
      isFinishLine: true,
      lanes: [{ offset: 0, width: 20 }]
    });
  }
};
```

### DO NOT IMPLEMENT
- ❌ Corkscrews (rollDelta completing full rotation)
- ❌ Vertical loops (pitchDelta completing full rotation)
- ❌ Banking over π/4 radians
- ❌ Climbs over π/60 without boost
- ❌ Track width under 6 units
- ❌ Sudden 90° turns without curve
- ❌ Upside-down track sections
- ❌ Difficulty 6 (extreme)

---

**Last Updated**: January 2025
**Version**: 2.0.0
**For**: Developers and AI Agents
**Based on**: Extensive playtesting feedback