// Circuit Zeta — L1: Canyon Chute (Easy)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Canyon Chute',
  description: 'Steep chute → cambered turn → hero jump with huge runout',
  difficulty: 1,
  shader: 'rainbow-flow',
  skybox: 'sunset-vibes',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 14 }] });

    // Strong net descent
    A.addChuteDescent(addSegment, { length: 14, pitchStep: Math.PI/90, width: 12 });
    Presets.addLongWeaveDescent(addSegment, { length: 24, pitchStep: Math.PI/120, weaveAmp: Math.PI/230, width: 12 });

    // Banked right and hero jump
    A.addBankedTurn(addSegment, { segments: 18, yawPerStep: Math.PI/60, bankSteps: 3, direction: 1, width: 12 });
    A.addRampGapLanding(addSegment, { up: 6, gap: 6, down: 6, boostOnFirst: 2, width: 12, landingLen: 14, landingWidth: 20 });

    // Massive runout and finish (no climb)
    A.addWideRunout(addSegment, { length: 18, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


