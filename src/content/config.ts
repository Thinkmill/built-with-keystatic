import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      repoUrl: z.string().optional(),
      type: z.string(),
      coverImage: image(),
      summary: z.string(),
      sortIndex: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
