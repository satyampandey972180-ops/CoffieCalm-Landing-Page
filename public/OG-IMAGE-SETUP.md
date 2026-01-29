# Open Graph Image Setup

## Current Status: ⚠️ IMAGE NEEDED

Your meta tags reference: `https://coffiecalm.com/og-image.png`

This image is used when people share your link on:
- WhatsApp
- Facebook
- Twitter/X
- LinkedIn
- Slack
- Discord

## Required Image Specifications:

### Dimensions:
- **Recommended:** 1200 x 630 pixels
- **Minimum:** 600 x 315 pixels
- **Aspect Ratio:** 1.91:1

### File Format:
- PNG or JPG
- File size: Under 8MB (ideally under 1MB)
- File name: `og-image.png` or `og-image.jpg`

### Content Guidelines:
Your OG image should include:
1. **Coffie Calm logo** (prominently displayed)
2. **Tagline:** "Anonymous Peer Support & Mental Wellness"
3. **Visual element:** Calming colors (purple/blue gradient)
4. **Readable text:** Even when thumbnail is small

### Design Template:
```
┌─────────────────────────────────────┐
│                                     │
│         [Coffie Calm Logo]          │
│                                     │
│   Anonymous Peer Support &          │
│      Mental Wellness                │
│                                     │
│   [Calming background gradient]     │
│                                     │
└─────────────────────────────────────┘
```

## How to Create:

### Option 1: Use Canva (Easiest)
1. Go to https://www.canva.com
2. Search for "Open Graph Image" template
3. Customize with your logo and text
4. Download as PNG (1200 x 630)
5. Name it `og-image.png`
6. Place in `/public` folder

### Option 2: Use Figma
1. Create new frame: 1200 x 630
2. Add your logo and text
3. Export as PNG
4. Name it `og-image.png`
5. Place in `/public` folder

### Option 3: Use Online Tool
1. Go to https://www.opengraph.xyz/
2. Upload logo and customize
3. Download generated image
4. Name it `og-image.png`
5. Place in `/public` folder

## Where to Place:
Save the file as: `/public/og-image.png`

## Testing:

### Test on Social Media Debuggers:
1. **Facebook:** https://developers.facebook.com/tools/debug/
2. **Twitter:** https://cards-dev.twitter.com/validator
3. **LinkedIn:** https://www.linkedin.com/post-inspector/

Enter your URL: `https://coffiecalm.com`

### What You Should See:
- ✅ Image preview loads
- ✅ Title: "Coffie Calm - Anonymous Peer Support & Mental Wellness"
- ✅ Description: "Join Coffie Calm for anonymous peer support..."
- ✅ Image dimensions: 1200 x 630

### What Indicates a Problem:
- ❌ Gray box instead of image
- ❌ "Image not found" error
- ❌ Wrong image dimensions warning

## Current Meta Tags:
```html
<meta property="og:image" content="https://coffiecalm.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Coffie Calm - Anonymous Peer Support Platform" />
```

## Checklist:
- [ ] Create 1200 x 630 image with logo and tagline
- [ ] Save as `/public/og-image.png`
- [ ] Deploy changes
- [ ] Test on Facebook Debugger
- [ ] Test on Twitter Card Validator
- [ ] Share link on WhatsApp to verify

## Why This Matters:
When someone shares your link without an OG image:
- ❌ Just shows a gray box or broken image icon
- ❌ Looks unprofessional
- ❌ Lower click-through rate
- ❌ Reduced social media engagement

With proper OG image:
- ✅ Eye-catching preview
- ✅ Professional appearance
- ✅ Higher click-through rate
- ✅ Better brand recognition
