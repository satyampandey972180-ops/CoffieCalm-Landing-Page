# Manual Deployment Guide

Since automatic deployment isn't set up, here's how to deploy your site manually.

## Option 1: Deploy to Netlify (Recommended)

### First Time Setup:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```
   This will open a browser window to authenticate.

3. **Initialize Netlify in your project:**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name (or leave blank for random)
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy:

```bash
npm run build
netlify deploy --prod
```

Or use the shortcut:
```bash
netlify deploy --prod --dir=dist
```

---

## Option 2: Deploy to Vercel

### First Time Setup:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```
   - Follow the prompts
   - Build command: `npm run build`
   - Output directory: `dist`

### Subsequent Deploys:

```bash
vercel --prod
```

---

## Option 3: Manual Upload to Hosting Provider

If you're using a traditional hosting provider:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web server via:
   - FTP/SFTP
   - cPanel File Manager
   - Your hosting provider's upload tool

3. **Important:** Make sure these files are in the root directory:
   - `index.html`
   - `sitemap.xml`
   - `robots.txt`
   - `_redirects` (if supported)
   - `assets/` folder

---

## Option 4: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Configure custom domain** in GitHub repository settings.

---

## Quick Deploy Script

I'll create a deploy script for you. Choose your platform:

### For Netlify:
```bash
npm run build && netlify deploy --prod
```

### For Vercel:
```bash
vercel --prod
```

---

## Verify Deployment

After deploying, verify these URLs work:

1. **Homepage:** https://www.coffiecalm.com/
2. **Sitemap:** https://www.coffiecalm.com/sitemap.xml
3. **Robots:** https://www.coffiecalm.com/robots.txt

---

## Set Up Automatic Deployment (Recommended)

### For Netlify:
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### For Vercel:
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings
5. Click "Deploy"

Once set up, every push to `main` branch will auto-deploy! 🚀

---

## Current Status

✅ Code is ready to deploy
✅ Build tested and working
✅ Sitemap configured
✅ Analytics integrated
⏳ Waiting for manual deployment

**Next Step:** Choose a deployment method above and deploy!
