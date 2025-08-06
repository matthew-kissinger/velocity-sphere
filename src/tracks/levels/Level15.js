/**
 * Level 15 - Cloud Nine (COMPLETELY REDESIGNED)
 * Flowing cloud racing with smooth curves and gentle jumps
 * Medium difficulty with emphasis on flow and speed
 */

export default {
  name: "Cloud Nine",
  description: "Float through the clouds in this heavenly race",
  difficulty: 3,
  shader: "cloud-surface",
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Cloud entrance - wide floating start
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // SECTION 1: Cloud Wave Racing
    // Flowing S-curves through clouds
    const cloudWaves = [
      { angle: Math.PI / 3, segments: 30, climb: false },
      { angle: -Math.PI / 2.5, segments: 35, climb: true },
      { angle: Math.PI / 2.8, segments: 28, climb: false },
      { angle: -Math.PI / 3, segments: 25, climb: true }
    ];
    
    for (const wave of cloudWaves) {
      // Smooth banking into turn
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (wave.angle > 0 ? 1 : -1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Flowing turn with gentle elevation changes
      for (let i = 0; i < wave.segments; i++) {
        const progress = i / wave.segments;
        addSegment({
          yawDelta: wave.angle / wave.segments,
          pitchDelta: wave.climb ? 
            Math.sin(progress * Math.PI) * Math.PI / 150 : 
            -Math.sin(progress * Math.PI) * Math.PI / 200,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Exit banking
      for (let i = 0; i < 5; i++) {
        addSegment({
          rollDelta: (wave.angle > 0 ? -1 : 1) * Math.PI / 100,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Straight recovery
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // SECTION 2: Cloud Speedway
    // Fast straight with gentle hills
    for (let i = 0; i < 40; i++) {
      const hillPhase = i / 40;
      addSegment({
        yawDelta: Math.sin(i * 0.05) * Math.PI / 200, // Very gentle weaving
        pitchDelta: Math.sin(hillPhase * Math.PI * 2) * Math.PI / 100,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // SECTION 3: Rainbow Run
    // Colorful curved descent through clouds
    for (let i = 0; i < 50; i++) {
      const rainbowPhase = i / 50;
      addSegment({
        yawDelta: Math.PI / 100, // Gentle continuous turn
        pitchDelta: -Math.PI / 180, // Very gentle descent
        rollDelta: Math.PI / 150, // Slight banking
        lanes: [{ 
          offset: Math.sin(rainbowPhase * Math.PI * 2) * 2, 
          width: 10 
        }]
      });
    }
    
    // SECTION 4: Cloud Gardens
    // Wide sweeping turns through cloud formations
    for (let garden = 0; garden < 3; garden++) {
      // Garden entrance
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 12 }]
        });
      }
      
      // Circular garden path
      const gardenDir = garden % 2 ? 1 : -1;
      for (let i = 0; i < 20; i++) {
        addSegment({
          yawDelta: gardenDir * Math.PI / 20, // 180° turn
          pitchDelta: Math.sin(i * 0.3) * Math.PI / 200,
          rollDelta: gardenDir * Math.PI / 80,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // SECTION 5: Sunset Sprint
    // Final high-speed section
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 15 ? -Math.PI / 150 : Math.PI / 150, // Gentle dip and rise
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Cloud plaza finish
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isFinishLine: (i === 19)
      });
    }
  }
};