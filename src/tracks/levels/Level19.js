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
    
    // Glacier crevasse section - dangerous gaps (FIXED: gentler ramps)
    for (let crevasse = 0; crevasse < 3; crevasse++) { // Reduced from 5 to 3 jumps
      // Approach with slight descent
      for (let i = 0; i < 10; i++) {
        addSegment({
          pitchDelta: -Math.PI / 150, // Gentler approach
          yawDelta: Math.sin(i * 0.2) * Math.PI / 120 // Ice instability
        });
      }
      
      // Jump preparation - much gentler ramp
      for (let i = 0; i < 8; i++) {
        if (i === 2 || i === 5) {
          // Multiple avoidable boosts on approach
          addSegment({
            pitchDelta: Math.PI / 90,
            lanes: [
              { offset: 0, width: 3, isBoost: true }, // Center boost
              { offset: -4, width: 2 }, // Left clear
              { offset: 4, width: 2 } // Right clear
            ]
          });
        } else {
          addSegment({
            pitchDelta: Math.PI / 90, // Much gentler climb (2 degrees per segment)
            isBoost: (i >= 6 && i <= 7) // Extra boosts at top of ramp
          });
        }
      }
      
      // Crevasse gap
      for (let i = 0; i < 3 + crevasse; i++) { // Still increasing difficulty but starting smaller
        addSegment({ isGap: true });
      }
      
      // Icy landing - gentler
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 90, // Gentler landing angle
          lanes: [{ offset: 0, width: 7 }] // Slightly wider landing
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
        rollDelta: 0
      });
    }
    
    // Epic glacier slide down - FIXED camera issue with gentler angles
    for (let i = 0; i < 45; i++) {
      const slidePhase = i / 45;
      const curveIntensity = Math.sin(slidePhase * Math.PI * 3);
      
      // Gradual increase then decrease in steepness to avoid camera lock
      let pitchAngle;
      if (i < 10) {
        pitchAngle = -Math.PI / 80 * (i / 10); // Gradual steepening
      } else if (i < 35) {
        pitchAngle = -Math.PI / 80; // Manageable consistent descent
      } else {
        pitchAngle = -Math.PI / 80 * ((45 - i) / 10); // Gradual leveling
      }
      
      addSegment({
        pitchDelta: pitchAngle, // Much gentler descent
        yawDelta: curveIntensity * Math.PI / 50, // Weaving path
        rollDelta: curveIntensity * Math.PI / 60, // Banking
        // Removed boosts - descent provides speed
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
    
    // The bridge - precision required (reduced banking)
    for (let i = 0; i < 6; i++) {
      addSegment({ rollDelta: Math.PI / 60 }); // Gentler banking
    }
    
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.PI / 60,
        pitchDelta: Math.cos(i * 0.2) * Math.PI / 150,
        lanes: [{ offset: 0, width: 5 }], // Still narrow but more manageable
        rollDelta: 0
      });
    }
    
    for (let i = 0; i < 6; i++) {
      addSegment({ rollDelta: -Math.PI / 60 });
    }
    
    // Ice slide section - thrilling descent (fixed camera angle)
    for (let i = 0; i < 20; i++) {
      const slideIntensity = i / 20;
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 80, // Weaving ice slide
        pitchDelta: -Math.PI / 90, // Much gentler descent to avoid camera lock
        rollDelta: Math.sin(i * 0.2) * Math.PI / 100,
        lanes: [{ offset: 0, width: 6 + slideIntensity * 3 }] // Widens as you go faster
      });
    }
    
    // Transition to finish - proper ending instead of vertical climb
    for (let i = 0; i < 10; i++) {
      addSegment({
        pitchDelta: i < 5 ? -Math.PI / 80 : 0, // Level out gradually
        yawDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }] // Wide finish area
      });
    }
    
    // Victory straight
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 }],
        isFinishLine: (i === 14)
      });
    }
  }
};