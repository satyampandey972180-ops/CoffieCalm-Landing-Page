// SEO Utility Functions

/**
 * Validates and truncates title to SEO-friendly length (50-60 chars)
 */
export function validateTitle(title: string): string {
  if (title.length >= 50 && title.length <= 60) {
    return title;
  }
  
  if (title.length < 50) {
    console.warn(`Title is too short (${title.length} chars). Recommended: 50-60 chars`);
    return title;
  }
  
  // Truncate to 60 chars at word boundary
  if (title.length > 60) {
    const truncated = title.substring(0, 57);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  }
  
  return title;
}

/**
 * Validates and truncates description to SEO-friendly length (150-160 chars)
 */
export function validateDescription(description: string): string {
  if (description.length >= 150 && description.length <= 160) {
    return description;
  }
  
  if (description.length < 150) {
    console.warn(`Description is too short (${description.length} chars). Recommended: 150-160 chars`);
    return description;
  }
  
  // Truncate to 160 chars at word boundary
  if (description.length > 160) {
    const truncated = description.substring(0, 157);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  }
  
  return description;
}

/**
 * Calculates keyword density in content
 */
export function calculateKeywordDensity(content: string, keyword: string): number {
  const words = content.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  const totalWords = words.length;
  
  let keywordCount = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const phrase = words.slice(i, i + keywordWords.length).join(' ');
    if (phrase === keywordWords.join(' ')) {
      keywordCount++;
    }
  }
  
  return totalWords > 0 ? (keywordCount / totalWords) * 100 : 0;
}

/**
 * Checks if URL is SEO-friendly
 */
export function isSEOFriendlyURL(url: string): boolean {
  // Should be lowercase, use hyphens, no special chars except hyphens and slashes
  const seoPattern = /^[a-z0-9\-\/]+$/;
  const path = url.replace(/^https?:\/\/[^\/]+/, ''); // Remove domain
  return seoPattern.test(path);
}

/**
 * Sanitizes text for meta tags (removes special characters)
 */
export function sanitizeMetaText(text: string): string {
  return text
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/"/g, '&quot;') // Escape quotes
    .replace(/'/g, '&#39;') // Escape single quotes
    .trim();
}

/**
 * Generates alt text from filename if not provided
 */
export function generateAltTextFromFilename(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
}

/**
 * Checks if a link is external
 */
export function isExternalLink(href: string, currentDomain: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return url.hostname !== currentDomain && url.hostname !== window.location.hostname;
  } catch {
    return false; // Relative URLs are internal
  }
}

/**
 * Validates heading hierarchy (no skipped levels)
 */
export function validateHeadingHierarchy(headings: { level: number; text: string }[]): boolean {
  if (headings.length === 0) return true;
  
  let previousLevel = 0;
  for (const heading of headings) {
    if (heading.level > previousLevel + 1 && previousLevel !== 0) {
      console.warn(`Heading hierarchy skip detected: H${previousLevel} to H${heading.level}`);
      return false;
    }
    previousLevel = heading.level;
  }
  
  return true;
}

/**
 * Formats date for sitemap (YYYY-MM-DD)
 */
export function formatSitemapDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

/**
 * Generates structured data script tag
 */
export function generateStructuredDataScript(data: object): string {
  return JSON.stringify(data, null, 2);
}
