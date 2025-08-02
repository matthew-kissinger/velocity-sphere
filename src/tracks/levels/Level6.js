/**
 * Level 6 - Inferno
 * Volcanic track with flowing lava aesthetics
 */

export default {
  name: "Inferno",
  description: "Race through molten passages with flowing heat",
  difficulty: 3,
  shader: "lava-flow", // Hot flowing theme
  skybox: "lava-storm", // Matching volcanic atmosphere
  
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
    
    // First loop of the eight - go right and up slightly
    const loop1Segments = 60;
    const loop1Angle = Math.PI * 2;
    for (let i = 0; i < loop1Segments; i++) {
      const progress = i / loop1Segments;
      // Gradual elevation change to create the overpass
      let pitch = 0;
      if (progress > 0.3 && progress < 0.7) {
        // Rise up in the middle portion
        pitch = Math.sin((progress - 0.3) * Math.PI / 0.4) * Math.PI / 100;
      }
      
      addSegment({ 
        yawDelta: loop1Angle / loop1Segments,
        pitchDelta: pitch
      });
    }
    
    // Straight crossover section (elevated)
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: 0, pitchDelta: 0 });
    }
    
    // Second loop of the eight - go left and down
    const loop2Segments = 60;
    const loop2Angle = -Math.PI * 2;
    for (let i = 0; i < loop2Segments; i++) {
      const progress = i / loop2Segments;
      // Gradual descent back to ground level
      let pitch = 0;
      if (progress > 0.3 && progress < 0.7) {
        // Descend in the middle portion
        pitch = -Math.sin((progress - 0.3) * Math.PI / 0.4) * Math.PI / 100;
      }
      
      addSegment({ 
        yawDelta: loop2Angle / loop2Segments,
        pitchDelta: pitch
      });
    }
    
    // Chicane section after the figure-8
    for (let i = 0; i < 10; i++) {
      addSegment({ yawDelta: -Math.PI / 50 });
    }
    for (let i = 0; i < 20; i++) {
      addSegment({ yawDelta: Math.PI / 50 });
    }
    for (let i = 0; i < 10; i++) {
      addSegment({ yawDelta: -Math.PI / 50 });
    }
    
    // Split path choice
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 6 },
          { offset: 8 * factor, width: 6 }
        ]
      });
    }
    
    // Left path: narrow but shorter
    // Right path: wider but with jump
    for (let i = 0; i < 25; i++) {
      if (i > 10 && i < 15) {
        // Jump on right path only
        addSegment({
          lanes: [
            { offset: -8, width: 4 },  // Narrow left
            { offset: 8, width: 8 }    // Wide right
          ],
          pitchDelta: i < 13 ? Math.PI / 40 : -Math.PI / 40
        });
      } else if (i >= 15 && i < 18) {
        // Gap on right path
        addSegment({
          lanes: [
            { offset: -8, width: 4 },
            { offset: 8, width: 8, isGap: true }
          ]
        });
      } else {
        // Normal split
        addSegment({
          lanes: [
            { offset: -8, width: 4 },
            { offset: 8, width: 8 }
          ],
          yawDelta: Math.PI / 200  // Slight curve
        });
      }
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 4 + 2 * (1-factor) },
          { offset: 8 * factor, width: 8 - 2 * (1-factor) }
        ]
      });
    }
    
    // Final sprint
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isFinishLine: (i === 24)
      });
    }
  }
};