/**
 * Level 33 - Moonlit Lake
 * Serene track skimming across a calm lake surface
 * Multiple paths around islands under moonlight
 */

export default {
  name: "Moonlit Lake",
  description: "Glide across tranquil waters beneath the moon",
  difficulty: 4,
  shader: "water-ripple",
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Lakeside start
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // First shoreline curve - following natural lake edge
    const shorelinePath = [
      { angle: Math.PI / 4, segments: 30, description: "around first bay" },
      { angle: -Math.PI / 6, segments: 15, description: "small inlet" },
      { angle: -Math.PI / 3, segments: 25, description: "around peninsula" }
    ];
    
    for (const section of shorelinePath) {
      // Gentle undulating motion like water
      for (let i = 0; i < section.segments; i++) {
        const progress = i / section.segments;
        const wave = Math.sin(progress * Math.PI * 2) * 0.02;
        
        addSegment({
          yawDelta: section.angle / section.segments,
          pitchDelta: wave * Math.PI / 200, // Very subtle elevation changes
          rollDelta: 0,
          lanes: [{ offset: 0, width: 12 }],
          isBoost: (i === Math.floor(section.segments / 2)) // Mid-section boost
        });
      }
      
      // Calm straight between curves
      for (let i = 0; i < 10; i++) {
        addSegment({
          lanes: [{ offset: 0, width: 13 }]
        });
      }
    }
    
    // Island archipelago - multiple path choices
    const islandSection = 60;
    for (let i = 0; i < islandSection; i++) {
      if (i < 10) {
        // Split into three paths
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -15 * factor, width: 8 },  // Left path
            { offset: 0, width: 10 },            // Center path
            { offset: 15 * factor, width: 8 }    // Right path
          ]
        });
      } else if (i < 50) {
        // Three paths weaving around islands
        const pathProgress = (i - 10) / 40;
        
        // Each path has different characteristics
        const leftCurve = Math.sin(pathProgress * Math.PI * 2.5) * Math.PI / 120;
        const centerCurve = Math.sin(pathProgress * Math.PI * 1.8 + Math.PI/3) * Math.PI / 100;
        const rightCurve = Math.sin(pathProgress * Math.PI * 2.2 - Math.PI/3) * Math.PI / 110;
        
        addSegment({
          lanes: [
            { offset: -15, width: 8 },  // Twisty left path
            { offset: 0, width: 10 },    // Balanced center path
            { offset: 15, width: 8 }     // Scenic right path
          ],
          yawDelta: centerCurve, // All paths follow center curve base
          isBoostPowerup: (i === 30 && true) // Powerup on center path
        });
      } else {
        // Merge back together
        const factor = 1 - (i - 50) / 10;
        addSegment({
          lanes: [
            { offset: -15 * factor, width: 8 },
            { offset: 0, width: 10 },
            { offset: 15 * factor, width: 8 }
          ]
        });
      }
    }
    
    // Moonbeam straightaway - wide reflective section
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 18 }], // Extra wide
        isBoost: (i >= 10 && i <= 15) // Moonbeam boost zone
      });
    }
    
    // Lily pad slalom - gentle weaving
    const lilyPadZones = 40;
    for (let i = 0; i < lilyPadZones; i++) {
      const weavePattern = Math.sin(i * 0.25) * Math.PI / 80;
      const widthVariation = 12 + Math.sin(i * 0.15) * 2;
      
      addSegment({
        yawDelta: weavePattern,
        lanes: [{ offset: 0, width: widthVariation }]
      });
    }
    
    // Waterfall approach - slight elevation change
    for (let i = 0; i < 12; i++) {
      addSegment({
        pitchDelta: Math.PI / 150, // Gentle climb
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Behind waterfall section - special moment
    for (let i = 0; i < 20; i++) {
      addSegment({
        pitchDelta: 0,
        yawDelta: Math.PI / 60, // Gentle curve behind falls
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i === 10) // Hidden boost
      });
    }
    
    // Descent back to lake level
    for (let i = 0; i < 12; i++) {
      addSegment({
        pitchDelta: -Math.PI / 150,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Final reflection pool - perfect mirror finish
    const reflectionCircle = 30;
    for (let i = 0; i < reflectionCircle; i++) {
      const circleProgress = i / reflectionCircle;
      
      addSegment({
        yawDelta: -Math.PI / reflectionCircle, // Half circle
        lanes: [{ offset: 0, width: 16 }],
        isBoost: (i >= 20 && i <= 25), // Boost to finish
        isFinishLine: (i === reflectionCircle - 1)
      });
    }
  }
};