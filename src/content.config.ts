import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    personas: z.array(z.enum(['power-user', 'general-user', 'developer'])),
    section: z.string(),
    order: z.number().default(0),
    heroScreenshot: z.string().optional(),
    apiReference: z.boolean().default(false),
  }),
});

export const collections = { docs };
