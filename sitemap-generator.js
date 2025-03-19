const path = require("path");
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const baseUrl = "https://aimssportswear.in";
const pages = ["/"]; // Only the root URL since it's an SPA

const sitemapStream = new SitemapStream({ hostname: baseUrl });

pages.forEach((page) => {
    sitemapStream.write({ url: page, changefreq: "daily", priority: 1.0 });
});

sitemapStream.end();

streamToPromise(sitemapStream).then((sitemap) => {
    const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemap.toString());
    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
});
