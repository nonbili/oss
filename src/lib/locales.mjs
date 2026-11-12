/**
 * Locales supported by the site. `root` is English, served without a URL prefix.
 * Shared by astro.config.mjs (Starlight) and the custom home/blog pages.
 */
export const locales = {
	root: { label: 'English', lang: 'en' },
	ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
	de: { label: 'Deutsch', lang: 'de' },
	el: { label: 'Ελληνικά', lang: 'el' },
	es: { label: 'Español', lang: 'es' },
	fr: { label: 'Français', lang: 'fr' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	it: { label: 'Italiano', lang: 'it' },
	ja: { label: '日本語', lang: 'ja' },
	pl: { label: 'Polski', lang: 'pl' },
	'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
	ru: { label: 'Русский', lang: 'ru' },
	sv: { label: 'Svenska', lang: 'sv' },
	tr: { label: 'Türkçe', lang: 'tr' },
	'zh-hans': { label: '简体中文', lang: 'zh-Hans' },
	'zh-hant': { label: '繁體中文', lang: 'zh-Hant' },
};

/** Sidebar label translations that are not just the product name. */
export const sidebarLabels = {
	others: {
		ar: 'أخرى',
		de: 'Andere',
		el: 'Άλλα',
		es: 'Otros',
		fr: 'Autres',
		id: 'Lainnya',
		it: 'Altri',
		ja: 'その他',
		pl: 'Inne',
		'pt-br': 'Outros',
		ru: 'Другие',
		sv: 'Övrigt',
		tr: 'Diğerleri',
		'zh-hans': '其他',
		'zh-hant': '其他',
	},
	blog: {
		ar: 'المدونة',
		de: 'Blog',
		el: 'Ιστολόγιο',
		es: 'Blog',
		fr: 'Blog',
		id: 'Blog',
		it: 'Blog',
		ja: 'ブログ',
		pl: 'Blog',
		'pt-br': 'Blog',
		ru: 'Блог',
		sv: 'Blogg',
		tr: 'Blog',
		'zh-hans': '博客',
		'zh-hant': '部落格',
	},
};
