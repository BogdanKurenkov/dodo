import getConfig from 'next/config';

export default function Sitemap() {
    return null;
}

export async function getServerSideProps({ res }) {
    const { serverRuntimeConfig } = getConfig();
    const baseUrl = serverRuntimeConfig?.siteUrl || 'https://lab-preview.vercel.app';

    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    const staticPages = [
        { url: '/', changefreq: 'daily', priority: '1.0' },
        { url: '/results', changefreq: 'daily', priority: '0.8' },
        { url: '/voteResult', changefreq: 'daily', priority: '0.8' },
        { url: '/results?source=qr', changefreq: 'weekly', priority: '0.7' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
            .map((page) => {
                return `
            <url>
              <loc>${normalizedBaseUrl}${page.url}</loc>
              <changefreq>${page.changefreq}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `;
            })
            .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}