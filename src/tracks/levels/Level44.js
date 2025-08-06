/**
 * Level 44 - Maintenance Tunnels
 * Tight technical turns through service corridors
 * Tests precision control in confined spaces
 */

export default {
  name: "Maintenance Tunnels",
  description: "Navigate tight service corridors with precision",
  difficulty: 4,
  shader: "neon-pulse",

  skybox: "neon-city",
  
  generateTrack(addSegment) {
    // Service entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 10 }] // Narrower than usual
      });
    }
    
    // First maintenance shaft - sharp right angle
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: Math.PI / 30,
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.PI / 2 / 20, // 90° turn
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: -Math.PI / 30,
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    // Pipe section - elevation changes
    for (let i = 0; i < 40; i++) {
      const pipeWave = Math.sin(i * 0.2) * Math.PI / 100;
      addSegment({
        pitchDelta: pipeWave,
        lanes: [{ offset: 0, width: 8 }], // Very tight
        // No boost needed
      });
    }
    
    // Junction room - multiple path options
    for (let i = 0; i < 30; i++) {
      if (i < 5) {
        // Expand into junction
        const expand = (i / 5) * 8;
        addSegment({
          lanes: [{ offset: 0, width: 10 + expand }]
        });
      } else if (i < 25) {
        // Multiple maintenance paths
        addSegment({
          lanes: [
            { offset: -10, width: 7 },  // Left tunnel
            { offset: 0, width: 8 },    // Center tunnel
            { offset: 10, width: 7 }    // Right tunnel
          ],
          // No powerup needed
        });
      } else {
        // Converge
        const converge = 1 - (i - 25) / 5;
        addSegment({
          lanes: [{ offset: 0, width: 10 + converge * 8 }]
        });
      }
    }
    
    // Ventilation shaft zigzag
    const zigzagPattern = [
      { angle: Math.PI / 3, segs: 12 },   // Sharp left
      { angle: -Math.PI / 3, segs: 12 },  // Sharp right
      { angle: Math.PI / 4, segs: 10 },   // Left
      { angle: -Math.PI / 3, segs: 12 },  // Sharp right
      { angle: Math.PI / 4, segs: 10 }    // Left
    ];
    
    for (const zig of zigzagPattern) {
      for (let i = 0; i < zig.segs; i++) {
        addSegment({
          yawDelta: zig.angle / zig.segs,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Brief straight between turns
      for (let i = 0; i < 5; i++) {
        addSegment({
          lanes: [{ offset: 0, width: 9 }],
          // No boost needed
        });
      }
    }
    
    // Catwalk section - very narrow with drops
    for (let i = 0; i < 35; i++) {
      const catwalkWidth = 7 + Math.sin(i * 0.3) * 1; // Slight width variation
      
      // Add gaps for challenge
      const isGap = (i > 10 && i < 13) || (i > 22 && i < 25);
      
      addSegment({
        lanes: [{ offset: 0, width: catwalkWidth }],
        isGap: isGap
      });
    }
    
    // Machine room - wider area with obstacles
    for (let i = 0; i < 45; i++) {
      // Weaving between machinery
      const weaveAngle = Math.sin(i * 0.25) * Math.PI / 50;
      const obstacleAvoidance = (i % 15 < 3) ? 8 : 12; // Narrow sections represent obstacles
      
      addSegment({
        yawDelta: weaveAngle,
        lanes: [{ offset: 0, width: obstacleAvoidance }],
        // No boost needed
      });
    }
    
    // Emergency exit tunnel - climb out
    for (let i = 0; i < 25; i++) {
      addSegment({
        pitchDelta: Math.PI / 150, // Steep climb
        lanes: [{ offset: 0, width: 10 }],
        // Single avoidable boost for climb
        isBoost: (i === 10),
        lanes: (i === 10) ? [{ offset: -3, width: 4 }] : [{ offset: 0, width: 10 }], // Left side boost
        isFinishLine: (i === 24)
      });
    }
  }
};