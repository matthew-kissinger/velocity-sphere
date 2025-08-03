/**
 * Level 27 - Ice Canyon
 * Race through frozen canyons with ice bridges and crystal caves
 * Fixed to prevent track inversions and ensure proper banking
 */

export default {
  name: "Ice Canyon",
  description: "Navigate frozen canyons and ice bridges at high speed",
  difficulty: 5,
  shader: "ice-crystal",
  skybox: "arctic-night",
  
  generateTrack(addSegment) {
    const MAX_BANKING = Math.PI / 4; // 45 degrees maximum
    
    // Ice canyon entrance - wide starting straight
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // First canyon turn - gentle right with proper banking
    // Banking in
    for (let i = 0; i < 6; i++) {
      const bankProgress = i / 6;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: bankProgress * MAX_BANKING * 0.6
      });
    }
    
    // Banked turn
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: Math.PI / 50,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Banking out - must completely reset
    for (let i = 0; i < 6; i++) {
      const unbankProgress = (6 - i) / 6;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: unbankProgress * MAX_BANKING * 0.6
      });
    }
    
    // Stabilization straight
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Snow drift corners - S-curve with proper banking reset
    for (let turn = 0; turn < 2; turn++) {
      const direction = turn === 0 ? 1 : -1;
      
      // Bank into turn
      for (let i = 0; i < 5; i++) {
        const bankProgress = i / 5;
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: direction * bankProgress * MAX_BANKING * 0.7
        });
      }
      
      // The turn - no additional roll
      for (let i = 0; i < 20; i++) {
        addSegment({
          yawDelta: direction * Math.PI / 60,
          pitchDelta: Math.sin(i * 0.15) * Math.PI / 200,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Unbank - complete reset
      for (let i = 0; i < 5; i++) {
        const unbankProgress = (5 - i) / 5;
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: direction * unbankProgress * MAX_BANKING * 0.7
        });
      }
      
      // Stabilization between turns
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          isBoostPowerup: (i === 5 && turn === 0)
        });
      }
    }
    
    // Descent into canyon - gentle slope
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 100,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Frozen waterfall section - FIXED: no accumulating roll
    for (let i = 0; i < 30; i++) {
      // Create gentle weaving with yaw only - no roll accumulation
      const weavePattern = Math.sin(i * 0.2) * 0.5;
      addSegment({
        yawDelta: weavePattern * Math.PI / 120,
        pitchDelta: 0,
        rollDelta: 0, // REMOVED problematic rolling
        lanes: [{ offset: weavePattern * 1.5, width: 8 }]
      });
    }
    
    // Wide sweeping left turn with controlled banking
    // Banking in
    for (let i = 0; i < 6; i++) {
      const bankProgress = i / 6;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: -bankProgress * MAX_BANKING * 0.8
      });
    }
    
    // Banked turn
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: -Math.PI / 45,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i === 15)
      });
    }
    
    // Banking out - complete reset
    for (let i = 0; i < 6; i++) {
      const unbankProgress = (6 - i) / 6;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: -unbankProgress * MAX_BANKING * 0.8
      });
    }
    
    // Canyon straight with boost
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }],
        isBoost: (i >= 8 && i <= 12)
      });
    }
    
    // Ice bridge section - elevated with gentle curves
    // Rise onto bridge
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.PI / 80,
        rollDelta: 0
      });
    }
    
    // Bridge crossing - gentle S-curve with minimal banking
    for (let i = 0; i < 25; i++) {
      const curvePhase = i / 25;
      let yawDelta = 0;
      let rollDelta = 0;
      
      // First half: gentle right
      if (curvePhase < 0.5) {
        yawDelta = Math.sin(curvePhase * Math.PI) * Math.PI / 150;
        rollDelta = Math.sin(curvePhase * Math.PI) * MAX_BANKING * 0.3;
      }
      // Second half: gentle left
      else {
        const secondPhase = (curvePhase - 0.5) * 2;
        yawDelta = -Math.sin(secondPhase * Math.PI) * Math.PI / 150;
        rollDelta = -Math.sin(secondPhase * Math.PI) * MAX_BANKING * 0.3;
      }
      
      addSegment({
        yawDelta: yawDelta,
        pitchDelta: 0,
        rollDelta: rollDelta,
        lanes: [{ offset: 0, width: 9 }],
        isBoostPowerup: (i === 12)
      });
    }
    
    // Descent from bridge
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 80,
        rollDelta: 0
      });
    }
    
    // Crystal cave section - FIXED: controlled winding
    for (let i = 0; i < 40; i++) {
      // Create winding path with yaw only - no dangerous roll accumulation
      const caveWind = Math.sin(i * 0.1) * Math.cos(i * 0.07);
      addSegment({
        yawDelta: caveWind * Math.PI / 80,
        pitchDelta: Math.sin(i * 0.08) * Math.PI / 200,
        rollDelta: 0, // REMOVED problematic cave rolling
        lanes: [{ offset: 0, width: 8 }]
      });
    }
    
    // Canyon exit - series of properly banked turns
    const exitTurns = [
      { angle: Math.PI / 3, segments: 20, bankingFactor: 0.7 },
      { angle: -Math.PI / 4, segments: 18, bankingFactor: 0.6 }
    ];
    
    for (const turn of exitTurns) {
      // Approach straight
      for (let i = 0; i < 8; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
      
      // Banking in
      for (let i = 0; i < 5; i++) {
        const bankProgress = i / 5;
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: (turn.angle > 0 ? 1 : -1) * bankProgress * MAX_BANKING * turn.bankingFactor
        });
      }
      
      // Banked turn
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Banking out - complete reset
      for (let i = 0; i < 5; i++) {
        const unbankProgress = (5 - i) / 5;
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: (turn.angle > 0 ? 1 : -1) * unbankProgress * MAX_BANKING * turn.bankingFactor
        });
      }
    }
    
    // Final hairpin - challenging but safe
    // Banking in
    for (let i = 0; i < 7; i++) {
      const bankProgress = i / 7;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: bankProgress * MAX_BANKING * 0.9
      });
    }
    
    // Hairpin turn
    for (let i = 0; i < 35; i++) {
      addSegment({
        yawDelta: Math.PI / 35,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Banking out - complete reset
    for (let i = 0; i < 7; i++) {
      const unbankProgress = (7 - i) / 7;
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: unbankProgress * MAX_BANKING * 0.9
      });
    }
    
    // Final stabilization
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Finish straight through ice canyon
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isBoost: (i >= 10 && i <= 15),
        isFinishLine: (i === 24)
      });
    }
  }
};