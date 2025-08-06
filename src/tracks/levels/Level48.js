/**
 * Level 48 - Laser Maze
 * Weaving through laser grid obstacles
 * High precision required to navigate the bright laser patterns
 */

export default {
  name: "Laser Maze",
  description: "Navigate the high-security laser grid system",
  difficulty: 5,
  shader: "neon-pulse",
  skybox: "space-deep",
  
  generateTrack(addSegment) {
    // Security entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // First laser corridor - alternating gaps
    for (let i = 0; i < 40; i++) {
      // Create laser gate effect with varying widths
      const laserPattern = (i % 8);
      let laneConfig;
      
      if (laserPattern < 2) {
        // Left passage only
        laneConfig = [{ offset: -6, width: 8 }];
      } else if (laserPattern < 4) {
        // Center passage
        laneConfig = [{ offset: 0, width: 8 }];
      } else if (laserPattern < 6) {
        // Right passage only
        laneConfig = [{ offset: 6, width: 8 }];
      } else {
        // Full width between gates
        laneConfig = [{ offset: 0, width: 14 }];
      }
      
      addSegment({
        lanes: laneConfig,
        // No boost needed
      });
    }
    
    // Rotating laser section - spiral challenge
    const spiralSegments = 50;
    for (let i = 0; i < spiralSegments; i++) {
      const spiralProgress = i / spiralSegments;
      const spiralTurn = Math.PI * 1.5 / spiralSegments;
      
      // Width pulses to simulate rotating beams
      const beamEffect = 10 + Math.sin(spiralProgress * Math.PI * 8) * 3;
      
      addSegment({
        yawDelta: spiralTurn,
        rollDelta: (i < 5) ? Math.PI / 40 : (i > 45) ? -Math.PI / 40 : 0,
        lanes: [{ offset: 0, width: beamEffect }],
        // No powerup needed
      });
    }
    
    // Laser grid room - multiple safe paths
    for (let i = 0; i < 35; i++) {
      // Complex multi-path laser pattern
      const gridPhase = i % 10;
      let laneConfig;
      
      if (gridPhase < 3) {
        // Diagonal paths available
        laneConfig = [
          { offset: -10, width: 6 },
          { offset: 10, width: 6 }
        ];
      } else if (gridPhase < 6) {
        // Center path clear
        laneConfig = [{ offset: 0, width: 7 }];
      } else {
        // All paths available
        laneConfig = [
          { offset: -10, width: 5 },
          { offset: 0, width: 5 },
          { offset: 10, width: 5 }
        ];
      }
      
      addSegment({
        lanes: laneConfig
      });
    }
    
    // Vertical laser shaft - elevation changes
    for (let i = 0; i < 30; i++) {
      // Climb through vertical laser array
      const climbAngle = Math.PI / 180;
      const dodgePattern = Math.sin(i * 0.3) * 4;
      
      addSegment({
        pitchDelta: climbAngle,
        lanes: [{ offset: 0, width: 8 }], // Fixed offset for performance
        // No boost needed
      });
    }
    
    // Laser canyon - high speed weaving
    for (let i = 0; i < 60; i++) {
      // Fast slalom through laser gates
      const slalomAngle = Math.sin(i * 0.25) * Math.PI / 60;
      const gateWidth = 9 + Math.abs(Math.sin(i * 0.25)) * 2;
      
      addSegment({
        yawDelta: slalomAngle,
        lanes: [{ offset: 0, width: gateWidth }],
        // No boost needed
      });
    }
    
    // Security vault - tight precision section
    for (let i = 0; i < 40; i++) {
      // Very technical laser patterns
      const vaultPattern = i % 12;
      let laneConfig;
      
      if (vaultPattern < 3) {
        // Single narrow path - left
        laneConfig = [{ offset: -5, width: 6 }];
      } else if (vaultPattern < 6) {
        // Single narrow path - right
        laneConfig = [{ offset: 5, width: 6 }];
      } else if (vaultPattern < 9) {
        // Gap jump required
        laneConfig = [{ offset: 0, width: 7 }];
        if (vaultPattern === 7) {
          addSegment({
            lanes: laneConfig,
            isGap: true
          });
          continue;
        }
      } else {
        // Brief respite
        laneConfig = [{ offset: 0, width: 10 }];
      }
      
      addSegment({
        lanes: laneConfig
      });
    }
    
    // Escape tunnel - final sprint
    for (let i = 0; i < 35; i++) {
      // Descending escape route
      const escapeDescent = -Math.PI / 200;
      
      addSegment({
        pitchDelta: (i < 20) ? escapeDescent : 0,
        lanes: [{ offset: 0, width: 12 }],
        isFinishLine: (i === 34)
      });
    }
  }
};