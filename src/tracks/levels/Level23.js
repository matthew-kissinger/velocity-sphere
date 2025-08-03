/**
 * Level 23 - Channel 23
 * Chase the northern lights through icy canyons
 * Hard difficulty with flowing track design
 */

export default {
  name: "Channel 23",
  description: "Follow the dancing lights through frozen valleys",
  difficulty: 4,
  shader: "crystal-surface",
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Scenic start - wide valley entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // First aurora ribbon - flowing S-curves
    for (let i = 0; i < 40; i++) {
      const ribbonFlow = Math.sin(i * 0.15);
      addSegment({
        yawDelta: ribbonFlow * Math.PI / 60,
        pitchDelta: Math.cos(i * 0.1) * Math.PI / 200, // Gentle hills
        rollDelta: ribbonFlow * Math.PI / 100, // Moderate banking
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Ice bridge section - narrow but straight
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 6 }],
        isBoostPowerup: (i === 7)
      });
    }
    
    // Canyon run - winding path with walls
    const canyonTurns = [
      { angle: Math.PI / 3, segments: 20 },
      { angle: -Math.PI / 2.5, segments: 25 },
      { angle: Math.PI / 4, segments: 18 },
      { angle: -Math.PI / 3.5, segments: 22 }
    ];
    
    for (const turn of canyonTurns) {
      // Approach straight
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Banked turn
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 80
        });
      }
      
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 250,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 8 }]
        });
      }
      
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 80
        });
      }
    }
    
    // Aurora dive - descending through light curtains
    for (let i = 0; i < 30; i++) {
      const diveProgress = i / 30;
      addSegment({
        yawDelta: Math.sin(i * 0.2) * Math.PI / 80,
        pitchDelta: -Math.PI / 100, // Controlled descent
        rollDelta: Math.sin(i * 0.2) * Math.PI / 120,
        lanes: [{ offset: 0, width: 10 }], // Fixed width for performance
        isBoost: (i === 15)
      });
    }
    
    // Ice field jumps - series of gaps
    for (let jump = 0; jump < 4; jump++) {
      // Run-up
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: i > 6 ? Math.PI / 80 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Gap
      for (let i = 0; i < 2 + jump; i++) {
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: i < 4 ? -Math.PI / 60 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }],
          isBoostPowerup: (i === 6 && jump === 2)
        });
      }
    }
    
    // Final aurora spiral - chase the lights
    for (let i = 0; i < 50; i++) {
      const spiralProgress = i / 50;
      const lightChase = Math.sin(i * 0.12) * Math.cos(i * 0.08);
      
      addSegment({
        yawDelta: Math.PI / 100, // Gentle continuous turn
        pitchDelta: lightChase * Math.PI / 200,
        rollDelta: Math.PI / 150, // Mild constant bank
        lanes: [{ 
          offset: lightChase * 2, 
          width: 9 
        }],
        isBoost: (i === 25)
      });
    }
    
    // Valley exit - wide finish
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i >= 10 && i <= 15),
        isFinishLine: (i === 19)
      });
    }
  }
};