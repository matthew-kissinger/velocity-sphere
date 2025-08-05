/**
 * Level 35 - Cloud Temple
 * Floating temple in the clouds with ethereal pathways
 * Wide platforms connected by gentle bridges
 */

export default {
  name: "Cloud Temple",
  description: "Race through heavenly temple grounds above the clouds",
  difficulty: 4,
  shader: "cloud-surface",
  skybox: "crystal-sky",
  
  generateTrack(addSegment) {
    // Temple entrance platform
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 16 }] // Wide temple platform
      });
    }
    
    // First bridge to outer courtyard
    for (let i = 0; i < 20; i++) {
      const bridgeProgress = i / 20;
      const bridgeArch = Math.sin(bridgeProgress * Math.PI) * Math.PI / 80; // Gentle arch
      
      addSegment({
        pitchDelta: i < 10 ? bridgeArch : -bridgeArch,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Outer courtyard - figure-8 around temple spires
    const figure8Segments = 80;
    const figure8Half = figure8Segments / 2;
    
    // First loop around left spire
    for (let i = 0; i < figure8Half; i++) {
      const progress = i / figure8Half;
      const angle = Math.PI * 2 * progress;
      
      addSegment({
        yawDelta: Math.PI * 2 / figure8Half,
        pitchDelta: Math.sin(angle) * Math.PI / 200, // Gentle wave
        rollDelta: Math.sin(angle) * Math.PI / 60, // Soft banking
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i === figure8Half / 2)
      });
    }
    
    // Crossover section
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 5 ? Math.PI / 200 : -Math.PI / 200, // Small hill
        lanes: [{ offset: 0, width: 16 }]
      });
    }
    
    // Second loop around right spire
    for (let i = 0; i < figure8Half; i++) {
      const progress = i / figure8Half;
      const angle = Math.PI * 2 * progress;
      
      addSegment({
        yawDelta: -Math.PI * 2 / figure8Half, // Opposite direction
        pitchDelta: Math.sin(angle) * Math.PI / 200,
        rollDelta: -Math.sin(angle) * Math.PI / 60,
        lanes: [{ offset: 0, width: 14 }],
        isBoostPowerup: (i === figure8Half / 2)
      });
    }
    
    // Sacred garden section - multiple peaceful paths
    for (let i = 0; i < 50; i++) {
      if (i < 8) {
        // Split into garden paths
        const factor = i / 8;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12 * factor, width: 10 }
          ]
        });
      } else if (i < 42) {
        // Three paths through gardens
        const gardenProgress = (i - 8) / 34;
        const gentleCurve = Math.sin(gardenProgress * Math.PI * 2) * Math.PI / 200;
        
        addSegment({
          lanes: [
            { offset: -12, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12, width: 10 }
          ],
          yawDelta: gentleCurve,
          pitchDelta: Math.sin(gardenProgress * Math.PI * 3) * Math.PI / 300
        });
      } else {
        // Merge garden paths
        const factor = 1 - (i - 42) / 8;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12 * factor, width: 10 }
          ]
        });
      }
    }
    
    // Inner sanctum approach - climbing to main temple
    for (let i = 0; i < 25; i++) {
      const climbProgress = i / 25;
      
      addSegment({
        pitchDelta: Math.PI / 120, // Steady climb
        yawDelta: Math.sin(climbProgress * Math.PI) * Math.PI / 150, // Slight weave
        lanes: [{ offset: 0, width: 15 }],
        isBoost: (i >= 10 && i <= 14)
      });
    }
    
    // Temple summit - wide ceremonial platform
    for (let i = 0; i < 20; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 25 }], // Massive platform
        isBoost: (i === 10)
      });
    }
    
    // Heavenly descent - spiraling down around temple
    const spiralSegments = 60;
    for (let i = 0; i < spiralSegments; i++) {
      const spiralProgress = i / spiralSegments;
      
      addSegment({
        yawDelta: Math.PI * 3 / spiralSegments, // 1.5 rotations
        pitchDelta: -Math.PI / 100, // Gradual descent
        rollDelta: Math.PI / 40 * Math.sin(spiralProgress * Math.PI), // Banking variation
        lanes: [{ offset: 0, width: 12 + Math.sin(spiralProgress * Math.PI * 2) * 2 }]
      });
    }
    
    // Cloud bridge finale
    for (let i = 0; i < 30; i++) {
      const finalProgress = i / 30;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 + finalProgress * 6 }], // Expanding to finish
        isBoost: (i >= 20 && i <= 25),
        isFinishLine: (i === 29)
      });
    }
  }
};