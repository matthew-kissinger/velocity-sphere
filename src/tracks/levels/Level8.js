/**
 * Level 8 - Hyperdrive
 * Extreme speed track with energy-charged sections
 */

export default {
  name: "Hyperdrive",
  description: "Push beyond limits with extreme energy bursts", 
  difficulty: 4,
  shader: "energy-pulse", // High-energy shader for extreme track
  skybox: "aurora-dance", // Magical aurora for extreme challenge
  
  generateTrack(addSegment) {
    // Starting straight
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // First banked turn - right with increasing bank
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 80 }); // Bank in
    }
    for (let i = 0; i < 25; i++) {
      addSegment({ 
        yawDelta: Math.PI / 50,
        rollDelta: 0  // Hold bank
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 80 }); // Bank out
    }
    
    // Speed section with boost zones for climbing sections
    for (let i = 0; i < 30; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 300, // Gentler downhill
        yawDelta: 0,
        isBoost: i % 10 < 3 // Add boost pads every few segments
      });
    }
    
    // Split path section
    const splitOffset = 8.0;
    const splitWidth = 5.0;
    
    // Split starts
    for (let i = 0; i < 10; i++) {
      const factor = i / 10;
      addSegment({
        lanes: [
          { offset: -splitOffset * factor, width: splitWidth },
          { offset: splitOffset * factor, width: splitWidth }
        ]
      });
    }
    
    // Hold split with different paths
    for (let i = 0; i < 20; i++) {
      addSegment({
        lanes: [
          { offset: -splitOffset, width: splitWidth },
          { offset: splitOffset, width: splitWidth }
        ],
        yawDelta: Math.sin(i * 0.1) * 0.02  // Slight weaving
      });
    }
    
    // Merge back
    for (let i = 0; i < 10; i++) {
      const factor = 1 - (i / 10);
      addSegment({
        lanes: [
          { offset: -splitOffset * factor, width: splitWidth },
          { offset: splitOffset * factor, width: splitWidth }
        ]
      });
    }
    
    // High speed banked left turn
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: -Math.PI / 60 }); // Bank in harder
    }
    for (let i = 0; i < 30; i++) {
      addSegment({ 
        yawDelta: -Math.PI / 45,
        rollDelta: 0
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ rollDelta: Math.PI / 60 }); // Bank out
    }
    
    // Chicane section - quick left-right-left
    for (let i = 0; i < 8; i++) {
      addSegment({ yawDelta: -Math.PI / 40 });
    }
    for (let i = 0; i < 16; i++) {
      addSegment({ yawDelta: Math.PI / 40 });
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ yawDelta: -Math.PI / 40 });
    }
    
    // Final banked turn to finish
    for (let i = 0; i < 3; i++) {
      addSegment({ rollDelta: Math.PI / 90 });
    }
    for (let i = 0; i < 20; i++) {
      addSegment({ 
        yawDelta: Math.PI / 60,
        rollDelta: 0
      });
    }
    for (let i = 0; i < 3; i++) {
      addSegment({ rollDelta: -Math.PI / 90 });
    }
    
    // Add boost zones before finish for better momentum
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isBoost: true // Boost section before finish
      });
    }
    
    // Sprint to finish
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === 14)
      });
    }
  }
};