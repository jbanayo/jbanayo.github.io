import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const inventions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/inventions' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    status: z.string(),
    patentNumber: z.string(),
    filingDate: z.string().optional(),
    grantDate: z.string().optional(),
    internationalPubs: z.array(z.string()).default([]),
    institutions: z.array(z.string()).default([]),
    summary: z.string(),
    heroImage: z.string().optional(),
    secondaryImage: z.string().optional(),
    order: z.number().default(10),
    officialLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { inventions, writing };
