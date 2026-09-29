import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releaseNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/release-notes' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { 'release-notes': releaseNotes };
