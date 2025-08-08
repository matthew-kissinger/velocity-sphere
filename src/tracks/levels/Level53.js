// Circuit Zeta — L3: Spiral Stairline (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Spiral Stairline',
  description: 'Helical descent with a generous landing ramp and recovery',
  difficulty: 2,
  shader: 'matrix-rain',
  skybox: 'sunset-vibes',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Spiral stair descent (net downhill)
    Presets.addSpiralStairDescent(addSegment, { turns: 1.5, segmentsPerTurn: 36, direction: 1, width: 12, pitchPerStep: Math.PI/180 });

    // Forward setup and big landing ramp
    for (let i = 0; i < 10; i++) addSegment({ lanes: [{ offset: 0, width: 12 }] });
    A.addRampGapLanding(addSegment, { up: 7, gap: 6, down: 7, boostOnFirst: 2, width: 12, landingLen: 16, landingWidth: 20 });

    // Wide runout to finish (no climb)
    A.addWideRunout(addSegment, { length: 16, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


