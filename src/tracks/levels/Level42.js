/**
 * Level 42 - Neon Tubes
 * Racing through cylindrical tunnels with neon ring gates
 * Features tube-like sections and glowing checkpoints
 */

export default {
  name: "Neon Tubes",
  description: "Race through glowing cylindrical passages",
  difficulty: 3,
  shader: "laser-grid",

  skybox: "cave-depths",
  
  generateTrack(addSegment) {
    // Start in main tunnel
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Enter first tube - slight climb
    for (let i = 0; i < 20; i++) {
      addSegment({
        pitchDelta: Math.PI / 200,
        lanes: [{ offset: 0, width: 10 }], // Narrower for tube effect
        // No boost needed
      });
    }
    
    // Spiral section inside tube - optimized
    const spiralSegments = 40; // Reduced from 60
    const spiralRotations = 1.0; // Reduced from 1.5
    
    for (let i = 0; i < spiralSegments; i++) {
      const spiralAngle = (Math.PI * 2 * spiralRotations) / spiralSegments;
      
      // Simplified spiral without complex calculations
      addSegment({
        yawDelta: spiralAngle,
        rollDelta: 0, // Removed roll calculation for performance
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Exit tube into larger chamber
    for (let i = 0; i < 10; i++) {
      const widthTransition = 10 + (i / 10) * 6; // Expand from 10 to 16
      addSegment({
        pitchDelta: -Math.PI / 200,
        lanes: [{ offset: 0, width: widthTransition }]
      });
    }
    
    // Neon ring gates section
    for (let i = 0; i < 40; i++) {
      // Create rhythm with width changes
      const gateEffect = (i % 10 < 2) ? 8 : 16; // Narrow at "gates"
      
      addSegment({
        lanes: [{ offset: 0, width: gateEffect }],
        // No boost needed
      });
    }
    
    // Double tubes - simplified split path
    for (let i = 0; i < 40; i++) { // Reduced from 50
      if (i < 8) {
        // Split entrance
        const splitFactor = i / 8;
        addSegment({
          lanes: [
            { offset: -10 * splitFactor, width: 8 },
            { offset: 10 * splitFactor, width: 8 }
          ]
        });
      } else if (i < 32) {
        // Parallel paths - no complex calculations
        addSegment({
          lanes: [
            { offset: -10, width: 8 },
            { offset: 10, width: 8 }
          ],
          pitchDelta: 0 // Removed cosine calculation
        });
      } else {
        // Merge back
        const mergeFactor = 1 - (i - 32) / 8;
        addSegment({
          lanes: [
            { offset: -10 * mergeFactor, width: 8 },
            { offset: 10 * mergeFactor, width: 8 }
          ]
        });
      }
    }
    
    // Boost tunnel section
    for (let i = 0; i < 30; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 10 }],
        // Single strategic boost instead of continuous
        isBoost: (i === 15)
      });
    }
    
    // Final tube maze
    const mazePattern = [
      { turn: Math.PI / 4, length: 15 },
      { turn: -Math.PI / 3, length: 20 },
      { turn: Math.PI / 6, length: 15 },
      { turn: -Math.PI / 4, length: 18 }
    ];
    
    for (const section of mazePattern) {
      // Bank into turn
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.turn > 0 ? 1 : -1) * Math.PI / 60,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Turn
      for (let i = 0; i < section.length; i++) {
        addSegment({
          yawDelta: section.turn / section.length,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Bank out
      for (let i = 0; i < 3; i++) {
        addSegment({
          rollDelta: (section.turn > 0 ? -1 : 1) * Math.PI / 60,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
    }
    
    // Final sprint
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 14 }],
        isFinishLine: (i === 24)
      });
    }
  }
};