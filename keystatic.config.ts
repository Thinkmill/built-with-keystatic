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
          directory: "public/images/projects",
          publicPath: "/images/projects",
        }),
        sortIndex: fields.integer({ label: "Sort Index", defaultValue: 100 }),
      },
    }),
  },
});
