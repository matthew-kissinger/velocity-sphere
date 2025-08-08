// Circuit Zeta — L7: Helix Overpass (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Helix Overpass',
  description: 'Two-turn helix descent feeding a hero ramp and panoramic runout',
  difficulty: 2,
  shader: 'rainbow-flow',
  skybox: 'neon-city',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Two-turn helix
    Presets.addSpiralStairDescent(addSegment, { turns: 2, segmentsPerTurn: 32, direction: 1, width: 12, pitchPerStep: Math.PI/190 });

    // Hero ramp and huge landing runout
    A.addRampGapLanding(addSegment, { up: 7, gap: 6, down: 7, boostOnFirst: 2, width: 12, landingLen: 20, landingWidth: 22 });

    // Massive runout to ensure downhill finish
    A.addWideRunout(addSegment, { length: 20, width: 20 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 18 }], isFinishLine: i === 7 });
  }
};


