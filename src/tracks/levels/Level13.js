/**
 * Level 13 - Forest Trail
 * Winding paths through dense forest
 * Medium difficulty with natural obstacles
 */

export default {
  name: "Forest Trail",
  description: "Navigate the twisting paths through ancient woods",
  difficulty: 3,
  shader: "forest-floor",
  skybox: "forest-canopy", // High contrast forest skybox
  
  generateTrack(addSegment) {
    // Forest entrance
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Winding forest path - tight S-curves
    const forestTurns = [
      { angle: Math.PI / 2.5, segments: 20 },  // 72° right
      { angle: -Math.PI / 2, segments: 18 },    // 90° left
      { angle: Math.PI / 3, segments: 12 },     // 60° right
      { angle: -Math.PI / 2.8, segments: 15 }   // ~64° left
    ];
    
    for (const turn of forestTurns) {
      // Approach with slight banking
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 80,
          pitchDelta: Math.sin(i * 0.5) * Math.PI / 150 // Root bumps
        });
      }
      
      // Execute turn through trees
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.cos(i * 0.3) * Math.PI / 120 // Uneven ground
        });
      }
      
      // Exit banking
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 80
        });
      }
    }
    
    // Tree root jump section
    for (let jump = 0; jump < 4; jump++) {
      // Approach
      for (let i = 0; i < 8; i++) {
        addSegment({ 
          pitchDelta: i < 4 ? Math.PI / 50 : 0,
          yawDelta: Math.sin(i * 0.2) * Math.PI / 100 // Weaving
        });
      }
      
      // Small gap
      for (let i = 0; i < 2; i++) {
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 4; i++) {
        addSegment({ pitchDelta: -Math.PI / 50 });
      }
    }
    
    // Split path through trees
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 6 },
          { offset: 10 * factor, width: 6 }
        ]
      });
    }
    
    // Different paths with different challenges
    for (let i = 0; i < 30; i++) {
      addSegment({
        lanes: [
          { offset: -10, width: 6 }, // Left: more turns
          { offset: 10, width: 6 }   // Right: more jumps
        ],
        yawDelta: i < 15 ? Math.PI / 80 : -Math.PI / 80,
        pitchDelta: Math.sin(i * 0.4) * Math.PI / 100
      });
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 6 },
          { offset: 10 * factor, width: 6 }
        ]
      });
    }
    
    // Final forest section with boost
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 60,
        pitchDelta: 0,
        isBoost: (i >= 8 && i <= 11),
        isFinishLine: (i === 19)
      });
    }
  }
};