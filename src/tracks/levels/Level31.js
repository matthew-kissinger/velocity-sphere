/**
 * Level 31 - Zen Garden Path
 * Opening level of Circuit Tranquil
 * Wide, flowing paths through a Japanese zen garden
 */

export default {
  name: "Zen Garden Path",
  description: "Find your flow through peaceful garden paths",
  difficulty: 3,
  shader: "zen-garden",
  skybox: "sunset-vibes",
  
  generateTrack(addSegment) {
    // Peaceful entrance through garden gates
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }] // Wide comfortable track
      });
    }
    
    // First flowing S-curve around rock gardens
    const gardenCurves = [
      { angle: Math.PI / 3, segments: 25, width: 12 },   // 60° right
      { angle: -Math.PI / 2.5, segments: 30, width: 14 }, // 72° left, wider
      { angle: Math.PI / 4, segments: 20, width: 12 }    // 45° right
    ];
    
    for (const curve of gardenCurves) {
      const yawPerSegment = curve.angle / curve.segments;
      
      // Gentle banking entry
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (curve.angle > 0 ? 1 : -1) * Math.PI / 60,
          lanes: [{ offset: 0, width: curve.width }]
        });
      }
      
      // Smooth curve
      for (let i = 0; i < curve.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          lanes: [{ offset: 0, width: curve.width }]
        });
      }
      
      // Gentle banking exit
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (curve.angle > 0 ? -1 : 1) * Math.PI / 60,
          lanes: [{ offset: 0, width: curve.width }]
        });
      }
      
      // Peaceful straight between curves
      for (let i = 0; i < 10; i++) {
        addSegment({ 
          lanes: [{ offset: 0, width: 12 }],
          isBoost: (i === 5) // Single boost in straight
        });
      }
    }
    
    // Stone bridge section - gentle elevation
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 120, // Very gentle climb
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Elevated bridge crossing
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        lanes: [{ offset: 0, width: 10 }],
        isBoost: (i === 7) // Mid-bridge boost
      });
    }
    
    // Gentle descent from bridge
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 120,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Meditation circle - large circular path
    const circleSegments = 50;
    const circleAngle = Math.PI * 2;
    
    // Gentle bank into circle
    for (let i = 0; i < 5; i++) {
      addSegment({ 
        rollDelta: Math.PI / 50,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Perfect circle around central garden
    for (let i = 0; i < circleSegments; i++) {
      const progress = i / circleSegments;
      addSegment({ 
        yawDelta: circleAngle / circleSegments,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i % 15 === 7) // Regular boost placement
      });
    }
    
    // Gentle bank out of circle
    for (let i = 0; i < 5; i++) {
      addSegment({ 
        rollDelta: -Math.PI / 50,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Split path around koi pond
    for (let i = 0; i < 35; i++) {
      if (i < 8) {
        // Gradual split
        const factor = i / 8;
        addSegment({
          lanes: [
            { offset: -8 * factor, width: 10 },
            { offset: 8 * factor, width: 10 }
          ]
        });
      } else if (i < 27) {
        // Parallel paths around pond
        const curve = Math.sin((i - 8) * 0.15) * Math.PI / 100;
        addSegment({
          lanes: [
            { offset: -8, width: 10 },
            { offset: 8, width: 10 }
          ],
          yawDelta: curve
        });
      } else {
        // Merge back
        const factor = 1 - (i - 27) / 8;
        addSegment({
          lanes: [
            { offset: -8 * factor, width: 10 },
            { offset: 8 * factor, width: 10 }
          ]
        });
      }
    }
    
    // Final approach through bamboo grove
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.2) * Math.PI / 150, // Gentle weaving
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i >= 10 && i <= 14), // Boost zone for finish
        isFinishLine: (i === 19)
      });
    }
  }
};