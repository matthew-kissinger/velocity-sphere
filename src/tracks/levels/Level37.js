/**
 * Level 37 - Crystal Cavern Zen
 * Peaceful crystal cave with soft glows and reflections
 * Wide paths through luminous formations
 */

export default {
  name: "Crystal Cavern Zen",
  description: "Glide through serene crystal formations",
  difficulty: 5,
  shader: "crystal-surface",
  railShader: "aurora-rails", // Glowing rails for visibility on clear track
  skybox: "crystal-cavern",
  
  generateTrack(addSegment) {
    // Cave entrance
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Descend into crystal chamber
    for (let i = 0; i < 20; i++) {
      const descentProgress = i / 20;
      
      addSegment({
        pitchDelta: -Math.PI / 90, // Gentle descent
        yawDelta: Math.sin(descentProgress * Math.PI) * Math.PI / 150,
        lanes: [{ offset: 0, width: 13 + Math.sin(descentProgress * Math.PI) * 2 }]
      });
    }
    
    // Main crystal chamber - wide spiral around formations
    const chamberSegments = 70;
    for (let i = 0; i < chamberSegments; i++) {
      const chamberProgress = i / chamberSegments;
      const spiralAngle = Math.PI * 2.5 * chamberProgress; // 1.25 rotations
      
      addSegment({
        yawDelta: Math.PI * 2.5 / chamberSegments,
        pitchDelta: Math.sin(spiralAngle * 2) * Math.PI / 250, // Gentle undulation
        rollDelta: Math.sin(spiralAngle) * Math.PI / 80, // Soft banking
        lanes: [{ offset: 0, width: 16 }],
        isBoost: (i % 20 === 10)
      });
    }
    
    // Crystal gallery - multiple paths between formations
    for (let i = 0; i < 55; i++) {
      if (i < 10) {
        // Split into crystal paths
        const factor = i / 10;
        addSegment({
          lanes: [
            { offset: -14 * factor, width: 11 },
            { offset: 0, width: 12 },
            { offset: 14 * factor, width: 11 }
          ]
        });
      } else if (i < 45) {
        // Weaving between crystal formations
        const weaveProgress = (i - 10) / 35;
        const crystalWeave = Math.sin(weaveProgress * Math.PI * 3) * Math.PI / 180;
        
        addSegment({
          lanes: [
            { offset: -14, width: 11 },
            { offset: 0, width: 12 },
            { offset: 14, width: 11 }
          ],
          yawDelta: crystalWeave,
          pitchDelta: Math.cos(weaveProgress * Math.PI * 2) * Math.PI / 300,
          isBoostPowerup: (i === 27) // Center path powerup
        });
      } else {
        // Merge crystal paths
        const factor = 1 - (i - 45) / 10;
        addSegment({
          lanes: [
            { offset: -14 * factor, width: 11 },
            { offset: 0, width: 12 },
            { offset: 14 * factor, width: 11 }
          ]
        });
      }
    }
    
    // Reflection pool section - mirror-like track
    for (let i = 0; i < 30; i++) {
      const poolProgress = i / 30;
      
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 20 }], // Very wide for reflection effect
        isBoost: (i >= 12 && i <= 17)
      });
    }
    
    // Crystal cathedral - large open chamber
    const cathedralCurve = [
      { angle: Math.PI / 3, segments: 25 },
      { angle: -Math.PI / 2, segments: 30 },
      { angle: Math.PI / 3, segments: 25 }
    ];
    
    for (const section of cathedralCurve) {
      for (let i = 0; i < section.segments; i++) {
        const sectionProgress = i / section.segments;
        
        addSegment({
          yawDelta: section.angle / section.segments,
          pitchDelta: Math.sin(sectionProgress * Math.PI) * Math.PI / 200,
          rollDelta: (section.angle > 0 ? 1 : -1) * Math.PI / 90 * Math.sin(sectionProgress * Math.PI),
          lanes: [{ offset: 0, width: 18 }] // Wide cathedral space
        });
      }
    }
    
    // Luminous tunnel - simplified gentle curves
    for (let i = 0; i < 35; i++) {
      const tunnelProgress = i / 35;
      const tunnelCurve = Math.sin(tunnelProgress * Math.PI * 1.5) * Math.PI / 120; // Gentler curves
      
      addSegment({
        yawDelta: tunnelCurve,
        pitchDelta: 0,
        rollDelta: tunnelCurve * 0.3, // Less banking
        lanes: [{ offset: 0, width: 14 }] // Wider track
      });
    }
    
    // Ascent to surface - climbing back up
    for (let i = 0; i < 25; i++) {
      const ascentProgress = i / 25;
      
      addSegment({
        pitchDelta: Math.PI / 100,
        yawDelta: Math.sin(ascentProgress * Math.PI * 1.5) * Math.PI / 150,
        lanes: [{ offset: 0, width: 13 }],
        isBoost: (i >= 15 && i <= 20)
      });
    }
    
    // Crystal field finale - straightforward finish
    for (let i = 0; i < 30; i++) {
      const finaleProgress = i / 30;
      
      // Gentle weaving instead of twist
      const gentleWeave = Math.sin(finaleProgress * Math.PI * 2) * Math.PI / 300;
      
      addSegment({
        yawDelta: gentleWeave,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 + finaleProgress * 8 }], // Expanding to finish
        isBoost: (i >= 20 && i <= 25),
        isFinishLine: (i === 29)
      });
    }
  }
};