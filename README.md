# Velocity Sphere — Agent-Ready Track Builder

A browser 3D racing game (Three.js + Cannon‑es) designed as a meta‑prompt. Agents can ship a new 10‑track circuit in ~10 minutes using safe patterns and constraints.

## Why this repo
- Serves as both a game and a compact specification for AI agents
- Encodes proven constraints so tracks are fun, visible, and performant
- Clear APIs in `TrackBuilder` make adding levels fast and safe

## Quick start
- npm install
- npm run dev (local)
- npm run build (production)

## Controls & testing hotkeys
- WASD/Arrows: move
- Space: jump (grounded)
- Shift: boost (8s cooldown)
- R: reset position
- P: pause, ESC: menu
- 1–0: load 1–10, Shift+1–0: 11–20

## Start here
- Architecture: ARCHITECTURE.md — how systems connect
- Agent guide: AGENT.md — ship a 10‑track circuit fast
- Track rules & patterns: TRACK_DESIGN.md — constraints + templates
- Deploy: DEPLOY.md — GitHub Pages flow

## Tech
- Three.js, Cannon‑es, Vite, Stats.js

## Core directories (minimal)
- `src/game/` — orchestrator (`Game.js`), ball, timer
- `src/tracks/` — `TrackBuilder.js`, `CurveUtils.js`, `levels/`
- `src/tracks/generation/` — optional spline/extrude strategies
- `src/rendering/` — renderer, camera, lighting, shader manager, skybox manager
- `src/ui/` — start screen, HUD, loading/completion

## Safe limits (must follow)
- Segments ≤ 250 (150–200 ideal)
- Max bank π/4, max climb without boost π/60, min width 6
- Minimize roll changes; avoid corkscrews and vertical loops

## Performance ethos
- Prefer repeated widths/offsets → better geometry merging
- Bank only at turn entry/exit
- Precompute math outside loops; avoid per‑segment sin/cos churn
- Instanced walls are used when single‑lane layout allows

License: MIT
