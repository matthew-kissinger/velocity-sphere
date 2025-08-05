/**
 * Level 36 - Aurora Fields
 * Open fields under northern lights with flowing terrain
 * Wide paths with gentle elevation changes
 */

export default {
  name: "Aurora Fields",
  description: "Flow through endless fields beneath dancing lights",
  difficulty: 5,
  shader: "aurora-zen",
  railShader: "aurora-rails", // Special glowing rails for visibility
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Open field start
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 18 }] // Very wide open track
      });
    }
    
    // Rolling hills section - natural terrain flow
    const hillSections = [
      { length: 40, pattern: "rolling" },
      { length: 35, pattern: "valley" },
      { length: 45, pattern: "plateau" },
      { length: 30, pattern: "descent" }
    ];
    
    for (const section of hillSections) {
      switch (section.pattern) {
        case "rolling":
          for (let i = 0; i < section.length; i++) {
            const hillProgress = i / section.length;
            const elevation = Math.sin(hillProgress * Math.PI * 3) * Math.PI / 100;
            const curve = Math.sin(hillProgress * Math.PI * 2) * Math.PI / 120;
            
            addSegment({
              yawDelta: curve,
              pitchDelta: elevation,
              rollDelta: curve * 0.5, // Natural banking
              lanes: [{ offset: 0, width: 16 }],
              isBoost: (i % 15 === 7)
            });
          }
          break;
          
        case "valley":
          for (let i = 0; i < section.length; i++) {
            const valleyProgress = i / section.length;
            let pitch = 0;
            
            if (valleyProgress < 0.4) {
              pitch = -Math.PI / 80; // Descend into valley
            } else if (valleyProgress > 0.6) {
              pitch = Math.PI / 80; // Climb out
            }
            
            addSegment({
              pitchDelta: pitch,
              yawDelta: Math.sin(valleyProgress * Math.PI) * Math.PI / 100,
              lanes: [{ offset: 0, width: 14 + Math.sin(valleyProgress * Math.PI) * 4 }]
            });
          }
          break;
          
        case "plateau":
          for (let i = 0; i < section.length; i++) {
            const plateauProgress = i / section.length;
            
            addSegment({
              yawDelta: Math.sin(plateauProgress * Math.PI * 1.5) * Math.PI / 90,
              pitchDelta: 0, // Flat on top
              lanes: [{ offset: 0, width: 20 }], // Extra wide on plateau
              isBoostPowerup: (i === section.length / 2)
            });
          }
          break;
          
        case "descent":
          for (let i = 0; i < section.length; i++) {
            const descentProgress = i / section.length;
            
            addSegment({
              pitchDelta: -Math.PI / 100 * (1 - descentProgress * 0.5), // Easing descent
              yawDelta: 0,
              lanes: [{ offset: 0, width: 15 }],
              isBoost: (i >= 20 && i <= 25)
            });
          }
          break;
      }
    }
    
    // Aurora dance section - multiple flowing paths
    for (let i = 0; i < 60; i++) {
      if (i < 10) {
        // Create three aurora streams
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -16 * factor, width: 12 },
            { offset: 0, width: 14 },
            { offset: 16 * factor, width: 12 }
          ]
        });
      } else if (i < 50) {
        // Flowing parallel paths like aurora ribbons
        const flowProgress = (i - 10) / 40;
        const flow = Math.sin(flowProgress * Math.PI * 2.5);
        
        addSegment({
          lanes: [
            { offset: -16 + flow * 3, width: 12 },
            { offset: 0, width: 14 },
            { offset: 16 - flow * 3, width: 12 }
          ],
          yawDelta: flow * Math.PI / 150,
          pitchDelta: Math.sin(flowProgress * Math.PI * 4) * Math.PI / 300
        });
      } else {
        // Merge aurora streams
        const factor = 1 - (i - 50) / 10;
        addSegment({
          lanes: [
            { offset: -16 * factor, width: 12 },
            { offset: 0, width: 14 },
            { offset: 16 * factor, width: 12 }
          ]
        });
      }
    }
    
    // Wind swept plains - gentle S-curves
    const windSections = 40;
    for (let i = 0; i < windSections; i++) {
      const windProgress = i / windSections;
      const windCurve = Math.sin(windProgress * Math.PI * 2) * Math.PI / 60;
      
      addSegment({
        yawDelta: windCurve,
        pitchDelta: Math.sin(windProgress * Math.PI * 3) * Math.PI / 200,
        rollDelta: windCurve * 0.7,
        lanes: [{ offset: 0, width: 17 }]
      });
    }
    
    // Final aurora corridor - majestic finish
    for (let i = 0; i < 35; i++) {
      const corridorProgress = i / 35;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.sin(corridorProgress * Math.PI) * Math.PI / 150, // Gentle dip
        lanes: [{ offset: 0, width: 15 + corridorProgress * 10 }], // Expanding width
        isBoost: (i >= 25 && i <= 30),
        isFinishLine: (i === 34)
      });
    }
  }
};