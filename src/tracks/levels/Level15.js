/**
 * Level 15 - Cloud Nine
 * Sky-high cloud racing with ethereal jumps
 * Medium difficulty with floating platform elements
 */

export default {
  name: "Cloud Nine",
  description: "Float through the clouds in this heavenly race",
  difficulty: 3,
  shader: "cloud-surface", // High contrast cloud shader
  skybox: "aurora-dance",
  
  generateTrack(addSegment) {
    // Cloud entrance - floating start with gentle curves
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 100,
        pitchDelta: Math.sin(i * 0.1) * Math.PI / 200, // Very gentle undulation
        rollDelta: Math.cos(i * 0.15) * Math.PI / 150,
        isStartLine: (i === 0),
        isBoost: (i === 15) // Boost to start the action
      });
    }
    
    // Cloud drops and flow - speed focused
    for (let drop = 0; drop < 4; drop++) {
      // Gentle approach
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: 0,
          yawDelta: Math.sin(i * 0.2 + drop) * Math.PI / 80,
          rollDelta: Math.cos(i * 0.2) * Math.PI / 150
        });
      }
      
      // Thrilling drop through clouds
      for (let i = 0; i < 15; i++) {
        addSegment({
          pitchDelta: -Math.PI / 40, // Steep drop for speed
          yawDelta: Math.sin(i * 0.1) * Math.PI / 100,
          isBoost: (i === 0) // Boost at drop start
        });
      }
      
      // Recovery and flow
      for (let i = 0; i < 10; i++) {
        addSegment({
          pitchDelta: i < 5 ? Math.PI / 80 : 0, // Gentle recovery
          yawDelta: Math.PI / 120,
          rollDelta: (drop % 2 ? 1 : -1) * Math.PI / 100
        });
      }
    }
    
    // Cloud hopping section - multiple jumps
    for (let hop = 0; hop < 5; hop++) {
      // Approach cloud
      for (let i = 0; i < 6; i++) {
        addSegment({
          pitchDelta: Math.PI / 45,
          isBoost: (i === 0) // Boost for jump
        });
      }
      // Gap between clouds
      for (let i = 0; i < 3 + hop; i++) { // Gaps get longer
        addSegment({ isGap: true });
      }
      // Landing cloud
      for (let i = 0; i < 6; i++) {
        addSegment({ pitchDelta: -Math.PI / 45 });
      }
      // Cloud surface
      for (let i = 0; i < 5; i++) {
        addSegment({ 
          yawDelta: hop % 2 ? Math.PI / 80 : -Math.PI / 80
        });
      }
    }
    
    // Wind current section - flowing curves
    const windCurrents = [
      { angle: Math.PI / 2, segments: 25, lift: true },
      { angle: -Math.PI / 1.8, segments: 30, lift: false },
      { angle: Math.PI / 2.5, segments: 20, lift: true }
    ];
    
    for (const current of windCurrents) {
      for (let i = 0; i < current.segments; i++) {
        const progress = i / current.segments;
        addSegment({
          yawDelta: current.angle / current.segments,
          pitchDelta: current.lift ? 
            Math.sin(progress * Math.PI) * Math.PI / 100 : 
            -Math.sin(progress * Math.PI) * Math.PI / 100,
          rollDelta: Math.sin(progress * Math.PI) * Math.PI / 60 * (current.angle > 0 ? 1 : -1)
        });
      }
    }
    
    // Rainbow bridge finale
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: Math.sin(i * 0.2) * Math.PI / 150,
        rollDelta: 0,
        isBoost: (i >= 15 && i <= 20),
        isFinishLine: (i === 29)
      });
    }
  }
};