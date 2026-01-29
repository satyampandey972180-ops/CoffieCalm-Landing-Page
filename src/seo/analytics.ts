// Analytics Event Tracking Utilities

import { SEO_CONFIG } from './config';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent({ action, category, label, value }: AnalyticsEvent): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { action, category, label, value });
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', SEO_CONFIG.googleAnalyticsId, {
      page_path: path,
    });
  }
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent({
    action: 'click',
    category: 'CTA',
    label: `${ctaName} - ${location}`,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavigation(destination: string): void {
  trackEvent({
    action: 'click',
    category: 'Navigation',
    label: destination,
  });
}

/**
 * Track download button clicks
 */
export function trackDownload(platform: string): void {
  trackEvent({
    action: 'click',
    category: 'Download',
    label: platform,
  });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string): void {
  trackEvent({
    action: 'click',
    category: 'External Link',
    label: url,
  });
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string): void {
  trackEvent({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
}

/**
 * Track user engagement (time on page, scroll depth, etc.)
 */
export function trackEngagement(metric: string, value: number): void {
  trackEvent({
    action: 'engagement',
    category: 'User Engagement',
    label: metric,
    value: value,
  });
}
