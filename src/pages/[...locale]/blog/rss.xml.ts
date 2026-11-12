import type { APIRoute } from 'astro';
import { getBlogIntro, getPosts, langOf, localeKeys, localizePath, type Locale } from '../../../lib/site';

export function getStaticPaths() {
	return localeKeys.map((locale) => ({ params: { locale }, props: { locale } }));
}

const escape = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ props, site }) => {
	const locale = props.locale as Locale;
	const url = (path: string) => new URL(localizePath(locale, path), site).href;
	const intro = await getBlogIntro(locale);
	const posts = await getPosts(locale);

	const items = posts
		.map(
			(post) => `		<item>
			<title>${escape(post.title)}</title>
			<link>${url(`/blog/${post.slug}/`)}</link>
			<guid isPermaLink="true">${url(`/blog/${post.slug}/`)}</guid>
			<description>${escape(post.description)}</description>
			<pubDate>${post.date.toUTCString()}</pubDate>
		</item>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escape(`Nonbili OSS · ${intro.data.title}`)}</title>
		<link>${url('/blog/')}</link>
		<description>${escape(intro.data.description)}</description>
		<language>${langOf(locale)}</language>
		<atom:link href="${url('/blog/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
	</channel>
</rss>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
