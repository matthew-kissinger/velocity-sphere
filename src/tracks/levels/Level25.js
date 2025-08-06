/**
 * Level 25 - Volcanic Ascent  
 * Climb up a volcano's interior with lava eruption timing
 * No corkscrews, proper boost placement
 */

export default {
  name: "Volcanic Ascent",
  description: "Ascend through an active volcano's challenging terrain",
  difficulty: 4,
  shader: "lava-flow",
  skybox: "lava-storm",
  
  generateTrack(addSegment) {
    // Volcanic base - approach
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Enter volcanic crater - gentle descent
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: Math.PI / 120,
        pitchDelta: -Math.PI / 120,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Lava lake crossing - timing challenge
    for (let section = 0; section < 3; section++) {
      // Safe platform
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          lanes: [{ offset: 0, width: 12 }]
        });
      }
      
      // Lava bubble pattern - predictable
      for (let i = 0; i < 15; i++) {
        const safeLeft = i % 6 < 3;
        const safeRight = i % 6 >= 3;
        
        addSegment({
          lanes: [
            { offset: -6, width: 5, isGap: !safeLeft },
            { offset: 0, width: 6 }, // Center always safe
            { offset: 6, width: 5, isGap: !safeRight }
          ]
        });
      }
    }
    
    // Begin volcanic ascent - single cleaner spiral
    // Recovery section before ascent
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Single spiral up the volcano wall - less confusing
    for (let i = 0; i < 50; i++) {
      addSegment({
        yawDelta: (Math.PI * 2) / 50, // 360° turn total
        pitchDelta: Math.PI / 100, // Steady climb
        rollDelta: Math.PI / 120, // Gentle bank
        lanes: [{ offset: 0, width: 9 }],
        isBoost: (i === 25) // Single boost halfway up
      });
    }
    
    // Level out after spiral
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: -Math.PI / 120, // Unbank
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Lava vent jumps - controlled gaps
    for (let vent = 0; vent < 3; vent++) {
      // Approach
      for (let i = 0; i < 10; i++) {
        addSegment({
          pitchDelta: i > 6 ? Math.PI / 60 : 0,
          yawDelta: 0,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Thermal updraft - steep ramp
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          pitchDelta: Math.PI / 30,
          lanes: [{ offset: 0, width: 8 }]
        });
      }
      
      // Airborne
      for (let i = 0; i < 3 + vent; i++) {
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 8; i++) {
        addSegment({ 
          pitchDelta: i < 4 ? -Math.PI / 50 : 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // Volcanic rim traverse - along the edge
    for (let i = 0; i < 40; i++) {
      const edgeWobble = Math.sin(i * 0.15) * 0.5;
      
      addSegment({
        yawDelta: Math.sin(i * 0.08) * Math.PI / 100,
        pitchDelta: Math.cos(i * 0.1) * Math.PI / 150,
        rollDelta: 0, // No rolling on narrow edge
        lanes: [{ 
          offset: 0, // Fixed offset for performance
          width: 7 // Narrow edge
        }]
      });
    }
    
    // Magma chamber descent - controlled drop
    for (let i = 0; i < 30; i++) {
      const descentPhase = i / 30;
      
      addSegment({
        yawDelta: Math.PI / 100, // Gentle spiral down
        pitchDelta: -Math.PI / 80, // Controlled descent
        rollDelta: Math.PI / 120, // Slight bank
        lanes: [{ 
          offset: 0, 
          width: 8 + descentPhase * 2 // Widening
        }]
      });
    }
    
    // Recovery section
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Final lava flow section - following the flow
    for (let i = 0; i < 50; i++) {
      const flowCurve = Math.sin(i * 0.1);
      
      addSegment({
        yawDelta: flowCurve * Math.PI / 60,
        pitchDelta: -Math.PI / 150, // Gentle descent
        rollDelta: flowCurve * Math.PI / 100,
        lanes: [{ 
          offset: 0, // Fixed offset for performance
          width: 9 
        }]
      });
    }
    
    // Volcanic escape - straight sprint
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isFinishLine: (i === 29)
      });
    }
  }
};