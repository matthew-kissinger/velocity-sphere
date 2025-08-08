/**
 * Minimal, merge-friendly track pattern helpers.
 * All helpers assume addSegment from TrackBuilder.generateSegments.
 * Safe ranges are enforced via defaults and conservative steps.
 */

/**
 * Add a cambered S-curve: left then right with proper banking.
 * Safe defaults: yaw per step ≈ π/60, bank steps ±π/40 capped at entry/exit only.
 */
export function addCamberedSCurve(addSegment, {
  leftSegments = 20,
  rightSegments = 20,
  turnRate = Math.PI / 60,
  bankStep = Math.PI / 40,
  bankStepsAtEdges = 4,
  width = 14
} = {}) {
  // Left: bank in
  for (let i = 0; i < bankStepsAtEdges; i++) addSegment({ rollDelta: -bankStep, lanes: [{ offset: 0, width }] });
  // Left: constant bank, steady yaw
  for (let i = 0; i < leftSegments; i++) addSegment({ yawDelta: -turnRate, lanes: [{ offset: 0, width }] });
  // Left: bank out
  for (let i = 0; i < bankStepsAtEdges; i++) addSegment({ rollDelta: bankStep, lanes: [{ offset: 0, width }] });

  // Right: bank in
  for (let i = 0; i < bankStepsAtEdges; i++) addSegment({ rollDelta: bankStep, lanes: [{ offset: 0, width }] });
  // Right: constant bank, steady yaw
  for (let i = 0; i < rightSegments; i++) addSegment({ yawDelta: turnRate, lanes: [{ offset: 0, width }] });
  // Right: bank out
  for (let i = 0; i < bankStepsAtEdges; i++) addSegment({ rollDelta: -bankStep, lanes: [{ offset: 0, width }] });
}

/**
 * Rolling wave climb: small up/down undulations with brief boosts at wave starts.
 * Safe defaults: |pitchStep| ≤ π/80.
 */
export function addRollingWaveClimb(addSegment, {
  waves = 3,
  upLen = 8,
  downLen = 8,
  pitchStep = Math.PI / 80,
  boostOnFirst = 2,
  width = 14
} = {}) {
  for (let w = 0; w < waves; w++) {
    // Seed speed at the start of each wave
    for (let i = 0; i < upLen; i++) {
      addSegment({ pitchDelta: pitchStep, isBoost: i < boostOnFirst, lanes: [{ offset: 0, width }] });
    }
    for (let i = 0; i < downLen; i++) {
      addSegment({ pitchDelta: -pitchStep, lanes: [{ offset: 0, width }] });
    }
  }
}

/**
 * Symmetric split → parallel → merge scaffold.
 * Safe defaults: width ≥ 6, fixed offsets in parallel block for merging.
 */
export function addSplitMerge(addSegment, {
  split = 10,
  parallel = 30,
  merge = 10,
  offset = 12,
  width = 12
} = {}) {
  // Split
  for (let i = 0; i < split; i++) {
    const f = (i + 1) / split;
    addSegment({ lanes: [
      { offset: -offset * f, width },
      { offset:  offset * f, width }
    ] });
  }
  // Parallel (keep properties stable for geometry merging)
  for (let i = 0; i < parallel; i++) {
    addSegment({ lanes: [
      { offset: -offset, width },
      { offset:  offset, width }
    ] });
  }
  // Merge
  for (let i = 0; i < merge; i++) {
    const f = 1 - (i + 1) / merge;
    addSegment({ lanes: [
      { offset: -offset * f, width },
      { offset:  offset * f, width }
    ] });
  }
}

export default { addCamberedSCurve, addRollingWaveClimb, addSplitMerge };

/**
 * Long controlled descent. Negative pitchStep accumulates to maintain momentum.
 */
export function addMegaDrop(addSegment, {
  length = 20,
  pitchStep = Math.PI/100, // positive pitch = downwards
  width = 12
} = {}) {
  for (let i = 0; i < length; i++) addSegment({ pitchDelta: pitchStep, lanes: [{ offset: 0, width }] });
}

/**
 * Banked constant-radius turn with clean bank-in/out. direction ∈ {-1, 1}.
 */
