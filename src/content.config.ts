import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** The page renders its own header (home, blog), so skip Starlight's title block. */
				bare: z.boolean().optional(),
			}),
		}),
	}),
	/**
	 * Blog posts live in `src/content/blog/<locale>/<slug>.md` (`en` is the default locale).
	 * `<locale>/index.md` holds the translated title, description, and intro of the blog index.
	 */
	blog: defineCollection({
		loader: glob({
			pattern: '*/*.md',
			base: './src/content/blog',
			generateId: ({ entry }) => entry.replace(/\.md$/, ''),
		}),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			/** Required for posts; omitted on `index.md`. */
			date: z.coerce.date().optional(),
			product: z.enum(['noutube', 'nora', 'nori']).optional(),
		}),
	}),
};
