/**
 * Level 5 - Crystaline
 * Precision track through crystalline formations
 */

export default {
  name: "Crystaline",
  description: "Thread through crystal formations requiring perfect precision",
  difficulty: 5,
  shader: "crystal-surface", // Crystalline surfaces for precision
  skybox: "crystal-sky", // Matching crystal atmosphere
  
  generateTrack(addSegment, addLoop) {
    // Level 5: Sky Bridge - Most challenging track yet
    // --- Section 1: Starting straight ---
    const startCount = 20;
    for (let i = 0; i < startCount; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // --- Section 2: Initial Climb to Bridge Level ---
    // Steep climb to establish elevation
    const climbSegments = 15;
    const climbAngle = Math.PI / 4.5; // ~40 degrees - steeper than previous levels
    
    for (let i = 0; i < climbSegments; i++) {
      addSegment({ 
        pitchDelta: climbAngle / climbSegments,
        yawDelta: 0,
        rollDelta: 0
      });
    }
    
    // Brief recovery at elevated level
    for (let i = 0; i < 5; i++) {
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 3: Elevated Narrow Bridge with Sharp Turns ---
    // Simulate narrow elevated bridge with aggressive turns
    const bridgeTurns = [
      { angle: Math.PI / 2.8, segments: 8, bank: Math.PI / 6 },   // ~64° right with steep banking
      { angle: -Math.PI / 2.5, segments: 9, bank: -Math.PI / 6 }, // ~72° left with steep banking
      { angle: Math.PI / 3.2, segments: 7, bank: Math.PI / 8 },   // ~56° right
      { angle: -Math.PI / 4, segments: 6, bank: -Math.PI / 8 }    // 45° left
    ];
    
    for (const turn of bridgeTurns) {
      const yawPerSegment = turn.angle / turn.segments;
      const bankPerSegment = turn.bank / turn.segments;
      
      // Quick banking entry (shorter than previous levels)
      for (let i = 0; i < 2; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: bankPerSegment
        });
      }
      
      // Sharp turn with full banking
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Quick banking exit
      for (let i = 0; i < 2; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: -bankPerSegment
        });
      }
      
      // Minimal recovery - makes it very technical
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 4: Precision Jump Sequence ---
    // Multiple jumps with very small landing zones
    const precisionJumps = [
      { ramp: 6, gap: 3, land: 4 },    // Small landing zone
      { straight: 3 },                 // Very short recovery
      { ramp: 5, gap: 2, land: 4 },    // Quick succession
      { straight: 2 },                 
      { ramp: 7, gap: 4, land: 5 },    // Longer jump, small landing
      { straight: 4 }
    ];
    
    for (const section of precisionJumps) {
      if (section.ramp) {
        // Steeper jump angle for more challenging precision
        const jumpAngle = Math.PI / 4.8; // ~37.5 degrees
        
        // Ramp up
        for (let i = 0; i < section.ramp; i++) {
          addSegment({ pitchDelta: jumpAngle / section.ramp });
        }
        // Gap
        for (let i = 0; i < section.gap; i++) {
          addSegment({ isGap: true });
        }
        // Landing - smaller landing area
        for (let i = 0; i < section.land; i++) {
          addSegment({ pitchDelta: -jumpAngle / section.land });
        }
      } else if (section.straight) {
        for (let i = 0; i < section.straight; i++) {
          addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
        }
      }
    }
    
    // --- Section 5: Figure-8 Crossover at Different Heights ---
    // First loop of figure-8 at current elevation
    const figureEightSegments = 25;
    const figureEightTurn = Math.PI * 1.1; // Slightly more than a full circle
    const yawPerSegment = figureEightTurn / figureEightSegments;
    
    // Banking entry for first loop
    for (let i = 0; i < 3; i++) {
      addSegment({ rollDelta: Math.PI / 24 });
    }
    
    // First loop at high elevation
    for (let i = 0; i < figureEightSegments; i++) {
      addSegment({ 
        yawDelta: yawPerSegment,
        pitchDelta: 0,
        rollDelta: 0
      });
    }
    
    // Crossover bridge - gradual descent while turning
    const crossoverSegments = 15;
    const descentAngle = Math.PI / 18; // Gradual descent
    const crossoverTurn = Math.PI / 6; // 30 degree turn while descending
    
    for (let i = 0; i < crossoverSegments; i++) {
      addSegment({
        yawDelta: crossoverTurn / crossoverSegments,
        pitchDelta: -descentAngle / crossoverSegments,
        rollDelta: 0
      });
    }
    
    // Second loop at lower elevation
    for (let i = 0; i < figureEightSegments; i++) {
      addSegment({ 
        yawDelta: -yawPerSegment, // Opposite direction
        pitchDelta: 0,
        rollDelta: 0
      });
    }
    
    // Banking exit
    for (let i = 0; i < 3; i++) {
      addSegment({ rollDelta: -Math.PI / 24 });
    }
    
    // --- Section 6: Steep Downhill Slalom ---
    // Rapid descent with tight slalom turns
    const slalomSections = [
      { angle: Math.PI / 5, segments: 4, descent: Math.PI / 25 },  // 36° right
      { angle: -Math.PI / 4, segments: 5, descent: Math.PI / 25 }, // 45° left
      { angle: Math.PI / 3.5, segments: 4, descent: Math.PI / 25 }, // ~51° right
      { angle: -Math.PI / 5, segments: 4, descent: Math.PI / 25 }, // 36° left
      { angle: Math.PI / 6, segments: 3, descent: Math.PI / 25 }   // 30° right
    ];
    
    for (const section of slalomSections) {
      const yawPerSegment = section.angle / section.segments;
      const descentPerSegment = section.descent / section.segments;
      
      for (let i = 0; i < section.segments; i++) {
        addSegment({
          yawDelta: yawPerSegment,
          pitchDelta: -descentPerSegment, // Continuous descent
          rollDelta: 0
        });
      }
      
      // No recovery between slalom gates - immediate transition
    }
    
    // --- Section 7: Final Gauntlet - Alternating Jumps and Sharp Turns ---
    const gauntletSequence = [
      { type: 'jump', ramp: 5, gap: 2, land: 4 },
      { type: 'turn', angle: Math.PI / 3, segments: 6, bank: Math.PI / 10 }, // 60° right
      { type: 'jump', ramp: 4, gap: 3, land: 4 },
      { type: 'turn', angle: -Math.PI / 2.5, segments: 7, bank: -Math.PI / 10 }, // 72° left
      { type: 'jump', ramp: 6, gap: 2, land: 3 }, // Smallest landing zone
      { type: 'turn', angle: Math.PI / 4, segments: 5, bank: Math.PI / 12 } // 45° right
    ];
    
    for (const element of gauntletSequence) {
      if (element.type === 'jump') {
        const jumpAngle = Math.PI / 5; // ~36 degrees
        
        // Ramp
        for (let i = 0; i < element.ramp; i++) {
          addSegment({ pitchDelta: jumpAngle / element.ramp });
        }
        // Gap
        for (let i = 0; i < element.gap; i++) {
          addSegment({ isGap: true });
        }
        // Landing
        for (let i = 0; i < element.land; i++) {
          addSegment({ pitchDelta: -jumpAngle / element.land });
        }
      } else if (element.type === 'turn') {
        const yawPerSegment = element.angle / element.segments;
        const bankPerSegment = element.bank / element.segments;
        
        // Banking entry
        addSegment({ rollDelta: bankPerSegment });
        
        // Sharp turn
        for (let i = 0; i < element.segments; i++) {
          addSegment({ 
            yawDelta: yawPerSegment,
            pitchDelta: 0,
            rollDelta: 0
          });
        }
        
        // Banking exit
        addSegment({ rollDelta: -bankPerSegment });
      }
      
      // Minimal recovery between gauntlet elements
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 8: Final Elevated Bridge to Finish ---
    // Short climb back to bridge level for dramatic finish
    const finalClimb = 8;
    const finalClimbAngle = Math.PI / 8; // 22.5 degrees
    
    for (let i = 0; i < finalClimb; i++) {
      addSegment({ pitchDelta: finalClimbAngle / finalClimb });
    }
    
    // Final elevated straight to finish line
    const finalSprint = 12;
    for (let i = 0; i < finalSprint; i++) {
      addSegment({ 
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === finalSprint - 1) 
      });
    }
  }
};