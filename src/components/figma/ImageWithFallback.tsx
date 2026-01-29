import React, { useState } from 'react';
import { generateAltTextFromFilename } from '../../seo/utils';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  lazy?: boolean;
  webpSrc?: string; // Optional WebP version of the image
  avifSrc?: string; // Optional AVIF version of the image
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, lazy = true, loading, webpSrc, avifSrc, ...rest } = props;

  // Generate alt text from filename if not provided
  const altText = alt || generateAltTextFromFilename(src);

  // Warn if alt text is missing
  if (!alt && process.env.NODE_ENV === 'development') {
    console.warn(`Image missing alt text: ${src}. Generated alt text: "${altText}"`);
  }

  // Determine loading strategy
  const loadingStrategy = loading || (lazy ? 'lazy' : 'eager');

  // Auto-generate WebP/AVIF paths if not provided
  const autoWebpSrc = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const autoAvifSrc = avifSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  // Check if we should use picture element (when modern formats are available)
  const useModernFormats = webpSrc || avifSrc || /\.(jpg|jpeg|png)$/i.test(src);

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={ERROR_IMG_SRC} 
          alt="Error loading image" 
          {...rest} 
          data-original-url={src} 
        />
      </div>
    </div>
  ) : useModernFormats ? (
    <picture>
      {/* AVIF format - best compression */}
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
      
      {/* WebP format - good compression and wide support */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={altText}
        className={className}
        style={style}
        loading={loadingStrategy}
        {...rest}
        onError={handleError}
      />
    </picture>
  ) : (
    <img
      src={src}
      alt={altText}
      className={className}
      style={style}
      loading={loadingStrategy}
      {...rest}
      onError={handleError}
    />
  );
}
