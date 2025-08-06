/**
 * Level 45 - Crystal Cavern
 * Natural cave section with glowing crystal formations
 * Mix of organic curves and crystalline structures
 */

export default {
  name: "Crystal Cavern",
  description: "Navigate through bioluminescent crystal caves",
  difficulty: 3,
  shader: "cyber-tunnel",

  skybox: "crystal-cavern",
  
  generateTrack(addSegment) {
    // Cavern entrance
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 14 }]
      });
    }
    
    // Descend into main cavern
    for (let i = 0; i < 30; i++) {
      const descent = -Math.PI / 180;
      const widthExpansion = 14 + (i / 30) * 6; // Expanding cavern
      
      addSegment({
        pitchDelta: descent,
        lanes: [{ offset: 0, width: widthExpansion }],
        // No boost needed - descent provides speed
      });
    }
    
    // Crystal field - winding path through formations
    for (let i = 0; i < 60; i++) {
      // Organic cave curves
      const caveFlow = Math.sin(i * 0.1) * Math.PI / 80;
      const elevation = Math.sin(i * 0.15) * Math.PI / 200;
      
      // Width varies with "crystal clusters"
      const crystalEffect = 16 + Math.sin(i * 0.3) * 4;
      
      addSegment({
        yawDelta: caveFlow,
        pitchDelta: elevation,
        lanes: [{ offset: 0, width: crystalEffect }],
        // No powerup needed
      });
    }
    
    // Crystal tunnel - narrow passage
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 9 }],
        // No boost needed in tunnel
      });
    }
    
    // Underground lake section - split paths around water
    for (let i = 0; i < 45; i++) {
      if (i < 10) {
        // Path splits around lake
        const splitFactor = i / 10;
        addSegment({
          lanes: [
            { offset: -12 * splitFactor, width: 10 },
            { offset: 12 * splitFactor, width: 10 }
          ]
        });
      } else if (i < 35) {
        // Curved paths around lake edge
        const lakeProgress = (i - 10) / 25;
        const lakeCurve = Math.sin(lakeProgress * Math.PI) * Math.PI / 100;
        
        addSegment({
          yawDelta: lakeCurve,
          lanes: [
            { offset: -12, width: 10 },
            { offset: 12, width: 10 }
          ],
          // No boost needed
        });
      } else {
        // Paths merge
        const mergeFactor = 1 - (i - 35) / 10;
        addSegment({
          lanes: [
            { offset: -12 * mergeFactor, width: 10 },
            { offset: 12 * mergeFactor, width: 10 }
          ]
        });
      }
    }
    
    // Crystal cathedral - large open chamber
    for (let i = 0; i < 40; i++) {
      // Sweeping turns in open space
      const cathedralTurn = Math.sin(i * 0.08) * Math.PI / 60;
      
      addSegment({
        yawDelta: cathedralTurn,
        lanes: [{ offset: 0, width: 20 }], // Very wide
        // No boost needed - wide open chamber
      });
    }
    
    // Stalactite slalom
    for (let i = 0; i < 50; i++) {
      // Quick direction changes
      const slalomAngle = Math.sin(i * 0.4) * Math.PI / 100;
      const slalomWidth = 11 + Math.cos(i * 0.4) * 2;
      
      addSegment({
        yawDelta: slalomAngle,
        lanes: [{ offset: 0, width: slalomWidth }]
      });
    }
    
    // Crystal spire climb
    for (let i = 0; i < 35; i++) {
      // Spiral up around crystal formation
      const spiralAngle = Math.PI / 40;
      const climbAngle = Math.PI / 200;
      
      addSegment({
        yawDelta: spiralAngle,
        pitchDelta: climbAngle,
        rollDelta: (i < 5) ? Math.PI / 50 : (i > 30) ? -Math.PI / 50 : 0,
        lanes: [{ offset: 0, width: 12 }],
        // Single boost for climb
        isBoost: (i === 15)
      });
    }
    
    // Exit tunnel rush
    for (let i = 0; i < 30; i++) {
      addSegment({
        lanes: [{ offset: 0, width: 14 }],
        isFinishLine: (i === 29)
      });
    }
  }
};