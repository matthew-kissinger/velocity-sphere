/**
 * Level 29 - Quantum Tunnels
 * Simplified portal-based racing with clear mechanics
 * Focus on teleportation as understandable gameplay element
 */

export default {
  name: "Quantum Tunnels",
  description: "Navigate through quantum portals and energy fields",
  difficulty: 4,
  shader: "energy-pulse",
  skybox: "space-deep",
  
  generateTrack(addSegment) {
    // Particle accelerator entrance - wide starting area
    for (let i = 0; i < 15; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 12 }]
      });
    }
    
    // First quantum tunnel - visual pulsing effect
    for (let i = 0; i < 30; i++) {
      const pulseEffect = Math.sin(i * 0.3) * 0.5 + 1;
      
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 120,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 9 * pulseEffect }] // Pulsing width for tunnel effect
      });
    }
    
    // Portal jump 1 - clear teleportation point
    // Wide approach with visual indicator
    for (let i = 0; i < 8; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i > 5 ? Math.PI / 80 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 14 }] // Wide for clear portal entry
      });
    }
    
    // Portal gap
    for (let i = 0; i < 8; i++) {
      addSegment({ isGap: true });
    }
    
    // Portal exit - accelerator straight
    for (let i = 0; i < 25; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i < 3 ? -Math.PI / 60 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 10 }],
        isBoost: (i >= 10 && i <= 15),
        isBoostPowerup: (i === 20)
      });
    }
    
    // Quantum split paths - three-lane choice system
    for (let i = 0; i < 35; i++) {
      const splitProgress = i / 35;
      
      // Three distinct lanes that reconverge
      const laneOptions = [
        { offset: -4, width: 8 }, // Left path
        { offset: 0, width: 8 },  // Center path
        { offset: 4, width: 8 }   // Right path
      ];
      
      // Merge back together gradually
      const mergeOffset = splitProgress > 0.7 ? (1 - splitProgress) / 0.3 : 1;
      
      addSegment({
        yawDelta: Math.sin(i * 0.08) * Math.PI / 150,
        pitchDelta: Math.cos(i * 0.1) * Math.PI / 200,
        rollDelta: 0,
        lanes: laneOptions.map(lane => ({
          offset: lane.offset * mergeOffset,
          width: lane.width
        }))
      });
    }
    
    // Curved quantum tunnel with energy fields
    for (let i = 0; i < 40; i++) {
      const tunnelCurve = Math.sin(i * 0.12);
      const energyPulse = Math.sin(i * 0.4) * 0.3 + 1;
      
      addSegment({
        yawDelta: tunnelCurve * Math.PI / 100,
        pitchDelta: Math.sin(i * 0.15) * Math.PI / 250,
        rollDelta: tunnelCurve * Math.PI / 150, // Gentle banking
        lanes: [{ offset: 0, width: 10 * energyPulse }],
        isBoost: (i === 20),
        isBoostPowerup: (i === 10 || i === 30)
      });
    }
    
    // Portal jump 2 - longer teleportation
    // Buildup section
    for (let i = 0; i < 12; i++) {
      addSegment({
        yawDelta: 0,
        pitchDelta: i > 8 ? Math.PI / 60 : 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 11 }]
      });
    }
    
    // Extended portal gap
    for (let i = 0; i < 12; i++) {
      addSegment({ isGap: true });
    }
    
    // Unstable exit - slight turbulence
    for (let i = 0; i < 15; i++) {
      const turbulence = Math.max(0, 1 - i / 15);
      
      addSegment({
        yawDelta: Math.sin(i * 0.5) * Math.PI / 200 * turbulence,
        pitchDelta: i < 4 ? -Math.PI / 50 : 0,
        rollDelta: Math.sin(i * 0.3) * Math.PI / 300 * turbulence,
        lanes: [{ offset: 0, width: 10 }]
      });
    }
    
    // Particle accelerator complex - high-speed section
    for (let section = 0; section < 3; section++) {
      // Accelerator straight
      for (let i = 0; i < 20; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 9 }],
          isBoost: (i >= 8 && i <= 12 && section === 1)
        });
      }
      
      // Banked turn between sections
      if (section < 2) {
        const turnDirection = section === 0 ? 1 : -1;
        
        // Bank in
        for (let i = 0; i < 4; i++) {
          addSegment({
            rollDelta: turnDirection * Math.PI / 24
          });
        }
        
        // Turn
        for (let i = 0; i < 18; i++) {
          addSegment({
            yawDelta: turnDirection * Math.PI / 36,
            pitchDelta: 0,
            rollDelta: 0,
            lanes: [{ offset: 0, width: 10 }]
          });
        }
        
        // Bank out
        for (let i = 0; i < 4; i++) {
          addSegment({
            rollDelta: -turnDirection * Math.PI / 24
          });
        }
      }
    }
    
    // Final portal sequence - rapid succession
    for (let portal = 0; portal < 4; portal++) {
      // Short approach
      for (let i = 0; i < 6; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: i > 4 ? Math.PI / 100 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 11 }]
        });
      }
      
      // Short portal
      for (let i = 0; i < 3; i++) {
        addSegment({ isGap: true });
      }
      
      // Quick recovery
      for (let i = 0; i < 5; i++) {
        addSegment({
          pitchDelta: i < 2 ? -Math.PI / 80 : 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }],
          isBoostPowerup: (i === 3 && portal === 2)
        });
      }
    }
    
    // Quantum tunnel finale - pulsing finish
    for (let i = 0; i < 30; i++) {
      const finalPulse = Math.sin(i * 0.2) * 0.4 + 1;
      
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 180,
        pitchDelta: 0,
        rollDelta: 0,
        lanes: [{ offset: 0, width: 12 * finalPulse }],
        isBoost: (i >= 15 && i <= 22),
        isFinishLine: (i === 29)
      });
    }
  }
};