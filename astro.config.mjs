import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://delta-elevators.ru',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
});
