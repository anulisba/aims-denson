const path = require('path');
const fs = require('fs');
const Sitemap = require('react-router-sitemap').default;

// Define your website's base URL and paths
const baseUrl = 'https://aimssportswear.in';
const paths = ["/", "/products", "/about", "/contact"];

// Generate sitemap
const sitemap = new Sitemap(paths).build(baseUrl);

// Save sitemap to public folder
const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
sitemap.save(sitemapPath); // ✅ Use the save method to correctly write XML

console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
