/**
 * Level 22 - Big Air
 * Epic ski jump level - build speed and stick the landing!
 * Performance optimized with no dynamic offsets
 */

export default {
  name: "Big Air",
  description: "Launch off the ultimate ski jump and stick the landing",
  difficulty: 3,
  shader: "storm-electric",
  skybox: "storm-clouds",
  
  generateTrack(addSegment) {
    // Starting straight - build initial speed
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Pre-jump approach - gentle turns to line up
    for (let i = 0; i < 20; i++) {
      const approachCurve = Math.sin((i / 20) * Math.PI * 2) * 0.3;
      
      addSegment({
        yawDelta: approachCurve * Math.PI / 100,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Speed buildup zone - no boost needed, natural momentum
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // The jump ramp - gradual then steep
    // Gradual build-up
    for (let i = 0; i < 15; i++) {
      const rampAngle = (i / 15) * Math.PI / 40; // Gradual increase
      addSegment({
        yawDelta: 0,
        pitchDelta: rampAngle,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Steep ramp - final launch
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.PI / 25, // Steep launch angle
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // THE BIG AIR - massive gap
    for (let i = 0; i < 12; i++) {
      addSegment({ isGap: true });
    }
    
    // Landing zone - wide and forgiving
    for (let i = 0; i < 15; i++) {
      const landingAngle = i < 5 ? -Math.PI / 30 : 0; // Gentle landing slope
      addSegment({
        yawDelta: 0,
        pitchDelta: landingAngle,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 16 }] // Extra wide for easier landing
      });
    }
    
    // Post-landing flow section
    for (let i = 0; i < 25; i++) {
      const flowCurve = Math.sin((i / 25) * Math.PI * 1.5);
      
      addSegment({
        yawDelta: flowCurve * Math.PI / 80,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Double jump section - skill test
    // First jump - smaller
    for (let i = 0; i < 6; i++) {
      addSegment({
        pitchDelta: i > 3 ? Math.PI / 60 : 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    for (let i = 0; i < 3; i++) {
      addSegment({ isGap: true });
    }
    
    // Short landing
    for (let i = 0; i < 4; i++) {
      addSegment({
        pitchDelta: i < 2 ? -Math.PI / 80 : 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Second jump - bigger
    for (let i = 0; i < 8; i++) {
      addSegment({
        pitchDelta: i > 5 ? Math.PI / 45 : 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    for (let i = 0; i < 5; i++) {
      addSegment({ isGap: true });
    }
    
    // Final landing
    for (let i = 0; i < 10; i++) {
      addSegment({
        pitchDelta: i < 4 ? -Math.PI / 50 : 0,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Celebration sweeper - banked victory lap
    // Bank in
    addSegment({ rollDelta: Math.PI / 8 });
    
    // Sweeping turn
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.PI / 40,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Bank out
    addSegment({ rollDelta: -Math.PI / 8 });
    
    // Final straight to finish - with elevation gain to ensure finish line is above reset level
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 8 ? Math.PI / 120 : 0, // Gentle climb to safe elevation
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isFinishLine: (i === 14)
      });
    }
  }
};