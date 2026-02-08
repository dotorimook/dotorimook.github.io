// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://dotorimook.github.io',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@emotion/is-prop-valid': path.resolve(__dirname, 'node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js'),
      },
    },
    ssr: {
      noExternal: ['@emotion/styled', '@emotion/react', '@emotion/is-prop-valid'],
    },
  },
});