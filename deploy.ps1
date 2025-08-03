# PowerShell deployment script for Velocity Sphere

Write-Host "Deploying Velocity Sphere to GitHub Pages..." -ForegroundColor Cyan

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Exiting..." -ForegroundColor Red
    exit 1
}

# Copy index-dev.html to index.html in dist
Write-Host "Preparing index.html..." -ForegroundColor Yellow
Copy-Item "dist/index-dev.html" "dist/index.html" -Force

# Replace dev paths with production paths in index.html
$content = Get-Content "dist/index.html" -Raw
$content = $content -replace 'src="/src/main.js"', 'src="/velocity-sphere/assets/main-Crpmdfb4.js"'
$content = $content -replace 'href="/src/styles/main.css"', 'href="/velocity-sphere/assets/main-ZY7uZaFv.css"'
Set-Content "dist/index.html" $content

Write-Host "Deployment preparation complete!" -ForegroundColor Green
Write-Host "Files are ready in the dist folder for GitHub Pages" -ForegroundColor Green