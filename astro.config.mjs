// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abhimishra91.github.io',
  integrations: [sitemap()],
  // Keep links from the old Jekyll site working.
  redirects: {
    '/projects': '/#work',
    '/prj_email': '/work/email-classification/',
    '/prj_investment': '/work/investment-analytics/',
    '/prj_recsys': '/work/fraud-personalisation/',
  },
});
