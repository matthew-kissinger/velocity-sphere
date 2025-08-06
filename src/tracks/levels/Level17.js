/**
 * Level 17 - Storm Chase
 * Racing through an electric storm with chaotic elements
 * Hard difficulty with unpredictable patterns
 */

export default {
  name: "Storm Chase",
  description: "Brave the lightning and chase the storm's eye",
  difficulty: 4,
  shader: "storm-electric",
  skybox: "storm-clouds", // High contrast storm skybox
  
  generateTrack(addSegment) {
    // Storm approach - building intensity
    for (let i = 0; i < 20; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 150, // Slight wind drift
        pitchDelta: 0,
        rollDelta: 0,
        isStartLine: (i === 0),
        lanes: [{ offset: 0, width: 10 }] // Ensure proper geometry
      });
    }
    
    // Wind gust section - sudden directional changes
    const windGusts = [
      { angle: Math.PI / 6, segments: 5 },     // 30° push right
      { angle: -Math.PI / 4, segments: 8 },    // 45° push left
      { angle: Math.PI / 5, segments: 6 },     // 36° push right
      { angle: -Math.PI / 3.5, segments: 10 }, // ~51° push left
      { angle: Math.PI / 7, segments: 4 }      // ~26° push right
    ];
    
    for (const gust of windGusts) {
      // Sudden turn from wind
      for (let i = 0; i < gust.segments; i++) {
        const intensity = Math.min(i / 3, 1); // Quick ramp up
        addSegment({
          yawDelta: (gust.angle / gust.segments) * intensity,
          pitchDelta: 0, // Removed turbulence
          rollDelta: (gust.angle > 0 ? 1 : -1) * Math.PI / 60 * intensity
        });
      }
      
      // Recovery straight
      for (let i = 0; i < 3; i++) {
        addSegment({ 
          yawDelta: 0, 
          pitchDelta: 0,
          rollDelta: (gust.angle > 0 ? -1 : 1) * Math.PI / 180
        });
      }
    }
    
    // Lightning strike zone - zigzag pattern
    for (let strike = 0; strike < 4; strike++) {
      // Sharp right
      for (let i = 0; i < 6; i++) {
        addSegment({
          yawDelta: Math.PI / 24
        });
      }
      // Sharp left
      for (let i = 0; i < 6; i++) {
        addSegment({
          yawDelta: -Math.PI / 24
        });
      }
    }
    
    // Eye of the storm - calm section with split paths
    for (let i = 0; i < 5; i++) {
      const factor = i / 5;
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 6 }, // Outer edge - longer
          { offset: 8 * factor, width: 6 }   // Inner eye - shorter
        ]
      });
    }
    
    // Different storm intensities
    for (let i = 0; i < 25; i++) {
      addSegment({
        lanes: [
          { offset: -8, width: 6 }, // Outer: more turbulent
          { offset: 8, width: 6 }   // Inner: calmer
        ],
        yawDelta: i % 3 === 0 ? Math.PI / 100 : 0,
        pitchDelta: Math.sin(i * 0.3) * Math.PI / 150
      });
    }
    
    // Merge back into storm
    for (let i = 0; i < 5; i++) {
      const factor = 1 - (i / 5);
      addSegment({
        lanes: [
          { offset: -8 * factor, width: 6 },
          { offset: 8 * factor, width: 6 }
        ]
      });
    }
    
    // Storm jumps - clean jumps without turbulence
    for (let jump = 0; jump < 3; jump++) {
      // Straight approach
      for (let i = 0; i < 10; i++) {
        addSegment({
          yawDelta: 0,
          pitchDelta: 0,
          rollDelta: 0,
          lanes: [{ offset: 0, width: 10 }]
        });
      }
      
      // Jump ramp
      for (let i = 0; i < 8; i++) {
        if (i === 2) {
          // Single boost pad on left side of ramp (avoidable)
          addSegment({
            pitchDelta: Math.PI / 60,
            yawDelta: 0,
            lanes: [
              { offset: -3, width: 4, isBoost: true }, // Boost on left
              { offset: 3, width: 4 } // Clear on right
            ]
          });
        } else {
          addSegment({
            pitchDelta: Math.PI / 60,
            yawDelta: 0
          });
        }
      }
      
      // Gap
      for (let i = 0; i < 3 + jump; i++) {
        addSegment({ isGap: true });
      }
      
      // Landing
      for (let i = 0; i < 8; i++) {
        addSegment({
          pitchDelta: -Math.PI / 60,
          yawDelta: 0
        });
      }
    }
    
    // Wind tunnel section - high speed with narrowing/widening path
    for (let i = 0; i < 40; i++) {
      const phase = i / 40;
      const tunnelWidth = 8 + Math.sin(phase * Math.PI * 2) * 4; // Oscillating width
      const windPush = Math.sin(phase * Math.PI * 4) * Math.PI / 100; // Side to side
      
      addSegment({
        yawDelta: windPush,
        pitchDelta: 0,
        rollDelta: windPush * 2, // Bank with the wind
        lanes: [{ offset: 0, width: tunnelWidth }]
      });
    }
    
    // Storm wall breakthrough - series of quick turns
    const stormWallPattern = [
      { dir: 1, segments: 8 },
      { dir: -1, segments: 10 },
      { dir: 1, segments: 6 },
      { dir: -1, segments: 8 },
      { dir: 1, segments: 5 }
    ];
    
    for (const section of stormWallPattern) {
      for (let i = 0; i < section.segments; i++) {
        addSegment({
          yawDelta: section.dir * Math.PI / 50,
          pitchDelta: 0,
          rollDelta: section.dir * Math.PI / 100 * (i < section.segments/2 ? 1 : -1),
          lanes: [{ offset: 0, width: 8 }]
        });
      }
    }
    
    // Tornado alley - horizontal chaos section
    for (let i = 0; i < 40; i++) {
      const chaosIntensity = Math.sin(i * 0.1) * 0.5 + 0.5;
      const direction = Math.floor(i / 5) % 2 ? 1 : -1; // Alternating directions
      
      addSegment({
        yawDelta: direction * Math.PI / 25 * chaosIntensity, // Sharp horizontal turns
        pitchDelta: 0, // Keep it flat for speed
        rollDelta: direction * Math.PI / 40 // Heavy banking
      });
    }
    
    // Storm escape - high speed finale
    for (let i = 0; i < 30; i++) {
      addSegment({
        yawDelta: Math.sin(i * 0.1) * Math.PI / 100,
        pitchDelta: i < 15 ? -Math.PI / 100 : 0, // Slight downhill for speed
        rollDelta: 0,
        isFinishLine: (i === 29)
      });
    }
  }
};