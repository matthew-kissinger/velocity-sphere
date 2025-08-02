# 🤖 AI Agent Circuit Generation Guide

**Comprehensive guide for autonomous circuit generation in Velocity Sphere**

## 🎯 AGENT MISSION

Generate **the next circuit (10 tracks)** that:
- Builds upon successful patterns from Circuit Prismatic
- Introduces innovative track designs within established constraints
- Maintains 60 FPS performance standards
- Provides engaging progression across difficulty levels

## 📊 CIRCUIT PRISMATIC ANALYSIS FOR PATTERN LEARNING

### Successful Track Patterns

#### **Level 1 (Easy)** - Perfect Tutorial Template
```javascript
// Key Success Factors:
- Gentle curves (Math.PI/4 total turns)
- Small hills (Math.PI/18 max angle)
- No gaps or complex features
- 95 total segments
- Completion time: ~45 seconds
```

#### **Level 2 (Hard)** - Excellent Technical Design
```javascript
// Key Success Factors:
- Split paths with risk/reward
- Moderate jumps requiring skill
- Banking in turns
- ~200 segments
- Completion time: ~75 seconds
```

#### **Levels 3-7 (Medium)** - Engaging Variety
```javascript
// Common Success Elements:
- Mix of jumps, banking, elevation changes
- Strategic boost pad placement
- 150-250 segments each
- Completion time: 50-90 seconds
- Clear visual progression cues
```

#### **Levels 8-10 (Extreme)** - Fixed Challenges
```javascript
// Lessons Learned (CRITICAL):
- Climbing angles > Math.PI/80 need boost assistance
- Split lanes must be 6+ units wide
- Descent angles > Math.PI/40 feel like cliffs
- Boost zones essential before technical sections
```

## 🧬 TRACK DNA PATTERNS

### Core Building Blocks

#### **Straight Sections**
```javascript
// Purpose: Speed building, recovery, approach setup
for (let i = 0; i < length; i++) {
  addSegment({
    yawDelta: 0,
    pitchDelta: 0,
    rollDelta: 0,
    isBoost: strategicBoostPlacement(i)
  });
}
```

#### **Gentle Turns** 
```javascript
// Purpose: Basic navigation, flow maintenance
const turnSegments = 20;
const totalAngle = Math.PI / 3; // 60 degrees max
for (let i = 0; i < turnSegments; i++) {
  addSegment({ 
    yawDelta: totalAngle / turnSegments,
    rollDelta: Math.PI / 100 // Subtle banking
  });
}
```

#### **Safe Climbs**
```javascript
// Purpose: Elevation gain without momentum loss
for (let i = 0; i < 10; i++) {
  addSegment({ 
    pitchDelta: Math.PI / 80, // SAFE ANGLE
    isBoost: i < 3 // Boost assistance at start
  });
}
```

#### **Controlled Descents**
```javascript
// Purpose: Exciting speed sections without cliff feeling
for (let i = 0; i < 15; i++) {
  addSegment({ 
    pitchDelta: -Math.PI / 50, // Safe descent
    isBoost: false // Let gravity provide speed
  });
}
```

#### **Strategic Splits**
```javascript
// Purpose: Player choice, risk/reward gameplay
addSegment({
  lanes: [
    { offset: -8, width: 6 }, // MINIMUM 6 UNITS WIDTH
    { offset: 8, width: 6 }
  ],
  isBoost: true // Help maintain momentum through split
});
```

#### **Precision Jumps**
```javascript
// Purpose: Skill-based challenges, air time excitement
// Ramp up
for (let i = 0; i < 8; i++) {
  addSegment({ pitchDelta: Math.PI / 35 });
}
// Gap
for (let i = 0; i < 3; i++) {
  addSegment({ isGap: true });
}
// Landing
for (let i = 0; i < 8; i++) {
  addSegment({ pitchDelta: -Math.PI / 35 });
}
```

## 🎮 DIFFICULTY SCALING FRAMEWORK

### Easy Tracks (1 track - intro to circuit)
```javascript
const EASY_CONSTRAINTS = {
  maxTurnAngle: Math.PI / 4,      // 45 degrees
  maxClimbAngle: Math.PI / 60,    // Very gentle
  maxDescentAngle: Math.PI / 80,  // Minimal
  maxGapSize: 2,                  // Small jumps only
  segmentCount: 80-120,           // Short tracks
  boostFrequency: 0.3             // Frequent assistance
};
```

### Medium Tracks (7 tracks - main variety)
```javascript
const MEDIUM_CONSTRAINTS = {
  maxTurnAngle: Math.PI / 2,      // 90 degrees
  maxClimbAngle: Math.PI / 50,    // Moderate with boost
  maxDescentAngle: Math.PI / 40,  // Exciting but safe
  maxGapSize: 4,                  // Skill-based jumps
  segmentCount: 120-200,          // Medium length
  boostFrequency: 0.2             // Strategic placement
};
```

### Hard Tracks (1 track - technical mastery)
```javascript
const HARD_CONSTRAINTS = {
  maxTurnAngle: Math.PI,          // 180 degrees (hairpins)
  maxClimbAngle: Math.PI / 40,    // Challenging with boost
  maxDescentAngle: Math.PI / 30,  // Intense descents
  maxGapSize: 6,                  // Precision required
  segmentCount: 200-250,          // Longer challenges
  boostFrequency: 0.15            // Earned assistance
};
```

