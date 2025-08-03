/**
 * Level 12 - Desert Mirage
 * Rolling sand dunes with heat shimmer effects
 * Medium difficulty with flowing dune navigation
 */

export default {
  name: "Desert Mirage",
  description: "Navigate the shifting sands and find the oasis shortcuts",
  difficulty: 2,
  shader: "sand-dunes",
  skybox: "desert-heat",
  
  generateTrack(addSegment) {
    // Desert start - flat approach
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // First dune climb - gentle introduction
    for (let i = 0; i < 12; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 70, // Safe climbing angle
        yawDelta: Math.sin(i * 0.2) * Math.PI / 200 // Slight weaving
      });
    }
    
    // Dune crest turn
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        yawDelta: Math.PI / 40,
        pitchDelta: -Math.PI / 120 // Gentle descent start
      });
    }
    
    // Dune descent
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 60
        // Removed speed pads
      });
    }
    
    // Oasis section - split path choice
    for (let i = 0; i < 5; i++) {
      const splitFactor = i / 5;
      addSegment({
        lanes: [
          { offset: -8 * splitFactor, width: 6 }, // Left: longer but easier
          { offset: 8 * splitFactor, width: 6 }   // Right: shortcut with jump
        ]
      });
    }
    
    // Split paths
    for (let i = 0; i < 25; i++) {
      if (i < 10) {
        // Both paths turn slightly
        addSegment({
          lanes: [
            { offset: -8, width: 6 },
            { offset: 8, width: 6 }
          ],
          yawDelta: Math.PI / 100
        });
      } else if (i >= 10 && i < 15) {
        // Right path has jump, left continues
        addSegment({
          lanes: [
            { offset: -8, width: 6 },
            { offset: 8, width: 6, isGap: (i >= 12 && i <= 13) }
          ],
          pitchDelta: i < 12 ? Math.PI / 40 : -Math.PI / 40 // Jump ramp
        });
      } else {
        // Paths continue parallel
        addSegment({
          lanes: [
            { offset: -8, width: 6 },
            { offset: 8, width: 6 }
          ]
        });
      }
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const mergeFactor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -8 * mergeFactor, width: 6 },
          { offset: 8 * mergeFactor, width: 6 }
        ]
      });
    }
    
    // Serpentine dune section - S-curves through dunes
    const serpentinePattern = [
      { angle: Math.PI / 3, segments: 15 },   // 60° right
      { angle: -Math.PI / 2.5, segments: 18 }, // 72° left
      { angle: Math.PI / 2.5, segments: 18 },  // 72° right
      { angle: -Math.PI / 3, segments: 15 }    // 60° left
    ];
    
    for (const turn of serpentinePattern) {
      // Bank entry
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 60
        });
      }
      
      // Execute turn with dune undulation
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(i * 0.3) * Math.PI / 100 // Gentle dune waves
        });
      }
      
      // Bank exit
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 60
        });
      }
    }
    
    // Big dune section - larger elevation changes
    for (let dune = 0; dune < 3; dune++) {
      // Climb
      for (let i = 0; i < 15; i++) {
        addSegment({ 
          pitchDelta: Math.PI / 65
          // Removed speed pads
        });
      }
      
      // Crest
      for (let i = 0; i < 5; i++) {
        addSegment({ 
          pitchDelta: 0,
          yawDelta: Math.PI / 150 // Slight turn on crest
        });
      }
      
      // Descent
      for (let i = 0; i < 12; i++) {
        addSegment({ 
          pitchDelta: -Math.PI / 55
        });
      }
    }
    
    // Mirage straightaway
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0
        // Removed speed pads
      });
    }
    
    // Final technical section - tight turns between rock formations
    const technicalTurns = [
      { angle: Math.PI / 4, segments: 8 },    // 45° right
      { angle: -Math.PI / 3.5, segments: 10 }, // ~51° left
      { angle: Math.PI / 5, segments: 6 }      // 36° right
    ];
    
    for (const turn of technicalTurns) {
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(i * 0.5) * Math.PI / 150 // Small bumps
        });
      }
      
      // Short straight between turns
      for (let i = 0; i < 3; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0 });
      }
    }
    
    // Finish approach - slight downhill for speed
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 100,
        rollDelta: 0,
        isFinishLine: (i === 14)
      });
    }
  }
};