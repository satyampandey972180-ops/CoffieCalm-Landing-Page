// SEO Type Definitions

export interface MetaTagConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  author?: string;
  robots?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  formats?: string[];
}

export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  googleSearchConsoleId?: string;
  trackPageViews: boolean;
  trackEvents: boolean;
}
