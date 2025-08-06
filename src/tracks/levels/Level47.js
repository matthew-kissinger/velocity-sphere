/**
 * Level 47 - Subway Rush
 * Multi-path racing through abandoned subway tunnels
 * Features parallel tracks and platform sections
 */

export default {
  name: "Subway Rush",
  description: "Speed through abandoned underground transit tunnels",
  difficulty: 3,
  shader: "neon-pulse",

  skybox: "cave-depths",
  
  generateTrack(addSegment) {
    // Station platform start
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 18 }] // Wide platform area
      });
    }
    
    // Enter tunnel system - narrowing
    for (let i = 0; i < 15; i++) {
      const narrowFactor = 1 - (i / 15) * 0.4;
      addSegment({
        lanes: [{ offset: 0, width: 18 * narrowFactor }],
        // No boost needed
      });
    }
    
    // Twin tunnel section - classic subway tracks
    for (let i = 0; i < 50; i++) {
      // Gentle curves like real subway
      const subwayCurve = Math.sin(i * 0.08) * Math.PI / 150;
      
      addSegment({
        yawDelta: subwayCurve,
        lanes: [
          { offset: -8, width: 9 },   // Left track
          { offset: 8, width: 9 }     // Right track
        ],
        // No boost needed
      });
    }
    
    // Station bypass - wider area with pillars
    for (let i = 0; i < 35; i++) {
      // Create pillar obstacles effect
      let laneConfig;
      if (i % 8 < 2) {
        // Pillar sections - three narrow lanes
        laneConfig = [
          { offset: -12, width: 6 },
          { offset: 0, width: 6 },
          { offset: 12, width: 6 }
        ];
      } else {
        // Open sections
        laneConfig = [{ offset: 0, width: 20 }];
      }
      
      addSegment({
        lanes: laneConfig,
        // No boost needed
      });
    }
    
    // Express tunnel - high speed section
    for (let i = 0; i < 60; i++) {
      // Long sweeping curves
      const expressCurve = Math.sin(i * 0.05) * Math.PI / 100;
      
      addSegment({
        yawDelta: expressCurve,
        lanes: [{ offset: 0, width: 11 }],
        // No boost needed - express tunnel naturally fast
      });
    }
    
    // Junction complex - multiple crossing paths
    for (let i = 0; i < 45; i++) {
      if (i < 15) {
        // Diverging paths
        const diverge = i / 15;
        addSegment({
          lanes: [
            { offset: -15 * diverge, width: 8 },
            { offset: 0, width: 8 },
            { offset: 15 * diverge, width: 8 }
          ]
        });
      } else if (i < 30) {
        // Crossing section - paths weave
        const weaveProgress = (i - 15) / 15;
        addSegment({
          lanes: [
            { offset: -15, width: 8 }, // Fixed offset for performance
            { offset: 0, width: 8 },
            { offset: 15, width: 8 }
          ]
        });
      } else {
        // Converge back
        const converge = 1 - (i - 30) / 15;
        addSegment({
          lanes: [
            { offset: 15 * converge, width: 8 },
            { offset: 0, width: 8 },
            { offset: -15 * converge, width: 8 }
          ]
        });
      }
    }
    
    // Service tunnel shortcut
    for (let i = 0; i < 30; i++) {
      // Tighter, more technical path
      const serviceTurn = Math.sin(i * 0.2) * Math.PI / 80;
      
      addSegment({
        yawDelta: serviceTurn,
        lanes: [{ offset: 0, width: 9 }],
        // No boost needed
      });
    }
    
    // Final platform rush
    for (let i = 0; i < 40; i++) {
      // Platform edge racing
      const platformWeave = Math.sin(i * 0.15) * Math.PI / 120;
      
      // Gradually widen for finish
      const finishWidth = 12 + (i / 40) * 6;
      
      addSegment({
        yawDelta: platformWeave,
        lanes: [{ offset: 0, width: finishWidth }],
        isFinishLine: (i === 39)
      });
    }
  }
};