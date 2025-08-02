/**
 * Level 18 - Magma Core
 * Deep earth core racing with lava flows
 * Medium difficulty with heat-based challenges
 */

export default {
  name: "Magma Core",
  description: "Race through the molten heart of the earth",
  difficulty: 4,
  shader: "lava-flow",
  skybox: "lava-storm",
  
  generateTrack(addSegment) {
    // Start at surface level - volcanic rim
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.2) * Math.PI / 100,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Lava tube entrance - winding tunnel
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 35,
        pitchDelta: Math.cos(i * 0.1) * Math.PI / 90,
        lanes: [{ offset: 0, width: 8 }] // Tube width
      });
    }
    
    // Magma chamber - multiple lava flows to avoid
    // Three parallel paths between lava flows
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 10 * factor, width: 5 }
        ]
      });
    }
    
    // Navigate between active lava flows
    for (let i = 0; i < 40; i++) {
      const lavaPattern = Math.sin(i * 0.1) * 0.5 + 0.5;
      
      if (i % 10 < 5) {
        // Lava surges - paths temporarily blocked
        addSegment({
          lanes: [
            { offset: -10, width: 5, isGap: lavaPattern > 0.7 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5, isGap: lavaPattern < 0.3 }
          ],
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120
        });
      } else {
        // Safe passages
        addSegment({
          lanes: [
            { offset: -10, width: 5 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5 }
          ],
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120,
          isBoost: (i % 10 === 7) // Heat updraft boost
        });
      }
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 10 * factor, width: 5 }
        ]
      });
    }
    
    // Geothermal vent section - periodic eruptions
    for (let vent = 0; vent < 5; vent++) {
      // Approach vent
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0
        });
      }
      
      // Vent eruption jump
      for (let i = 0; i < 6; i++) {
        addSegment({
          pitchDelta: Math.PI / 35,
          isBoost: (i === 0) // Eruption boost
        });
      }
      
      // Airborne over lava
      for (let i = 0; i < 3 + vent; i++) { // Gaps get longer
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 6; i++) {
        addSegment({ pitchDelta: -Math.PI / 35 });
      }
    }
    
    // Molten metal river - following flow
    const riverBends = [
      { angle: Math.PI / 2.5, segments: 25, descend: true },
      { angle: -Math.PI / 2, segments: 30, descend: false },
      { angle: Math.PI / 3, segments: 20, descend: true }
    ];
    
    for (const bend of riverBends) {
      for (let i = 0; i < bend.segments; i++) {
        const progress = i / bend.segments;
        addSegment({
          yawDelta: bend.angle / bend.segments,
          pitchDelta: bend.descend ? -Math.PI / 120 : Math.PI / 150,
          rollDelta: Math.sin(progress * Math.PI) * Math.PI / 40 * (bend.angle > 0 ? 1 : -1),
          isBoost: (i % 15 === 0) // Lava flow current
        });
      }
    }
    
    // Core chamber - descending spiral around magma spouts
    for (let spout = 0; spout < 4; spout++) {
      // Spiral descent around magma column
      for (let i = 0; i < 15; i++) {
        addSegment({
          yawDelta: Math.PI / 20, // Tight spiral
          pitchDelta: -Math.PI / 60, // Continuous descent
          rollDelta: Math.PI / 50, // Banking into turn
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Drop between levels
      for (let i = 0; i < 5; i++) {
        addSegment({ 
          pitchDelta: -Math.PI / 30,
          isBoost: (i === 0) // Drop boost
        });
      }
      
      // Recovery arc
      for (let i = 0; i < 5; i++) {
        addSegment({ pitchDelta: Math.PI / 60 });
      }
    }
    
    // Lava river finale - rapid descent to finish
    for (let i = 0; i < 40; i++) {
      const riverCurve = Math.sin(i * 0.15) * Math.PI / 40;
      addSegment({
        yawDelta: riverCurve,
        pitchDelta: -Math.PI / 50, // Fast flowing descent
        rollDelta: riverCurve * 0.5, // Banking with the flow
        isBoost: (i % 8 === 0), // Lava flow boosts
        lanes: [{ offset: Math.sin(i * 0.2) * 2, width: 8 }], // Flowing path
        isFinishLine: (i === 39)
      });
    }
  }
};