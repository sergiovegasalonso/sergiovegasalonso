// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site:"https://sergiovegasalonso.vercel.app/",
  integrations: [sitemap(), playformCompress()],
});