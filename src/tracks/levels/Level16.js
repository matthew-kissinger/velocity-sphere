/**
 * Level 16 - Cave Crystal (REDESIGNED)
 * Underground crystal exploration with logical flow
 * Medium difficulty with proper progression
 */

export default {
  name: "Cave Crystal",
  description: "Explore the glowing crystal caverns in a thrilling underground race",
  difficulty: 4,
  shader: "crystal-surface",
  skybox: "crystal-cavern", // Vibrant crystal cave atmosphere
  
  generateTrack(addSegment) {
    // Cave entrance - gentle slope into the cavern
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 80, // Gentle descent
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // First cavern chamber - wide turns with crystal formations
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 60, // Gentle curves
        pitchDelta: 0 // Flat for speed
      });
    }
    
    // Crystal gallery - sweeping turns around formations
    const galleryTurns = [
      { angle: Math.PI / 3, segments: 15 },    // 60° right
      { angle: -Math.PI / 2.5, segments: 18 }, // 72° left
      { angle: Math.PI / 4, segments: 12 },    // 45° right
      { angle: -Math.PI / 3.5, segments: 14 }  // ~51° left
    ];
    
    for (const turn of galleryTurns) {
      // Bank into turn
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 60
        });
      }
      
      // Execute turn around crystal formations
      for (let i = 0; i < turn.segments; i++) {
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 150, // Slight undulation
          lanes: [{ offset: 0, width: 8 }] // Good width for medium difficulty
        });
      }
      
      // Exit bank
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 60
        });
      }
      
      // Straight section between turns
      for (let i = 0; i < 5; i++) {
        addSegment({ });
      }
    }
    
    // Underground lake crossing - jumping between platforms
    for (let platform = 0; platform < 4; platform++) {
      // Platform approach
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: 0,
          yawDelta: 0
        });
      }
      
      // Ramp up for jump
      for (let i = 0; i < 3; i++) {
        addSegment({
          pitchDelta: Math.PI / 50
        });
      }
      
      // Gap over water
      for (let i = 0; i < 3 + platform; i++) { // Gaps get longer
        addSegment({ isGap: true });
      }
      
      // Landing platform
      for (let i = 0; i < 6; i++) {
        addSegment({ 
          pitchDelta: i < 3 ? -Math.PI / 50 : 0
        });
      }
    }
    
    // Crystal slide section - flowing descent
    for (let i = 0; i < 30; i++) {
      const slideProgress = i / 30;
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 50, // S-curves
        pitchDelta: -Math.PI / 70, // Moderate descent
        rollDelta: Math.sin(i * 0.15) * Math.PI / 80, // Banking
        lanes: [{ offset: 0, width: 8 + slideProgress * 2 }] // Widening path
      });
    }
    
    // Glowing crystal chamber - spectacular finish
    // Wide open racing with gentle curves
    for (let i = 0; i < 40; i++) {
      const chamberFlow = Math.sin(i * 0.1) * Math.PI / 60;
      addSegment({
        yawDelta: chamberFlow,
        pitchDelta: 0, // Flat for final speed section
        rollDelta: chamberFlow * 0.5,
        lanes: [{ offset: 0, width: 12 }] // Wide open racing
      });
    }
    
    // Exit tunnel - climb back to surface
    for (let i = 0; i < 20; i++) {
      if (i === 5) {
        // Single boost pad at start of climb (avoidable - center lane)
        addSegment({
          yawDelta: 0,
          pitchDelta: Math.PI / 100,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 4 }], // Half width - avoidable
          isBoost: true
        });
      } else {
        addSegment({
          yawDelta: 0,
          pitchDelta: Math.PI / 100, // Gentle climb
          rollDelta: 0
        });
      }
    }
    
    // Final sprint to daylight
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }],
        isFinishLine: (i === 14)
      });
    }
  }
};