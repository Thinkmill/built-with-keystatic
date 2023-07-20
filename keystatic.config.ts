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
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        url: fields.url({ label: "URL" }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
          description: "This will be used on the homepage listing.",
        }),
        coverImage: fields.image({
          label: "Cover image",
          validation: { isRequired: true },
          directory: "src/assets/projects",
          publicPath: "../../assets/projects",
        }),
        sortIndex: fields.integer({ label: "Sort Index", defaultValue: 100 }),
        content: fields.document({
          label: "Content",
          description: "The long form copy for the project page.",
          formatting: true,
          links: true,
          images: {
            directory: "src/assets/projects",
            publicPath: "../../assets/projects",
          },
        }),
      },
    }),
  },
});
