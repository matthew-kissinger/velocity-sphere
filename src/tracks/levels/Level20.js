/**
 * Level 20 - Elemental Nexus (COMPLETELY REDESIGNED)
 * The ultimate test combining all elements in a logical progression
 * Extreme difficulty but fair and achievable
 */

export default {
  name: "Elemental Nexus",
  description: "Master all elements in the ultimate racing crucible",
  difficulty: 6,
  shader: "rainbow-flow", 
  skybox: "space-deep",
  
  generateTrack(addSegment) {
    // Grand entrance - epic start
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }] // Wide grand start
      });
    }
    
    // SECTION 1: Fire & Ice Duality
    // Split path - choose fire (left) or ice (right)
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -12 * factor, width: 8 }, // Fire path
          { offset: 12 * factor, width: 8 }   // Ice path
        ]
      });
    }
    
    // Parallel elemental challenges
    for (let i = 0; i < 40; i++) {
      if (i < 20) {
        // Fire path: flowing lava curves, Ice path: slippery straights
        addSegment({
          lanes: [
            { offset: -12, width: 8 }, // Fire
            { offset: 12, width: 8 }    // Ice
          ],
          yawDelta: i % 4 < 2 ? Math.PI / 50 : -Math.PI / 50, // Fire curves
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120, // Both undulate
          // No boost needed - path choice is enough
        });
      } else {
        // Converging paths
        const convergeFactor = 1 - ((i - 20) / 20);
        addSegment({
          lanes: [
            { offset: -12 * convergeFactor, width: 8 },
            { offset: 12 * convergeFactor, width: 8 }
          ],
          pitchDelta: -Math.PI / 100 // Gentle descent
        });
      }
    }
    
    // SECTION 2: Wind Serpentine
    // Flowing S-curves through wind currents
    const windSections = [
      { angle: Math.PI / 2, segments: 25 },
      { angle: -Math.PI / 1.8, segments: 30 },
      { angle: Math.PI / 2.2, segments: 22 },
      { angle: -Math.PI / 2.5, segments: 20 }
    ];
    
    for (const section of windSections) {
      // Bank into turn
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (section.angle > 0 ? 1 : -1) * Math.PI / 40,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Execute flowing turn
      for (let i = 0; i < section.segments; i++) {
        const progress = i / section.segments;
        addSegment({
          yawDelta: section.angle / section.segments,
          pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 150,
          rollDelta: Math.sin(progress * Math.PI) * Math.PI / 60 * (section.angle > 0 ? 1 : -1),
          lanes: [{ offset: 0, width: 9 }],
          // Natural flow through curves
        });
      }
      
      // Exit bank
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (section.angle > 0 ? -1 : 1) * Math.PI / 40,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // SECTION 3: Earth Ascent
    // Climbing mountain switchbacks
    for (let switchback = 0; switchback < 4; switchback++) {
      // Climb approach
      for (let i = 0; i < 15; i++) {
        addSegment({
          pitchDelta: Math.PI / 90, // Moderate climb
          yawDelta: 0,
          lanes: [{ offset: 0, width: 8 }],
          // Momentum from previous section
        });
      }
      
      // Hairpin turn
      const turnDir = switchback % 2 ? 1 : -1;
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: turnDir * Math.PI / 12, // 180° turn
          pitchDelta: 0,
          rollDelta: turnDir * Math.PI / 30,
          lanes: [{ offset: 0, width: 10 }] // Wider for the turn
        });
      }
    }
    
    // SECTION 4: Lightning Sprint
    // High-speed zigzag through energy field
    for (let i = 0; i < 50; i++) {
      const zigzag = Math.floor(i / 5) % 2 ? 1 : -1;
      addSegment({
        yawDelta: zigzag * Math.PI / 60,
        pitchDelta: -Math.PI / 200, // Slight descent for speed
        rollDelta: zigzag * Math.PI / 80,
        lanes: [{ offset: 0, width: 11 }],
        // High speed section - no boosts needed
      });
    }
    
    // SECTION 5: Void Drop
    // Epic controlled descent through space
    for (let i = 0; i < 30; i++) {
      const spiralProgress = i / 30;
      addSegment({
        yawDelta: Math.PI / 40, // Gentle spiral
        pitchDelta: -Math.PI / 35 - (spiralProgress * Math.PI / 100), // Accelerating descent
        rollDelta: Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }], // Fixed width for performance
        // Gravity provides the speed
      });
    }
    
    // SECTION 6: Elemental Harmony
    // All elements combined - the final test
    for (let i = 0; i < 40; i++) {
      // Removed unnecessary bounce pads
      
      // Varied geometry combining all previous elements
      const phase = i / 40;
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 50,
        pitchDelta: Math.cos(i * 0.15) * Math.PI / 100,
        rollDelta: Math.sin(i * 0.2) * Math.PI / 120,
        lanes: [{ 
          offset: 0, 
          width: 11
        }],
        // Natural flow
      });
    }
    
    // Grand Finale - victory runway
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 }], // Extra wide victory lane
        isBoost: (i === 12), // Single victory boost
        isFinishLine: (i === 19)
      });
    }
  }
};