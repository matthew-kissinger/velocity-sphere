/**
 * Level 3 - Spectrum
 * Classic rainbow track with balanced challenge
 */

export default {
  name: "Spectrum",
  description: "Flowing curves and rhythmic sections with rainbow aesthetics",
  difficulty: 3,
  shader: "rainbow-flow", // Default rainbow shader
  skybox: "sunset-vibes", // Default bright skybox
  
  generateTrack(addSegment, addLoop) {
    // Level 3: Advanced track with challenging but manageable elements
    // --- Section 1: Starting straight ---
    const startCount3 = 30;
    for (let i = 0; i < startCount3; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // --- Section 2: Wide sweeping curves with banking ---
    const sweepingCurves = [
      { angle: Math.PI / 3, segments: 18, bank: Math.PI / 12 },  // 60 degree right turn
      { angle: -Math.PI / 4, segments: 15, bank: -Math.PI / 12 }, // 45 degree left turn
    ];
    
    for (const curve of sweepingCurves) {
      const yawPerSegment = curve.angle / curve.segments;
      const bankPerSegment = curve.bank / curve.segments;
      
      // Enter banking
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: bankPerSegment
        });
      }
      
      // Main curve with full banking
      for (let i = 0; i < curve.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Exit banking
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: -bankPerSegment
        });
      }
      
      // Short straight between curves
      for (let i = 0; i < 5; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
      }
    }
    
    // --- Section 3: Moderate hills (not too high) ---
    const hills = [
      { up: 8, down: 8, angle: Math.PI / 12 },  // Small hill
      { up: 10, down: 10, angle: Math.PI / 10 } // Medium hill
    ];
    
    for (const hill of hills) {
      // Up
      for (let i = 0; i < hill.up; i++) {
        addSegment({ pitchDelta: hill.angle / hill.up });
      }
      // Down
      for (let i = 0; i < hill.down; i++) {
        addSegment({ pitchDelta: -hill.angle / hill.down });
      }
    }
    
    // --- Section 4: Major jump ---
    const rampUp3 = 10;
    const rampAngle3 = Math.PI / 6; // 30 degrees
    for (let i = 0; i < rampUp3; i++) {
      addSegment({ pitchDelta: rampAngle3 / rampUp3 });
    }
    // Gap
    const gap3 = 4;
    for (let i = 0; i < gap3; i++) {
      addSegment({ isGap: true });
    }
    const rampDown3 = 10;
    for (let i = 0; i < rampDown3; i++) {
      addSegment({ pitchDelta: -rampAngle3 / rampDown3 });
    }
    
    // --- Section 5: Horizontal Spiral (stays at same height) ---
    // Wide turning spiral that doesn't descend
    const spiralSegments = 40;
    const spiralTurns = 1.25; // 1.25 complete turns
    
    // Entry to spiral - establish banking
    for (let i = 0; i < 3; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: Math.PI / 36 // Gentle banking
      });
    }
    
    // Main spiral - constant height
    const yawPerSegment = (Math.PI * 2 * spiralTurns) / spiralSegments;
    for (let i = 0; i < spiralSegments; i++) {
      addSegment({
        yawDelta: yawPerSegment,
        pitchDelta: 0, // Stay level
        rollDelta: 0
      });
    }
    
    // Exit spiral - remove banking
    for (let i = 0; i < 3; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: -Math.PI / 36
      });
    }
    
    // Recovery straight
    for (let i = 0; i < 8; i++) {
      addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
    }
    
    // --- Section 6: Chicane Section ---
    const chicane = [
      { yaw: Math.PI / 6, segments: 6 },   // 30 degree right
      { yaw: -Math.PI / 3, segments: 8 },  // 60 degree left  
      { yaw: Math.PI / 6, segments: 6 }    // 30 degree right back to straight
    ];
    
    for (const turn of chicane) {
      const yawPerSegment = turn.yaw / turn.segments;
      
      for (let i = 0; i < turn.segments; i++) {
        addSegment({ 
          yawDelta: yawPerSegment,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // --- Section 7: Double Jump ---
    const jumps = [
      { ramp: 6, gap: 3, land: 6 },
      { straight: 8 },
      { ramp: 8, gap: 4, land: 8 }
    ];
    
    for (const section of jumps) {
      if (section.ramp) {
        // Ramp up
        for (let i = 0; i < section.ramp; i++) {
          addSegment({ pitchDelta: (Math.PI / 7) / section.ramp });
        }
        // Gap
        for (let i = 0; i < section.gap; i++) {
          addSegment({ isGap: true });
        }
        // Landing
        for (let i = 0; i < section.land; i++) {
          addSegment({ pitchDelta: -(Math.PI / 7) / section.land });
        }
      } else if (section.straight) {
        for (let i = 0; i < section.straight; i++) {
          addSegment({ yawDelta: 0, pitchDelta: 0, rollDelta: 0 });
        }
      }
    }
    
    // --- Section 8: Split Path ---
    const splitSection = 25;
    for (let i = 0; i < splitSection; i++) {
      let lanes;
      if (i < 5) {
        // Gradual split
        const splitFactor = i / 5;
        lanes = [
          { offset: -6.0 * splitFactor, width: 5.0 },
          { offset: 6.0 * splitFactor, width: 5.0 }
        ];
      } else if (i < 20) {
        // Full split
        lanes = [
          { offset: -6.0, width: 5.0 },
          { offset: 6.0, width: 5.0 }
        ];
      } else {
        // Merge back
        const mergeFactor = 1 - (i - 20) / 5;
        lanes = [
          { offset: -6.0 * mergeFactor, width: 5.0 },
          { offset: 6.0 * mergeFactor, width: 5.0 }
        ];
      }
      addSegment({ lanes });
    }
    
    // --- Section 9: Final Sprint ---
    const finalSprint = 20;
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