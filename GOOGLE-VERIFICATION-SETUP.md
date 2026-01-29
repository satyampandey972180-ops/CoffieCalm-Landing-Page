# Google Search Console Verification Setup

## Current Status: ⏳ VERIFICATION NEEDED

Your site needs to be verified with Google Search Console to:
- Request indexing for your pages
- Fix the "Showing results for coffee" autocorrect issue
- Monitor search performance
- Submit sitemaps

## How to Get Your Verification Code:

### Step 1: Go to Google Search Console
Visit: https://search.google.com/search-console

### Step 2: Add Your Property
1. Click "Add Property"
2. Choose "URL prefix"
3. Enter: `https://coffiecalm.com`
4. Click "Continue"

### Step 3: Choose HTML Tag Verification Method
1. Select "HTML tag" from the verification methods
2. You'll see code like this:
   ```html
   <meta name="google-site-verification" content="abc123xyz456def789" />
   ```
3. Copy ONLY the content value: `abc123xyz456def789`

### Step 4: Add to Your Site

#### Option A: Add to SEOHead Component (Recommended)
Open `src/seo/components/SEOHead.tsx` and update line with verification:

```typescript
export function SEOHead({ 
  config, 
  googleAnalyticsId, 
  googleSearchConsoleVerification = "YOUR_CODE_HERE" // <-- Paste your code here
}: SEOHeadProps) {
```

#### Option B: Add to App.tsx
```typescript
<SEOHead 
  googleSearchConsoleVerification="YOUR_CODE_HERE"
/>
```

### Step 5: Deploy and Verify
1. Deploy your changes
2. Go back to Google Search Console
3. Click "Verify"
4. Wait for confirmation (usually instant)

## After Verification:

### 1. Submit Your Sitemap
- In Google Search Console, go to "Sitemaps"
- Add sitemap URL: `https://coffiecalm.com/sitemap.xml`
- Click "Submit"

### 2. Request Indexing
- Go to "URL Inspection"
- Enter: `https://coffiecalm.com`
- Click "Request Indexing"
- This tells Google to crawl your site immediately

### 3. Fix Brand Name Issue
Once verified and indexed, Google will recognize "Coffie Calm" as your brand name and stop autocorrecting to "Coffee"

## Verification Checklist:
- [ ] Get verification code from Google Search Console
- [ ] Add code to SEOHead component or App.tsx
- [ ] Deploy changes
- [ ] Click "Verify" in Google Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage
- [ ] Wait 24-48 hours for Google to re-crawl

## Current Site URL:
- **Primary:** https://coffiecalm.com
- **Canonical:** https://coffiecalm.com (no www)

Make sure to verify the non-www version since that's what we're using in the canonical tags.

## Need Help?
If you don't have access to Google Search Console, ask the site owner to:
1. Add you as a user in Search Console
2. Or provide you with the verification code
