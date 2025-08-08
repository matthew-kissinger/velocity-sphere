# Deploy

## GitHub Pages (recommended)
1. Build production bundle:
   - `npm run build`
2. Commit and push to `main` (ensure Pages is configured for your branch)
3. Ensure Vite base path matches repository if using subpath:
   - In `vite.config.js`, set `base: '/velocity-sphere/'` (or your repo name)
4. Wait for Pages to publish, then verify the URL in repo settings.

## Local production preview
- `npm run build && npm run preview`

## Common pitfalls
- Wrong `base` in Vite → broken asset paths on Pages
- Missing `index.html` at repo root or `dist` misconfigured
