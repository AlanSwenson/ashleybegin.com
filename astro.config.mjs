// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ashleybegin.com',
    integrations: [
        tailwind(),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date()
        })
    ],
});
