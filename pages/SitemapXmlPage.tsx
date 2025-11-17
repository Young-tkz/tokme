
import React from 'react';

const SitemapXmlPage: React.FC = () => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tokme.example.com/</loc>
    <lastmod>2023-10-27</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://tokme.example.com/#/terms-of-service</loc>
    <lastmod>2023-10-27</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://tokme.example.com/#/privacy-policy</loc>
    <lastmod>2023-10-27</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://tokme.example.com/#/contact</loc>
    <lastmod>2023-10-27</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>`;

  return (
    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
      {content}
    </pre>
  );
};

export default SitemapXmlPage;
