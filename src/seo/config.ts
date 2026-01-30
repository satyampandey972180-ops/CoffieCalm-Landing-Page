// SEO Configuration

export const SEO_CONFIG = {
  // Site Information
  siteName: 'Coffie Calm',
  siteUrl: 'https://coffiecalm.com',
  defaultTitle: 'CoffieCalm - Anonymous Chat, Random Chat Online & Mental Wellness Support',
  defaultDescription: 'CoffieCalm: Free anonymous chat and random chat online for mental wellness. Connect with peer support, vent anonymously, and find long-term mental health support without phone numbers. Perfect for developer burnout, work stress, and emotional wellbeing. Available 24/7.',
  
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
  'anonymous peer support',
  'mental wellness',
  'random chat online',
  'anonymous chat',
  'mental health support',
];

// Secondary Keywords (for H2/H3 headings)
export const SECONDARY_KEYWORDS = [
  'peer support',
  'anonymous venting',
  'random chat',
  'mental wellbeing',
  'emotional support',
  'peer chat',
  'developer burnout',
  'work stress support',
  'online friendship',
  'long term mental support',
  'anonymous support chat',
  'mental wellness community',
];

// Long-tail Keywords (for body content)
export const LONG_TAIL_KEYWORDS = [
  'anonymous mental health support online',
  'random chat with strangers for mental support',
  'free peer support platform for developers',
  'anonymous chat without phone number',
  'long term mental health support without therapy costs',
  'mental health alternatives India',
  'anonymous venting platform',
  'peer to peer mental wellness',
  'random stranger chat for emotional support',
  'builder burnout support',
  'coding burnout help',
  'anonymous online chat for emotional release',
  'mental wellbeing chat without sign up',
];

// Meta Keywords
export const META_KEYWORDS = [
  // Core terms
  'CoffieCalm',
  'Coffie Calm',
  'Coffee Calm',
  'mental wellness',
  'peer support',
  'anonymous chat',
  'mental health',
  
  // Chat variations
  'random chat',
  'random chat online',
  'anonymous chat online',
  'anonymous support chat',
  'peer chat',
  
  // Mental health
  'mental support',
  'mental wellbeing',
  'emotional support',
  'mental health support',
  'mental wellness community',
  
  // Long-term support
  'long term mental support',
  'ongoing mental health support',
  
  // Burnout
  'developer burnout',
  'work burnout',
  'builder burnout',
  'coding burnout',
  
  // Connection
  'online friendship',
  'emotional connection',
  'supportive community',
  
  // India-specific
  'mental health India',
  'peer support India',
  'therapy alternatives India',
  
  // Features
  'anonymous venting',
  'no phone number required',
  'free mental health support',
  '24/7 peer support',
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
