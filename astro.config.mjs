import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";

// Grabbing the SITE_URL from the environment variables 
// (used for SEO metatags base path)
const {
  SITE_URL
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  integrations: [react(), markdoc()],
  output: "hybrid",
  experimental: {
    assets: true
  },
  site: SITE_URL,
  adapter: vercel()
});