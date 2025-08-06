/**
 * Level 39 - Floating Gardens (COMPLETELY REDESIGNED)
 * Peaceful garden terraces with gentle ramps and no corkscrews
 * Beautiful flowing track through multiple garden levels
 */

export default {
  name: "Floating Gardens",
  description: "Explore terraced gardens floating among the clouds",
  difficulty: 6,
  shader: "zen-garden",
  skybox: "sunset-vibes",
  
  generateTrack(addSegment) {
    // Garden entrance terrace
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 16 }]
      });
    }
    
    // SECTION 1: Rose Garden
    // Flowing curves through rose beds
    const roseGardenTurns = [
      { angle: Math.PI / 4, segments: 30 },
      { angle: -Math.PI / 3, segments: 35 },
      { angle: Math.PI / 3.5, segments: 28 },
      { angle: -Math.PI / 4.5, segments: 25 }
    ];
    
    for (const turn of roseGardenTurns) {
      // Approach path
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
      
      // Gentle banking entry
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 120,
          lanes: [{ offset: 0, width: 13 }]
        });
      }
      
      // Smooth garden turn
      for (let i = 0; i < turn.segments; i++) {
        const progress = i / turn.segments;
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(progress * Math.PI) * Math.PI / 300,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 12 }]
        });
      }
      
      // Banking exit
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 120,
          lanes: [{ offset: 0, width: 13 }]
        });
      }
    }
    
    // SECTION 2: Water Garden Bridge
    // Gentle ramp to second level
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 200,
        pitchDelta: Math.PI / 200, // Gentle climb
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i > 12 && i < 16) // Help with climb
      });
    }
    
    // Water garden terrace - multiple peaceful paths
    for (let i = 0; i < 50; i++) {
      if (i < 10) {
        // Split around fountain
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12 * factor, width: 10 }
          ]
        });
      } else if (i < 40) {
        // Three parallel paths
        const waterPhase = (i - 10) / 30;
        addSegment({
          lanes: [
            { offset: -12, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12, width: 10 }
          ],
          yawDelta: Math.sin(waterPhase * Math.PI * 2) * Math.PI / 250,
          pitchDelta: 0
        });
      } else {
        // Merge paths
        const factor = 1 - (i - 40) / 10;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 10 },
            { offset: 0, width: 10 },
            { offset: 12 * factor, width: 10 }
          ]
        });
      }
    }
    
    // SECTION 3: Bamboo Grove
    // Winding path through bamboo
    for (let i = 0; i < 40; i++) {
      const grovePhase = i / 40;
      const grovePath = Math.sin(grovePhase * Math.PI * 3) * Math.PI / 100;
      
      addSegment({
        yawDelta: grovePath,
        pitchDelta: Math.cos(grovePhase * Math.PI * 2) * Math.PI / 300,
        rollDelta: grovePath * 0.5,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // SECTION 4: Meditation Plaza
    // Large circular plaza
    for (let i = 0; i < 50; i++) {
      const plazaProgress = i / 50;
      
      addSegment({
        yawDelta: Math.PI * 2 / 50, // Full circle
        pitchDelta: 0,
        rollDelta: Math.sin(plazaProgress * Math.PI * 2) * Math.PI / 100,
        lanes: [{ offset: 0, width: 18 }]
      });
    }
    
    // SECTION 5: Cherry Blossom Descent
    // Gentle descent through cherry trees
    for (let i = 0; i < 60; i++) {
      const descentPhase = i / 60;
      const blossomWeave = Math.sin(descentPhase * Math.PI * 4) * Math.PI / 120;
      
      addSegment({
        yawDelta: blossomWeave,
        pitchDelta: -Math.PI / 250, // Very gentle descent
        rollDelta: blossomWeave * 0.4,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i > 40 && i < 45) // Speed boost near end
      });
    }
    
    // SECTION 6: Garden Finale
    // Wide finish area
    for (let i = 0; i < 30; i++) {
      const finaleProgress = i / 30;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 + finaleProgress * 10 }],
        isFinishLine: (i === 29)
      });
    }
  }
};