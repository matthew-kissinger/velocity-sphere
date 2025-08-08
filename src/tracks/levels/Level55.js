// Circuit Zeta — L5: Quarry Switchbacks (Medium)
import Presets from '../generation/helpers/Presets.js';
import { AdvancedPatterns as A } from '../generation/helpers/Patterns.js';

export default {
  name: 'Circuit Zeta: Quarry Switchbacks',
  description: 'Alternating banked switchbacks linked by descending straights',
  difficulty: 2,
  shader: 'rainbow-flow',
  skybox: 'crystal-sky',
  generateTrack(addSegment) {
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3, lanes: [{ offset: 0, width: 12 }] });

    Presets.addSwitchbackDescent(addSegment, { dropLen: 12, turnSegments: 18, width: 12 });
    Presets.addSwitchbackDescent(addSegment, { dropLen: 10, turnSegments: 16, width: 12 });

    // Mid jump to reset rhythm
    A.addRampGapLanding(addSegment, { up: 6, gap: 6, down: 6, boostOnFirst: 2, width: 12, landingLen: 12, landingWidth: 18 });

    // Wide downhill runout to finish
    A.addWideRunout(addSegment, { length: 18, width: 18 });
    for (let i = 0; i < 8; i++) addSegment({ lanes: [{ offset: 0, width: 16 }], isFinishLine: i === 7 });
  }
};


