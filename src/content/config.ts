import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      type: z.string(),
      image: image(),
      description: z.string(),
      sortIndex: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
