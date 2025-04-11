// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://sergiovegasalonso.vercel.app/",
  integrations: [
    sitemap(),
    playformCompress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
    compressor({
      brotli: false,
      gzip: true,
    }),
  ],
});
