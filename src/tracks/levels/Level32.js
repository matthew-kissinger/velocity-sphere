/**
 * Level 32 - Sakura Spiral
 * Cherry blossom grove with ascending spiral path
 * Beautiful and flowing with petal-strewn track
 */

export default {
  name: "Sakura Spiral",
  description: "Ascend through blooming cherry blossoms",
  difficulty: 3,
  shader: "sakura-bloom",
  skybox: "sunset-vibes",
  
  generateTrack(addSegment) {
    // Entrance through blossom grove
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 15 }] // Extra wide for beauty
      });
    }
    
    // Begin gentle spiral ascent
    const spiralLevels = 3; // Three full rotations
    const segmentsPerLevel = 60;
    const totalHeight = Math.PI / 8; // Total climb angle
    
    for (let level = 0; level < spiralLevels; level++) {
      const levelProgress = level / spiralLevels;
      
      for (let i = 0; i < segmentsPerLevel; i++) {
        const segmentProgress = i / segmentsPerLevel;
        const overallProgress = (level * segmentsPerLevel + i) / (spiralLevels * segmentsPerLevel);
        
        // Spiral parameters
        const yawDelta = (Math.PI * 2) / segmentsPerLevel;
        const pitchDelta = totalHeight / (spiralLevels * segmentsPerLevel);
        
        // Width varies for interest
        const width = 12 + Math.sin(segmentProgress * Math.PI * 2) * 2;
        
        // Gentle banking on the spiral
        const rollDelta = Math.sin(segmentProgress * Math.PI * 2) * Math.PI / 80;
        
        addSegment({
          yawDelta: yawDelta,
          pitchDelta: pitchDelta,
          rollDelta: rollDelta,
          lanes: [{ offset: 0, width: width }],
          isBoost: (i % 20 === 10) // Regular boost placement
        });
      }
      
      // Platform between levels
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 20 }], // Extra wide platform
          isBoostPowerup: (level === 1 && i === 5) // Powerup on middle platform
        });
      }
    }
    
    // Summit celebration area
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 25 }], // Massive summit area
        isBoost: (i >= 5 && i <= 9) // Boost zone at summit
      });
    }
    
    // Petal fall descent - gentle winding path down
    const descentSections = [
      { angle: -Math.PI / 3, segments: 20 },
      { angle: Math.PI / 4, segments: 18 },
      { angle: -Math.PI / 3.5, segments: 22 },
      { angle: Math.PI / 2.8, segments: 24 }
    ];
    
    for (const section of descentSections) {
      // Smooth turn with descent
      for (let i = 0; i < section.segments; i++) {
        const progress = i / section.segments;
        
        addSegment({
          yawDelta: section.angle / section.segments,
          pitchDelta: -Math.PI / 200, // Much gentler descent - half the steepness
          rollDelta: (section.angle > 0 ? 1 : -1) * Math.PI / 60 * Math.sin(progress * Math.PI),
          lanes: [{ offset: 0, width: 14 }]
        });
      }
      
      // Straight section between turns
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: -Math.PI / 240, // Much gentler descent
          rollDelta: 0,
          lanes: [{ offset: 0, width: 12 }]
        });
      }
    }
    
    // Blossom tunnel finale
    for (let i = 0; i < 30; i++) {
      const tunnelProgress = i / 30;
      
      // Create gentle side-to-side motion
      const weave = Math.sin(tunnelProgress * Math.PI * 3) * Math.PI / 200;
      
      addSegment({
        yawDelta: weave,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 + tunnelProgress * 5 }], // Widening to finish
        isBoost: (i >= 20 && i <= 25), // Final boost
        isFinishLine: (i === 29)
      });
    }
  }
};