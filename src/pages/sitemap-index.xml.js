// src/pages/sitemap-index.xml.js
// Plain JS, no TypeScript syntax.
// Includes all topic hubs (atomic + longtail). Cross URLs only for atomic topics.
import { topics } from '../data/topics.js';
import { niches } from '../data/niches.js';

export async function GET() {
  const base = 'https://succession.noahstjohn.com';
  const urls = [base + '/'];

  for (const topic of topics) {
    urls.push(`${base}/${topic.slug}`);
    if (topic.kind === 'atomic') {
      for (const niche of niches) {
        urls.push(`${base}/${topic.slug}/${niche.slug}`);
      }
    }
  }

    // CITY_ROUTES_INJECTED 2026-05-13
  // Adds cities, city detail pages, and city x topic atomic pages.
  // Pattern: replicates speaker.noahstjohn.com which pulls 38% of network impressions.
  let citiesData;
  try {
    citiesData = (await import('../data/cities.js')).cities;
  } catch (e) { citiesData = []; }
  if (citiesData.length) {
    urls.push(base + '/cities/');
    for (const c of citiesData) {
      urls.push(`${base}/cities/${c.slug}/`);
      for (const topic of topics) {
        if (topic.kind === 'atomic' || !topic.kind) {
          urls.push(`${base}/cities/${c.slug}/${topic.slug}/`);
        }
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => {
  const depth = url.replace(base,'').split('/').filter(Boolean).length;
  const priority = depth === 0 ? '1.0' : depth === 1 ? '0.9' : '0.7';
  return `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
