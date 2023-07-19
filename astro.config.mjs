import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [react(), markdoc()],
  output: "hybrid",
  site: "https://built-with-keystatic-simonswiss-thinkmill.vercel.app",
  adapter: vercel(),
});
