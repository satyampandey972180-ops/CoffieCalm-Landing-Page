// SEO Configuration

export const SEO_CONFIG = {
  // Site Information
  siteName: 'Coffie Calm',
  siteUrl: 'https://coffiecalm.com',
  defaultTitle: 'Coffie Calm - Anonymous Peer Support & Mental Wellness',
  defaultDescription: 'Join Coffie Calm for anonymous peer support and mental wellness. Connect with empathetic listeners in a safe, judgment-free space. Available 24/7, free.',
  
  // Social Media
  twitterHandle: '@coffiecalm',
  facebookUrl: 'https://facebook.com/coffiecalm',
  
  // Images
  defaultOgImage: 'https://coffiecalm.com/og-image.png',
  logo: 'https://coffiecalm.com/logo.png',
  
  // Organization Info
  organizationName: 'Coffie Calm',
  organizationDescription: 'Peer-to-peer mental wellness platform offering anonymous support and emotional connection',
  
  // Analytics
  googleAnalyticsId: 'G-SW6JJRDQWW',
};

// Primary Keywords (for H1 headings)
export const PRIMARY_KEYWORDS = [
  'mental wellness app',
  'anonymous peer support',
  'emotional support platform',
  'mental health chat',
];

// Secondary Keywords (for H2/H3 headings)
export const SECONDARY_KEYWORDS = [
  'peer-to-peer therapy',
  'anonymous listening',
  'judgment-free support',
  'mental wellness community',
  'safe space chat',
  'emotional wellness app',
  'peer support',
  'mental health',
  'anonymous chat',
  'emotional support',
];

// Long-tail Keywords (for body content)
export const LONG_TAIL_KEYWORDS = [
  'anonymous mental health support online',
  'peer support for anxiety and depression',
  'free emotional support chat',
  'mental wellness app without social pressure',
  'anonymous listener platform',
  'judgment-free mental health community',
  'peer-to-peer emotional support',
  'safe space for mental wellness',
];

// Meta Keywords
export const META_KEYWORDS = [
  'mental wellness',
  'peer support',
  'anonymous chat',
  'emotional support',
  'mental health app',
  'safe space',
  'listening platform',
  'peer-to-peer therapy',
  'judgment-free support',
  'mental wellness community',
];

// Sitemap Configuration
export const SITEMAP_URLS = [
  {
    url: 'https://coffiecalm.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: 'https://coffiecalm.com/#features',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: 'https://coffiecalm.com/#about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: 'https://coffiecalm.com/#how-it-works',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: 'https://coffiecalm.com/#faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
];
