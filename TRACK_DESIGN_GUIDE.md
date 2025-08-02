# Velocity Sphere Track Design Guide

This guide provides best practices and guidelines for creating new tracks in Velocity Sphere based on our experience with the track building system.

## CRITICAL CONSTRAINTS

### Track Length
- **MAXIMUM**: 300-400 segments total
- **IDEAL**: 200-250 segments
- **Why**: Performance (draw calls) and playability (1-minute runs max)

### Complexity Rules
- Keep it SIMPLE - this is an arcade racer, not a simulation
- Focus on fun, fast gameplay over complex geometry
- Each track should be completable in 30-60 seconds

### Height & Elevation Freedom
- **NEW**: Dynamic fall detection - no fixed height limits!
- **How it works**: Fall threshold is automatically set 50 units below the lowest track segment
- **What this means**: You can have massive elevation drops, deep valleys, sky-high climbs
- **Example**: Track can start at y=5 and drop to y=-500 if you want
- **Safety**: Ball only resets if it falls 50+ units below the track

## Track Building System Overview

Tracks are built using a segment-based approach where each segment can modify:
- **yawDelta**: Horizontal turning (left/right)
- **pitchDelta**: Vertical angle changes (up/down)
- **rollDelta**: Banking/tilting of the track
- **isGap**: Creates a gap in the track for jumps
- **lanes**: Creates split paths with multiple lanes

## What Works Well

### 1. Gradual Transitions
Always use transition segments when changing track characteristics:
```javascript
// Good: Gradual banking entry
for (let i = 0; i < 3; i++) {
  addSegment({ rollDelta: bankAngle / 3 });
}
```

### 2. Separated Transformations
Apply rotations one axis at a time for smoother geometry:
```javascript
// Good: Bank first, then turn
// Entry banking
for (let i = 0; i < 5; i++) {
  addSegment({ rollDelta: Math.PI / 60 });
}
// Then turn with constant banking
for (let i = 0; i < turnSegments; i++) {
  addSegment({ yawDelta: yawPerSegment });
}
```

### 3. Wide Sweeping Curves
Use longer segment counts for smoother curves:
```javascript
// Good: 20 segments for a 60-degree turn
const segments = 20;
const totalAngle = Math.PI / 3;
for (let i = 0; i < segments; i++) {
  addSegment({ yawDelta: totalAngle / segments });
}
```

### 4. CRITICAL: Pitch Angle Limits for Climbing
The ball CANNOT climb steep angles! This is a physics limitation:
```javascript
// MAXIMUM SAFE CLIMBING ANGLE: Math.PI / 40 to Math.PI / 60 per segment
// Good: Gradual climb the ball can handle
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 60 }); // ~3 degrees - SAFE
}

// BAD: Too steep - ball will slide back down!
for (let i = 0; i < 20; i++) {
  addSegment({ pitchDelta: Math.PI / 30 }); // ~6 degrees - IMPOSSIBLE TO CLIMB!
}

// VERY BAD: Levels 6 and 9 originally had these impossible climbs:
// pitchDelta: Math.PI / 30 (spiral mountain)
// pitchDelta: Math.PI / 40 (valley climb) - even this was too steep!
```

### 5. Manageable Jumps
Jump ramps can be slightly steeper than climbs (momentum helps):
```javascript
// Good: Jump ramp with momentum
const rampAngle = Math.PI / 30; // ~6 degrees per segment OK for jumps
const rampSegments = 10;
for (let i = 0; i < rampSegments; i++) {
  addSegment({ pitchDelta: rampAngle });
}
```

### 6. Split Lanes with Gradual Transitions
```javascript
// Good: Gradual split and merge
for (let i = 0; i < 10; i++) {
  const splitFactor = i / 10;
  const lanes = [
    { offset: -8.0 * splitFactor, width: 5.0 },
    { offset: 8.0 * splitFactor, width: 5.0 }
  ];
  addSegment({ lanes });
}
```

## What Doesn't Work

### 1. Loop-de-loops
**NEVER USE LOOPS** - DO NOT use the addLoop() function under any circumstances. Loops are completely broken and will:
- Create unplayable geometry
- Cause camera issues
- Break physics collision
- Result in track sections floating in space
- Make the track impossible to complete

The addLoop() function exists in the codebase but MUST NOT BE USED.

### 2. Tight Corkscrews
Simultaneous aggressive yaw, pitch, and roll creates messy geometry:
```javascript
// BAD: Don't do this!
addSegment({ 
  yawDelta: Math.PI / 10,
  pitchDelta: -Math.PI / 20,
  rollDelta: Math.PI / 15
});
```

### 3. Abrupt Changes
Sudden direction changes create jarring transitions:
```javascript
// BAD: Instant 90-degree turn
addSegment({ yawDelta: Math.PI / 2 });
```

### 4. Excessive Banking
Banking angles over π/8 (22.5°) become difficult to navigate.

### 5. Complex Multi-Axis Rotations
Avoid changing more than two axes significantly in a single section.

