import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://malhotraarshdeepsingh.github.io/astro_food_website/',
  experimental: {
    assets: true
  },
  integrations: [solidJs(), react(), mdx()],
  outDir: 'dist'
});