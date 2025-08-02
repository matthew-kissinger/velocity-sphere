/**
 * Level 9 - Cyberflow
 * Rhythmic cyberpunk track with flowing patterns
 */

export default {
  name: "Cyberflow",
  description: "Flow through digital rhythms and cyber patterns",
  difficulty: 4,
  shader: "tech-grid", // Rhythmic grid patterns
  skybox: "neon-city", // Cyberpunk rhythm vibes
  
  generateTrack(addSegment) {
    // Starting section
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Rhythmic hills section - like a pump track (FIXED: gentler angles + boost)
    for (let j = 0; j < 3; j++) {
      // Boost before climbing
      for (let i = 0; i < 2; i++) {
        addSegment({ isBoost: true });
      }
      // Up (gentler angle)
      for (let i = 0; i < 10; i++) {
        addSegment({ pitchDelta: Math.PI / 80 }); // Reduced from /60 to /80
      }
      // Down
      for (let i = 0; i < 10; i++) {
        addSegment({ pitchDelta: -Math.PI / 80 });
      }
    }
    
    // Fast left sweeper
    for (let i = 0; i < 30; i++) {
      addSegment({ 
        yawDelta: -Math.PI / 60,
        rollDelta: i < 15 ? -Math.PI / 300 : Math.PI / 300  // Bank in then out
      });
    }
    
    // Technical section - alternating narrow/wide
    for (let i = 0; i < 40; i++) {
      const narrow = (Math.floor(i / 5) % 2) === 0;
      addSegment({
        lanes: [{ offset: 0, width: narrow ? 6 : 12 }],
        yawDelta: Math.sin(i * 0.2) * Math.PI / 80  // Weaving
      });
    }
    
    // Jump sequence with rhythm
    for (let j = 0; j < 3; j++) {
      // Approach
      for (let i = 0; i < 6; i++) {
        addSegment({ pitchDelta: Math.PI / 50 });
      }
      // Gap (increasing size)
      for (let i = 0; i < 2 + j; i++) {
        addSegment({ isGap: true });
      }
      // Landing
      for (let i = 0; i < 6; i++) {
        addSegment({ pitchDelta: -Math.PI / 50 });
      }
      // Recovery straight
      for (let i = 0; i < 8; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0 });
      }
    }
    
    // Downhill slalom section
    for (let i = 0; i < 50; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.25) * Math.PI / 40,  // S-turns
        pitchDelta: -Math.PI / 200,  // Gentle downhill
        rollDelta: Math.cos(i * 0.25) * Math.PI / 200  // Slight banking with turns
      });
    }
    
    // FIXED: Boost before triple split to maintain momentum
    for (let i = 0; i < 5; i++) {
      addSegment({ isBoost: true });
    }
    
    // Triple split path - three choices
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -12 * factor, width: 6 },  // Left path (wider)
          { offset: 0, width: 7 },             // Center path (wider) 
          { offset: 12 * factor, width: 6 }    // Right path (wider)
        ]
      });
    }
    
    // Different challenges for each path (with boost zones)
    for (let i = 0; i < 20; i++) {
      if (i === 0 || i === 5 || i === 15) {
        // Add boost zones at key points
        addSegment({
          lanes: [
            { offset: -12, width: 6, isBoost: true },
            { offset: 0, width: 7, isBoost: true },
            { offset: 12, width: 6, isBoost: true }
          ]
        });
      } else if (i === 10) {
        // Jump in center only
        addSegment({
          lanes: [
            { offset: -12, width: 6 },
            { offset: 0, width: 7, isGap: true },
            { offset: 12, width: 6 }
          ]
        });
      } else {
        // Left: tight turns, Center: straight, Right: wide turns
        addSegment({
          lanes: [
            { offset: -12, width: 6 },
            { offset: 0, width: 7 },
            { offset: 12, width: 6 }
          ],
          yawDelta: i < 10 ? Math.PI / 120 : -Math.PI / 120  // Gentler turning
        });
      }
    }
    
    // Merge three paths back
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -12 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 12 * factor, width: 5 }
        ]
      });
    }
    
    // Final banked corner to finish
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 100 });
    }
    for (let i = 0; i < 20; i++) {
      addSegment({ 
        yawDelta: Math.PI / 40,
        rollDelta: 0
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 100 });
    }
    
    // Sprint to finish
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === 19)
      });
    }
  }
};