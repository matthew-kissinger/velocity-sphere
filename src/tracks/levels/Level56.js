// Circuit Zeta — L6: Aqueduct Falls (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Aqueduct Falls',
  description: 'Highline aqueduct with stepped drops and braided view',
  difficulty: 2,
  shader: 'tech-grid',
  skybox: 'space-deep',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Elevated straight, then cascade
    for (let i = 0; i < 24; i++) addSegment({ lanes: [{ offset: 0, width: 12 }] });
    A.addStepDownCascade(addSegment, { repeats: 2, drop: 5, gap: 3, rise: 5, interTurn: 10, turnDir: 1, width: 12 });

    // Overlook braid (brief split/parallel/merge)
    for (let i = 0; i < 8; i++) {
      const f = (i + 1)/8;
      addSegment({ lanes: [ { offset: -10*f, width: 10 }, { offset: 10*f, width: 10 } ] });
    }
    for (let i = 0; i < 20; i++) addSegment({ lanes: [ { offset: -10, width: 10 }, { offset: 10, width: 10 } ] });
    for (let i = 0; i < 8; i++) {
      const f = 1 - (i + 1)/8;
      addSegment({ lanes: [ { offset: -10*f, width: 10 }, { offset: 10*f, width: 10 } ] });
    }

    // Final ramp with massive landing runout; finish flat
    A.addRampGapLanding(addSegment, { up: 6, gap: 5, down: 6, boostOnFirst: 2, width: 12, landingLen: 18, landingWidth: 20 });
    A.addWideRunout(addSegment, { length: 16, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


