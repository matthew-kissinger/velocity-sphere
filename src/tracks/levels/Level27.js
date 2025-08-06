/**
 * Level 27 - Ice Canyon (COMPLETELY REDESIGNED)
 * Flowing ice canyon racing with proper banking and no corkscrews
 * Hard difficulty with challenging but fair turns
 */

export default {
  name: "Ice Canyon",
  description: "Navigate frozen canyons and ice bridges at high speed",
  difficulty: 5,
  shader: "ice-crystal",
  skybox: "arctic-night",
  
  generateTrack(addSegment) {
    // Ice canyon entrance - wide starting area
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // SECTION 1: Frozen Valley Run
    // Flowing S-curves through ice formations
    const valleyTurns = [
      { angle: Math.PI / 3, segments: 35 },
      { angle: -Math.PI / 2.5, segments: 40 },
      { angle: Math.PI / 2.8, segments: 32 },
      { angle: -Math.PI / 3.5, segments: 28 }
    ];
    
    for (const turn of valleyTurns) {
      // Approach straight
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 12 }]
        });
      }
      
      // Gentle banking entry
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Smooth turn
      for (let i = 0; i < turn.segments; i++) {
        const progress = i / turn.segments;
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(progress * Math.PI) * Math.PI / 200,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Banking exit
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
    }
    
    // SECTION 2: Ice Bridge Crossing
    // Elevated ice bridge with gentle curves
    for (let i = 0; i < 15; i++) {
      addSegment({
        pitchDelta: Math.PI / 150, // Gentle climb
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Bridge section with mild weaving
    for (let i = 0; i < 40; i++) {
      const bridgePhase = i / 40;
      const bridgeWeave = Math.sin(bridgePhase * Math.PI * 2) * Math.PI / 150;
      
      addSegment({
        yawDelta: bridgeWeave,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    // Descent from bridge
    for (let i = 0; i < 15; i++) {
      addSegment({
        pitchDelta: -Math.PI / 150,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // SECTION 3: Frozen Rapids
    // Fast flowing section with gentle curves
    for (let i = 0; i < 60; i++) {
      const rapidsPhase = i / 60;
      const rapidFlow = Math.sin(rapidsPhase * Math.PI * 3) * Math.PI / 120;
      
      addSegment({
        yawDelta: rapidFlow,
        pitchDelta: Math.cos(rapidsPhase * Math.PI * 4) * Math.PI / 250,
        rollDelta: rapidFlow * 0.5, // Very gentle banking
        lanes: [{ offset: 0, width: 11 }],
        isBoost: (i > 25 && i < 30) // Speed section
      });
    }
    
    // SECTION 4: Canyon Hairpin
    // Single challenging but fair hairpin turn
    
    // Approach
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Bank into hairpin
    for (let i = 0; i < 8; i++) {
      addSegment({
        rollDelta: Math.PI / 80,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Execute hairpin turn
    for (let i = 0; i < 40; i++) {
      addSegment({
        yawDelta: Math.PI / 40, // 180 degree turn
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Bank out
    for (let i = 0; i < 8; i++) {
      addSegment({
        rollDelta: -Math.PI / 80,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // SECTION 5: Ice Field Sprint
    // Final high-speed section through ice field
    for (let i = 0; i < 50; i++) {
      const sprintPhase = i / 50;
      
      addSegment({
        yawDelta: Math.sin(sprintPhase * Math.PI * 2) * Math.PI / 200,
        pitchDelta: -Math.PI / 300, // Slight downhill for speed
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 + sprintPhase * 3 }], // Widening track
        isBoost: (i > 35 && i < 40) // Final boost
      });
    }
    
    // Canyon exit - finish line
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 }],
        isFinishLine: (i === 19)
      });
    }
  }
};