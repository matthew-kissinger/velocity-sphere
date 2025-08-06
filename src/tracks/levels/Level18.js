/**
 * Level 18 - Magma Core (REDESIGNED SECOND HALF)
 * Deep earth core racing with lava flows
 * EXTREME difficulty but fair and achievable
 */

export default {
  name: "Magma Core",
  description: "Race through the molten heart of the earth",
  difficulty: 6,
  shader: "lava-flow",
  skybox: "lava-storm",
  
  generateTrack(addSegment) {
    // Start at surface level - volcanic rim
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.2) * Math.PI / 100,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // Lava tube entrance - winding tunnel
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 35,
        pitchDelta: Math.cos(i * 0.1) * Math.PI / 90,
        lanes: [{ offset: 0, width: 8 }]
      });
    }
    
    // Magma chamber - multiple lava flows to avoid
    // Three parallel paths between lava flows
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 10 * factor, width: 5 }
        ]
      });
    }
    
    // Navigate between active lava flows
    for (let i = 0; i < 40; i++) {
      const lavaPattern = Math.sin(i * 0.1) * 0.5 + 0.5;
      
      if (i % 10 < 5) {
        // Lava surges - paths temporarily blocked
        addSegment({
          lanes: [
            { offset: -10, width: 5, isGap: lavaPattern > 0.7 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5, isGap: lavaPattern < 0.3 }
          ],
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120
        });
      } else {
        // Safe passages
        addSegment({
          lanes: [
            { offset: -10, width: 5 },
            { offset: 0, width: 6 },
            { offset: 10, width: 5 }
          ],
          pitchDelta: Math.sin(i * 0.2) * Math.PI / 120
        });
      }
    }
    
    // Merge paths
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -10 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 10 * factor, width: 5 }
        ]
      });
    }
    
    // ==== COMPLETELY REDESIGNED SECOND HALF ====
    
    // SECTION 4: Obsidian Canyon
    // Racing through cooled lava formations
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Canyon weaving - sharp but manageable turns
    const canyonTurns = [
      { angle: Math.PI / 2.5, segments: 20 },
      { angle: -Math.PI / 3, segments: 18 },
      { angle: Math.PI / 2.8, segments: 22 },
      { angle: -Math.PI / 2.2, segments: 25 }
    ];
    
    for (const turn of canyonTurns) {
      // Bank into turn
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? 1 : -1) * Math.PI / 60,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Execute turn with varied width
      for (let i = 0; i < turn.segments; i++) {
        const progress = i / turn.segments;
        addSegment({
          yawDelta: turn.angle / turn.segments,
          pitchDelta: Math.sin(progress * Math.PI * 2) * Math.PI / 150,
          rollDelta: 0,
          lanes: [{ 
            offset: 0, 
            width: 8 + Math.sin(progress * Math.PI) * 2 
          }]
        });
      }
      
      // Exit bank
      for (let i = 0; i < 4; i++) {
        addSegment({
          rollDelta: (turn.angle > 0 ? -1 : 1) * Math.PI / 60,
          lanes: [{ offset: 0, width: 9 }]
        });
      }
      
      // Short straight
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0
        });
      }
    }
    
    // SECTION 5: Magma Rapids
    // Fast flowing section with gentle curves
    for (let i = 0; i < 60; i++) {
      const flowPhase = i / 60;
      const rapidFlow = Math.sin(flowPhase * Math.PI * 4);
      
      addSegment({
        yawDelta: rapidFlow * Math.PI / 80,
        pitchDelta: -Math.PI / 200 + Math.sin(i * 0.1) * Math.PI / 300,
        rollDelta: rapidFlow * Math.PI / 120,
        lanes: [{ 
          offset: 0,
          width: 10
        }],
        isBoost: (i > 20 && i < 25) || (i > 40 && i < 45)
      });
    }
    
    // SECTION 6: Volcanic Ascent
    // Climbing out of the magma chamber
    for (let climb = 0; climb < 3; climb++) {
      // Approach ramp
      for (let i = 0; i < 15; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Climbing section with switchback
      for (let i = 0; i < 20; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: Math.PI / 100,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }],
          isBoost: (i > 12 && i < 16)
        });
      }
      
      // Switchback turn
      const switchDir = climb % 2 ? 1 : -1;
      for (let i = 0; i < 15; i++) {
        addSegment({
          yawDelta: switchDir * Math.PI / 15,
          pitchDelta: 0,
          rollDelta: switchDir * Math.PI / 60,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
    }
    
    // SECTION 7: Eruption Escape
    // Final sprint to the surface
    for (let i = 0; i < 40; i++) {
      const escapePhase = i / 40;
      
      addSegment({
        yawDelta: Math.sin(i * 0.15) * Math.PI / 100,
        pitchDelta: Math.PI / 120,
        rollDelta: 0,
        lanes: [{ 
          offset: 0, 
          width: 10 + escapePhase * 2
        }],
        isBoost: (i > 25 && i < 30)
      });
    }
    
    // Surface breakthrough - victory runway
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 5 ? Math.PI / 150 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }],
        isFinishLine: (i === 19)
      });
    }
  }
};