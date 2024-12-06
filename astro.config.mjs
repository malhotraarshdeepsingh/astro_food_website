import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://astro-frontend-masters.netlify.app',
  experimental: {
    assets: true
  },
  integrations: [solidJs(), react()],
});