import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const essays = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const principles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/principles" }),
  schema: z.object({
    title: z.string(),
    counter: z.string(),
    conjunction: z.enum(["but", "because"]).default("but"),
    order: z.number(),
    summary: z.string(),
    meaning: z.string(),
    risk: z.string(),
    designTask: z.string(),
  }),
});

const taxonomy = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/taxonomy" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    conditions: z.array(z.string()).default([]),
    risks: z.array(z.string()).default([]),
  }),
});

const failureModes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/failureModes" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    signals: z.array(z.string()).default([]),
    mitigations: z.array(z.string()).default([]),
  }),
});

const bibliography = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bibliography" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number(),
    sourceType: z.string(),
    annotation: z.string(),
  }),
});

export const collections = {
  essays,
  principles,
  taxonomy,
  failureModes,
  bibliography,
};
