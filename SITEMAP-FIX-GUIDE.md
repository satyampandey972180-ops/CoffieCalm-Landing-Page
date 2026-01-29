# Sitemap Fix Guide

## Problem
Google Search Console was showing a 404 error when trying to fetch sitemap.xml because the SPA redirect was catching all requests including static files.

## Solution Applied

### 1. Updated `public/_redirects`
Added explicit rules to serve static files before the SPA fallback:
```
/sitemap.xml /sitemap.xml 200
/robots.txt /robots.txt 200
/favicon.png /favicon.png 200
```

### 2. Created `netlify.toml`
Added proper configuration for Netlify hosting with:
- Correct content-type headers for sitemap.xml (`application/xml`)
- Cache control headers
- Proper redirect rules

### 3. Created `vercel.json`
Added configuration for Vercel hosting with:
- Proper headers for static files
- Rewrite rules for SPA
- Domain redirects

### 4. Simplified Sitemap
Removed hash fragment URLs (like `#features`, `#about`) because:
- Google doesn't index hash fragments well
- Single-page apps should have one main URL in sitemap
- Hash navigation is client-side only

## Testing the Fix

### After Deployment:

1. **Test sitemap accessibility:**
   ```
   curl https://www.coffiecalm.com/sitemap.xml
   ```
   Should return XML content with proper headers.

2. **Test in browser:**
   Visit: https://www.coffiecalm.com/sitemap.xml
   Should display the XML file, not redirect to index.html

3. **Verify in Google Search Console:**
   - Go to Sitemaps section
   - Remove old sitemap if it exists
   - Submit: `https://www.coffiecalm.com/sitemap.xml`
   - Wait 24-48 hours for Google to crawl it

### Expected Result:
- Status: Success
- URLs discovered: 1
- No 404 errors

## Current Sitemap Content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.coffiecalm.com/</loc>
    <lastmod>2026-01-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Next Steps

1. ✅ Deploy the changes (already pushed to GitHub)
2. ⏳ Wait for hosting platform to rebuild (5-10 minutes)
3. ⏳ Test sitemap URL in browser
4. ⏳ Resubmit sitemap in Google Search Console
5. ⏳ Wait 24-48 hours for Google to process

## Troubleshooting

If sitemap still shows 404 after deployment:

1. **Check build logs** on your hosting platform
2. **Verify dist folder** contains sitemap.xml after build
3. **Check hosting platform settings** for custom headers
4. **Clear CDN cache** if using one
5. **Test with curl** to see actual response headers

## Files Changed
- `public/_redirects` - Added static file rules
- `public/sitemap.xml` - Simplified to single URL
- `netlify.toml` - New file for Netlify config
- `vercel.json` - New file for Vercel config
