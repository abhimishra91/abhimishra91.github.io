import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    role: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    summary: z.string(),
    // Which of the three "modes" this project is evidence for.
    lens: z.array(z.enum(['lead', 'architect', 'deploy'])),
    tags: z.array(z.string()),
    // Headline numbers shown on the card and the case-study page.
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })),
    // Simplified architecture, rendered as an animated pipeline.
    flow: z.array(z.object({ label: z.string(), detail: z.string().optional() })),
  }),
});

export const collections = { work };
