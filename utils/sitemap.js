const fs = require('fs');

const WEBSITE_URL = (
    process.env.WEBSITE_URL ?? 'https://www.leontranvan.com'
).replace(/\/$/, '');

function addPage(page) {
    const path = page
        .replace('pages', '')
        .replace('.jsx', '')
        .replace('.mdx', '');
    const route = path === '/index' ? '' : path;

    return `  <url>
    <loc>${WEBSITE_URL}${route}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

function generateSitemap() {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = fs
        .globSync('pages/**/*.{jsx,mdx}', {
            exclude: (path) =>
                /^_/.test(path.split('/').pop()) || path.startsWith('pages/api'),
        })
        .sort();
    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
