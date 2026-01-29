@echo off
REM CoffieCalm Deployment Script for Windows

echo 🚀 Starting deployment process...

REM Build the project
echo 📦 Building project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo ✅ Build successful!

REM Check if netlify CLI is installed
where netlify >nul 2>nul
if %errorlevel% equ 0 (
    echo 🌐 Deploying to Netlify...
    call netlify deploy --prod
    echo ✅ Deployed to Netlify!
    goto :end
)

REM Check if vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% equ 0 (
    echo 🌐 Deploying to Vercel...
    call vercel --prod
    echo ✅ Deployed to Vercel!
    goto :end
)

echo ⚠️  No deployment CLI found.
echo 📁 Build files are in the 'dist' folder.
echo.
echo To deploy, you can:
echo 1. Install Netlify CLI: npm install -g netlify-cli
echo 2. Install Vercel CLI: npm install -g vercel
echo 3. Manually upload the 'dist' folder to your hosting provider

:end
echo.
echo 🎉 Deployment process complete!
pause
