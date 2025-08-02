/**
 * Level 7 - Voltage
 * High-energy track with pulsing electric themes
 */

export default {
  name: "Voltage",
  description: "Ride the lightning through electrifying jumps",
  difficulty: 3,
  shader: "energy-pulse", // High-energy for jumping
  skybox: "aurora-dance", // Magical flying atmosphere
  
  generateTrack(addSegment) {
    // Starting straight
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // First jump - small warm-up
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: Math.PI / 40 });
    }
    for (let i = 0; i < 2; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: -Math.PI / 40 });
    }
    
    // Right turn
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: Math.PI / 30 });
    }
    
    // Double jump section
    for (let i = 0; i < 10; i++) {
      addSegment({ pitchDelta: Math.PI / 35 });
    }
    for (let i = 0; i < 3; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ pitchDelta: -Math.PI / 50 });
    }
    // Second jump immediately after
    for (let i = 0; i < 8; i++) {
      addSegment({ pitchDelta: Math.PI / 40 });
    }
    for (let i = 0; i < 4; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 10; i++) {
      addSegment({ pitchDelta: -Math.PI / 35 });
    }
    
    // S-curve section
    for (let i = 0; i < 15; i++) {
      addSegment({ yawDelta: -Math.PI / 35 });
    }
    for (let i = 0; i < 15; i++) {
      addSegment({ yawDelta: Math.PI / 35 });
    }
    
    // Big jump with turn
    for (let i = 0; i < 12; i++) {
      addSegment({ 
        pitchDelta: Math.PI / 30,
        yawDelta: -Math.PI / 120  // Slight left
      });
    }
    for (let i = 0; i < 5; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 12; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 30,
        yawDelta: -Math.PI / 120  // Continue left
      });
    }
    
    // Straight recovery section
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: 0, pitchDelta: 0 });
    }
    
    // Final challenge - long jump
    for (let i = 0; i < 15; i++) {
      addSegment({ pitchDelta: Math.PI / 35 });
    }
    for (let i = 0; i < 6; i++) {
      addSegment({ isGap: true });
    }
    for (let i = 0; i < 15; i++) {
      addSegment({ pitchDelta: -Math.PI / 35 });
    }
    
    // Sprint to finish
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