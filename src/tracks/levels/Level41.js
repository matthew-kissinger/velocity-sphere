/**
 * Level 41 - Underground Entry
 * Opening level of Circuit Epsilon (Neon Underground)
 * Tutorial descent into the underground tunnel system
 */

export default {
  name: "Underground Entry",
  description: "Descend into the neon-lit tunnels below",
  difficulty: 2,
  shader: "neon-pulse",

  skybox: "neon-city",
  
  generateTrack(addSegment) {
    // Surface approach
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Tunnel entrance descent
    for (let i = 0; i < 30; i++) {
      addSegment({
        pitchDelta: -Math.PI / 150, // Gentle descent
        lanes: [{ offset: 0, width: 14 }]
        // No boost needed - descent provides speed
      });
    }
    
    // First underground curve - wide and welcoming
    const entryCurve = Math.PI / 2; // 90 degree turn
    const curveSegments = 35;
    
    // Bank into turn
    for (let i = 0; i < 5; i++) {
      addSegment({
        rollDelta: Math.PI / 40,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Execute turn
    for (let i = 0; i < curveSegments; i++) {
      addSegment({
        yawDelta: entryCurve / curveSegments,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Bank out
    for (let i = 0; i < 5; i++) {
      addSegment({
        rollDelta: -Math.PI / 40,
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Neon corridor - straight section with visual spectacle
    for (let i = 0; i < 40; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 12 }]
        // No boost needed
      });
    }
    
    // S-curve through data streams
    const sCurveAngle = Math.PI / 3;
    const sCurveSegs = 25;
    
    // First curve (left)
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: -Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    for (let i = 0; i < sCurveSegs; i++) {
      addSegment({
        yawDelta: -sCurveAngle / sCurveSegs,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Second curve (right)
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    for (let i = 0; i < sCurveSegs; i++) {
      addSegment({
        yawDelta: sCurveAngle / sCurveSegs,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    for (let i = 0; i < 3; i++) {
      addSegment({
        rollDelta: -Math.PI / 50,
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // Underground plaza - wide open area
    for (let i = 0; i < 30; i++) {
      const widthVariation = Math.sin(i * 0.2) * 3 + 15;
      addSegment({
        lanes: [{ offset: 0, width: widthVariation }]
        // No boost needed
      });
    }
    
    // Final tunnel run to finish
    for (let i = 0; i < 35; i++) {
      // Gentle weaving
      const weave = Math.sin(i * 0.15) * Math.PI / 200;
      addSegment({
        yawDelta: weave,
        lanes: [{ offset: 0, width: 12 }],
        isFinishLine: (i === 34)
      });
    }
  }
};