## Recommended Track Elements

### 1. Simple Turns (Use these!)
```javascript
// Simple banked turn - PREFERRED
const turnSegments = 15;
const turnAngle = Math.PI / 3; // 60 degrees
for (let i = 0; i < turnSegments; i++) {
  addSegment({ yawDelta: turnAngle / turnSegments });
}
```

### 2. Basic Hills
```javascript
// Simple hill - up and down
const hillSegments = 10;
const hillAngle = Math.PI / 8;
// Up
for (let i = 0; i < hillSegments; i++) {
  addSegment({ pitchDelta: hillAngle / hillSegments });
}
// Down
for (let i = 0; i < hillSegments; i++) {
  addSegment({ pitchDelta: -hillAngle / hillSegments });
}
```

### 3. Chicane Sections
```javascript
const chicane = [
  { yaw: Math.PI / 6, segments: 8 },   // 30° right
  { yaw: -Math.PI / 3, segments: 10 }, // 60° left
  { yaw: Math.PI / 3, segments: 10 },  // 60° right
  { yaw: -Math.PI / 6, segments: 8 }   // 30° left
];
```

### 4. Jump Sequences  
```javascript
// Simple jump with gap
const rampUp = 8;
const gap = 3;
const rampDown = 8;
// Ramp up
for (let i = 0; i < rampUp; i++) {
  addSegment({ pitchDelta: (Math.PI / 6) / rampUp });
}
// Gap
for (let i = 0; i < gap; i++) {
  addSegment({ isGap: true });
}
// Landing
for (let i = 0; i < rampDown; i++) {
  addSegment({ pitchDelta: -(Math.PI / 6) / rampDown });
}
```

### 5. Big Elevation Drops (NEW!)
```javascript
// Epic canyon drop - 300 unit descent!
const dropSegments = 40;
const dropAngle = Math.PI / 3; // 60 degree descent
for (let i = 0; i < dropSegments; i++) {
  addSegment({ pitchDelta: -dropAngle / dropSegments });
}
// Level out at bottom
for (let i = 0; i < 10; i++) {
  addSegment({ pitchDelta: dropAngle / 10 });
}
// Continue at new elevation - no problem!
```

## Track Design Principles

1. **Flow**: Ensure smooth transitions between all track elements
2. **Readability**: Players should be able to see upcoming track features
3. **Recovery**: Include straight sections after challenging elements
4. **Variety**: Mix different elements but maintain coherent difficulty
5. **Testing**: Always test tracks at high speed to ensure playability

## Level Difficulty Guidelines

- **Level 1**: Basic turns (≤45°), gentle hills, single small jump (~150 segments)
- **Level 2**: Moderate turns (≤60°), moderate hills, multiple jumps, simple split paths (~200 segments)
- **Level 3**: Sharp turns (≤90°), steep hills, complex jumps, advanced split paths (~250 segments)
- **Level 4-5**: Expert tracks with precision jumps and technical sections (~300 segments MAX)

## Creating a New Level

1. Create a new file in `src/tracks/levels/`
2. Export an object with:
   - `name`: Track display name
   - `description`: Brief description
   - `difficulty`: 1-3
   - `generateTrack(addSegment, addLoop)`: Track generation function

3. Follow the segment-based building approach
4. Test thoroughly at different speeds
5. Ensure start and finish lines are set correctly

## Example Level Structure

```javascript
export default {
  name: "Track Name",
  description: "Brief description",
  difficulty: 2,
  
  generateTrack(addSegment, addLoop) {
    // IMPORTANT: Never use addLoop() - it is broken!
    // Starting straight
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // ... track elements ...
    
    // Finish line
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === 19)
      });
    }
  }
};
```

Remember: The key to good track design is smooth, predictable geometry that provides challenge through layout rather than impossible physics!

## Lessons Learned from Level Development

### Failed Designs (FIXED):
1. **Original Level 8**: Had momentum loss on climbs - FIXED with boost zones and gentler angles
2. **Original Level 9**: Ball fell back at three-split lanes - FIXED with wider lanes and boost assistance
3. **Original Level 10**: Steep angles (>90°) caused cliff-like falling - FIXED with safer descent angles

### Successful Designs:
1. **Level 1**: Easy track with improved jumping detection
2. **Level 2**: Hard difficulty with excellent design flow
3. **Levels 3-7**: Medium difficulty with fun factor and optional shortcuts
4. **Fixed Level 8**: High-speed banking with strategic boost placement
5. **Fixed Level 9**: Rhythm racing with manageable hills and wider split lanes
6. **Fixed Level 10**: Ultimate challenge with safe angles and boost-assisted climbs

### Key Takeaways:
1. **Boost zones are essential** for maintaining momentum on climbs
2. **Pitch angles over Math.PI / 60 need boost assistance**
3. **Descent angles over Math.PI / 40 can feel like cliffs**
4. **Wider lanes (6+ units) prevent falling through splits**
5. **Ground detection improved** - jumping works reliably on all track colors