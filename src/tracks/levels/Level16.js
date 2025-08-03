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
        pitchDelta: 0, // Flat for speed
        isBoost: (i === 12) // Mid-section boost
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
        addSegment({ 
          isBoost: (i === 2) // Boost in straights
        });
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
      
      // Bounce pad for jump
      addSegment({
        isBouncePad: true
      });
      
      // Gap over water
      for (let i = 0; i < 3 + platform; i++) { // Gaps get longer
        addSegment({ isGap: true });
      }
      
      // Landing platform
      for (let i = 0; i < 6; i++) {
        addSegment({ 
          pitchDelta: 0,
          isBoost: (i === 3) // Boost after landing
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
        lanes: [{ offset: 0, width: 8 + slideProgress * 2 }], // Widening path
        isBoost: (i % 10 === 5) // Regular boosts
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
        lanes: [{ offset: 0, width: 12 }], // Wide open racing
        isBoost: (i % 8 === 0) // Frequent boosts
      });
    }
    
    // Exit tunnel - climb back to surface
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.PI / 100, // Gentle climb
        rollDelta: 0,
        isBoost: (i === 5 || i === 15) // Help with the climb
      });
    }
    
    // Final sprint to daylight
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }],
        isBoost: (i >= 8 && i <= 11), // Final boost zone
        isFinishLine: (i === 14)
      });
    }
  }
};