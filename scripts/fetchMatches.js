
const fs = require('fs');

// Mock API verisi
const matches = [
  { id: 1, homeTeam: 'Galatasaray', awayTeam: 'Fenerbahçe', date: '2025-09-09T19:00:00+03:00', stream: 'https://stream.example.com/1' },
  { id: 2, homeTeam: 'Beşiktaş', awayTeam: 'Trabzonspor', date: '2025-09-09T21:00:00+03:00', stream: 'https://stream.example.com/2' }
];

fs.writeFileSync('./data/matches.json', JSON.stringify(matches, null, 2));

// Sitemap oluştur
const sitemapEntries = matches.map(m => `
<url>
    <loc>https://taraftarium24-izle.pages.dev/${m.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
</url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>https://taraftarium24-izle.pages.dev/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
</url>
${sitemapEntries}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Maç verileri ve sitemap güncellendi!');
