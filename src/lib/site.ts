import { getCollection, type CollectionEntry } from 'astro:content';
import { locales } from './locales.mjs';
import en from '../i18n/locales/en.json';

export type UI = typeof en;
export type ProductKey = 'noutube' | 'nora' | 'nori';
/** Locale key as used in URLs; `undefined` is the root (English) locale. */
export type Locale = string | undefined;

const dictionaries = import.meta.glob<UI>('../i18n/locales/*.json', { eager: true, import: 'default' });

/** UI strings for a locale, falling back to English for anything missing. */
export function getUI(locale: Locale): UI {
	const dict = dictionaries[`../i18n/locales/${locale ?? 'en'}.json`];
	if (!dict) return en;
	return {
		...en,
		...dict,
		products: { ...en.products, ...dict.products },
		others: { ...en.others, ...dict.others },
		blog: { ...en.blog, ...dict.blog },
	};
}

export const products: Record<ProductKey, { name: string; logo: string}> = {
	noutube: { name: 'NouTube', logo: '/app-logos/noutube.png' },
	nora: { name: 'Nora', logo: '/app-logos/nora.png' },
	nori: { name: 'Nori', logo: '/app-logos/nori.png' },
};
export const productKeys = Object.keys(products) as ProductKey[];

export const otherProducts = [
	{ key: 'meron', name: 'Meron', logo: '/app-logos/meron.png' },
	{ key: 'tmiix', name: 'Tmiix', logo: '/app-logos/tmiix.png' },
	{ key: 'jamu', name: 'Jamu', logo: '/app-logos/jamu.png' },
] as const;

export const localeKeys: Locale[] = Object.keys(locales).map((key) => (key === 'root' ? undefined : key));

/** BCP-47 tag for a locale, e.g. `pt-br` -> `pt-BR`. */
export function langOf(locale: Locale): string {
	return (locales as Record<string, { lang: string }>)[locale ?? 'root']?.lang ?? 'en';
}

/** Prefix a root-relative path with the locale, e.g. (`ja`, `/blog/`) -> `/ja/blog/`. */
export function localizePath(locale: Locale, path: string): string {
	return locale ? `/${locale}${path}` : path;
}

export function formatDate(date: Date, locale: Locale): string {
	return new Intl.DateTimeFormat(langOf(locale), { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

/** Turn the `[label](url)` links of a one-line translated string into anchors. */
export function inlineLinks(text: string): string {
	const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	return escape(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}

export interface BlogPost {
	slug: string;
	href: string;
	title: string;
	description: string;
	date: Date;
	product?: ProductKey;
	entry: CollectionEntry<'blog'>;
	/** True when the locale has no translation and the English post is shown instead. */
	isFallback: boolean;
}

/** Posts for a locale, newest first. Untranslated posts fall back to English. */
export async function getPosts(locale: Locale): Promise<BlogPost[]> {
	const all = await getCollection('blog');
	const byId = new Map(all.map((entry) => [entry.id, entry]));
	const key = locale ?? 'en';
	return all
		.filter((entry) => entry.id.startsWith('en/') && entry.id !== 'en/index')
		.map((source) => {
			const slug = source.id.slice('en/'.length);
			const entry = byId.get(`${key}/${slug}`) ?? source;
			if (!source.data.date) throw new Error(`Blog post "${source.id}" is missing a \`date\`.`);
			return {
				slug,
				href: localizePath(locale, `/blog/${slug}/`),
				title: entry.data.title,
				description: entry.data.description,
				date: entry.data.date ?? source.data.date,
				product: entry.data.product ?? source.data.product,
				entry,
				isFallback: entry === source && key !== 'en',
			};
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime() || b.slug.localeCompare(a.slug));
}

/** The translated intro entry of the blog index (`<locale>/index.md`). */
export async function getBlogIntro(locale: Locale): Promise<CollectionEntry<'blog'>> {
	const all = await getCollection('blog');
	const intro =
		all.find((entry) => entry.id === `${locale ?? 'en'}/index`) ?? all.find((entry) => entry.id === 'en/index');
	if (!intro) throw new Error('Missing src/content/blog/en/index.md');
	return intro;
}