export function addBankedTurn(addSegment, {
  segments = 30,
  yawPerStep = Math.PI/60,
  bankSteps = 4,
  bankStep = Math.PI/40,
  direction = 1,
  width = 12
} = {}) {
  for (let i = 0; i < bankSteps; i++) addSegment({ rollDelta: direction * bankStep, lanes: [{ offset: 0, width }] });
  for (let i = 0; i < segments; i++) addSegment({ yawDelta: direction * yawPerStep, lanes: [{ offset: 0, width }] });
  for (let i = 0; i < bankSteps; i++) addSegment({ rollDelta: -direction * bankStep, lanes: [{ offset: 0, width }] });
}

/**
 * Classic ramp-gap-landing with optional wide runout to ease landings.
 */
export function addRampGapLanding(addSegment, {
  up = 6,
  gap = 6,
  down = 6,
  boostOnFirst = 2,
  width = 12,
  landingLen = 10,
  landingWidth = 16
} = {}) {
  // Ramp up = negative pitch (tilt the forward vector upward)
  for (let i = 0; i < up; i++) addSegment({ pitchDelta: -Math.PI/90, isBoost: i < boostOnFirst, lanes: [{ offset: 0, width }] });
  for (let i = 0; i < gap; i++) addSegment({ isGap: true });
  // Ramp down = positive pitch (tilt forward vector downward)
  for (let i = 0; i < down; i++) addSegment({ pitchDelta: Math.PI/90, lanes: [{ offset: 0, width }] });
  for (let i = 0; i < landingLen; i++) addSegment({ lanes: [{ offset: 0, width: landingWidth }] });
}

/**
 * Step-down cascade sequence with small interleaved turns to vary lines.
 */
export function addStepDownCascade(addSegment, {
  repeats = 3,
  drop = 5,
  gap = 3,
  rise = 5,
  interTurn = 12,
  turnDir = 1,
  width = 12
} = {}) {
  for (let r = 0; r < repeats; r++) {
    // drop = positive pitch (down)
    for (let i = 0; i < drop; i++) addSegment({ pitchDelta: Math.PI/100, lanes: [{ offset: 0, width }] });
    for (let i = 0; i < gap; i++) addSegment({ isGap: true });
    // rise = negative pitch (up)
    for (let i = 0; i < rise; i++) addSegment({ pitchDelta: -Math.PI/100, lanes: [{ offset: 0, width }] });
    for (let i = 0; i < 2; i++) addSegment({ rollDelta: turnDir * Math.PI/40, lanes: [{ offset: 0, width }] });
    for (let i = 0; i < interTurn; i++) addSegment({ yawDelta: turnDir * Math.PI/60, lanes: [{ offset: 0, width }] });
    for (let i = 0; i < 2; i++) addSegment({ rollDelta: -turnDir * Math.PI/40, lanes: [{ offset: 0, width }] });
    turnDir *= -1; // alternate
  }
}

/**
 * Spiral with optional descent. Keeps constant bank through yaw, banks at edges only.
 */
export function addSpiralDescent(addSegment, {
  turns = 1,
  segmentsPerTurn = 36,
  direction = 1,
  bankStep = Math.PI/40,
  width = 12,
  pitchPerStep = Math.PI/200 // positive = downward
} = {}) {
  const totalSegments = Math.floor(turns * segmentsPerTurn);
  for (let i = 0; i < 5; i++) addSegment({ rollDelta: direction * bankStep, lanes: [{ offset: 0, width }] });
  for (let i = 0; i < totalSegments; i++) {
    addSegment({ yawDelta: direction * (2*Math.PI / segmentsPerTurn), pitchDelta: pitchPerStep, lanes: [{ offset: 0, width }] });
  }
  for (let i = 0; i < 5; i++) addSegment({ rollDelta: -direction * bankStep, lanes: [{ offset: 0, width }] });
}

export const AdvancedPatterns = {
  addMegaDrop,
  addBankedTurn,
  addRampGapLanding,
  addStepDownCascade,
  addSpiralDescent,
};

/**
 * Steep chute descent for big vertical loss quickly.
 */
export function addChuteDescent(addSegment, {
  length = 16,
  pitchStep = Math.PI/90, // positive = downward
  width = 12
} = {}) {
  for (let i = 0; i < length; i++) addSegment({ pitchDelta: pitchStep, lanes: [{ offset: 0, width }] });
}

/**
 * Wide flat runout to make landings forgiving and merge-friendly.
 */
export function addWideRunout(addSegment, {
  length = 16,
  width = 18
} = {}) {
  for (let i = 0; i < length; i++) addSegment({ lanes: [{ offset: 0, width }] });
}

AdvancedPatterns.addChuteDescent = addChuteDescent;
AdvancedPatterns.addWideRunout = addWideRunout;



