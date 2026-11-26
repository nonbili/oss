// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { blogScreenshotDirectives, blogScreenshots } from './src/lib/blog-screenshots.mjs';
import { locales, sidebarLabels } from './src/lib/locales.mjs';

/** @param {string} label @param {string} directory */
const productGroup = (label, directory) => ({
	label,
	items: [{ autogenerate: { directory } }],
});

// https://astro.build/config
export default defineConfig({
	site: 'https://oss.nonbili.jp',
	server: {
		host: true,
	},
	markdown: {
		processor: satteri({
			mdastPlugins: [blogScreenshotDirectives],
			hastPlugins: [blogScreenshots],
		}),
	},
	integrations: [
		starlight({
			title: 'Nonbili OSS',
			description: 'Open-source apps and documentation from nonbili.',
			logo: { src: './src/assets/nonbili.png', alt: '' },
			customCss: ['./src/styles/theme.css', './src/styles/docs.css', './src/styles/site.css'],
			favicon: '/favicon.png',
			head: [
				{
					tag: 'script',
					attrs: { src: '/lightbox.js', defer: true },
				},
			],
			editLink: {
				baseUrl: 'https://github.com/nonbili/oss/edit/main/',
			},
			defaultLocale: 'root',
			locales,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nonbili' }],
			components: {
				Header: './src/components/overrides/Header.astro',
				PageTitle: './src/components/overrides/PageTitle.astro',
			},
			sidebar: [
				productGroup('NouTube', 'noutube'),
				productGroup('Nora', 'nora'),
				productGroup('Nori', 'nori'),
				{
					label: 'Others',
					translations: sidebarLabels.others,
					items: [{ autogenerate: { directory: 'others' } }],
				},
				{
					// The blog is its own section (src/pages/[...locale]/blog). The header links to it
					// on wide screens; this entry is only shown in the mobile menu.
					label: 'Blog',
					translations: sidebarLabels.blog,
					link: '/blog/',
					attrs: { class: 'nb-mobile-only' },
				},
			],
		}),
	],
});
