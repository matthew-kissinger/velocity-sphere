# Deployment Guide

## Quick Deploy to GitHub Pages

Just run these two commands:

```bash
# 1. Build and prepare for deployment
./deploy.bat

# 2. Commit and push
git add -A && git commit -m "Deploy to GitHub Pages" && git push
```

That's it! Your game will be live at: https://matthew-kissinger.github.io/velocity-sphere/

## What happens behind the scenes

1. `npm run build` - Creates production build in `dist/` folder
2. The build automatically uses `/velocity-sphere/` as base path for GitHub Pages
3. `deploy.bat` copies the built HTML to root with correct paths
4. Git push triggers GitHub Pages to update

## Local Development

For local development, just use:
```bash
npm run dev
```

No need to worry about paths or multiple HTML files!