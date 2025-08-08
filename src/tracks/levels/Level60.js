// Circuit Zeta — L10: Grand Descent Redux (Finale)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Grand Descent Redux',
  description: 'Mega-drop opener, braided mid, tabletop pair, and a crowning helix ramp',
  difficulty: 4,
  shader: 'rainbow-flow',
  skybox: 'sunset-vibes',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Mega-drop opener with two cambered arcs
    A.addMegaDrop(addSegment, { length: 22, pitchStep: -Math.PI/110, width: 12 });
    A.addBankedTurn(addSegment, { segments: 22, yawPerStep: Math.PI/60, bankSteps: 4, direction: 1, width: 12 });
    for (let i = 0; i < 10; i++) addSegment({ lanes: [{ offset: 0, width: 12 }] });
    A.addBankedTurn(addSegment, { segments: 20, yawPerStep: -Math.PI/60, bankSteps: 4, direction: -1, width: 12 });

    // Mid braid
    for (let i = 0; i < 10; i++) {
      const f = (i + 1)/10;
      addSegment({ lanes: [ { offset: -12*f, width: 10 }, { offset: 12*f, width: 10 } ] });
    }
    for (let i = 0; i < 26; i++) addSegment({ lanes: [ { offset: -12, width: 10 }, { offset: 12, width: 10 } ] });
    for (let i = 0; i < 10; i++) {
      const f = 1 - (i + 1)/10;
      addSegment({ lanes: [ { offset: -12*f, width: 10 }, { offset: 12*f, width: 10 } ] });
    }

    // Twin tabletops back-to-back
    Presets.addTabletopSequence(addSegment, { count: 2, up: 6, gap1: 5, mid: 6, gap2: 5, down: 6, width: 12, landingLen: 12, landingWidth: 18 });

    // Crowning helix ramp with massive landing and downhill finish
    Presets.addSpiralStairDescent(addSegment, { turns: 1, segmentsPerTurn: 32, direction: 1, width: 12, pitchPerStep: Math.PI/190 });
    A.addRampGapLanding(addSegment, { up: 7, gap: 6, down: 7, boostOnFirst: 2, width: 12, landingLen: 22, landingWidth: 24 });
    A.addWideRunout(addSegment, { length: 20, width: 22 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 20 }], isFinishLine: i === 7 });
  }
};


