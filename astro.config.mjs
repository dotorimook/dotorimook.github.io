import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dotorimook.github.io',
  redirects: {
    '/post/2021-05-02-check-intel-mac-app copy/': '/post/2021-05-02-check-intel-mac-app-copy/',
    '/post/2021-05-02-check-intel-mac-app%20copy/': '/post/2021-05-02-check-intel-mac-app-copy/',
    '/sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    ssr: {
      noExternal: ['@emotion/*'],
    },
  },
});