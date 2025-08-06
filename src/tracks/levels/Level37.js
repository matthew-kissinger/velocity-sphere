/**
 * Level 37 - Crystal Cavern Zen (COMPLETELY REDESIGNED)
 * Peaceful crystal cave with gentle curves and no inversions
 * Wide paths through luminous formations
 */

export default {
  name: "Crystal Cavern Zen",
  description: "Glide through serene crystal formations",
  difficulty: 5,
  shader: "crystal-surface",
  skybox: "crystal-cavern",
  
  generateTrack(addSegment) {
    // Cave entrance
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // SECTION 1: Crystal Gallery
    // Wide paths between crystal formations
    const galleryTurns = [
      { angle: Math.PI / 3.5, segments: 30 },
      { angle: -Math.PI / 2.5, segments: 35 },
      { angle: Math.PI / 3, segments: 28 },
      { angle: -Math.PI / 2.8, segments: 32 }
    ];
    
    for (const turn of galleryTurns) {
      // Straight approach
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 15 }]
        });
      }
      
      // Gentle banking entry
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 120,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
      
      // Smooth turn through crystals
      for (let i = 0; i < turn.segments; i++) {
        const progress = i / turn.segments;
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(progress * Math.PI) * Math.PI / 300,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 13 }]
        });
      }
      
      // Banking exit
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 120,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
    }
    
    // SECTION 2: Reflection Pool
    // Wide peaceful section
    for (let i = 0; i < 40; i++) {
      const poolPhase = i / 40;
      
      addSegment({
        yawDelta: Math.sin(poolPhase * Math.PI * 2) * Math.PI / 200,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 20 }]
      });
    }
    
    // SECTION 3: Crystal Rapids
    // Flowing section with gentle waves
    for (let i = 0; i < 50; i++) {
      const rapidPhase = i / 50;
      const rapidFlow = Math.sin(rapidPhase * Math.PI * 4) * Math.PI / 100;
      
      addSegment({
        yawDelta: rapidFlow,
        pitchDelta: Math.cos(rapidPhase * Math.PI * 3) * Math.PI / 250,
        rollDelta: rapidFlow * 0.4, // Very mild banking
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i > 20 && i < 25) // Speed section
      });
    }
    
    // SECTION 4: Geode Chamber
    // Large open area with circular path
    for (let i = 0; i < 60; i++) {
      const chamberProgress = i / 60;
      
      // Simple circular path
      addSegment({
        yawDelta: Math.PI * 2 / 60, // Full circle
        pitchDelta: Math.sin(chamberProgress * Math.PI * 2) * Math.PI / 200,
        rollDelta: Math.PI / 100 * Math.sin(chamberProgress * Math.PI * 2),
        lanes: [{ offset: 0, width: 16 }]
      });
    }
    
    // SECTION 5: Crystal Climb
    // Gentle ascent to surface
    for (let i = 0; i < 40; i++) {
      const climbProgress = i / 40;
      
      addSegment({
        yawDelta: Math.sin(climbProgress * Math.PI * 2) * Math.PI / 150,
        pitchDelta: Math.PI / 180, // Steady gentle climb
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i > 25 && i < 30) // Help with climb
      });
    }
    
    // SECTION 6: Crystal Field Finale
    // Wide open finish area
    for (let i = 0; i < 30; i++) {
      const finaleProgress = i / 30;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 + finaleProgress * 8 }],
        isFinishLine: (i === 29)
      });
    }
  }
};