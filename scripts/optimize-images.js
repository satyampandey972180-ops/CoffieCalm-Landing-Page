/**
 * Image Optimization Script
 * 
 * This script optimizes local images by:
 * - Converting to WebP format (better compression)
 * - Resizing to appropriate dimensions
 * - Reducing quality while maintaining visual fidelity
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Sharp is not installed. Please run: npm install --save-dev sharp');
  process.exit(1);
}

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/optimized');

// Image optimization settings
const OPTIMIZATION_CONFIG = {
  jpg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    compressionLevel: 9,
    progressive: true
  },
  webp: {
    quality: 80,
    effort: 6
  },
  maxWidth: 1200, // Max width for images
  maxHeight: 1200 // Max height for images
};

async function optimizeImage(inputPath, outputPath, format = 'original') {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`📸 Processing: ${path.basename(inputPath)}`);
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    let pipeline = image;
    
    // Resize if image is too large
    if (metadata.width > OPTIMIZATION_CONFIG.maxWidth || metadata.height > OPTIMIZATION_CONFIG.maxHeight) {
      pipeline = pipeline.resize(OPTIMIZATION_CONFIG.maxWidth, OPTIMIZATION_CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply format-specific optimization
    if (format === 'webp') {
      pipeline = pipeline.webp(OPTIMIZATION_CONFIG.webp);
      outputPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    } else if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      pipeline = pipeline.jpeg(OPTIMIZATION_CONFIG.jpg);
    } else if (metadata.format === 'png') {
      pipeline = pipeline.png(OPTIMIZATION_CONFIG.png);
    }
    
    await pipeline.toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`   ✅ Saved: ${(originalSize / 1024).toFixed(2)}KB → ${(optimizedSize / 1024).toFixed(2)}KB (${savings}% reduction)`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`   ❌ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Get all image files
  const files = fs.readdirSync(ASSETS_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });
  
  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Optimize each image
  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    
    // Optimize in original format
    const result = await optimizeImage(inputPath, outputPath, 'original');
    
    // Also create WebP version
    const webpOutputPath = path.join(OUTPUT_DIR, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    await optimizeImage(inputPath, webpOutputPath, 'webp');
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
    
    console.log('');
  }
  
  // Summary
  console.log('📊 Optimization Summary:');
  console.log(`   Total original size: ${(totalOriginalSize / 1024).toFixed(2)}KB`);
  console.log(`   Total optimized size: ${(totalOptimizedSize / 1024).toFixed(2)}KB`);
  console.log(`   Total savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2)}%`);
  console.log(`\n✨ Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n📝 Next steps:');
  console.log('   1. Review the optimized images');
  console.log('   2. Replace original images with optimized versions if satisfied');
  console.log('   3. Update ImageWithFallback components to use WebP versions');
}

// Run optimization
optimizeAllImages().catch(console.error);
