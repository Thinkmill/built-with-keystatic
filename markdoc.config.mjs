import { defineMarkdocConfig } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-dark",
      wrap: true,
    }),
  ],
});
