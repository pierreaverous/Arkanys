const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const routes = [
    '/',
    '/contact',
    '/roadmap',
    '/FAQ',
    '/lever-de-fond',
    // ... ajoutez d'autres routes si nécessaire
];

const sitemap = new SitemapStream({ hostname: 'https://arkanys.io/' });

const writeStream = createWriteStream('./build/sitemap.xml');
sitemap.pipe(writeStream);

routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
});

sitemap.end();
