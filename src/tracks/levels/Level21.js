/**
 * Level 21 - Quantum Flux
 * Teleportation-inspired track with phasing lanes and quantum mechanics
 * Medium difficulty with mind-bending transitions
 */

export default {
  name: "Quantum Flux",
  description: "Phase through quantum dimensions in this reality-bending race",
  difficulty: 4, // Increased to Hard
  shader: "energy-pulse",
  skybox: "space-deep",
  
  generateTrack(addSegment) {
    // Quantum entrance - stable reality
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // First quantum split - lanes phase in and out
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 8 },
          { offset: 8 * factor, width: 8 }
        ]
      });
    }
    
    // Quantum tunneling section - alternating existence
    for (let i = 0; i < 30; i++) {
      const phase = Math.sin(i * 0.3);
      const leftExists = phase > -0.3;
      const rightExists = phase < 0.3;
      
      // Create phasing effect where lanes disappear and reappear
      if (i % 6 < 2) {
        // Both lanes exist
        addSegment({
          lanes: [
            { offset: -8, width: 7 },
            { offset: 8, width: 7 }
          ],
          yawDelta: Math.sin(i * 0.1) * Math.PI / 80
        });
      } else if (i % 6 < 4) {
        // Only one lane exists at a time
        addSegment({
          lanes: [
            { offset: -8, width: 7, isGap: !leftExists },
            { offset: 8, width: 7, isGap: !rightExists }
          ],
          yawDelta: Math.sin(i * 0.1) * Math.PI / 80
        });
      } else {
        // Quantum jump required
        addSegment({
          lanes: [
            { offset: -8, width: 7, isGap: true },
            { offset: 8, width: 7, isGap: true }
          ]
        });
      }
    }
    
    // Merge quantum states
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 7 },
          { offset: 8 * factor, width: 7 }
        ]
      });
    }
    
    // Probability wave section - gentler undulating track
    for (let i = 0; i < 40; i++) {
      const wave = Math.sin(i * 0.15) * 0.5; // Reduced intensity
      addSegment({
        yawDelta: wave * Math.PI / 80, // Gentler turns
        pitchDelta: Math.sin(i * 0.2) * Math.PI / 150, // Smaller elevation changes
        rollDelta: wave * Math.PI / 120 // Much less banking
      });
    }
    
    // Entanglement curves - paired turns with recovery sections
    const entangledTurns = [
      { angle: Math.PI / 4, segments: 18 }, // Gentler angle, more segments
      { angle: -Math.PI / 4, segments: 18 },
      { angle: Math.PI / 5, segments: 15 },
      { angle: -Math.PI / 5, segments: 15 }
    ];
    
    for (let turnIndex = 0; turnIndex < entangledTurns.length; turnIndex++) {
      const turn = entangledTurns[turnIndex];
      
      // Recovery straight before turn
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Gradual bank into turn
      for (let i = 0; i < 5; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 100 // Gentler banking
        });
      }
      
      // Execute entangled turn
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: 0, // Flat turns are easier
          rollDelta: 0
        });
      }
      
      // Gradual exit bank
      for (let i = 0; i < 5; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 100
        });
      }
    }
    
    // Superposition straightaway - multiple possible paths
    for (let i = 0; i < 25; i++) {
      if (i < 5) {
        // Split into three possibilities
        const factor = i / 5;
        addSegment({
          lanes: [
            { offset: -10 * factor, width: 6 },
            { offset: 0, width: 8 },
            { offset: 10 * factor, width: 6 }
          ]
        });
      } else if (i < 20) {
        // Three parallel quantum states
        addSegment({
          lanes: [
            { offset: -10, width: 6 },
            { offset: 0, width: 8 },
            { offset: 10, width: 6 }
          ],
          // No boost needed - choosing lanes is the challenge
        });
      } else {
        // Collapse back to single state
        const factor = 1 - ((i - 20) / 5);
        addSegment({
          lanes: [
            { offset: -10 * factor, width: 6 },
            { offset: 0, width: 8 },
            { offset: 10 * factor, width: 6 }
          ]
        });
      }
    }
    
    // Quantum leap finale - big jump with dimensional shift
    for (let i = 0; i < 8; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 40
      });
    }
    
    // Quantum void
    for (let i = 0; i < 5; i++) {
      addSegment({ isGap: true });
    }
    
    // Reality stabilization landing
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: -Math.PI / 40 });
    }
    
    // Return to stable spacetime
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