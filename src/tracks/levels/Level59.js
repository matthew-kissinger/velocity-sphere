// Circuit Zeta — L9: Precision Quarry (Hard)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Precision Quarry',
  description: 'Narrow, technical lines on a steep descent with precise landings',
  difficulty: 3,
  shader: 'tech-grid',
  skybox: 'space-deep',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 10 }] });

    // Steep drop and alternating tight banks
    A.addMegaDrop(addSegment, { length: 12, pitchStep: -Math.PI/110, width: 10 });
    A.addBankedTurn(addSegment, { segments: 16, yawPerStep: Math.PI/60, bankSteps: 3, direction: 1, width: 10 });
    A.addMegaDrop(addSegment, { length: 10, pitchStep: -Math.PI/110, width: 10 });
    A.addBankedTurn(addSegment, { segments: 16, yawPerStep: -Math.PI/60, bankSteps: 3, direction: -1, width: 10 });

    // Precision jump lines with very wide landings
    A.addRampGapLanding(addSegment, { up: 5, gap: 4, down: 5, boostOnFirst: 2, width: 8, landingLen: 14, landingWidth: 20 });
    for (let i = 0; i < 6; i++) addSegment({ lanes: [{ offset: 0, width: 10 }] });
    A.addRampGapLanding(addSegment, { up: 4, gap: 3, down: 4, boostOnFirst: 0, width: 8, landingLen: 12, landingWidth: 18 });

    // Downhill wide runout to finish
    A.addWideRunout(addSegment, { length: 18, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


