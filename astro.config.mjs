// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ashleybegin.com',
    adapter: cloudflare({
        imageService: 'compile',
    }),
    integrations: [
        tailwind(),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
});
