# Google Search Console Setup Guide

## Step-by-Step Instructions

### Step 1: Access Google Search Console
1. Go to: **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click **"Add Property"** or **"Start Now"**

### Step 2: Add Your Property
You have two options:

#### Option A: Domain Property (Recommended)
- Enter: `coffiecalm.com`
- This covers all subdomains (www, m, etc.)
- Requires DNS verification

#### Option B: URL Prefix Property
- Enter: `https://www.coffiecalm.com`
- Only covers this specific URL
- Multiple verification methods available

**Choose Option A (Domain) for best coverage**

### Step 3: Verify Ownership

#### DNS Verification (Recommended for Domain Property)
1. Google will provide a TXT record
2. Add this to your domain's DNS settings:
   - Go to your domain registrar (where you bought coffiecalm.com)
   - Find DNS settings
   - Add new TXT record:
     - **Type**: TXT
     - **Name**: @ (or leave blank)
     - **Value**: [Google's verification code]
     - **TTL**: 3600 (or default)
3. Click **"Verify"** in Search Console
4. Wait 5-10 minutes if verification fails (DNS propagation)

#### Alternative: HTML File Verification (For URL Prefix)
1. Download the HTML verification file from Google
2. Upload to your site's root directory
3. Verify it's accessible at: `https://www.coffiecalm.com/google[code].html`
4. Click **"Verify"** in Search Console

#### Alternative: HTML Tag Verification
1. Copy the meta tag provided by Google
2. Add it to your `index.html` in the `<head>` section
3. Deploy the change
4. Click **"Verify"** in Search Console

### Step 4: Submit Your Sitemap
Once verified:

1. In Search Console, go to **"Sitemaps"** (left sidebar)
2. Enter your sitemap URL: `https://www.coffiecalm.com/sitemap.xml`
3. Click **"Submit"**
4. Wait for Google to process (can take a few hours to days)

### Step 5: Request Indexing for Homepage
1. Go to **"URL Inspection"** (left sidebar)
2. Enter: `https://www.coffiecalm.com`
3. Click **"Test Live URL"**
4. If successful, click **"Request Indexing"**
5. Repeat for important pages:
   - `https://www.coffiecalm.com/#features`
   - `https://www.coffiecalm.com/#about`
   - `https://www.coffiecalm.com/#faq`

### Step 6: Monitor Performance
After 24-48 hours, check:

1. **Coverage Report**
   - Shows indexed pages
   - Identifies errors
   - Location: Indexing > Pages

2. **Performance Report**
   - Shows clicks, impressions, CTR
   - Keyword rankings
   - Location: Performance

3. **Core Web Vitals**
   - Shows LCP, FID, CLS scores
   - Location: Experience > Core Web Vitals

4. **Mobile Usability**
   - Shows mobile issues
   - Location: Experience > Mobile Usability

## What to Submit

### Required Submissions
1. ✅ **Sitemap**: `https://www.coffiecalm.com/sitemap.xml`
2. ✅ **Homepage**: `https://www.coffiecalm.com`

### Optional but Recommended
3. **Key Pages**:
   - Features page
   - About page
   - FAQ page
   - Privacy Policy

4. **New Content**:
   - Submit new pages as you create them
   - Use "Request Indexing" feature

## Verification Methods Comparison

| Method | Difficulty | Recommended For | Pros | Cons |
|--------|-----------|-----------------|------|------|
| DNS TXT | Medium | Domain property | Covers all subdomains | Requires DNS access |
| HTML File | Easy | URL prefix | Quick setup | Need to maintain file |
| HTML Tag | Easy | URL prefix | Simple | Need to keep tag in code |
| Google Analytics | Easy | If already using GA | Automatic | Requires GA setup |

## Common Issues & Solutions

### Issue 1: Verification Failed
**Solution:**
- Wait 10-15 minutes for DNS propagation
- Clear browser cache
- Try verification again
- Check DNS record is correct

### Issue 2: Sitemap Not Found
**Solution:**
- Verify sitemap is accessible: https://www.coffiecalm.com/sitemap.xml
- Check robots.txt allows crawling
- Ensure sitemap URL is correct (no typos)

### Issue 3: Pages Not Indexing
**Solution:**
- Check robots.txt doesn't block pages
- Verify pages are in sitemap
- Request indexing manually
- Wait 1-2 weeks (indexing takes time)

### Issue 4: Core Web Vitals Issues
**Solution:**
- Run PageSpeed Insights: https://pagespeed.web.dev/
- Fix identified issues
- Re-test after fixes
- Wait for Google to re-crawl

## Expected Timeline

### Day 1
- ✅ Property added and verified
- ✅ Sitemap submitted
- ✅ Homepage indexing requested

### Day 2-3
- ✅ First pages indexed
- ✅ Initial data in Performance report
- ✅ Coverage report shows pages

### Week 1
- ✅ Most pages indexed
- ✅ Keyword data appearing
- ✅ Core Web Vitals data

### Week 2-4
- ✅ Full indexing complete
- ✅ Ranking for brand terms
- ✅ Initial organic traffic

## Important URLs

### Your Site URLs
- Homepage: https://www.coffiecalm.com
- Sitemap: https://www.coffiecalm.com/sitemap.xml
- Robots.txt: https://www.coffiecalm.com/robots.txt
- llms.txt: https://www.coffiecalm.com/llms.txt

### Google Tools
- Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

## After Setup Checklist

### Immediate (Day 1)
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Homepage indexing requested
- [ ] Screenshot confirmation for records

### Weekly (First Month)
- [ ] Check indexing status
- [ ] Review coverage report
- [ ] Monitor Core Web Vitals
- [ ] Check for crawl errors
- [ ] Review performance data

### Monthly (Ongoing)
- [ ] Analyze keyword performance
- [ ] Track ranking improvements
- [ ] Review click-through rates
- [ ] Identify optimization opportunities
- [ ] Submit new content for indexing

## Pro Tips

### 1. Request Indexing Strategically
- Don't spam requests (limited quota)
- Prioritize important pages
- Request after major updates
- Wait 1-2 weeks between requests

### 2. Monitor Coverage Report
- Check weekly for errors
- Fix issues immediately
- Understand why pages aren't indexed
- Keep sitemap updated

### 3. Use URL Parameters Tool
- If you have URL parameters
- Tell Google which to ignore
- Prevents duplicate content issues

### 4. Set Up Email Alerts
- Get notified of critical issues
- Monitor manual actions
- Track security issues
- Stay informed of changes

### 5. Link Internal Reports
- Connect Google Analytics
- Link Google Ads (if using)
- Better data integration
- Comprehensive insights

## Troubleshooting Commands

### Check if Site is Indexed
Search Google for:
```
site:coffiecalm.com
```

### Check Specific Page
Search Google for:
```
site:coffiecalm.com/page-name
```

### Check Sitemap Accessibility
Visit directly:
```
https://www.coffiecalm.com/sitemap.xml
```

### Test Robots.txt
Visit directly:
```
https://www.coffiecalm.com/robots.txt
```

## Next Steps After Setup

1. **Set Up Bing Webmaster Tools**
   - Similar process
   - Covers Bing + ChatGPT search
   - Guide: See BING-WEBMASTER-SETUP.md

2. **Monitor Performance**
   - Check Search Console weekly
   - Track keyword rankings
   - Monitor Core Web Vitals
   - Review user behavior

3. **Create Content**
   - Write blog posts
   - Answer common questions
   - Build topical authority
   - Target long-tail keywords

4. **Build Backlinks**
   - Guest posting
   - Directory submissions
   - Community engagement
   - Quality over quantity

## Support Resources

### Official Documentation
- [Search Console Help](https://support.google.com/webmasters)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart)

### Community Help
- [Google Search Central Community](https://support.google.com/webmasters/community)
- [Reddit r/SEO](https://reddit.com/r/SEO)
- [WebmasterWorld](https://www.webmasterworld.com/)

---

**Need Help?** If you encounter issues, check the troubleshooting section or search the Google Search Central Help Community.

**Remember:** SEO takes time. Don't expect immediate results. Focus on providing value to users, and rankings will follow.
