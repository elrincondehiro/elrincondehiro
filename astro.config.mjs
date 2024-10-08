// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env: {
    schema:{
      STRAPI_API_KEY: envField.string({context: 'server', access: 'secret'}),
      STRAPI_URL: envField.string({context:'server', access: 'secret'})
    }
  }
});