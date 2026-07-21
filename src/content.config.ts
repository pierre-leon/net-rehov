import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().optional(),
    year: z.string().optional(),
    location: z.string().optional(),
    collaboration: z.string().optional(),
    website: z.string().url().optional(),
    heroImage: z.string(),
    ogImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    icon: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(["ventures", "experiments", "architecture"]).default("ventures"),
    client: z.string().optional(),
  }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, thoughts };
