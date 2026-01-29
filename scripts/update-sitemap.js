#!/usr/bin/env node

/**
 * Script to update sitemap.xml lastmod dates
 * Run this script whenever content is updated to notify search engines
 */

const fs = require('fs');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function updateSitemapDates() {
  try {
    // Read the current sitemap
    let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
    
    // Get current date in ISO format (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Replace all lastmod dates with current date
    sitemap = sitemap.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    // Write updated sitemap back to file
    fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
    
    console.log(`✅ Sitemap updated successfully with date: ${currentDate}`);
    console.log(`📍 Location: ${SITEMAP_PATH}`);
    
    // Optionally ping search engines (uncomment to enable)
    // pingSearchEngines();
    
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
}

function pingSearchEngines() {
  const https = require('https');
  const sitemapUrl = encodeURIComponent('https://www.coffiecalm.com/sitemap.xml');
  
  // Ping Google
  const googleUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;
  console.log(`🔔 Pinging Google: ${googleUrl}`);
  
  // Ping Bing
  const bingUrl = `https://www.bing.com/ping?sitemap=${sitemapUrl}`;
  console.log(`🔔 Pinging Bing: ${bingUrl}`);
  
  // Note: Actual pinging requires making HTTP requests
  // This is a placeholder - implement if needed
}

// Run the update
updateSitemapDates();
