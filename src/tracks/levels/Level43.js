/**
 * Level 43 - Data Highway
 * High-speed straightaways with data stream effects
 * Focus on speed and maintaining optimal racing lines
 */

export default {
  name: "Data Highway",
  description: "Blast through high-speed data corridors",
  difficulty: 2,
  shader: "cyber-tunnel",

  skybox: "neon-city",
  
  generateTrack(addSegment) {
    // Initialize on data highway
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 16 }], // Wide highway
        // No boost needed
      });
    }
    
    // High-speed chicane
    const chicaneAngles = [
      Math.PI / 8,   // Quick right
      -Math.PI / 6,  // Sharper left
      Math.PI / 8    // Quick right
    ];
    
    for (const angle of chicaneAngles) {
      // Quick direction change
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: angle / 8,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
      
      // Short straight
      for (let i = 0; i < 5; i++) {
        addSegment({
          lanes: [{ offset: 0, width: 14 }]
        });
      }
    }
    
    // Data stream tunnel - long straight with effects
    for (let i = 0; i < 60; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 12 }],
        // No boost needed in straight tunnel
      });
    }
    
    // Banked speed curves
    const speedCurves = [
      { angle: Math.PI / 2, segments: 30, bank: Math.PI / 5 }, // 90° with heavy banking
      { angle: -Math.PI / 2, segments: 30, bank: -Math.PI / 5 }
    ];
    
    for (const curve of speedCurves) {
      // Bank in
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: curve.bank / 5,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
      
      // High-speed turn
      for (let i = 0; i < curve.segments; i++) {
        addSegment({
          yawDelta: curve.angle / curve.segments,
          lanes: [{ offset: 0, width: 14 }],
          // No boost needed in turn
        });
      }
      
      // Bank out
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: -curve.bank / 5,
          lanes: [{ offset: 0, width: 14 }]
        });
      }
    }
    
    // Multi-lane highway section
    for (let i = 0; i < 40; i++) {
      if (i < 10) {
        // Expand to multi-lane
        const expansion = i / 10;
        addSegment({
          lanes: [
            { offset: -8 * expansion, width: 8 },
            { offset: 0, width: 8 },
            { offset: 8 * expansion, width: 8 }
          ]
        });
      } else if (i < 30) {
        // Three parallel lanes
        addSegment({
          lanes: [
            { offset: -8, width: 8 },  // Left lane
            { offset: 0, width: 8 },   // Center lane
            { offset: 8, width: 8 }    // Right lane
          ],
          // No boost needed
        });
      } else {
        // Merge back
        const merge = 1 - (i - 30) / 10;
        addSegment({
          lanes: [
            { offset: -8 * merge, width: 8 },
            { offset: 0, width: 8 },
            { offset: 8 * merge, width: 8 }
          ]
        });
      }
    }
    
    // Data overflow section - varying width
    for (let i = 0; i < 35; i++) {
      const widthPulse = 14 + Math.sin(i * 0.3) * 4;
      addSegment({
        lanes: [{ offset: 0, width: widthPulse }],
        // No boost needed
      });
    }
    
    // Final speed section
    for (let i = 0; i < 50; i++) {
      // Gentle S-curve at high speed
      const sCurve = Math.sin(i * 0.1) * Math.PI / 100;
      
      addSegment({
        yawDelta: sCurve,
        lanes: [{ offset: 0, width: 16 }],
        isFinishLine: (i === 49)
      });
    }
  }
};