import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    image: z.string(),
    description: z.string(),
    sortIndex: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
