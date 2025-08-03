#!/bin/bash

# Simple deployment script for GitHub Pages

echo "Building for production..."
npm run build

echo "Copying dist/index.html to root..."
cp dist/index.html index.html

echo "Updating paths for GitHub Pages..."
sed -i 's|"/velocity-sphere/|"/velocity-sphere/dist/|g' index.html

echo "Ready to commit and push!"
echo "Run: git add -A && git commit -m 'Deploy' && git push"