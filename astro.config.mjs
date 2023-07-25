import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), robotsTxt()],
  output: "hybrid",
  experimental: {
    assets: true,
  },
  site: "https://keystatic.com/showcase",
  adapter: vercel(),
  build: {
    assets: "_uses_assets",
  },
});
