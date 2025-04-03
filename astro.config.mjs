// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // output: "static",

  integrations: [react(), icon()],

  // adapter: node({
  //   mode: 'middleware'
  // })
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});