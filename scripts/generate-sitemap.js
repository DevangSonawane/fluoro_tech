import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

const siteUrl = 'https://fluorotech.in';

const staticRoutes = [
  '/',
  '/about',
  '/products',
  '/clients',
  '/contact',
  '/technical-data',
  '/fluoropolymer-coating-selection-guide',
  '/industries/chemical-processing',
];

const productsPath = resolve(root, 'src', 'data', 'products.json');
let productRoutes = [];
try {
  const products = JSON.parse(readFileSync(productsPath, 'utf-8'));
  productRoutes = products.map(p => `/products/${p.id}`);
} catch {
  productRoutes = [];
}

const urls = [...staticRoutes, ...productRoutes];

const now = new Date().toISOString();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('')}
</urlset>`;

const outPath = resolve(root, 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log('Sitemap generated:', outPath);
