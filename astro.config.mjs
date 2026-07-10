import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pratyush.example.com', // TODO: replace with final domain
  integrations: [mdx()],
  build: {
    inlineStylesheets: 'auto',
  },
});
