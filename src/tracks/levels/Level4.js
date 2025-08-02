/**
 * Level 4 - Matrix
 * Digital realm with precise technical sections
 */

export default {
  name: "Matrix",
  description: "Navigate through digital constructs with technical precision", 
  difficulty: 4,
  shader: "matrix-rain", // Digital theme for technical track
  skybox: "space-deep", // Dark space for intense focus
  
  generateTrack(addSegment, addLoop) {
    // Level 4: Desert Canyon - More challenging than Level 3
    // --- Section 1: Starting straight ---
    const startCount = 25;
    for (let i = 0; i < startCount; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // --- Section 2: Narrow Canyon Entry ---
    // Simulate narrow canyon with tighter track width through sharper turns
    const canyonEntry = [
      { angle: Math.PI / 4, segments: 10, bank: Math.PI / 16 },   // 45° right
      { angle: -Math.PI / 3, segments: 12, bank: -Math.PI / 16 }, // 60° left
      { angle: Math.PI / 5, segments: 8, bank: Math.PI / 16 }     // 36° right
    ];
    
    for (const turn of canyonEntry) {
      const yawPerSegment = turn.angle / turn.segments;
      const bankPerSegment = turn.bank / turn.segments;
      
      // Banking entry
      for (let i = 0; i < 2; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: bankPerSegment
        });
      }
      
      // Sharp turn with banking
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Banking exit
      for (let i = 0; i < 2; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: -bankPerSegment
        });
      }
      
      // Very short recovery
      for (let i = 0; i < 3; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
      }
    }
    
    // --- Section 3: Banked S-Curves ---
    const sCurves = [
      { angle: Math.PI / 2.5, segments: 15, bank: Math.PI / 8 },   // 72° right with steeper banking
      { angle: -Math.PI / 2.2, segments: 16, bank: -Math.PI / 8 }, // 82° left with steeper banking
      { angle: Math.PI / 3, segments: 12, bank: Math.PI / 10 }     // 60° right
    ];
    
    for (const curve of sCurves) {
      const yawPerSegment = curve.angle / curve.segments;
      const bankPerSegment = curve.bank / curve.segments;
      
      // Progressive banking entry
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: bankPerSegment
        });
      }
      
      // Banked curve
      for (let i = 0; i < curve.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Progressive banking exit
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: -bankPerSegment
        });
      }
      
      // Minimal straight between curves
      for (let i = 0; i < 2; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
      }
    }
    
    // --- Section 4: Moderate Jumps with Shorter Gaps ---
    const jumpSequence = [
      { ramp: 7, gap: 2, land: 7 },    // Shorter gap, quicker timing
      { straight: 5 },
      { ramp: 8, gap: 3, land: 8 },
      { straight: 4 },
      { ramp: 6, gap: 2, land: 6 }     // Final quick jump
    ];
    
    for (const section of jumpSequence) {
      if (section.ramp) {
        // Steeper ramp angle for more challenging jumps
        const jumpAngle = Math.PI / 5.5; // ~33 degrees
        
        // Ramp up
        for (let i = 0; i < section.ramp; i++) {
          addSegment({ pitchDelta: jumpAngle / section.ramp });
        }
        // Gap
        for (let i = 0; i < section.gap; i++) {
          addSegment({ isGap: true });
        }
        // Landing
        for (let i = 0; i < section.land; i++) {
          addSegment({ pitchDelta: -jumpAngle / section.land });
        }
      } else if (section.straight) {
        for (let i = 0; i < section.straight; i++) {
          addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
        }
      }
    }
    
    // --- Section 5: Technical Chicane ---
    // More complex chicane than Level 3
    const technicalChicane = [
      { yaw: Math.PI / 5, segments: 5 },    // 36° right (quick)
      { yaw: -Math.PI / 2.5, segments: 9 }, // 72° left (sharp)
      { yaw: Math.PI / 2.2, segments: 10 }, // 82° right (sharper)
      { yaw: -Math.PI / 4, segments: 7 },   // 45° left
      { yaw: Math.PI / 6, segments: 5 }     // 30° right to straighten
    ];
    
    for (const turn of technicalChicane) {
      const yawPerSegment = turn.yaw / turn.segments;
      
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Very short pause between turns (makes it more technical)
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 6: Challenging Split Path ---
    // One side has more obstacles than the other
    const splitLength = 30;
    
    for (let i = 0; i < splitLength; i++) {
      let lanes;
      
      if (i < 6) {
        // Gradual split
        const splitFactor = i / 6;
        lanes = [
          { offset: -8.0 * splitFactor, width: 4.5 },  // Slightly narrower lanes
          { offset: 8.0 * splitFactor, width: 4.5 }
        ];
      } else if (i < 24) {
        // Full split with obstacles on left path
        if (i >= 10 && i <= 12) {
          // Left path has small jumps
          lanes = [
            { offset: -8.0, width: 4.5, obstacles: [{ type: 'jump', size: 'small' }] },
            { offset: 8.0, width: 4.5 }  // Right path clear
          ];
        } else if (i >= 16 && i <= 18) {
          // Left path has sharp turns
          lanes = [
            { offset: -8.0, width: 4.5, obstacles: [{ type: 'chicane' }] },
            { offset: 8.0, width: 4.5 }  // Right path clear
          ];
        } else {
          lanes = [
            { offset: -8.0, width: 4.5 },
            { offset: 8.0, width: 4.5 }
          ];
        }
      } else {
        // Merge back together
        const mergeFactor = 1 - (i - 24) / 6;
        lanes = [
          { offset: -8.0 * mergeFactor, width: 4.5 },
          { offset: 8.0 * mergeFactor, width: 4.5 }
        ];
      }
      
      addSegment({ lanes });
    }
    
    // --- Section 7: Canyon Wall Simulator ---
    // Tight winding section to simulate canyon walls
    const canyonWalls = [
      { angle: Math.PI / 3, segments: 8 },    // 60° right
      { angle: -Math.PI / 4, segments: 6 },   // 45° left  
      { angle: Math.PI / 5, segments: 7 },    // 36° right
      { angle: -Math.PI / 3, segments: 9 },   // 60° left
      { angle: Math.PI / 4, segments: 6 }     // 45° right
    ];
    
    for (const section of canyonWalls) {
      const yawPerSegment = section.angle / section.segments;
      
      for (let i = 0; i < section.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Minimal recovery between turns
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 8: Final Challenge Sequence ---
    // Combination of banking and elevation changes
    const finalChallenge = 20;
    const elevationChange = Math.PI / 15; // Gentle elevation change
    const bankingAngle = Math.PI / 12;    // Moderate banking
    
    for (let i = 0; i < finalChallenge; i++) {
      let yawDelta = 0;
      let pitchDelta = 0;
      let rollDelta = 0;
      
      // Sinusoidal banking and gentle elevation
      if (i < finalChallenge / 2) {
        pitchDelta = elevationChange / (finalChallenge / 2);  // Gentle climb
        rollDelta = Math.sin((i / finalChallenge) * Math.PI * 2) * bankingAngle / 5; // Gentle banking waves
      } else {
        pitchDelta = -elevationChange / (finalChallenge / 2); // Gentle descent
        rollDelta = Math.sin((i / finalChallenge) * Math.PI * 2) * bankingAngle / 5;
      }
      
      addSegment({ yawDelta, pitchDelta, rollDelta });
    }
    
    // --- Section 9: Final Sprint to Finish ---
    const finalSprint = 15;
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