/**
 * Level 18 - Magma Core
 * Deep earth core racing with lava flows
 * EXTREME difficulty with advanced movement techniques required
 */

export default {
  name: "Magma Core",
  description: "Race through the molten heart of the earth",
  difficulty: 6, // Moved to extreme difficulty
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
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120
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
          // No boost needed - natural momentum from jump
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
          isBoost: (i === 10 && bend.angle > 0) // Only boost on right turns for path choice
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
          // Natural drop momentum
        });
      }
      
      // Recovery arc
      for (let i = 0; i < 5; i++) {
        addSegment({ pitchDelta: Math.PI / 60 });
      }
    }
    
    // Lava river finale - challenging but fair descent
    for (let i = 0; i < 30; i++) {
      const riverCurve = Math.sin(i * 0.15) * Math.PI / 45;
      addSegment({
        yawDelta: riverCurve,
        pitchDelta: -Math.PI / 60, // More manageable descent
        rollDelta: riverCurve * 0.4, // Less extreme banking
        isBoost: (i === 15), // Single strategic boost mid-section
        lanes: [{ offset: Math.sin(i * 0.2) * 1.5, width: 8 }], // Slightly less variation
      });
    }
    
    // Final approach - level out for finish
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 5 ? -Math.PI / 100 : 0, // Gentle level out
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }], // Wider for finish
        isBoost: (i >= 5 && i <= 10), // Final boost
        isFinishLine: (i === 14)
      });
    }
  }
};