// Circuit Zeta — L4: Over/Under Cascade (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Over/Under Cascade',
  description: 'Split-level descent with braided parallels and mid-cascade gaps',
  difficulty: 2,
  shader: 'tech-grid',
  skybox: 'neon-underground',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Initial drop and light bank
    A.addMegaDrop(addSegment, { length: 20, pitchStep: Math.PI/120, width: 12 });
    A.addBankedTurn(addSegment, { segments: 16, yawPerStep: -Math.PI/60, bankSteps: 3, direction: -1, width: 12 });

    // Split parallels (braid feel without dynamic offsets in parallel block)
    for (let i = 0; i < 10; i++) {
      const f = (i + 1)/10;
      addSegment({ lanes: [ { offset: -12*f, width: 10 }, { offset: 12*f, width: 10 } ] });
    }
    for (let i = 0; i < 24; i++) addSegment({ lanes: [ { offset: -12, width: 10 }, { offset: 12, width: 10 } ] });
    for (let i = 0; i < 10; i++) {
      const f = 1 - (i + 1)/10;
      addSegment({ lanes: [ { offset: -12*f, width: 10 }, { offset: 12*f, width: 10 } ] });
    }

    // Mid cascade ramp-gap with wide landing
    A.addRampGapLanding(addSegment, { up: 6, gap: 5, down: 6, boostOnFirst: 2, width: 12, landingLen: 12, landingWidth: 18 });

    // Finish with wide runout (flat/slight descent)
    A.addWideRunout(addSegment, { length: 18, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


