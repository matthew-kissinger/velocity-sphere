/**
 * Level 24 - Street Racer
 * High-speed street racing without dynamic offsets
 * Performance optimized and more playable
 */

export default {
  name: "Street Racer",
  description: "Race through city streets with speed and style",
  difficulty: 3,
  shader: "ocean-waves",
  skybox: "neon-city",
  
  generateTrack(addSegment) {
    // City entrance - build speed
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Street corner series - clean banking without dynamic offsets
    const streetCorners = [
      { angle: Math.PI / 4, segments: 12 },    // 45° right
      { angle: -Math.PI / 3, segments: 15 },   // 60° left
      { angle: Math.PI / 2.5, segments: 18 },  // 72° right
      { angle: -Math.PI / 4, segments: 12 }    // 45° left
    ];
    
    for (const corner of streetCorners) {
      // Approach straight
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Bank into corner
      const maxBank = Math.PI / 6; // 30° banking
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (corner.angle > 0 ? 1 : -1) * maxBank / 3
        });
      }
      
      // The corner - NO dynamic offsets, just clean racing line
      for (let i = 0; i < corner.segments; i++) {
        addSegment({
          yawDelta: corner.angle / corner.segments,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }] // Fixed offset = performance!
        });
      }
      
      // Bank out
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (corner.angle > 0 ? -1 : 1) * maxBank / 3
        });
      }
      
      // Exit straight
      for (let i = 0; i < 6; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // Highway section - high speed straight
    for (let i = 0; i < 25; i++) {
      const gentleWeave = Math.sin(i * 0.1) * Math.PI / 120;
      
      addSegment({
        yawDelta: gentleWeave,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }], // Wide highway
        isBoostPowerup: (i === 12)
      });
    }
    
    // Urban chicane - quick left-right-left
    const chicaneAngles = [
      -Math.PI / 6, Math.PI / 4, -Math.PI / 6
    ];
    
    for (const angle of chicaneAngles) {
      // Quick turn
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: angle / 8,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Recovery
      for (let i = 0; i < 4; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // Overpass climb - gentle elevation gain
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.PI / 100,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Overpass sweeper - banked curve at height
    // Bank in
    for (let i = 0; i < 4; i++) {
      addSegment({ rollDelta: Math.PI / 16 });
    }
    
    // Sweeping curve
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.PI / 40,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Bank out
    for (let i = 0; i < 4; i++) {
      addSegment({ rollDelta: -Math.PI / 16 });
    }
    
    // Bridge jump - moderate skill test
    for (let i = 0; i < 8; i++) {
      addSegment({
        pitchDelta: i > 5 ? Math.PI / 50 : 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Gap
    for (let i = 0; i < 4; i++) {
      addSegment({ isGap: true });
    }
    
    // Landing
    for (let i = 0; i < 8; i++) {
      addSegment({
        pitchDelta: i < 3 ? -Math.PI / 60 : 0,
        lanes: [{ offset: 0, width: 13 }],
        isBoost: (i === 5)
      });
    }
    
    // Downtown descent - gentle slope down
    for (let i = 0; i < 20; i++) {
      const cityFlow = Math.sin(i * 0.15) * Math.PI / 150;
      
      addSegment({
        yawDelta: cityFlow,
        pitchDelta: -Math.PI / 120,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }],
        isBoostPowerup: (i === 10)
      });
    }
    
    // Final corner complex - technical but fair
    const finalTurns = [
      { angle: Math.PI / 3, segments: 15 },   // 60° right
      { angle: -Math.PI / 2, segments: 18 }   // 90° left
    ];
    
    for (const turn of finalTurns) {
      // Bank in
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 12
        });
      }
      
      // Turn
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Bank out
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 12
        });
      }
      
      // Recovery
      for (let i = 0; i < 5; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // Victory straight - finish in style
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i >= 8 && i <= 15),
        isFinishLine: (i === 19)
      });
    }
  }
};