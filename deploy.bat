@echo off
echo Building Velocity Sphere for production...
call npm run build

if %%errorlevel%% neq 0 (
    echo Build failed!
    exit /b %%errorlevel%%
)

echo.
echo Build complete! The dist folder is ready.
echo.
echo To deploy to GitHub Pages:
echo 1. Go to your GitHub repository settings
echo 2. Navigate to Pages section
echo 3. Set Source to "Deploy from a branch"
echo 4. Set Branch to "main" and folder to "/dist"
echo 5. Save the settings
echo.
echo Your game will be available at:
echo https://matthew-kissinger.github.io/velocity-sphere/
