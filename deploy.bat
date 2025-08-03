@echo off
echo Building for production...
call npm run build

echo Copying dist/index.html to root for GitHub Pages...
copy /Y dist\index.html index.html

echo.
echo Deployment build complete!
echo.
echo To deploy to GitHub Pages, run:
echo   git add -A
echo   git commit -m "Deploy to GitHub Pages"
echo   git push
echo.