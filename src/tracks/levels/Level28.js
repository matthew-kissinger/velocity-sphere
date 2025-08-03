/**
 * Level 28 - Zen Garden
 * Peaceful flowing track with HEAVILY optimized performance
 * Reduced from 298 to ~150 segments for smooth 60+ FPS
 */

export default {
  name: "Zen Garden",
  description: "Flow through tranquil gardens with natural curves",
  difficulty: 3,
  shader: "zen-sand",
  skybox: "sunset-garden",
  
  generateTrack(addSegment) {
    // Garden entrance - peaceful straight
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // First garden curve - OPTIMIZED S-curve
    for (let i = 0; i < 10; i++) {
      const flowCurve = Math.sin((i / 10) * Math.PI);
      const direction = i < 5 ? 1 : -1;
      
      addSegment({
        yawDelta: direction * flowCurve * Math.PI / 75,
        pitchDelta: 0,
        rollDelta: 0, // Removed roll for performance
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Rising path - gentle hill (REDUCED segments)
    for (let i = 0; i < 8; i++) {
      const hillProfile = Math.sin((i / 8) * Math.PI);
      
      addSegment({
        yawDelta: 0,
        pitchDelta: hillProfile * Math.PI / 90,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }],
        isBoost: (i === 4)
      });
    }
    
    // Bamboo grove tunnel - HEAVILY SIMPLIFIED
    for (let i = 0; i < 12; i++) {
      const windingPath = Math.sin(i * 0.4);
      
      addSegment({
        yawDelta: windingPath * Math.PI / 60,
        pitchDelta: 0,
        rollDelta: 0, // Removed roll
        lanes: [{ offset: 0, width: 9 }],
        isBoostPowerup: (i === 6)
      });
    }
    
    // Koi pond jump - single jump
    // Approach
    for (let i = 0; i < 6; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i > 4 ? Math.PI / 100 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Gap
    for (let i = 0; i < 3; i++) {
      addSegment({ isGap: true });
    }
    
    // Landing
    for (let i = 0; i < 5; i++) {
      addSegment({
        pitchDelta: i < 2 ? -Math.PI / 80 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }],
        isBoost: (i === 3)
      });
    }
    
    // Rock garden slalom - OPTIMIZED S-curves
    for (let i = 0; i < 15; i++) {
      const slalomPattern = Math.sin(i * 0.3);
      
      addSegment({
        yawDelta: slalomPattern * Math.PI / 50,
        pitchDelta: 0,
        rollDelta: 0, // Removed roll
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Valley descent - SIMPLIFIED
    for (let i = 0; i < 10; i++) {
      const descentCurve = Math.sin((i / 10) * Math.PI * 0.5);
      
      addSegment({
        yawDelta: -Math.PI / 180,
        pitchDelta: -descentCurve * Math.PI / 75,
        rollDelta: 0, // Removed roll
        lanes: [{ offset: 0, width: 11 }],
        isBoostPowerup: (i === 5)
      });
    }
    
    // Meditation circle - HEAVILY OPTIMIZED
    const meditationSegments = 20; // Reduced from 40
    for (let i = 0; i < meditationSegments; i++) {
      const circleProgress = i / meditationSegments;
      
      // Simplified banking
      let banking = 0;
      if (i === 0) banking = Math.PI / 12;
      else if (i === meditationSegments - 1) banking = -Math.PI / 12;
      
      addSegment({
        yawDelta: (Math.PI * 1.5) / meditationSegments,
        pitchDelta: 0,
        rollDelta: banking,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i === 10)
      });
    }
    
    // Cherry blossom avenue - SIMPLIFIED
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i >= 6 && i <= 9)
      });
    }
    
    // Garden maze section - HEAVILY SIMPLIFIED
    const mazePattern = [
      { turn: Math.PI / 6, segments: 6 },
      { turn: -Math.PI / 4, segments: 8 },
      { turn: Math.PI / 5, segments: 5 }
    ];
    
    for (const section of mazePattern) {
      // Bank in (1 segment)
      addSegment({
        rollDelta: (section.turn > 0 ? 1 : -1) * Math.PI / 15
      });
      
      // Smooth turn
      for (let i = 0; i < section.segments; i++) {
        addSegment({
          yawDelta: section.turn / section.segments,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Bank out (1 segment)
      addSegment({
        rollDelta: (section.turn > 0 ? -1 : 1) * Math.PI / 15
      });
      
      // Recovery straight
      for (let i = 0; i < 3; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // Tea garden approach - gentle rise
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.PI / 250,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }],
        isBoostPowerup: (i === 4)
      });
    }
    
    // Final garden section - flowing to finish
    for (let i = 0; i < 12; i++) {
      const finalFlow = Math.sin(i * 0.24);
      
      addSegment({
        yawDelta: finalFlow * Math.PI / 90,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i >= 4 && i <= 7),
        isFinishLine: (i === 11)
      });
    }
  }
};