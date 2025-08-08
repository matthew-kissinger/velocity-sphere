# Track Design Rules & Patterns

Concise constraints and proven blocks for reliable, performant tracks.

## Hard constraints
- Segments ≤ 250 (150–200 ideal)
- Max climb without boost: π/60
- Max bank: π/4 (45°)
- Min lane width: 6
- Avoid corkscrews and vertical loops
- Minimize roll changes to preserve geometry merging

## addSegment API (used in `generateTrack`)
```javascript
addSegment({
  // Rotation deltas applied for next step
  yawDelta, pitchDelta, rollDelta,
  // Lanes (defaults to single lane { offset:0, width:10 })
  lanes: [ { offset, width } ],
  // Flags
  isStartLine, isFinishLine, isGap, isBoost, isBoostPowerup
});
```

## Do / Don’t
- Do: place boost before sustained climbs
- Do: keep widths consistent across long runs
- Do: use bright shader + contrasting skybox for visibility
- Don’t: per‑segment sin/cos inside tight loops (precompute)
- Don’t: dynamic width/offset changes every segment (breaks merging)

## Proven blocks
- Safe banked turn
```javascript
// Bank in
for (let i = 0; i < 5; i++) addSegment({ rollDelta:  Math.PI/40 });
// Turn
for (let i = 0; i < 30; i++) addSegment({ yawDelta: Math.PI/60 });
// Bank out
for (let i = 0; i < 5; i++) addSegment({ rollDelta: -Math.PI/40 });
```

- Assisted climb
```javascript
for (let i = 0; i < 10; i++) {
  addSegment({ pitchDelta: Math.PI/80, isBoost: i < 2 });
}
```

- Split → parallel → merge (widths ≥ 6)
```javascript
for (let i = 0; i < 10; i++) {
  const f = i/10;
  addSegment({ lanes: [{ offset: -12*f, width: 12 }, { offset: 12*f, width: 12 }] });
}
for (let i = 0; i < 40; i++) {
  addSegment({ lanes: [{ offset: -12, width: 12 }, { offset: 12, width: 12 }] });
}
for (let i = 0; i < 10; i++) {
  const f = 1 - i/10;
  addSegment({ lanes: [{ offset: -12*f, width: 12 }, { offset: 12*f, width: 12 }] });
}
```

- Jump (ramp/gap/landing)
```javascript
for (let i = 0; i < 6; i++) addSegment({ pitchDelta:  Math.PI/90 });
for (let i = 0; i < 4; i++) addSegment({ isGap: true });
for (let i = 0; i < 6; i++) addSegment({ pitchDelta: -Math.PI/90 });
```

## Performance checklist
- Under 200 segments
- Banking only at curve entry/exit
- Reuse widths and offsets for long runs
- Single-lane segments enable instanced walls
- Test on mid hardware: target 60 FPS, never below 45

## Visual pairing (examples)
- `rainbow-flow` + `sunset-vibes`
- `matrix-rain` + `space-deep` (verify contrast)
- `crystal-surface` + `crystal-sky`
- `lava-flow` + `lava-storm`

Keep it readable, fast, and fun.

## Helper patterns (library)

- addCamberedSCurve(addSegment, { leftSegments=20, rightSegments=20, turnRate=π/60, bankStep=π/40, bankStepsAtEdges=4, width=14 })
  - Safe: total bank ≤ π/4, bank only at entry/exit, constant bank through apex
  - Use when: you need S sequences with correct camber
  - Example:
  ```javascript
  import { addCamberedSCurve } from '../generation/helpers/Patterns.js';
  addCamberedSCurve(addSegment, { leftSegments:18, rightSegments:18, width:12 });
  ```

- addRollingWaveClimb(addSegment, { waves=3, upLen=8, downLen=8, pitchStep=π/80, boostOnFirst=2, width=14 })
  - Safe: |pitchStep| ≤ π/80, boosts only at wave starts
  - Use when: you want momentum-preserving climbs
  - Example:
  ```javascript
  import { addRollingWaveClimb } from '../generation/helpers/Patterns.js';
  addRollingWaveClimb(addSegment, { waves:2, width:12 });
  ```

- addSplitMerge(addSegment, { split=10, parallel=30, merge=10, offset=12, width=12 })
  - Safe: widths ≥ 6; keep offsets constant during parallel for merging perf
  - Use when: you need symmetric split/merge scaffolds
  - Example:
  ```javascript
  import { addSplitMerge } from '../generation/helpers/Patterns.js';
  addSplitMerge(addSegment, { offset:10, width:10 });
  ```