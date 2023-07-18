import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), astroImageTools],
  output: "hybrid",
  experimental: {
    assets: true,
  },
});
