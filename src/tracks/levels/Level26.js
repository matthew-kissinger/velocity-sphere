/**
 * Level 26 - Time Warp
 * Temporal distortions with HEAVILY optimized design
 * Reduced segments and removed unnecessary roll changes for 60+ FPS
 */

export default {
  name: "Time Warp",
  description: "Navigate through temporal distortions",
  difficulty: 5,
  shader: "matrix-rain",
  skybox: "space-deep",
  
  generateTrack(addSegment) {
    // Temporal entry - stable start
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Time distortion waves - OPTIMIZED: fewer segments, no roll
    for (let i = 0; i < 15; i++) {
      const timeWave = Math.sin(i * 0.24) * 0.5;
      
      addSegment({
        yawDelta: timeWave * Math.PI / 90,
        pitchDelta: Math.cos(i * 0.3) * Math.PI / 150,
        rollDelta: 0, // REMOVED roll for performance
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    // Chronos turn 1 - OPTIMIZED: single banked segment
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: Math.PI / 12 });
    }
    
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: Math.PI / 20,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: -Math.PI / 12 });
    }
    
    // Stabilization straight
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Time skip section - simple gaps
    for (let skip = 0; skip < 2; skip++) {
      // Approach
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: i > 5 ? Math.PI / 80 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Gap
      for (let i = 0; i < 3 + skip; i++) {
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 6; i++) {
        addSegment({
          pitchDelta: i < 3 ? -Math.PI / 60 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
    }
    
    // Chronos turn 2 - OPTIMIZED: fewer segments
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: -Math.PI / 10 });
    }
    
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: -Math.PI / 24,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: Math.PI / 10 });
    }
    
    // Temporal acceleration zone
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Temporal cascade - HEAVILY OPTIMIZED
    for (let cascade = 0; cascade < 2; cascade++) { // Reduced from 3 to 2
      const direction = cascade % 2 === 0 ? 1 : -1;
      
      // Turn with elevation change - fewer segments
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: direction * Math.PI / 27,
          pitchDelta: -Math.PI / 120,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }],
          isBoost: (i >= 5) // Speed pads for steep sections
        });
      }
      
      // Recovery
      for (let i = 0; i < 3; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          isBoost: (i === 0) // Extra boost after descent
        });
      }
    }
    
    // Chronos turn 3 - OPTIMIZED sweeping right
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: Math.PI / 10 });
    }
    
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: Math.PI / 30,
        pitchDelta: 0, // Removed sin calculation
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    for (let i = 0; i < 2; i++) {
      addSegment({ rollDelta: -Math.PI / 10 });
    }
    
    // Time dilation straight
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Final time spiral - HEAVILY OPTIMIZED
    for (let i = 0; i < 20; i++) {
      const spiralProgress = i / 20;
      const spiralRadius = 1 - spiralProgress * 0.3;
      
      addSegment({
        yawDelta: Math.PI / 15 * spiralRadius,
        pitchDelta: -Math.PI / 200,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }], // Fixed width for performance
        isBoost: (i > 10 && i < 15) // Speed pads for spiral descent
      });
    }
    
    // Temporal stabilization
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Time warp finish
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isFinishLine: (i === 19)
      });
    }
  }
};