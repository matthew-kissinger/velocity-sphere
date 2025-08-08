// Circuit Zeta — L2: Twin Tabletop Descent (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Twin Tabletop Descent',
  description: 'Steady drop into back-to-back tabletops with wide runouts',
  difficulty: 2,
  shader: 'tech-grid',
  skybox: 'space-deep',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    // Descending approach with light weave (ensure net descent)
    Presets.addLongWeaveDescent(addSegment, { length: 42, pitchStep: Math.PI/120, weaveAmp: Math.PI/230, width: 12 });

    // Banked left setup
    A.addBankedTurn(addSegment, { segments: 18, yawPerStep: -Math.PI/60, bankSteps: 3, direction: -1, width: 12 });

    // Twin tabletop sequence
    Presets.addTabletopSequence(addSegment, { count: 2, up: 6, gap1: 5, mid: 6, gap2: 5, down: 6, width: 12, landingLen: 12, landingWidth: 18 });

    // Wide runout, flat to slightly downhill to finish
    A.addWideRunout(addSegment, { length: 16, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


