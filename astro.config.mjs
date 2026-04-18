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
				ja: {
					label: '日本語',
					lang: 'ja',
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
