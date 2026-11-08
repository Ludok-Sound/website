// Los artículos: un Markdown por artículo e idioma, en content/articles/<idioma>/<slug>.md. La
// versión en el otro idioma es la que tiene el mismo nombre de fichero en la otra carpeta.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { articles };
