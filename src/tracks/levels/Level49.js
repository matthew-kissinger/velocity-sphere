/**
 * Level 49 - The Depths
 * Deep underground with limited visibility
 * Challenging track in the darkest reaches of the underground
 */

export default {
  name: "The Depths",
  description: "Descend into the darkest tunnels of the underground",
  difficulty: 5,
  shader: "cyber-tunnel",

  skybox: "neon-underground",
  
  generateTrack(addSegment) {
    // Descent begins
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 200, // Steady descent
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // The abyss drop - steep descent section
    for (let i = 0; i < 20; i++) {
      addSegment({
        pitchDelta: -Math.PI / 100, // Steeper descent
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Darkness maze - winding paths with limited visibility
    const mazeSegments = 80;
    for (let i = 0; i < mazeSegments; i++) {
      // Complex winding pattern
      const mazeProgress = i / mazeSegments;
      const mazeTurn = Math.sin(mazeProgress * Math.PI * 6) * Math.PI / 60 +
                      Math.cos(mazeProgress * Math.PI * 4) * Math.PI / 80;
      
      // Varying widths add to difficulty
      const mazeWidth = 9 + Math.sin(mazeProgress * Math.PI * 8) * 2;
      
      addSegment({
        yawDelta: mazeTurn,
        pitchDelta: Math.sin(mazeProgress * Math.PI * 3) * Math.PI / 300,
        lanes: [{ offset: 0, width: mazeWidth }]
      });
    }
    
    // Echo chamber - large cavern with multiple paths
    for (let i = 0; i < 50; i++) {
      if (i < 10) {
        // Expand into cavern
        const expansion = (i / 10);
        addSegment({
          lanes: [{ offset: 0, width: 10 + expansion * 10 }]
        });
      } else if (i < 40) {
        // Multiple paths through darkness
        const pathPhase = (i - 10) % 10;
        let laneConfig;
        
        if (pathPhase < 5) {
          // Split paths
          laneConfig = [
            { offset: -12, width: 8 },
            { offset: 0, width: 8 },
            { offset: 12, width: 8 }
          ];
        } else {
          // Converged section
          laneConfig = [{ offset: 0, width: 16 }];
        }
        
        addSegment({
          lanes: laneConfig
        });
      } else {
        // Narrow back down
        const narrow = 1 - (i - 40) / 10;
        addSegment({
          lanes: [{ offset: 0, width: 10 + narrow * 10 }]
        });
      }
    }
    
    // The void - minimal reference points
    for (let i = 0; i < 40; i++) {
      // Gentle curves in complete darkness
      const voidCurve = Math.sin(i * 0.1) * Math.PI / 100;
      
      // Add gaps for extra challenge
      const isVoidGap = (i === 15 || i === 25);
      
      addSegment({
        yawDelta: voidCurve,
        lanes: [{ offset: 0, width: 10 }],
        isGap: isVoidGap
      });
    }
    
    // Compression tunnel - claustrophobic section
    for (let i = 0; i < 35; i++) {
      // Very tight, winding passage
      const compressionTurn = Math.sin(i * 0.3) * Math.PI / 40;
      const compressionWidth = 7 + Math.sin(i * 0.4) * 1;
      
      addSegment({
        yawDelta: compressionTurn,
        rollDelta: Math.sin(i * 0.2) * Math.PI / 100, // Slight banking
        lanes: [{ offset: 0, width: compressionWidth }]
      });
    }
    
    // Ancient passage - mysterious straight section
    for (let i = 0; i < 30; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Final ascent - escape from the depths
    for (let i = 0; i < 50; i++) {
      // Spiral climb out
      const ascentAngle = Math.PI / 150;
      const spiralAngle = Math.PI / 40;
      
      addSegment({
        yawDelta: spiralAngle,
        pitchDelta: ascentAngle,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i === 35),
        isFinishLine: (i === 49)
      });
    }
  }
};