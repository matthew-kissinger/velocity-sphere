/**
 * Level 40 - Harmony Circuit
 * The ultimate zen racing experience combining all circuit elements
 * Perfect flow with multiple equally viable paths
 */

export default {
  name: "Harmony Circuit",
  description: "Find perfect balance in the ultimate tranquil race",
  difficulty: 6,
  shader: "rainbow-flow",
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Grand entrance - wide ceremonial start
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 20 }] // Extra wide start
      });
    }
    
    // The Flow Section - perfect racing rhythm
    const flowCurves = [
      { angle: Math.PI / 3, segments: 30, bank: Math.PI / 40 },
      { angle: -Math.PI / 2, segments: 35, bank: -Math.PI / 40 },
      { angle: Math.PI / 2.5, segments: 28, bank: Math.PI / 45 },
      { angle: -Math.PI / 3, segments: 25, bank: -Math.PI / 45 }
    ];
    
    for (const curve of flowCurves) {
      // Smooth banking entry
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: curve.bank / 5,
          lanes: [{ offset: 0, width: 16 }]
        });
      }
      
      // Perfect curve execution
      for (let i = 0; i < curve.segments; i++) {
        const progress = i / curve.segments;
        const widthFlow = 15 + Math.sin(progress * Math.PI) * 3;
        
        addSegment({
          yawDelta: curve.angle / curve.segments,
          pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 300,
          lanes: [{ offset: 0, width: widthFlow }],
          isBoost: (i === Math.floor(curve.segments / 2))
        });
      }
      
      // Smooth banking exit
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: -curve.bank / 5,
          lanes: [{ offset: 0, width: 16 }]
        });
      }
      
      // Flow connector
      for (let i = 0; i < 10; i++) {
        addSegment({
          lanes: [{ offset: 0, width: 15 }]
        });
      }
    }
    
    // The Choice Garden - four equal paths
    for (let i = 0; i < 70; i++) {
      if (i < 10) {
        // Graceful four-way split
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -18 * factor, width: 10 },
            { offset: -6 * factor, width: 10 },
            { offset: 6 * factor, width: 10 },
            { offset: 18 * factor, width: 10 }
          ]
        });
      } else if (i < 60) {
        // Four harmonious paths
        const pathProgress = (i - 10) / 50;
        const wave = Math.sin(pathProgress * Math.PI * 2);
        
        addSegment({
          lanes: [
            { offset: -18 + wave * 2, width: 10 }, // Outer left
            { offset: -6 + wave, width: 10 },      // Inner left
            { offset: 6 - wave, width: 10 },       // Inner right
            { offset: 18 - wave * 2, width: 10 }   // Outer right
          ],
          yawDelta: Math.sin(pathProgress * Math.PI * 3) * Math.PI / 200,
          pitchDelta: Math.cos(pathProgress * Math.PI * 2) * Math.PI / 400,
          isBoostPowerup: (i === 35) // Center paths converge here
        });
      } else {
        // Graceful merge
        const factor = 1 - (i - 60) / 10;
        addSegment({
          lanes: [
            { offset: -18 * factor, width: 10 },
            { offset: -6 * factor, width: 10 },
            { offset: 6 * factor, width: 10 },
            { offset: 18 * factor, width: 10 }
          ]
        });
      }
    }
    
    // The Meditation Spiral - ascending double helix
    const helixSegments = 60;
    for (let i = 0; i < helixSegments; i++) {
      const helixProgress = i / helixSegments;
      const helixAngle = Math.PI * 3 * helixProgress; // 1.5 rotations
      
      // Create double helix with elevation
      if (i % 2 === 0) {
        // Main path
        addSegment({
          yawDelta: Math.PI * 3 / helixSegments,
          pitchDelta: Math.PI / 150, // Gentle climb
          rollDelta: Math.sin(helixAngle) * Math.PI / 60,
          lanes: [{ offset: 0, width: 14 }]
        });
      } else {
        // Crossing paths
        addSegment({
          yawDelta: Math.PI * 3 / helixSegments,
          pitchDelta: Math.PI / 150,
          rollDelta: Math.sin(helixAngle) * Math.PI / 60,
          lanes: [
            { offset: -8, width: 10 },
            { offset: 8, width: 10 }
          ]
        });
      }
    }
    
    // The Harmony Platform - central gathering
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 30 }], // Massive platform
        isBoost: (i >= 10 && i <= 15)
      });
    }
    
    // The Balance Descent - perfect flow down
    const descentFlow = [
      { curve: Math.PI / 4, length: 25 },
      { straight: 15 },
      { curve: -Math.PI / 3, length: 30 },
      { straight: 10 },
      { curve: Math.PI / 5, length: 20 }
    ];
    
    for (const section of descentFlow) {
      if (section.straight) {
        for (let i = 0; i < section.straight; i++) {
          addSegment({
            pitchDelta: -Math.PI / 200,
            lanes: [{ offset: 0, width: 16 }],
            isBoost: (i === Math.floor(section.straight / 2))
          });
        }
      } else {
        for (let i = 0; i < section.length; i++) {
          const progress = i / section.length;
          
          addSegment({
            yawDelta: section.curve / section.length,
            pitchDelta: -Math.PI / 180,
            rollDelta: (section.curve > 0 ? 1 : -1) * Math.PI / 70 * Math.sin(progress * Math.PI),
            lanes: [{ offset: 0, width: 15 + Math.sin(progress * Math.PI) * 2 }]
          });
        }
      }
    }
    
    // The Unity Finale - all paths become one
    for (let i = 0; i < 40; i++) {
      const finaleProgress = i / 40;
      
      // Create expanding lotus pattern
      const lotusWidth = 18 + finaleProgress * 12 + Math.sin(finaleProgress * Math.PI * 4) * 2;
      
      addSegment({
        yawDelta: Math.sin(finaleProgress * Math.PI * 2) * Math.PI / 300,
        pitchDelta: -Math.sin(finaleProgress * Math.PI) * Math.PI / 400,
        lanes: [{ offset: 0, width: lotusWidth }],
        isBoost: (i >= 30 && i <= 35),
        isFinishLine: (i === 39)
      });
    }
  }
};