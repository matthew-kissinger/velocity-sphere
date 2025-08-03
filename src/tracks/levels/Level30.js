/**
 * Level 30 - Ultimate Circuit
 * The final challenge - COMPLETELY REDESIGNED for performance
 * Reduced from 440 to ~200 segments while maintaining difficulty
 */

export default {
  name: "Ultimate Circuit",
  description: "The final test of speed and skill",
  difficulty: 5,
  shader: "infinity-flow",
  skybox: "cosmic-infinite",
  
  generateTrack(addSegment) {
    // Opening stretch - 15 segments
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Rising spiral - OPTIMIZED: 25 segments (was 45)
    for (let i = 0; i < 25; i++) {
      const spiralProgress = i / 25;
      const yawRate = Math.PI / 30;
      
      // Simple banking at start and end only
      let banking = 0;
      if (i < 2) banking = Math.PI / 10;
      else if (i > 22) banking = -Math.PI / 10;
      
      addSegment({
        yawDelta: yawRate,
        pitchDelta: Math.PI / 125,
        rollDelta: banking,
        lanes: [{ offset: 0, width: 12 }],
        isBoostPowerup: (i === 12)
      });
    }
    
    // High speed straight - 15 segments (was 25)
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isBoost: (i >= 5 && i <= 10)
      });
    }
    
    // S-curves - HEAVILY OPTIMIZED: 30 segments (was 60)
    for (let curve = 0; curve < 2; curve++) {
      const direction = curve === 0 ? 1 : -1;
      
      // Bank in (1 segment)
      addSegment({
        rollDelta: direction * Math.PI / 6
      });
      
      // Turn (12 segments)
      for (let i = 0; i < 12; i++) {
        addSegment({
          yawDelta: direction * Math.PI / 24,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 13 }]
        });
      }
      
      // Bank out (1 segment)
      addSegment({
        rollDelta: -direction * Math.PI / 6
      });
      
      // Straight (1 segment)
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0
      });
    }
    
    // Technical chicane - SIMPLIFIED: 18 segments (was 40)
    const chicanePattern = [-1, 1]; // Reduced from 3 to 2
    
    for (const dir of chicanePattern) {
      // Quick turn (8 segments each)
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: dir * Math.PI / 32,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Recovery (1 segment)
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isBoostPowerup: (dir === 1)
      });
    }
    
    // Elevation descent - OPTIMIZED: 20 segments (was 35)
    // Bank in
    addSegment({
      rollDelta: Math.PI / 8
    });
    
    for (let i = 0; i < 18; i++) {
      addSegment({
        yawDelta: Math.PI / 54,
        pitchDelta: -Math.PI / 100,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Bank out
    addSegment({
      rollDelta: -Math.PI / 8
    });
    
    // Power section - 20 segments (was 30)
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 13 }],
        isBoost: (i >= 5 && i <= 10),
        isBoostPowerup: (i === 15)
      });
    }
    
    // Jump section - 15 segments (was 25)
    // Approach
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i > 5 ? Math.PI / 60 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Gap
    for (let i = 0; i < 4; i++) {
      addSegment({ isGap: true });
    }
    
    // Landing
    for (let i = 0; i < 3; i++) {
      addSegment({
        pitchDelta: i < 2 ? -Math.PI / 50 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Single hairpin - SIMPLIFIED: 20 segments (was 50 with 2 hairpins)
    // Entry
    for (let i = 0; i < 3; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0
      });
    }
    
    // Bank in
    addSegment({
      rollDelta: Math.PI / 8
    });
    
    // 180° turn
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: Math.PI / 12,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 9 }]
      });
    }
    
    // Bank out
    addSegment({
      rollDelta: -Math.PI / 8
    });
    
    // Exit
    for (let i = 0; i < 3; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isBoostPowerup: (i === 1)
      });
    }
    
    // Flowing final section - OPTIMIZED: 25 segments (was 60)
    for (let i = 0; i < 25; i++) {
      const flowPattern = Math.sin(i * 0.16);
      
      addSegment({
        yawDelta: flowPattern * Math.PI / 60,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i === 12)
      });
    }
    
    // Final challenge - SIMPLIFIED: 20 segments (was 45)
    // Bank in
    addSegment({
      rollDelta: Math.PI / 10
    });
    
    // Final curve
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: Math.PI / 36,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Bank out
    addSegment({
      rollDelta: -Math.PI / 10
    });
    
    // Sprint to finish - 6 segments (was 30)
    for (let i = 0; i < 6; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 16 }],
        isBoost: (i >= 1 && i <= 4),
        isFinishLine: (i === 5)
      });
    }
  }
};