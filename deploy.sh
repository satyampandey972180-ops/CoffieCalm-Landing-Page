#!/bin/bash

# CoffieCalm Deployment Script

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Check if netlify CLI is installed
if command -v netlify &> /dev/null; then
    echo "🌐 Deploying to Netlify..."
    netlify deploy --prod
    echo "✅ Deployed to Netlify!"
# Check if vercel CLI is installed
elif command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    echo "✅ Deployed to Vercel!"
else
    echo "⚠️  No deployment CLI found."
    echo "📁 Build files are in the 'dist' folder."
    echo ""
    echo "To deploy, you can:"
    echo "1. Install Netlify CLI: npm install -g netlify-cli"
    echo "2. Install Vercel CLI: npm install -g vercel"
    echo "3. Manually upload the 'dist' folder to your hosting provider"
fi

echo ""
echo "🎉 Deployment process complete!"
