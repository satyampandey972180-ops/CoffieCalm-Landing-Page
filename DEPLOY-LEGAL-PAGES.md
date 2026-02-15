# Deploy Legal Pages - Quick Guide

## Files Changed/Added

### New Files
1. `public/terms.html` - Terms & Conditions page
2. `public/privacy.html` - Privacy Policy page
3. `src/components/TermsAndConditions.tsx` - React component (optional)
4. `src/components/PrivacyPolicy.tsx` - React component (optional, already existed)

### Modified Files
1. `src/components/Footer.tsx` - Updated links to point to HTML pages
2. `public/sitemap.xml` - Added new pages

## Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Test Locally
```bash
npm run preview
```

Then visit:
- http://localhost:4173/terms.html
- http://localhost:4173/privacy.html

### 3. Deploy to Production

#### For Vercel:
```bash
npm run deploy:vercel
```

#### For Netlify:
```bash
npm run deploy:netlify
```

#### Manual Deploy:
Upload the entire `dist` folder to your hosting provider.

## Post-Deployment Verification

### 1. Test Live URLs
- [ ] Visit https://coffiecalm.com/terms.html
- [ ] Visit https://coffiecalm.com/privacy.html
- [ ] Click footer links to verify they work
- [ ] Test on mobile device

### 2. Submit to Google Search Console
1. Go to Google Search Console
2. Navigate to Sitemaps
3. Submit: https://coffiecalm.com/sitemap.xml
4. Wait for Google to crawl (24-48 hours)

### 3. Verify SEO
- [ ] Test with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Check Open Graph preview: https://www.opengraph.xyz/
- [ ] Validate HTML: https://validator.w3.org/

### 4. Monitor Analytics
- Check Google Analytics for page views
- Monitor Search Console for impressions
- Track click-through rates from footer

## SEO Impact Timeline

- **Day 1-3**: Pages indexed by Google
- **Week 1**: Start appearing in branded searches
- **Week 2-4**: Ranking for "CoffeeCalm terms" and similar queries
- **Month 1+**: Contributing to overall domain authority

## Important Notes

✅ Both pages are fully SEO-optimized
✅ Crisis disclaimer is prominently displayed
✅ Mobile-responsive design
✅ Fast loading (no external dependencies)
✅ Proper internal linking
✅ Sitemap updated

## Troubleshooting

### If pages don't load:
1. Check that files are in `public/` folder
2. Verify build includes HTML files
3. Check hosting configuration allows `.html` files

### If links don't work:
1. Clear browser cache
2. Check Footer.tsx has correct paths
3. Verify deployment completed successfully

### If not indexed:
1. Submit sitemap to Google Search Console
2. Request indexing for specific URLs
3. Wait 24-48 hours for crawling

## Success Metrics

Track these in Google Analytics:
- Page views for /terms.html
- Page views for /privacy.html
- Bounce rate (should be low)
- Time on page
- Exit rate

Track these in Search Console:
- Impressions for legal pages
- Click-through rate
- Average position
- Crawl errors (should be zero)

## Next Steps After Deployment

1. Monitor for 1 week
2. Check Google Search Console for any issues
3. Verify pages appear in site: search
4. Consider adding to main navigation if needed
5. Update any external links to point to new pages

## Contact Information

If you need to update contact emails:
- Terms page: support@coffeecalm.com
- Privacy page: privacy@coffiecalm.com

Make sure these email addresses are active and monitored!

---

**Ready to deploy?** Run `npm run build` and then deploy to your hosting provider.
