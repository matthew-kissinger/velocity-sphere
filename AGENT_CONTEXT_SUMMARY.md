# 🧠 Agent Context Summary

**TL;DR for AI agents: Everything you need to generate the next circuit**

## 🎯 MISSION BRIEFING

**You are tasked with generating the next circuit (10 tracks) for Velocity Sphere, a 3D racing game. This repository is your complete context surface.**

## 📋 QUICK START CHECKLIST

### **Phase 1: Learn from Circuit Prismatic (REQUIRED)**
- [ ] Read `README.md` for meta-prompt overview
- [ ] Study `AGENT_CIRCUIT_GENERATION_GUIDE.md` for patterns
- [ ] Analyze `src/tracks/levels/Level1.js` through `Level10.js`
- [ ] Review `TRACK_DESIGN_GUIDE.md` lessons learned section

### **Phase 2: Understand Technical Constraints**
- [ ] Study `TECHNICAL_STACK_REFERENCE.md` for API details
- [ ] Review `src/tracks/TrackBuilder.js` implementation
- [ ] Understand physics limits in `src/game/Ball.js`
- [ ] Check performance monitoring in `src/ui/HUD.js`

### **Phase 3: Generate New Circuit**
- [ ] Create `src/tracks/levels/LevelX.js` through `LevelY.js` (next 10 tracks)
- [ ] Follow difficulty distribution: 1 Easy, 7 Medium, 1 Hard, 1 Extreme
- [ ] Integrate with `index.html` circuit selection system
- [ ] Test keyboard shortcuts functionality for new tracks

### **Phase 4: Quality Assurance**
- [ ] Validate all tracks complete without physics errors
- [ ] Ensure 45+ FPS performance across all tracks
- [ ] Verify UI integration works correctly
- [ ] Document design decisions in `[CIRCUIT_NAME]_DESIGN_NOTES.md`

## ⚡ CRITICAL CONSTRAINTS (NON-NEGOTIABLE)

### **Physics Limits**
```javascript
// SAFE climbing angles (ball won't slide backward)
maxClimbAngle: Math.PI / 80,  // ~2.25 degrees per segment

// SAFE descent angles (won't feel like cliffs)  
maxDescentAngle: Math.PI / 40, // ~4.5 degrees per segment

// MINIMUM lane width (prevents falling through)
minLaneWidth: 6, // units

// BOOST placement (essential before climbs)
boostBeforeClimb: true, // Always add boost before sustained climbs
```

### **Performance Requirements**
```javascript
// Segment count limits
segmentLimits: {
  easy: 80-120,     // Short and simple
  medium: 120-200,  // Balanced length
  hard: 200-250,    // Technical challenges
  extreme: 250-300  // Epic but not excessive
},

// FPS targets
fpsMinimum: 45,     // Absolute minimum
fpsTarget: 60,      // Preferred performance
```

## 🏆 PROVEN SUCCESS PATTERNS

### **From Circuit Prismatic Analysis**
```javascript
// Level 1 (Easy) - PERFECT tutorial template
- 95 segments total
- Gentle curves only (Math.PI/4 total turns)
- Small hills (Math.PI/18 max angle)
- No gaps or complex features
- ~45 second completion time

// Level 5 (Medium) - EXCELLENT innovation example  
- Strategic boost placement before jumps
- Risk/reward shortcut opportunity
- Mixed challenge types within physics limits
- ~75 second completion time

// Level 8 (Extreme) - FIXED climb assistance
- Boost zones before every climbing section
- Gentler angles (Math.PI/80) for sustained climbs
- Strategic momentum management
- Player skill + boost assistance = success
```

### **Track Element Library (Copy These Patterns)**
```javascript
// Straight with strategic boost
for (let i = 0; i < 20; i++) {
  addSegment({ 
    isBoost: i % 8 < 2 // Boost every 8 segments for 2 segments
  });
}

// Safe banked turn
for (let i = 0; i < 15; i++) {
  addSegment({
    yawDelta: Math.PI / 45,    // ~4 degrees per segment
    rollDelta: Math.PI / 60    // Subtle banking
  });
}

// Assisted climb (ESSENTIAL pattern)
for (let i = 0; i < 10; i++) {
  addSegment({
    pitchDelta: Math.PI / 80,  // Safe angle
    isBoost: i < 3             // Boost assistance at start
  });
}

// Precision jump sequence
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

// Wide split lanes (SAFE implementation)
addSegment({
  lanes: [
    { offset: -8, width: 6 }, // MINIMUM 6 units width
    { offset: 8, width: 6 }
  ],
  isBoost: true // Help maintain momentum
});
```

## 🎨 DESIGN PHILOSOPHY

### **Innovation Within Constraints**
- **DO**: Create exciting track variety using proven elements
- **DO**: Combine successful patterns in new ways
- **DO**: Focus on player flow and momentum management
- **DON'T**: Break physics limits that cause sliding/falling
- **DON'T**: Create impossible sections that require perfect execution
- **DON'T**: Exceed performance budgets (300 segments max)

### **Difficulty Progression Strategy**
```
Level 11 (Easy):    Introduce Circuit Beta gently
Levels 12-18 (Med): Explore 7 different challenge types
Level 19 (Hard):    Technical mastery test
Level 20 (Extreme): Epic finale combining best elements
```

## 🔧 IMPLEMENTATION TEMPLATE

```javascript
// Use this as starting template for each track
export default {
  name: "Descriptive Track Name",
  description: "Brief engaging description", 
  difficulty: 1-4, // 1=Easy, 2=Medium, 3=Hard, 4=Extreme
  
  generateTrack(addSegment) {
    // 1. Start line
    addSegment({ isStartLine: true });
    
    // 2. Opening straight (build speed)
    for (let i = 0; i < 15; i++) {
      addSegment({ isBoost: i < 3 });
    }
    
    // 3. Main track sections (your innovation here)
    // Use patterns from AGENT_CIRCUIT_GENERATION_GUIDE.md
    
    // 4. Final straight to finish
    for (let i = 0; i < 10; i++) {
      addSegment({ 
        isFinishLine: i === 9 
      });
    }
  }
};
```

## 📊 SUCCESS METRICS

### **Technical Validation**
- [ ] All tracks load without errors
- [ ] FPS stays above 45 throughout gameplay
- [ ] No physics glitches (falling through world)
- [ ] Memory usage remains stable
- [ ] Integration with existing UI works

### **Design Validation** 
- [ ] Difficulty progression feels natural 11→20
- [ ] Each medium track (12-18) offers unique challenge
- [ ] Track completion times within target ranges
- [ ] Boost placement enhances rather than trivializes gameplay
- [ ] Innovation respects established constraints

## 🚀 READY FOR CIRCUIT BETA GENERATION

**Everything you need is documented in this repository. Circuit Prismatic provides the successful patterns, technical constraints are clearly defined, and the implementation framework is established.**

**Your task: Generate 10 tracks that build upon this foundation while introducing engaging innovations within the proven constraints.**

**Human feedback will follow the protocol in `HUMAN_PLAYTEST_PROTOCOL.md` to guide future iterations.**

---

**Go build the next circuit! The racing community is waiting for the next evolution of Velocity Sphere.**