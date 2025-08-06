# 🤖 Agent Reference Guide - Velocity Sphere

## Critical Information for AI Agents

This guide consolidates all critical knowledge gained from extensive playtesting and development of 50 levels.

## 🚨 DO NOT IMPLEMENT These Features

### 1. Corkscrews
```javascript
// NEVER DO THIS - Players cannot navigate
for (let i = 0; i < 40; i++) {
  addSegment({
    yawDelta: Math.PI / 20,
    rollDelta: Math.PI * 2 / 40  // Full rotation = impossible
  });
}
```
**Why**: Ball physics break when track inverts. Players lose control and fall off.

### 2. Vertical Loops
```javascript
// NEVER DO THIS - Physics don't support
for (let i = 0; i < 40; i++) {
  addSegment({
    pitchDelta: Math.PI * 2 / 40  // Vertical loop = failure
  });
}
```
**Why**: Insufficient grip/momentum to complete loops.

### 3. Extreme Banking (>π/4)
```javascript
// NEVER DO THIS - Ball slides off
addSegment({ rollDelta: Math.PI / 2 });  // 90° = instant failure
```
**Why**: Banking over 45° causes lateral sliding.

### 4. Steep Climbs Without Boost
```javascript
// NEVER DO THIS - Ball rolls backward
addSegment({ pitchDelta: Math.PI / 30 });  // Too steep!
```
**Why**: Max climb angle is π/60 without boost assistance.

### 5. Difficulty 6 (Extreme)
```javascript
// NEVER DO THIS
difficulty: 6  // Removed - proven unplayable in testing
```
**Why**: All "extreme" difficulty levels were too frustrating. Max is now 5.

## ✅ Proven Working Patterns

### 1. S-Curve Flow
```javascript
const sCurve = [
  { angle: Math.PI / 3, segments: 30 },
  { angle: -Math.PI / 2, segments: 35 },
  { angle: Math.PI / 3, segments: 30 }
];

for (const turn of sCurve) {
  // Bank entry
  for (let i = 0; i < 5; i++) {
    addSegment({ rollDelta: turn.angle > 0 ? Math.PI/40 : -Math.PI/40 });
  }
  // Turn
  for (let i = 0; i < turn.segments; i++) {
    addSegment({
      yawDelta: turn.angle / turn.segments,
      lanes: [{ offset: 0, width: 14 }]
    });
  }
  // Bank exit
  for (let i = 0; i < 5; i++) {
    addSegment({ rollDelta: turn.angle > 0 ? -Math.PI/40 : Math.PI/40 });
  }
}
```

### 2. Boost-Assisted Climb
```javascript
// Always boost before steep sections
addSegment({ 
  isBoost: true,
  lanes: [{ offset: 0, width: 16 }]  // Wide for easy targeting
});

// Now safe to climb
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 70 });
}
```

### 3. Multi-Path Choice
```javascript
// Gradual split
for (let i = 0; i < 10; i++) {
  const factor = i / 10;
  addSegment({
    lanes: [
      { offset: -15 * factor, width: 12 },
      { offset: 15 * factor, width: 12 }
    ]
  });
}

// Parallel paths (fixed offsets for performance)
for (let i = 0; i < 40; i++) {
  addSegment({
    lanes: [
      { offset: -15, width: 12 },
      { offset: 15, width: 12 }
    ]
  });
}

// Gradual merge
for (let i = 0; i < 10; i++) {
  const factor = 1 - i / 10;
  addSegment({
    lanes: [
      { offset: -15 * factor, width: 12 },
      { offset: 15 * factor, width: 12 }
    ]
  });
}
```

## 🎯 Key Limits & Constants

```javascript
const TRACK_LIMITS = {
  // Segment counts
  maxSegments: 250,          // Absolute maximum
  recommendedSegments: 150,  // Optimal performance
  
  // Angles (radians)
  maxClimbAngle: Math.PI/60,     // Without boost
  maxBankAngle: Math.PI/4,       // 45 degrees
  maxTurnRate: Math.PI/30,       // Per segment
  
  // Track dimensions
  minTrackWidth: 6,          // Ball needs room
  comfortWidth: 14,          // Recommended
  maxTrackWidth: 30,         // Beyond feels too open
  
  // Physics
  segmentLength: 6,          // Fixed value
  ballRadius: 1.0,           // For scale reference
};
```

## 📊 Performance Guidelines

### Segment Count Impact
- 50-100 segments: 60+ FPS (excellent)
- 100-150 segments: 60 FPS (good)
- 150-200 segments: 55-60 FPS (acceptable)
- 200-250 segments: 45-55 FPS (marginal)
- 250+ segments: <45 FPS (unplayable)

### What Kills Performance
1. **Frequent roll changes** - Prevents geometry merging
2. **Complex multi-path sections** - Too many draw calls
3. **Per-segment calculations** - CPU overhead
4. **Heavy shaders on long tracks** - GPU strain

### Optimization Checklist
- [ ] Track under 200 segments (150 ideal)
- [ ] Banking only at turn entry/exit
- [ ] Pre-calculate all math values
- [ ] Use consistent lane widths
- [ ] Test maintains 60 FPS

## 🔧 Common Playtesting Feedback

### "Track is impossible"
- Check banking angles (max π/4)
- Verify climb angles (max π/60 without boost)
- Look for corkscrews or loops (remove them)
- Make track wider (14+ units)

### "Can't see the track"
- Dark shader + dark skybox = bad
- Test all shader/skybox combinations
- Rails automatically adjust color for contrast

### "Too difficult"
- Widen the track
- Reduce turn sharpness
- Add boost before climbs
- Simplify complex sections

### "Frame rate drops"
- Count segments (stay under 200)
- Check for roll change frequency
- Simplify multi-path sections
- Consider simpler shader

## 🚫 The Rail Shader Saga

**What happened**: User requested rail shader system for visibility. After full implementation across multiple files, it didn't work as expected. User decided to remove it entirely.

**Lesson**: Rails already have automatic color adjustment. Don't over-engineer.

**Current state**: No rail shader system. Rails use simple materials.

## 📝 Level File Template

```javascript
export default {
  name: "Track Name",
  description: "Brief description",
  difficulty: 3,  // 1-5 ONLY (no 6!)
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
    
    // Main track content...
    // Remember: <250 segments total!
    
    // Finish
    addSegment({
      isFinishLine: true,
      lanes: [{ offset: 0, width: 20 }]
    });
  }
};
```

## 🎮 Quick Decision Tree

1. **Creating a new level?**
   - Use 14-16 unit width
   - Keep under 150 segments
   - No corkscrews/loops/extreme banking
   - Test shader visibility

2. **Fixing an "impossible" level?**
   - Remove corkscrews entirely
   - Reduce banking to π/4 max
   - Add boost before climbs
   - Widen track sections

3. **Optimizing performance?**
   - Count roll changes (minimize!)
   - Reduce segment count
   - Use fixed lane offsets
   - Pre-calculate all math

## 📊 Circuit Organization

- **Circuit 1**: Tutorial/Introduction (Levels 1-10)
- **Circuit 2**: Elemental Theme (Levels 11-20)
- **Circuit 3**: Quantum/Advanced (Levels 21-30)
- **Circuit 4**: Tranquil/Zen (Levels 31-40)
- **Circuit 5**: Underground/Neon (Levels 41-50)

Each circuit should have a mix of difficulties, not sequential progression.

---

**For**: AI Agents working on Velocity Sphere
**Updated**: January 2025
**Based on**: 50 levels of playtesting data