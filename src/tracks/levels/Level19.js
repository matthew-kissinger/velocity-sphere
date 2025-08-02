/**
 * Level 19 - Arctic Rush
 * Icy surface racing with challenging arctic conditions
 * Hard difficulty with slippery surfaces and precision required
 */

export default {
  name: "Arctic Rush",
  description: "Master the ice in this frozen racing challenge",
  difficulty: 5,
  shader: "ice-surface",
  skybox: "arctic-wind", // High contrast arctic skybox
  
  generateTrack(addSegment) {
    // Arctic entry - frozen wasteland
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Ice sheet slalom - precise turns on slippery surface
    const slalomGates = [
      { angle: Math.PI / 3, segments: 12 },    // 60° right
      { angle: -Math.PI / 2.5, segments: 15 }, // 72° left  
      { angle: Math.PI / 2.2, segments: 14 },  // ~82° right
      { angle: -Math.PI / 2.8, segments: 13 }, // ~64° left
      { angle: Math.PI / 3.5, segments: 10 },  // ~51° right
      { angle: -Math.PI / 3, segments: 12 }    // 60° left
    ];
    
    for (const gate of slalomGates) {
      // Sharp turn with banking
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (gate.angle > 0 ? 1 : -1) * Math.PI / 40
        });
      }
      
      for (let i = 0; i < gate.segments; i++) {
        addSegment({
          yawDelta: gate.angle / gate.segments,
          lanes: [{ offset: 0, width: 7 }] // Narrower on ice
        });
      }
      
      for (let i = 0; i < 4; i++) {
        addSegment({ 
          rollDelta: (gate.angle > 0 ? -1 : 1) * Math.PI / 40
        });
      }
      
      // Minimal recovery
      for (let i = 0; i < 2; i++) {
        addSegment({ yawDelta: 0, pitchDelta: 0 });
      }
    }
    
    // Glacier crevasse section - dangerous gaps
    for (let crevasse = 0; crevasse < 5; crevasse++) {
      // Approach with slight descent
      for (let i = 0; i < 10; i++) {
        addSegment({
          pitchDelta: -Math.PI / 100,
          yawDelta: Math.sin(i * 0.2) * Math.PI / 120 // Ice instability
        });
      }
      
      // Jump preparation
      for (let i = 0; i < 6; i++) {
        addSegment({
          pitchDelta: Math.PI / 35,
          isBoost: (i === 0) // Need boost for icy takeoff
        });
      }
      
      // Crevasse gap
      for (let i = 0; i < 4 + crevasse; i++) { // Increasing difficulty
        addSegment({ isGap: true });
      }
      
      // Icy landing - careful!
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 40,
          lanes: [{ offset: 0, width: 6 }] // Narrow landing
        });
      }
    }
    
    // Frozen tunnel - tight ice cave
    for (let i = 0; i < 40; i++) {
      const tunnelCurve = Math.sin(i * 0.1) * Math.PI / 30;
      const tunnelBank = Math.cos(i * 0.08) * Math.PI / 50;
      
      addSegment({
        yawDelta: tunnelCurve,
        pitchDelta: Math.sin(i * 0.15) * Math.PI / 120,
        rollDelta: tunnelBank,
        lanes: [{ offset: 0, width: 5 }] // Very tight!
      });
    }
    
    // Glacier slide - thrilling descent section
    // Start at glacier peak
    for (let i = 0; i < 10; i++) {
      addSegment({
        pitchDelta: 0,
        yawDelta: 0,
        rollDelta: 0,
        isBoost: (i === 8) // Boost before drop
      });
    }
    
    // Epic glacier slide down
    for (let i = 0; i < 45; i++) {
      const slidePhase = i / 45;
      const curveIntensity = Math.sin(slidePhase * Math.PI * 3);
      
      addSegment({
        pitchDelta: -Math.PI / 40, // Consistent steep descent
        yawDelta: curveIntensity * Math.PI / 50, // Weaving path
        rollDelta: curveIntensity * Math.PI / 60, // Banking
        isBoost: (i % 15 === 0), // Speed boosts
        lanes: [{ 
          offset: 0, 
          width: 7 + Math.sin(i * 0.1) * 2 // Variable width ice channels
        }]
      });
    }
    
    // Ice bridge finale - narrow and precarious
    // Approach
    for (let i = 0; i < 10; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0
      });
    }
    
    // The bridge - extreme precision required
    for (let i = 0; i < 8; i++) {
      addSegment({ rollDelta: Math.PI / 30 }); // Heavy banking
    }
    
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.PI / 60,
        pitchDelta: Math.cos(i * 0.2) * Math.PI / 150,
        lanes: [{ offset: 0, width: 4 }], // Extremely narrow!
        rollDelta: 0
      });
    }
    
    for (let i = 0; i < 8; i++) {
      addSegment({ rollDelta: -Math.PI / 30 });
    }
    
    // Ice slide finale - thrilling descent to finish
    for (let i = 0; i < 30; i++) {
      const slideIntensity = i / 30;
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 80, // Weaving ice slide
        pitchDelta: -Math.PI / 40 - (slideIntensity * Math.PI / 60), // Accelerating descent
        rollDelta: Math.sin(i * 0.2) * Math.PI / 100,
        lanes: [{ offset: 0, width: 6 + slideIntensity * 4 }], // Widens as you go faster
        isBoost: (i >= 10 && i <= 20), // Extended boost zone
        isFinishLine: (i === 29)
      });
    }
  }
};