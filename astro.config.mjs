import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mattormianek.github.io',
  base: '/',
  prefetch: {
    prefetchAll: true
  }
});
