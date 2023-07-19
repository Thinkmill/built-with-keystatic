import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [react(), markdoc()],
  output: "hybrid",
  adapter: vercel(),
});
