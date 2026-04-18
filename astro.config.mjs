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
					translations: {
						ar: 'NouTube',
						de: 'NouTube',
						el: 'NouTube',
						es: 'NouTube',
						fr: 'NouTube',
						id: 'NouTube',
						it: 'NouTube',
						ja: 'NouTube',
						pl: 'NouTube',
						'pt-br': 'NouTube',
						ru: 'NouTube',
						sv: 'NouTube',
						tr: 'NouTube',
						'zh-hans': 'NouTube',
						'zh-hant': 'NouTube',
					},
					autogenerate: { directory: 'noutube' },
				},
				{
					label: 'Nora',
					translations: {
						ar: 'Nora',
						de: 'Nora',
						el: 'Nora',
						es: 'Nora',
						fr: 'Nora',
						id: 'Nora',
						it: 'Nora',
						ja: 'Nora',
						pl: 'Nora',
						'pt-br': 'Nora',
						ru: 'Nora',
						sv: 'Nora',
						tr: 'Nora',
						'zh-hans': 'Nora',
						'zh-hant': 'Nora',
					},
					autogenerate: { directory: 'nora' },
				},
			],
		}),
	],
});