### Extreme Tracks (1 track - circuit finale)
```javascript
const EXTREME_CONSTRAINTS = {
  maxTurnAngle: Math.PI * 1.5,    // Multi-turn sequences
  maxClimbAngle: Math.PI / 35,    // Maximum safe climb
  maxDescentAngle: Math.PI / 25,  // Thrilling descents
  maxGapSize: 8,                  // Expert-level jumps
  segmentCount: 250-300,          // Epic challenges
  boostFrequency: 0.1             // Minimal assistance
};
```

## 🚀 INNOVATION OPPORTUNITIES FOR NEW CIRCUITS

### New Track Elements (Within Constraints)
1. **Spiral Sections**: Combine yaw + pitch for corkscrew effects
2. **Rhythm Sections**: Alternating hills for flow gameplay
3. **Technical Chicanes**: Quick direction changes with banking
4. **Multi-Level Splits**: Upper/lower path choices
5. **Speed Zones**: Long straights with strategic boost placement

### Advanced Patterns
```javascript
// Example: Spiral Climb
for (let i = 0; i < 30; i++) {
  addSegment({
    yawDelta: Math.PI / 40,     // Turning
    pitchDelta: Math.PI / 120,  // Gentle climb
    rollDelta: Math.PI / 60,    // Banking
    isBoost: i % 10 === 0       // Periodic assistance
  });
}

// Example: Rhythm Hills
for (let wave = 0; wave < 5; wave++) {
  // Up
  for (let i = 0; i < 8; i++) {
    addSegment({ pitchDelta: Math.PI / 80 });
  }
  // Down
  for (let i = 0; i < 8; i++) {
    addSegment({ pitchDelta: -Math.PI / 80 });
  }
}
```

## 🔧 IMPLEMENTATION WORKFLOW

### Step 1: Track Concept
```javascript
// Define track personality
const trackConcept = {
  theme: "Spiral Mountain", // Clear vision
  difficulty: 3, // Target difficulty
  keyFeatures: ["spiral_climb", "split_descent", "technical_finish"],
  estimatedTime: 85, // Target completion time in seconds
  focusSkills: ["momentum_management", "precision_jumping"]
};
```

### Step 2: Segment Planning
```javascript
// Plan major sections
const sections = [
  { type: "intro_straight", segments: 20 },
  { type: "spiral_climb", segments: 40 },
  { type: "split_descent", segments: 30 },
  { type: "technical_chicane", segments: 25 },
  { type: "final_jump", segments: 15 },
  { type: "finish_straight", segments: 20 }
];
// Total: 150 segments (good for medium difficulty)
```

### Step 3: Implementation
```javascript
export default {
  name: "Spiral Mountain",
  description: "Technical climbing with split descent",
  difficulty: 3,
  
  generateTrack(addSegment) {
    let segmentCount = 0;
    
    // Implement each planned section
    sections.forEach(section => {
      this.buildSection(section, addSegment, segmentCount);
      segmentCount += section.segments;
    });
  },
  
  buildSection(section, addSegment, startIndex) {
    // Section-specific implementation
    switch(section.type) {
      case "spiral_climb":
        this.buildSpiralClimb(section.segments, addSegment);
        break;
      // ... other sections
    }
  }
};
```

### Step 4: Testing & Validation
```javascript
// Validation checklist
const validation = {
  physicsStable: true,        // No falling through world
  performanceGood: true,      // >45 FPS maintained
  difficultyAppropriate: true, // Matches target level
  visuallyAppealing: true,    // Fits established aesthetic
  playerProgression: true     // Clear start/finish, good flow
};
```

## 📈 PERFORMANCE OPTIMIZATION REQUIREMENTS

### Segment Count Guidelines
- **Easy**: 80-120 segments
- **Medium**: 120-200 segments  
- **Hard**: 200-250 segments
- **Extreme**: 250-300 segments (MAX)

### Physics Optimization
```javascript
// Use established patterns for performance
const optimizedSegment = {
  // Prefer simple geometry
  useComplexShapes: false,
  
  // Batch similar segments
  groupSimilarTypes: true,
  
  // Strategic boost placement
  boostPadsPerSection: 2-4,
  
  // Reasonable segment density
  maxSegmentsPerSecond: 5
};
```

## 🎯 SUCCESS METRICS

### Technical Requirements
- [ ] All tracks complete without physics errors
- [ ] FPS stays above 45 on mid-range hardware
- [ ] Memory usage remains stable
- [ ] Loading times under 3 seconds per track

### Gameplay Requirements  
- [ ] Clear difficulty progression across 10 tracks
- [ ] Completion times: 45-120 seconds per track
- [ ] Each track introduces new challenge type
- [ ] Boost placement feels intuitive and helpful
- [ ] Visual variety while maintaining coherent style

### Integration Requirements
- [ ] Circuit Beta appears in selection UI
- [ ] All keyboard shortcuts work (1-9, 0 for level 20)
- [ ] Progress tracking functions correctly
- [ ] Performance monitoring shows good metrics

---

**Agent Task**: Use this guide to generate the next circuit. Each track should build upon these established patterns while introducing innovative elements within the proven constraints. Focus on creating a coherent progression that teaches new skills while respecting the physics and performance requirements that make Circuit Prismatic successful.