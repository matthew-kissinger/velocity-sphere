# Agent Guide

Your goal: ship the next circuit (10 tracks) quickly and safely using proven patterns.

## Deliverables
- 10 new files in `src/tracks/levels/` (e.g., Level11.js … Level20.js)
- Each exports `{ name, description, difficulty, shader?, skybox?, generateTrack(addSegment) }`

## Rules (must follow)
- Segments ≤ 250 (target 150–200)
- Max banking π/4; max climb without boost π/60; min width 6
- No corkscrews; no vertical loops; minimize roll changes
- Place boost before sustained climbs; use single-lane runs when possible for instanced walls

## Difficulty plan
- Level 11: Easy (wide, gentle
)
- Levels 12–18: Medium with distinct concepts (s-curves, assisted climbs, optional splits)
- Level 19: Hard (technical but fair)
- Level 20: Finale (epic, performant, readable)

## Template
```javascript
export default {
  name: "Track Name",
  description: "Short description",
  difficulty: 2, // 1=Easy, 2=Med, 3=Hard, 4=Finale
  shader: "rainbow-flow",
  skybox: "sunset-vibes",
  generateTrack(addSegment) {
    // Start & build speed
    addSegment({ isStartLine: true });
    for (let i = 0; i < 15; i++) addSegment({ isBoost: i < 3 });

    // Main content using patterns below

    // Finish
    for (let i = 0; i < 10; i++) addSegment({ isFinishLine: i === 9 });
  }
}
```

## Proven patterns
- Safe turn: 20–30 segments at yawDelta ≈ π/60, bank in/out with rollDelta ≈ ±π/40
- Assisted climb: 10 segments at pitchDelta ≈ π/80 with boost on first 2–3
- Split/merge: 10 split, 30 parallel, 10 merge; lane widths ≥ 6, fixed offsets during parallel
- Jump: ramp 5–8 up (π/100..π/60), 3–8 gaps, 5–8 down

## Shader & skybox guardrails
- Prefer bright shader + contrasting skybox for readability
- Avoid dark-on-dark pairings (e.g., `matrix-rain` + dark skybox) unless rails are very visible
- Keep shader performance reasonable for long tracks (use `rainbow-flow`, `tech-grid`, `matrix-rain` freely)

## Common pitfalls
- Per‑segment unique widths/offsets → kills merging → FPS drops
- Frequent rollDelta changes → blocks merging
- Steep climbs without preceding boost → rollback/stall
- Missing finish or start markers → timer/flow issues

## Integration steps
1. Add files `Level11.js`…`Level20.js`
2. Launch: npm run dev → menu or hotkeys (1–0, Shift+1–0)
3. Validate: no console errors; FPS >45 on mid hardware; physics stable

## Validation checklist
- Loads clean (no errors)
- ≤250 segments; banking resets to ~0 at exits
- Boost before sustained climbs
- Visibility good at speed (shader + skybox)
- Performance stable (merge-friendly geometry, minimal roll churn)

Ship it.
