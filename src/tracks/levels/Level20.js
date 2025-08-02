/**
 * Level 20 - Elemental Nexus (REDESIGNED)
 * The ultimate challenge combining all elemental themes
 * Extreme difficulty with gravity-defying descents and speed
 */

export default {
  name: "Elemental Nexus",
  description: "Master all elements in the ultimate racing crucible",
  difficulty: 6,
  shader: "rainbow-flow", // Start with default, could implement elemental-fusion later
  skybox: "space-deep", // Void-like atmosphere
  
  generateTrack(addSegment) {
    // Nexus entrance - ominous start
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0)
      });
    }
    
    // SECTION 1: Ocean Maelstrom - spiraling whirlpool descent
    // Entry to whirlpool
    for (let i = 0; i < 10; i++) {
      addSegment({ 
        yawDelta: Math.PI / 100 * (i / 10), // Accelerating turn
        pitchDelta: -Math.PI / 120 * (i / 10), // Gradual descent
        rollDelta: Math.PI / 60
      });
    }
    
    // Whirlpool spiral descent - pure downward spiral
    for (let i = 0; i < 50; i++) {
      const intensity = Math.min(i / 25, 1);
      addSegment({
        yawDelta: Math.PI / 12 * intensity, // Tightening spiral
        pitchDelta: -Math.PI / 35, // Steep constant descent
        rollDelta: 0,
        lanes: [{ offset: 0, width: 8 - intensity * 2 }], // Narrowing path
        isBoost: (i % 15 === 0) // Whirlpool acceleration
      });
    }
    
    // Escape jump
    for (let i = 0; i < 5; i++) {
      addSegment({ pitchDelta: -Math.PI / 25 }); // Down ramp
    }
    for (let i = 0; i < 8; i++) {
      addSegment({ isGap: true }); // Long water escape
    }
    
    // SECTION 2: Desert Sandstorm - horizontal speed chaos
    // Landing and transition
    for (let i = 0; i < 10; i++) {
      addSegment({
        pitchDelta: i < 5 ? -Math.PI / 40 : 0,
        isBoost: (i >= 7) // Desert heat boost
      });
    }
    
    // Sandstorm slalom - pure horizontal challenge
    const stormTurns = [
      Math.PI/2, -Math.PI/2.5, Math.PI/3, -Math.PI/2, Math.PI/2.2, -Math.PI/1.8
    ];
    
    for (let turn of stormTurns) {
      const segments = Math.floor(Math.abs(turn) * 8);
      // Bank into turn
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          rollDelta: (turn > 0 ? 1 : -1) * Math.PI / 30,
          pitchDelta: -Math.PI / 150 // Maintain slight descent
        });
      }
      // Execute turn
      for (let i = 0; i < segments; i++) {
        addSegment({
          yawDelta: turn / segments,
          pitchDelta: -Math.PI / 100, // Keep momentum
          lanes: [{ offset: Math.sin(i * 0.3) * 2, width: 7 }] // Shifting sands
        });
      }
      // Exit bank
      for (let i = 0; i < 3; i++) {
        addSegment({ rollDelta: (turn > 0 ? -1 : 1) * Math.PI / 30 });
      }
    }
    
    // SECTION 3: Forest Freefall - vertical drop through trees
    // Platform before the drop
    for (let i = 0; i < 8; i++) {
      addSegment({
        pitchDelta: 0,
        isBoost: (i >= 5) // Boost before drop
      });
    }
    
    // EPIC FOREST DROP - near vertical descent
    for (let i = 0; i < 25; i++) {
      addSegment({
        pitchDelta: -Math.PI / 20, // VERY steep drop
        yawDelta: Math.sin(i * 0.2) * Math.PI / 50, // Weaving between trees
        lanes: [{ 
          offset: Math.sin(i * 0.3) * 3, 
          width: 5 + Math.sin(i * 0.4) * 2 
        }], // Dynamic tree gaps
        isBoost: (i % 8 === 0) // Gravity boosts
      });
    }
    
    // Pull out with multiple paths
    for (let i = 0; i < 5; i++) {
      addSegment({
        lanes: [
          { offset: -6, width: 5 },
          { offset: 0, width: 6 },
          { offset: 6, width: 5 }
        ],
        pitchDelta: i < 3 ? -Math.PI / 50 : 0
      });
    }
    
    // SECTION 4: Sky Plummet - replaced climb with massive drop
    // Brief flat before the plunge
    for (let i = 0; i < 20; i++) {
      addSegment({
        lanes: [
          { offset: -6, width: 5 },
          { offset: 0, width: 6 },
          { offset: 6, width: 5 }
        ],
        pitchDelta: 0,
        yawDelta: Math.sin(i * 0.1) * Math.PI / 100
      });
    }
    
    // Merge for sky drop
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -6 * factor, width: 5 },
          { offset: 0, width: 6 },
          { offset: 6 * factor, width: 5 }
        ]
      });
    }
    
    // ULTIMATE SKY DROP - the big one
    for (let i = 0; i < 40; i++) {
      const dropPhase = i / 40;
      addSegment({
        pitchDelta: -Math.PI / 25 - (dropPhase * Math.PI / 40), // Accelerating drop
        yawDelta: 0, // Straight down for maximum speed
        rollDelta: Math.sin(i * 0.1) * Math.PI / 100, // Slight rotation
        lanes: [{ offset: 0, width: 10 }], // Wide for high speed
        isBoost: (i % 5 === 0) // Frequent boosts
      });
    }
    
    // SECTION 5: Lightning Valley - horizontal zigzag at high speed
    // Landing zone
    for (let i = 0; i < 10; i++) {
      addSegment({
        pitchDelta: i < 5 ? -Math.PI / 60 : 0,
        lanes: [{ offset: 0, width: 12 }] // Extra wide for landing
      });
    }
    
    // Lightning pattern - pure horizontal
    const lightning = [
      { dir: 1, angle: Math.PI/3 },
      { dir: -1, angle: Math.PI/2.5 },
      { dir: 1, angle: Math.PI/4 },
      { dir: -1, angle: Math.PI/3 },
      { dir: 1, angle: Math.PI/3.5 }
    ];
    
    for (let bolt of lightning) {
      const segs = Math.floor(bolt.angle * 10);
      for (let i = 0; i < segs; i++) {
        addSegment({
          yawDelta: bolt.dir * bolt.angle / segs,
          pitchDelta: -Math.PI / 200, // Very gentle descent
          rollDelta: bolt.dir * Math.PI / 40,
          isBoost: (i === 0) // Boost at each turn
        });
      }
    }
    
    // SECTION 6: Ice Toboggan - downhill ice slide
    for (let i = 0; i < 35; i++) {
      const slideProgress = i / 35;
      addSegment({
        pitchDelta: -Math.PI / 40 - (Math.sin(i * 0.1) * Math.PI / 80), // Undulating descent
        yawDelta: Math.sin(i * 0.15) * Math.PI / 40, // Ice slide curves
        rollDelta: Math.sin(i * 0.15) * Math.PI / 50,
        lanes: [{ 
          offset: 0, 
          width: 6 + slideProgress * 2 // Widening as speed increases
        }],
        isBoost: (i % 10 === 5) // Regular ice boosts
      });
    }
    
    // SECTION 7: Lava Falls Finale - the ultimate descent
    // Lava waterfall approach
    for (let i = 0; i < 15; i++) {
      addSegment({ 
        pitchDelta: -Math.PI / 80,
        yawDelta: 0,
        isBoost: (i >= 10) // Building speed
      });
    }
    
    // LAVA FALLS - multiple tier drops
    for (let tier = 0; tier < 3; tier++) {
      // Approach
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 100,
          lanes: [{ offset: 0, width: 10 - tier * 2 }] // Narrowing with each tier
        });
      }
      
      // Drop
      for (let i = 0; i < 12; i++) {
        addSegment({
          pitchDelta: -Math.PI / 18, // Nearly vertical!
          yawDelta: tier % 2 ? Math.PI / 80 : -Math.PI / 80,
          isBoost: true // Continuous boost in freefall
        });
      }
      
      // Splash landing
      for (let i = 0; i < 5; i++) {
        addSegment({
          pitchDelta: i < 3 ? -Math.PI / 50 : 0,
          lanes: [{ offset: 0, width: 12 }] // Wide landing zone
        });
      }
    }
    
    // Victory sprint - final straight
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: -Math.PI / 150, // Gentle descent to finish
        rollDelta: 0,
        lanes: [{ offset: 0, width: 15 }], // Victory lane
        isBoost: (i >= 15 && i <= 25), // Final boost zone
        isFinishLine: (i === 29)
      });
    }
  }
};