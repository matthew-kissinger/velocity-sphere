// Circuit Zeta — L8: Glacier Cascades (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Glacier Cascades',
  description: 'Cascading step-downs over ice with interleaved arcs and wide landings',
  difficulty: 2,
  shader: 'crystal-surface',
  skybox: 'crystal-sky',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Cascades
    A.addStepDownCascade(addSegment, { repeats: 3, drop: 5, gap: 3, rise: 5, interTurn: 12, turnDir: 1, width: 12 });

    // Wide landing and downhill finish
    A.addRampGapLanding(addSegment, { up: 6, gap: 5, down: 6, boostOnFirst: 2, width: 12, landingLen: 18, landingWidth: 20 });
    A.addWideRunout(addSegment, { length: 16, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


