/**
 * Level 11 - Ocean Drift
 * Gentle introduction to Circuit Beta with flowing ocean-themed curves
 * Easy difficulty for learning the new elemental racing style
 */

export default {
  name: "Ocean Drift",
  description: "Ride the waves in this peaceful underwater journey",
  difficulty: 1,
  shader: "ocean-waves",
  skybox: "ocean-depths",
  
  generateTrack(addSegment) {
    // Starting straight - gentle introduction
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Wave Pattern 1: Gentle rolling hills like ocean waves
    for (let wave = 0; wave < 3; wave++) {
      // Wave up
      for (let i = 0; i < 8; i++) {
        addSegment({ 
          pitchDelta: Math.PI / 120, // Very gentle climb
          yawDelta: Math.sin(i * 0.2) * Math.PI / 180 // Slight S-curve
        });
      }
      // Wave crest
      for (let i = 0; i < 4; i++) {
        addSegment({ pitchDelta: 0, yawDelta: 0 });
      }
      // Wave down
      for (let i = 0; i < 8; i++) {
        addSegment({ 
          pitchDelta: -Math.PI / 120, // Gentle descent
          yawDelta: Math.sin(i * 0.2) * Math.PI / 180
        });
      }
    }
    
    // Flowing left turn - like ocean current
    const leftTurnSegments = 25;
    const leftTurnAngle = Math.PI / 3; // 60 degrees
    for (let i = 0; i < leftTurnSegments; i++) {
      const progress = i / leftTurnSegments;
      const easeIn = Math.sin(progress * Math.PI / 2);
      addSegment({ 
        yawDelta: (leftTurnAngle / leftTurnSegments) * easeIn,
        pitchDelta: Math.sin(i * 0.3) * Math.PI / 200 // Subtle undulation
      });
    }
    
    // Small jump section - like jumping over a wave
    for (let i = 0; i < 6; i++) {
      addSegment({ pitchDelta: Math.PI / 45 }); // Gentle ramp up
    }
    for (let i = 0; i < 2; i++) {
      addSegment({ isGap: true }); // Small gap
    }
    for (let i = 0; i < 6; i++) {
      addSegment({ pitchDelta: -Math.PI / 45 }); // Gentle landing
    }
    
    // Recovery straight with boost
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isBoost: (i >= 2 && i <= 5) // Boost in middle
      });
    }
    
    // Flowing right turn - reverse current
    const rightTurnSegments = 25;
    const rightTurnAngle = Math.PI / 3;
    for (let i = 0; i < rightTurnSegments; i++) {
      const progress = i / rightTurnSegments;
      const easeOut = Math.sin((1 - progress) * Math.PI / 2);
      addSegment({ 
        yawDelta: (rightTurnAngle / rightTurnSegments) * easeOut,
        pitchDelta: Math.cos(i * 0.3) * Math.PI / 200
      });
    }
    
    // Final wave section with gentle banking
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 100 }); // Gentle bank entry
    }
    
    // Banked wave curves
    for (let wave = 0; wave < 2; wave++) {
      for (let i = 0; i < 10; i++) {
        addSegment({ 
          pitchDelta: Math.sin(i * 0.3) * Math.PI / 100,
          yawDelta: Math.PI / 120 // Slight continuous turn
        });
      }
    }
    
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 100 }); // Bank exit
    }
    
    // Finish line approach
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isBoost: (i === 5), // One boost before finish
        isFinishLine: (i === 19)
      });
    }
  }
};