// Composition presets built from low-level Patterns helpers
import { AdvancedPatterns as A } from './Patterns.js';

/** Long weave while descending. */
export function addLongWeaveDescent(addSegment, {
  length = 48,
  pitchStep = Math.PI/120, // positive = downward
  weaveAmp = Math.PI/220,
  width = 12
} = {}) {
  for (let i = 0; i < length; i++) {
    const weave = Math.sin(i * 0.22) * weaveAmp;
    addSegment({ yawDelta: weave, pitchDelta: pitchStep, lanes: [{ offset: 0, width }] });
  }
}

/** Tabletop (ramp-gap-mid-gap-landing) repeated. Landing is widened. */
export function addTabletopSequence(addSegment, {
  count = 2,
  up = 6,
  gap1 = 4,
  mid = 6,
  gap2 = 4,
  down = 6,
  width = 12,
  landingLen = 12,
  landingWidth = 18
} = {}) {
  for (let t = 0; t < count; t++) {
    A.addRampGapLanding(addSegment, { up, gap: gap1, down: 0, boostOnFirst: 2, width, landingLen: mid, landingWidth: width });
    for (let i = 0; i < gap2; i++) addSegment({ isGap: true });
    for (let i = 0; i < down; i++) addSegment({ pitchDelta: -Math.PI/90, lanes: [{ offset: 0, width }] });
    for (let i = 0; i < landingLen; i++) addSegment({ lanes: [{ offset: 0, width: landingWidth }] });
  }
}

/** Spiral stair: helical yaw with gentle negative pitch. */
export function addSpiralStairDescent(addSegment, {
  turns = 1.5,
  segmentsPerTurn = 36,
  direction = 1,
  width = 12,
  pitchPerStep = Math.PI/180 // positive = downward
} = {}) {
  A.addSpiralDescent(addSegment, { turns, segmentsPerTurn, direction, width, pitchPerStep });
}

/** Two alternating switchbacks, descending between them. */
export function addSwitchbackDescent(addSegment, {
  dropLen = 10,
  turnSegments = 18,
  width = 12
} = {}) {
  A.addMegaDrop(addSegment, { length: dropLen, pitchStep: Math.PI/110, width });
  A.addBankedTurn(addSegment, { segments: turnSegments, yawPerStep: Math.PI/60, bankSteps: 3, bankStep: Math.PI/40, direction: 1, width });
  A.addMegaDrop(addSegment, { length: dropLen, pitchStep: Math.PI/110, width });
  A.addBankedTurn(addSegment, { segments: turnSegments, yawPerStep: Math.PI/60, bankSteps: 3, bankStep: Math.PI/40, direction: -1, width });
}

export default {
  addLongWeaveDescent,
  addTabletopSequence,
  addSpiralStairDescent,
  addSwitchbackDescent,
};


