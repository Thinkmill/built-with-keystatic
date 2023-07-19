import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "empty" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        url: fields.url({ label: "URL" }),
        description: fields.text({ label: "Description", multiline: true }),
        empty: fields.emptyDocument(),
        image: fields.image({
          label: "Image",
          validation: { isRequired: true },
          directory: "src/assets/projects",
          publicPath: "src/assets/projects",
        }),
        sortIndex: fields.integer({ label: "Sort Index", defaultValue: 100 }),
      },
    }),
  },
});
