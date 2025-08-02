/**
 * Level 14 - Metal Forge
 * Industrial metalworks with mechanical precision
 * Medium difficulty with gear-like patterns
 */

export default {
  name: "Metal Forge",
  description: "Race through the industrial forge of steel and gears",
  difficulty: 3,
  shader: "tech-grid", // Using existing tech shader for now
  skybox: "neon-city", // Industrial atmosphere
  
  generateTrack(addSegment) {
    // Factory entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Gear mechanism section - circular patterns
    // Large gear rotation
    for (let i = 0; i < 40; i++) {
      addSegment({
        yawDelta: Math.PI / 20, // Full circle
        pitchDelta: Math.sin(i * Math.PI / 10) * Math.PI / 100, // Gear teeth
        rollDelta: i < 10 ? Math.PI / 100 : (i > 30 ? -Math.PI / 100 : 0)
      });
    }
    
    // Straight conveyor section with boost
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        isBoost: true // Conveyor belt speed
      });
    }
    
    // Piston section - rhythmic elevation changes
    for (let piston = 0; piston < 5; piston++) {
      // Up stroke
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: Math.PI / 60,
          yawDelta: piston % 2 ? Math.PI / 120 : -Math.PI / 120
        });
      }
      // Down stroke
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 60,
          yawDelta: piston % 2 ? -Math.PI / 120 : Math.PI / 120
        });
      }
    }
    
    // Assembly line split paths
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 7 },
          { offset: 8 * factor, width: 7 }
        ]
      });
    }
    
    // Parallel production lines
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [
          { offset: -8, width: 7 },
          { offset: 8, width: 7 }
        ],
        pitchDelta: i % 10 < 5 ? Math.PI / 80 : -Math.PI / 80,
        isBoost: i % 10 === 0 // Periodic boost
      });
    }
    
    // Merge at quality control
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 7 },
          { offset: 8 * factor, width: 7 }
        ]
      });
    }
    
    // Precision turn section - 90 degree turns
    const precisionTurns = [
      { angle: Math.PI / 2, segments: 12 },   // 90° right
      { angle: -Math.PI / 2, segments: 12 },  // 90° left
      { angle: Math.PI / 2, segments: 12 }    // 90° right
    ];
    
    for (const turn of precisionTurns) {
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          rollDelta: i < 4 ? (turn.angle > 0 ? Math.PI / 50 : -Math.PI / 50) : 
                    (i > 8 ? (turn.angle > 0 ? -Math.PI / 50 : Math.PI / 50) : 0)
        });
      }
      
      // Short straight between turns
      for (let i = 0; i < 5; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0 });
      }
    }
    
    // Final forge exit
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 100, // Slight downhill
        isBoost: (i >= 5 && i <= 8),
        isFinishLine: (i === 19)
      });
    }
  }
};