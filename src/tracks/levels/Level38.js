/**
 * Level 38 - Sunset Coast
 * Coastal highway at golden hour with sweeping ocean views
 * Wide comfortable racing with scenic beauty
 */

export default {
  name: "Sunset Coast",
  description: "Cruise the coastal highway as the sun sets",
  difficulty: 5,
  shader: "ocean-waves",
  skybox: "sunset-vibes",
  
  generateTrack(addSegment) {
    // Coastal highway start
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 16 }] // Wide highway
      });
    }
    
    // First coastal sweep - following cliff edge
    const coastalSweep1 = [
      { angle: Math.PI / 3, segments: 35, description: "around first headland" },
      { straight: 15 },
      { angle: -Math.PI / 4, segments: 25, description: "into bay" },
      { straight: 10 },
      { angle: -Math.PI / 5, segments: 20, description: "around point" }
    ];
    
    for (const section of coastalSweep1) {
      if (section.straight) {
        for (let i = 0; i < section.straight; i++) {
          addSegment({
            lanes: [{ offset: 0, width: 15 }],
            isBoost: (i === Math.floor(section.straight / 2))
          });
        }
      } else {
        // Sweeping coastal curves with gentle banking
        for (let i = 0; i < section.segments; i++) {
          const progress = i / section.segments;
          const banking = Math.sin(progress * Math.PI) * Math.PI / 50;
          
          addSegment({
            yawDelta: section.angle / section.segments,
            pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 300, // Gentle road undulation
            rollDelta: (section.angle > 0 ? 1 : -1) * banking,
            lanes: [{ offset: 0, width: 14 + Math.sin(progress * Math.PI) * 2 }]
          });
        }
      }
    }
    
    // Beach section - lower elevation near water
    for (let i = 0; i < 15; i++) {
      addSegment({
        pitchDelta: -Math.PI / 200, // Gentle descent to beach
        lanes: [{ offset: 0, width: 18 }]
      });
    }
    
    // Beach cruise - extra wide and flat
    for (let i = 0; i < 40; i++) {
      const beachProgress = i / 40;
      const gentleWeave = Math.sin(beachProgress * Math.PI * 2) * Math.PI / 200;
      
      addSegment({
        yawDelta: gentleWeave,
        pitchDelta: 0,
        lanes: [{ offset: 0, width: 20 }], // Very wide beach section
        isBoost: (i === 17), // Just one boost pad instead of consecutive
        isBoostPowerup: (i === 30)
      });
    }
    
    // Climb back to cliffs
    for (let i = 0; i < 15; i++) {
      addSegment({
        pitchDelta: Math.PI / 180, // Moderate climb
        lanes: [{ offset: 0, width: 16 }]
      });
    }
    
    // Rocky outcrop section - split paths
    for (let i = 0; i < 45; i++) {
      if (i < 8) {
        // Split around rocks
        const factor = i / 8;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 12 },
            { offset: 12 * factor, width: 12 }
          ]
        });
      } else if (i < 37) {
        // Parallel paths with different views
        const pathProgress = (i - 8) / 29;
        const oceanPath = Math.sin(pathProgress * Math.PI * 2.5) * Math.PI / 150;
        
        addSegment({
          lanes: [
            { offset: -12, width: 12 }, // Inland path
            { offset: 12, width: 12 }   // Ocean view path
          ],
          yawDelta: oceanPath
        });
      } else {
        // Merge paths
        const factor = 1 - (i - 37) / 8;
        addSegment({
          lanes: [
            { offset: -12 * factor, width: 12 },
            { offset: 12 * factor, width: 12 }
          ]
        });
      }
    }
    
    // Sunset ridge - elevated section with panoramic views
    const ridgeSegments = 50;
    for (let i = 0; i < ridgeSegments; i++) {
      const ridgeProgress = i / ridgeSegments;
      const ridgeCurve = Math.sin(ridgeProgress * Math.PI * 1.5) * Math.PI / 60;
      
      addSegment({
        yawDelta: ridgeCurve,
        pitchDelta: Math.sin(ridgeProgress * Math.PI * 3) * Math.PI / 250,
        rollDelta: ridgeCurve * 0.6,
        lanes: [{ offset: 0, width: 15 }],
        isBoost: (i % 15 === 7)
      });
    }
    
    // Lighthouse curve - dramatic sweep around lighthouse
    const lighthouseSegments = 40;
    for (let i = 0; i < lighthouseSegments; i++) {
      const lighthouseProgress = i / lighthouseSegments;
      
      addSegment({
        yawDelta: (Math.PI * 1.2) / lighthouseSegments, // 216 degree turn
        pitchDelta: 0,
        rollDelta: Math.PI / 60 * Math.sin(lighthouseProgress * Math.PI),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Golden hour finale - straight to sunset
    for (let i = 0; i < 35; i++) {
      const finaleProgress = i / 35;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.sin(finaleProgress * Math.PI) * Math.PI / 300, // Gentle final dip
        rollDelta: 0,
        lanes: [{ offset: 0, width: 16 + finaleProgress * 8 }], // Widening to finish
        isBoost: (i >= 25 && i <= 30),
        isFinishLine: (i === 34)
      });
    }
  }
};