# Architecture

High-level map of systems agents will touch.

## Core runtime
- `src/main.js`: App bootstrap, start/menu flow
- `src/game/Game.js`: Orchestrator (render loop, physics step, input, HUD, skybox)
- `src/physics/PhysicsWorld.js`: Cannon‑es world setup (fixed timestep, materials)
- `src/game/Ball.js`: Player physics + boost/jump + grounded check
- `src/input/InputManager.js`: Keyboard + mobile; emits single-press events

## Track pipeline
- `src/tracks/TrackBuilder.js` (primary API)
  - `generateSegments(levelData)`: level’s `generateTrack(addSegment)` → segments
  - `buildOptimizedTrackMeshes()`: geometry merging (boxes), instanced walls, triggers
  - Builders: `buildBoostSection`, `buildBoostPowerup`, `buildStartFinishLine`
  - Caches: `getOrCreateGeometry`, `getOrCreateMaterial`
  - Shader integration via `ShaderManager`
- `src/tracks/CurveUtils.js`: arcs, ramps, banked turns, loop helpers
- `src/tracks/generation/` (optional):
  - `SplineBasedStrategy.js`: centripetal CatmullRom, merged chunks, compound physics
  - `ExtrudeGeometryStrategy.js`: cross‑section extrusion, tunnel/bridge examples
  - `TrackGenerationStrategies.js`: factory + base utilities

## Segment data model (simplified)
A segment appended by `addSegment(opts)` typically contains:
- `center: Vector3`, `orientation: Quaternion`
- `lanes: Array<{ offset:number, width:number }>` (min width 6)
- Optional flags: `isStartLine`, `isFinishLine`, `isBoost`, `isBoostPowerup`, `isGap`
- Optional deltas for next step: `yawDelta`, `pitchDelta`, `rollDelta`

## Rendering & physics timing
- Fixed physics step: 60 Hz; render each frame after stepping
- Camera follows ball while preserving orbit offset
- HUD updates FPS and player state; auto quality adjustments can be layered

## Performance levers
- Merge box segments in chunks (reduces draw calls)
- Instanced walls (single draw call)
- Cache geometries/materials; reuse widths; minimize roll changes
- Keep segments ≤ 250; prefer 150–200

## Safety caps
- Max bank π/4, max climb without boost π/60, min width 6
- Avoid corkscrews/vertical loops; minimize dynamic per‑segment math

---
For mechanics and constraints, see `TRACK_DESIGN.md`. For the step‑by‑step circuit workflow, see `AGENT.md`.
