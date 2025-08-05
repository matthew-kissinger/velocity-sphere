/**
 * Level 39 - Floating Gardens
 * Terraced gardens in the sky with multiple levels
 * Gentle ramps between beautiful garden platforms
 */

export default {
  name: "Floating Gardens",
  description: "Explore terraced gardens floating among the clouds",
  difficulty: 6,
  shader: "zen-garden", // Changed to zen garden shader
  skybox: "sunset-vibes",
  
  generateTrack(addSegment) {
    // Garden entrance terrace
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 15 }]
      });
    }
    
    // First garden terrace - rose garden circular path
    const roseGardenSegments = 45;
    for (let i = 0; i < roseGardenSegments; i++) {
      const gardenProgress = i / roseGardenSegments;
      
      addSegment({
        yawDelta: (Math.PI * 1.5) / roseGardenSegments, // 270 degree arc
        pitchDelta: 0,
        rollDelta: Math.sin(gardenProgress * Math.PI) * Math.PI / 80,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i === Math.floor(roseGardenSegments / 2))
      });
    }
    
    // Gentle ramp to second terrace
    for (let i = 0; i < 18; i++) {
      const rampProgress = i / 18;
      
      addSegment({
        pitchDelta: Math.PI / 120, // Gentle climb
        yawDelta: Math.sin(rampProgress * Math.PI) * Math.PI / 200, // Slight curve
        lanes: [{ offset: 0, width: 12 + Math.sin(rampProgress * Math.PI) * 2 }]
      });
    }
    
    // Second terrace - water garden with split paths
    for (let i = 0; i < 50; i++) {
      if (i < 8) {
        // Split around fountain
        const factor = i / 8;
        addSegment({
          lanes: [
            { offset: -11 * factor, width: 10 },
            { offset: 11 * factor, width: 10 }
          ]
        });
      } else if (i < 42) {
        // Paths around water features
        const waterProgress = (i - 8) / 34;
        const flowPattern = Math.sin(waterProgress * Math.PI * 2) * Math.PI / 180;
        
        addSegment({
          lanes: [
            { offset: -11, width: 10 },
            { offset: 11, width: 10 }
          ],
          yawDelta: flowPattern,
          pitchDelta: Math.sin(waterProgress * Math.PI * 3) * Math.PI / 400,
          isBoostPowerup: (i === 25) // Fountain center powerup
        });
      } else {
        // Merge paths
        const factor = 1 - (i - 42) / 8;
        addSegment({
          lanes: [
            { offset: -11 * factor, width: 10 },
            { offset: 11 * factor, width: 10 }
          ]
        });
      }
    }
    
    // Spiral ramp to third terrace - herb garden
    const spiralRampSegments = 35;
    for (let i = 0; i < spiralRampSegments; i++) {
      const spiralProgress = i / spiralRampSegments;
      
      addSegment({
        yawDelta: Math.PI / spiralRampSegments, // Half rotation while climbing
        pitchDelta: Math.PI / 100,
        rollDelta: Math.PI / 60, // Gentle banking
        lanes: [{ offset: 0, width: 13 }]
      });
    }
    
    // Third terrace - herb garden maze (simplified)
    const mazePattern = [
      { turn: Math.PI / 3, length: 12 },
      { turn: -Math.PI / 2, length: 15 },
      { turn: Math.PI / 2, length: 10 },
      { turn: -Math.PI / 3, length: 12 },
      { turn: Math.PI / 4, length: 8 }
    ];
    
    for (const section of mazePattern) {
      // Approach turn
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.turn > 0 ? 1 : -1) * Math.PI / 90,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Execute turn
      for (let i = 0; i < section.length; i++) {
        addSegment({
          yawDelta: section.turn / section.length,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Exit turn
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.turn > 0 ? -1 : 1) * Math.PI / 90,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Short straight
      for (let i = 0; i < 5; i++) {
        addSegment({
          lanes: [{ offset: 0, width: 12 }],
          isBoost: (i === 2)
        });
      }
    }
    
    // Bridge to central fountain plaza
    for (let i = 0; i < 20; i++) {
      const bridgeProgress = i / 20;
      const bridgeArch = Math.sin(bridgeProgress * Math.PI) * Math.PI / 150;
      
      addSegment({
        pitchDelta: i < 10 ? bridgeArch : -bridgeArch,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Central fountain plaza - large circular area
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.PI * 2 / 30, // Full circle
        lanes: [{ offset: 0, width: 20 }], // Very wide plaza
        isBoost: (i >= 10 && i <= 15)
      });
    }
    
    // Final descent through flower cascades
    for (let i = 0; i < 40; i++) {
      const descentProgress = i / 40;
      const cascadeCurve = Math.sin(descentProgress * Math.PI * 2.5) * Math.PI / 80;
      
      addSegment({
        yawDelta: cascadeCurve,
        pitchDelta: -Math.PI / 120, // Gentle continuous descent
        rollDelta: cascadeCurve * 0.5,
        lanes: [{ offset: 0, width: 13 + descentProgress * 7 }], // Widening
        isBoost: (i >= 30 && i <= 35),
        isFinishLine: (i === 39)
      });
    }
  }
};