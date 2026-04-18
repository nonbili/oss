// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.nonbili.jp',
	integrations: [
		starlight({
			title: 'Nonbili OSS',
			description: 'Open-source apps and documentation from nonbili.',
			customCss: ['./src/styles/docs.css'],
			favicon: '/favicon.png',
			editLink: {
				baseUrl: 'https://github.com/nonbili/oss/edit/main/',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ar: {
					label: 'العربية',
					lang: 'ar',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				el: {
					label: 'Ελληνικά',
					lang: 'el',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
				id: {
					label: 'Bahasa Indonesia',
					lang: 'id',
				},
				it: {
					label: 'Italiano',
					lang: 'it',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
				'pt-br': {
					label: 'Português (Brasil)',
					lang: 'pt-BR',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				sv: {
					label: 'Svenska',
					lang: 'sv',
				},
				tr: {
					label: 'Türkçe',
					lang: 'tr',
				},
				'zh-hans': {
					label: '简体中文',
					lang: 'zh-Hans',
				},
				'zh-hant': {
					label: '繁體中文',
					lang: 'zh-Hant',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nonbili' }],
			sidebar: [
				{
					label: 'NouTube',
					items: [
						{ slug: 'noutube', label: 'Overview' },
						{ slug: 'noutube/install', label: 'Install' },
						{ slug: 'noutube/features', label: 'Features' },
						{ slug: 'noutube/changelog', label: 'Changelog' },
						{ slug: 'noutube/screenshots', label: 'Screenshots' },
						{ slug: 'noutube/desktop', label: 'Desktop' },
						{ slug: 'noutube/customization', label: 'Customization' },
						{ slug: 'noutube/faq', label: 'FAQ' },
					],
				},
				{
					label: 'Nora',
					items: [
						{ slug: 'nora', label: 'Overview' },
						{ slug: 'nora/install', label: 'Install' },
						{ slug: 'nora/features', label: 'Features' },
						{ slug: 'nora/supported-services', label: 'Supported Services' },
						{ slug: 'nora/changelog', label: 'Changelog' },
						{ slug: 'nora/screenshots', label: 'Screenshots' },
						{ slug: 'nora/desktop', label: 'Desktop' },
						{ slug: 'nora/customization', label: 'Customization' },
						{ slug: 'nora/faq', label: 'FAQ' },
					],
				},
			],
		}),
	],
});
