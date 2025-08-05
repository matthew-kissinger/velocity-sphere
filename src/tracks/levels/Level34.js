/**
 * Level 34 - Bamboo Grove
 * Natural winding path through dense bamboo forest
 * Dappled light and organic track flow
 */

export default {
  name: "Bamboo Grove",
  description: "Wind through towering bamboo in dappled sunlight",
  difficulty: 4,
  shader: "bamboo-forest",
  skybox: "forest-canopy",
  
  generateTrack(addSegment) {
    // Forest entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Natural meandering path through bamboo
    const bambooSections = [
      { pattern: "gentle_left", segments: 25 },
      { pattern: "straight", segments: 15 },
      { pattern: "s_curve", segments: 35 },
      { pattern: "gentle_right", segments: 20 },
      { pattern: "tight_weave", segments: 30 }
    ];
    
    for (const section of bambooSections) {
      switch (section.pattern) {
        case "gentle_left":
          for (let i = 0; i < section.segments; i++) {
            const naturalVariation = Math.sin(i * 0.3) * Math.PI / 300;
            addSegment({
              yawDelta: -Math.PI / (section.segments * 2) + naturalVariation,
              pitchDelta: Math.sin(i * 0.2) * Math.PI / 200, // Gentle terrain
              lanes: [{ offset: 0, width: 10 + Math.sin(i * 0.1) }]
            });
          }
          break;
          
        case "gentle_right":
          for (let i = 0; i < section.segments; i++) {
            const naturalVariation = Math.sin(i * 0.25) * Math.PI / 280;
            addSegment({
              yawDelta: Math.PI / (section.segments * 2.2) + naturalVariation,
              pitchDelta: Math.cos(i * 0.15) * Math.PI / 180,
              lanes: [{ offset: 0, width: 10 + Math.cos(i * 0.12) }]
            });
          }
          break;
          
        case "s_curve":
          for (let i = 0; i < section.segments; i++) {
            const progress = i / section.segments;
            const sCurve = Math.sin(progress * Math.PI) * Math.PI / 25;
            addSegment({
              yawDelta: sCurve,
              pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 150,
              lanes: [{ offset: 0, width: 11 }],
              isBoost: (i === Math.floor(section.segments / 2))
            });
          }
          break;
          
        case "tight_weave":
          for (let i = 0; i < section.segments; i++) {
            const weave = Math.sin(i * 0.4) * Math.PI / 60;
            const width = 9 + Math.abs(Math.sin(i * 0.4)) * 3; // Wider on straights
            addSegment({
              yawDelta: weave,
              lanes: [{ offset: 0, width: width }]
            });
          }
          break;
          
        case "straight":
          for (let i = 0; i < section.segments; i++) {
            addSegment({
              yawDelta: Math.sin(i * 0.1) * Math.PI / 500, // Very slight variation
              lanes: [{ offset: 0, width: 12 }],
              isBoost: (i >= 5 && i <= 9)
            });
          }
          break;
      }
    }
    
    // Bamboo tunnel section - tighter but beautiful
    for (let i = 0; i < 40; i++) {
      const tunnelProgress = i / 40;
      const tunnelCurve = Math.sin(tunnelProgress * Math.PI * 1.5) * Math.PI / 40;
      
      addSegment({
        yawDelta: tunnelCurve,
        pitchDelta: Math.sin(tunnelProgress * Math.PI) * Math.PI / 100, // Gentle hill
        lanes: [{ offset: 0, width: 8 }], // Narrower in tunnel
        isBoostPowerup: (i === 20)
      });
    }
    
    // Clearing with split paths
    for (let i = 0; i < 45; i++) {
      if (i < 8) {
        // Enter clearing - widen track
        addSegment({
          lanes: [{ offset: 0, width: 12 + i * 2 }]
        });
      } else if (i < 12) {
        // Split around bamboo cluster
        const factor = (i - 8) / 4;
        addSegment({
          lanes: [
            { offset: -10 * factor, width: 9 },
            { offset: 10 * factor, width: 9 }
          ]
        });
      } else if (i < 33) {
        // Parallel paths through grove
        addSegment({
          lanes: [
            { offset: -10, width: 9 },
            { offset: 10, width: 9 }
          ],
          yawDelta: Math.sin((i - 12) * 0.15) * Math.PI / 150
        });
      } else if (i < 37) {
        // Merge paths
        const factor = 1 - (i - 33) / 4;
        addSegment({
          lanes: [
            { offset: -10 * factor, width: 9 },
            { offset: 10 * factor, width: 9 }
          ]
        });
      } else {
        // Exit clearing
        addSegment({
          lanes: [{ offset: 0, width: 20 - (i - 37) * 2 }]
        });
      }
    }
    
    // Ancient grove section - wider, majestic
    for (let i = 0; i < 35; i++) {
      const groveFlow = Math.sin(i * 0.08) * Math.PI / 70;
      
      addSegment({
        yawDelta: groveFlow,
        pitchDelta: 0,
        rollDelta: groveFlow * 0.3, // Gentle banking with turns
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i % 12 === 6)
      });
    }
    
    // Final zen pathway to finish
    for (let i = 0; i < 25; i++) {
      const finalProgress = i / 25;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.sin(finalProgress * Math.PI) * Math.PI / 200, // Gentle dip
        lanes: [{ offset: 0, width: 11 + finalProgress * 4 }], // Widening to finish
        isBoost: (i >= 15 && i <= 20),
        isFinishLine: (i === 24)
      });
    }
  }
};