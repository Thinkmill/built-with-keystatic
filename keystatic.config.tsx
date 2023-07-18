// keystatic.config.tsx
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
        // images: fields.array(
        //   fields.object({
        //     href: fields.text({
        //       label: 'Href *',
        //       validation: {
        //         length: {
        //           min: 1,
        //         },
        //       },
        //     }),
        //     alt: fields.text({
        //       label: 'Alt text',
        //       description: 'Include an alt text description or leave blank for decorative images',
        //     }),
        //     height: fields.text({
        //       label: 'Height',
        //       description:
        //         'The intrinsic height of the image, in pixels. Must be an integer without a unit - e.g. 100',
        //     }),
        //     width: fields.text({
        //       label: 'Width',
        //       description:
        //         'The intrinsic width of the image, in pixels. Must be an integer without a unit - e.g. 100',
        //     }),
        //     srcSet: fields.text({
        //       label: 'Srcset',
        //       description: 'Optionally override the defualt srcset',
        //     }),
        //     sizes: fields.text({
        //       label: 'Sizes',
        //       description: 'Optionally override the default sizes',
        //     }),
        //     caption: fields.text({
        //       label: 'Caption',
        //       description: 'Optionally add a caption to display in small text below the image',
        //     }),
        //   }),
        //   {
        //     label: 'Images',
        //     validation: {
        //       length: {
        //         min: 1,
        //         max: 1,
        //       },
        //     },
        //   }
        // ),
        // content: fields.document({
        //   label: 'Content',
        //   formatting: true,
        //   dividers: true,
        //   links: true,
        //   images: true,
        // }),
      },
    }),
  },
});
