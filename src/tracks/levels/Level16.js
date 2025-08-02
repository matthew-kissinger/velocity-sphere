/**
 * Level 16 - Cave Crystal
 * Underground crystal caverns with tight passages
 * Medium difficulty with unique underground challenges
 */

export default {
  name: "Cave Crystal",
  description: "Navigate the glowing crystal caverns deep underground",
  difficulty: 4,
  shader: "crystal-surface",
  skybox: "crystal-cavern", // Vibrant crystal cave atmosphere
  
  generateTrack(addSegment) {
    // Crystal cave entrance - exciting descent with curves
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 80,
        pitchDelta: i < 15 ? -Math.PI / 50 : -Math.PI / 100, // Clear descent, more exciting
        rollDelta: Math.sin(i * 0.1) * Math.PI / 120,
        isStartLine: (i === 0),
        isBoost: (i === 10) // Early boost for momentum
      });
    }
    
    // Tight cavern passage - narrow winding path
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.2) * Math.PI / 40, // Sinuous path
        pitchDelta: Math.cos(i * 0.15) * Math.PI / 100, // Undulating floor
        lanes: [{ offset: 0, width: 6 }] // Narrow passage
      });
    }
    
    // Crystal chamber - open area with multiple paths
    // Split into three tunnels
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 5 }, // Left tunnel
          { offset: 0, width: 6 },            // Center tunnel
          { offset: 10 * factor, width: 5 }   // Right tunnel
        ]
      });
    }
    
    // Different challenges per tunnel
    for (let i = 0; i < 35; i++) {
      if (i < 15) {
        // All tunnels descend slightly
        addSegment({
          lanes: [
            { offset: -10, width: 5 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5 }
          ],
          pitchDelta: -Math.PI / 90,
          yawDelta: Math.sin(i * 0.1) * Math.PI / 80
        });
      } else if (i < 25) {
        // Center has stalactite gaps, sides wind more
        addSegment({
          lanes: [
            { offset: -10, width: 5 },
            { offset: 0, width: 6, isGap: (i === 18 || i === 22) },
            { offset: 10, width: 5 }
          ],
          yawDelta: i % 2 ? Math.PI / 50 : -Math.PI / 50
        });
      } else {
        // All paths climb back up
        addSegment({
          lanes: [
            { offset: -10, width: 5 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5 }
          ],
          pitchDelta: Math.PI / 80,
          isBoost: (i === 25) // Boost to help climb
        });
      }
    }
    
    // Merge tunnels
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
    
    // Underground river section - following water flow
    for (let i = 0; i < 40; i++) {
      const riverFlow = Math.sin(i * 0.1) * Math.PI / 50;
      const descent = -Math.PI / 100; // Following water downhill
      
      addSegment({
        yawDelta: riverFlow,
        pitchDelta: descent,
        rollDelta: riverFlow * 0.5, // Banking with the flow
        isBoost: (i % 15 === 0) // Periodic water current boost
      });
    }
    
    // Crystal formation slalom
    const crystalGates = [
      { angle: Math.PI / 5, segments: 8 },    // 36° right
      { angle: -Math.PI / 4, segments: 10 },  // 45° left
      { angle: Math.PI / 3.5, segments: 9 },  // ~51° right
      { angle: -Math.PI / 5.5, segments: 7 }, // ~33° left
      { angle: Math.PI / 6, segments: 6 }     // 30° right
    ];
    
    for (const gate of crystalGates) {
      // Sharp turn around crystal
      for (let i = 0; i < gate.segments; i++) {
        addSegment({
          yawDelta: gate.angle / gate.segments,
          lanes: [{ offset: 0, width: 7 }] // Slightly narrow
        });
      }
      
      // Brief straight
      for (let i = 0; i < 2; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0 });
      }
    }
    
    // The Great Chamber - massive cavern with continuous descent
    // Speed-focused chamber racing
    for (let section = 0; section < 3; section++) {
      // Fast straightaway
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: -Math.PI / 120, // Gentle descent for speed
          isBoost: (i === 0) // Boost at section start
        });
      }
      
      // Thrilling drop
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 35, // Steep drop
          yawDelta: Math.sin(i * 0.2) * Math.PI / 100
        });
      }
      
      // Banking turn
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: (section % 2 ? 1 : -1) * Math.PI / 40,
          pitchDelta: i < 5 ? Math.PI / 100 : -Math.PI / 120,
          rollDelta: (section % 2 ? 1 : -1) * Math.PI / 60
        });
      }
    }
    
    // Final crystal gauntlet - precision section
    for (let i = 0; i < 30; i++) {
      const narrowFactor = Math.sin(i * 0.3);
      const width = 8 - Math.abs(narrowFactor) * 2; // Variable width
      
      addSegment({
        yawDelta: narrowFactor * Math.PI / 60,
        pitchDelta: Math.cos(i * 0.2) * Math.PI / 120,
        lanes: [{ offset: 0, width: width }]
      });
    }
    
    // Crystal rapids finale - flowing descent to exit
    for (let i = 0; i < 25; i++) {
      const flowCurve = Math.sin(i * 0.2) * Math.PI / 60;
      addSegment({
        yawDelta: flowCurve,
        pitchDelta: -Math.PI / 100, // Gentle flowing descent
        rollDelta: flowCurve * 0.5,
        isBoost: (i >= 15 && i <= 18), // Speed boost finale
        lanes: [{ offset: Math.sin(i * 0.15) * 1, width: 8 }], // Flowing path
        isFinishLine: (i === 24)
      });
    }
  }
};