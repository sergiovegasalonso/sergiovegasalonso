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
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    compressor({
      brotli: false,
      gzip: true,
      fileExtensions: [".png", ".html", ".css", ".ttf", ".xml", ".txt"],
    }),
  ],
});
