/**
 * Level 10 - Apex
 * The ultimate digital challenge combining all elements
 */

export default {
  name: "Apex",
  description: "The pinnacle of racing mastery in digital space",
  difficulty: 5,
  shader: "matrix-rain", // Ultimate digital challenge
  skybox: "space-deep", // Deep space for ultimate focus
  
  generateTrack(addSegment) {
    // Starting section
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Immediate split path with different challenges
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 8 },
          { offset: 10 * factor, width: 8 }
        ]
      });
    }
    
    // Left path: jump series, Right path: tight turns
    for (let i = 0; i < 30; i++) {
      if (i % 10 < 4) {
        // Jump sections on left path
        addSegment({
          lanes: [
            { offset: -10, width: 8 },
            { offset: 10, width: 8 }
          ],
          pitchDelta: Math.PI / 30
        });
      } else if (i % 10 < 6) {
        // Gap on left, turn on right
        addSegment({
          lanes: [
            { offset: -10, width: 8, isGap: true },
            { offset: 10, width: 8 }
          ],
          yawDelta: Math.PI / 40
        });
      } else {
        // Landing on left, continue turn on right
        addSegment({
          lanes: [
            { offset: -10, width: 8 },
            { offset: 10, width: 8 }
          ],
          pitchDelta: -Math.PI / 30,
          yawDelta: Math.PI / 40
        });
      }
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 8 },
          { offset: 10 * factor, width: 8 }
        ]
      });
    }
    
    // Extreme banked hairpin turn
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 40 });
    }
    for (let i = 0; i < 40; i++) {
      addSegment({ 
        yawDelta: Math.PI / 20,  // Very tight turn
        rollDelta: 0
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 40 });
    }
    
    // FIXED: Manageable climb with boost zones instead of impossible steep angles
    for (let i = 0; i < 40; i++) {
      if (i % 8 < 3) {
        // Narrow sections with boost
        addSegment({
          lanes: [{ offset: 0, width: 5 }],
          pitchDelta: Math.PI / 80, // Much gentler climb
          isBoost: true // Add boost to help with climb
        });
      } else if (i % 8 < 5) {
        // Boost sections for climbing
        addSegment({
          pitchDelta: Math.PI / 80,
          isBoost: true
        });
      } else {
        // Normal width
        addSegment({
          pitchDelta: Math.PI / 80 // Much gentler climb
        });
      }
    }
    
    // The Big Drop - FIXED: Safer descent angles to prevent cliff effect
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: -Math.PI / 200 * (i + 1) }); // Very gradual increasing angle
    }
    for (let i = 0; i < 25; i++) {
      addSegment({ pitchDelta: -Math.PI / 40 }); // Safe maximum descent (45 degrees max)
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: -Math.PI / 200 * (8 - i) }); // Level out gradually
    }
    
    // Recovery chicane at high speed
    for (let i = 0; i < 6; i++) {
      addSegment({ yawDelta: -Math.PI / 30 });
    }
    for (let i = 0; i < 12; i++) {
      addSegment({ yawDelta: Math.PI / 30 });
    }
    for (let i = 0; i < 6; i++) {
      addSegment({ yawDelta: -Math.PI / 30 });
    }
    
    // Final test - long jump with turn in mid-air
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 30,
        yawDelta: -Math.PI / 200  // Slight left curve on ramp
      });
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ isGap: true }); // Longest jump in the game!
    }
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 30,
        yawDelta: -Math.PI / 200  // Continue curve on landing
      });
    }
    
    // Victory straight
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === 29)
      });
    }
  }
};