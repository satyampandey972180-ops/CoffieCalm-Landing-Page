import { Helmet } from 'react-helmet-async';
import { MetaTagConfig } from '../types';
import { validateTitle, validateDescription, sanitizeMetaText } from '../utils';
import { SEO_CONFIG, META_KEYWORDS } from '../config';

interface SEOHeadProps {
  config?: Partial<MetaTagConfig>;
  googleAnalyticsId?: string;
  googleSearchConsoleVerification?: string;
}

export function SEOHead({ config, googleAnalyticsId, googleSearchConsoleVerification }: SEOHeadProps) {
  // Merge with defaults
  const title = config?.title || SEO_CONFIG.defaultTitle;
  const description = config?.description || SEO_CONFIG.defaultDescription;
  const keywords = config?.keywords || META_KEYWORDS;
  const canonicalUrl = config?.canonicalUrl || SEO_CONFIG.siteUrl;
  const ogImage = config?.ogImage || SEO_CONFIG.defaultOgImage;
  const ogType = config?.ogType || 'website';
  const twitterCard = config?.twitterCard || 'summary_large_image';
  const author = config?.author;
  const robots = config?.robots || 'index, follow';

  // Validate and sanitize
  const validatedTitle = sanitizeMetaText(validateTitle(title));
  const validatedDescription = sanitizeMetaText(validateDescription(description));
  const keywordsString = keywords.join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Title */}
      <title>{validatedTitle}</title>
      
      {/* SEO Meta Tags */}
      <meta name="description" content={validatedDescription} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content={robots} />
      {author && <meta name="author" content={author} />}
      
      {/* Security Headers - Note: X-Frame-Options must be set via HTTP headers, not meta tags */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http:; connect-src 'self' https://www.google-analytics.com; frame-src 'self';" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={validatedTitle} />
      <meta property="og:description" content={validatedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={validatedTitle} />
      <meta name="twitter:description" content={validatedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#9333ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Google Search Console Verification */}
      {googleSearchConsoleVerification && (
        <meta name="google-site-verification" content={googleSearchConsoleVerification} />
      )}
      
      {/* Note: Add your actual verification code from Google Search Console */}
      {/* Get it from: https://search.google.com/search-console */}
      {/* Example: <meta name="google-site-verification" content="abc123xyz456" /> */}
      
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `}
          </script>
        </>
      )}
    </Helmet>
  );
}
