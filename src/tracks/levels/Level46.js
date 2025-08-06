/**
 * Level 46 - Power Core (COMPLETELY REDESIGNED)
 * High-speed racing through energy conduits with no impossible features
 * Features flowing turns and energy-themed sections
 */

export default {
  name: "Power Core",
  description: "Race through the pulsing underground reactor",
  difficulty: 4,
  shader: "laser-grid",
  skybox: "neon-city",
  
  generateTrack(addSegment) {
    // Approach corridor
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // SECTION 1: Energy Conduits
    // Flowing curves through power channels
    const conduitTurns = [
      { angle: Math.PI / 3, segments: 30 },
      { angle: -Math.PI / 2.5, segments: 35 },
      { angle: Math.PI / 3.5, segments: 28 },
      { angle: -Math.PI / 3, segments: 32 }
    ];
    
    for (const turn of conduitTurns) {
      // Straight approach
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Bank into turn
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Smooth power turn
      for (let i = 0; i < turn.segments; i++) {
        const progress = i / turn.segments;
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(progress * Math.PI) * Math.PI / 250,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Bank out
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // SECTION 2: Reactor Chamber
    // Large circular area around core
    for (let i = 0; i < 60; i++) {
      const chamberProgress = i / 60;
      
      // Simple circle around reactor
      addSegment({
        yawDelta: Math.PI * 2 / 60,
        pitchDelta: 0,
        rollDelta: Math.sin(chamberProgress * Math.PI * 2) * Math.PI / 80,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i > 25 && i < 30) // Speed section
      });
    }
    
    // SECTION 3: Power Distribution
    // Multiple energy pathways
    for (let i = 0; i < 50; i++) {
      if (i < 10) {
        // Split into three paths
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 9 },
            { offset: 0, width: 9 },
            { offset: 12 * factor, width: 9 }
          ]
        });
      } else if (i < 40) {
        // Three energy channels
        addSegment({
          lanes: [
            { offset: -12, width: 9 },
            { offset: 0, width: 9 },
            { offset: 12, width: 9 }
          ],
          yawDelta: Math.sin((i - 10) * 0.1) * Math.PI / 200
        });
      } else {
        // Merge channels
        const factor = 1 - (i - 40) / 10;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 9 },
            { offset: 0, width: 9 },
            { offset: 12 * factor, width: 9 }
          ]
        });
      }
    }
    
    // SECTION 4: Turbine Run
    // Fast flowing section
    for (let i = 0; i < 40; i++) {
      const turbinePhase = i / 40;
      const turbineFlow = Math.sin(turbinePhase * Math.PI * 3) * Math.PI / 100;
      
      addSegment({
        yawDelta: turbineFlow,
        pitchDelta: Math.cos(turbinePhase * Math.PI * 2) * Math.PI / 300,
        rollDelta: turbineFlow * 0.5,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i > 30 && i < 35) // Final speed burst
      });
    }
    
    // SECTION 5: Control Room Sprint
    // Final straight through control center
    for (let i = 0; i < 30; i++) {
      const finalProgress = i / 30;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 13 + finalProgress * 5 }],
        isFinishLine: (i === 29)
      });
    }
  }
};