import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const blogContent = new URL('../content/blog/', import.meta.url).href;
const blogAssets = new URL('../../public/blog/', import.meta.url);
const richGalleryClass = 'blog-screenshot-group';

/** @type {NonNullable<import('@astrojs/markdown-satteri').SatteriProcessorOptions['mdastPlugins']>[number]} */
export const blogScreenshotDirectives = ({ fileURL }) => {
	if (!fileURL?.href.startsWith(blogContent)) return;

	return {
		name: 'blog-screenshot-directives',
		containerDirective(node) {
			if (node.name !== 'screenshots') return;
			return {
				...node,
				data: { hName: 'div', hProperties: { className: [richGalleryClass] } },
			};
		},
	};
};

/**
 * @param {string} tagName
 * @param {import('hast').Properties} properties
 * @param {import('hast').ElementContent[]} children
 * @returns {import('hast').Element}
 */
function element(tagName, properties, children = []) {
	return { type: 'element', tagName, properties, children };
}

/** @param {import('hast').ElementContent[]} nodes */
function content(nodes) {
	return nodes.filter((node) => node.type !== 'text' || node.value.trim() !== '');
}

/** @param {import('hast').Element} block */
function screenshotImages(block) {
	if (block.tagName !== 'p') return [];
	const children = content(block.children);
	const images = children.filter((node) => node.type === 'element').filter(
		({ tagName, properties: { src, title } }) =>
			tagName === 'img' &&
			typeof src === 'string' && src.startsWith('/blog/') &&
			typeof title === 'string' && title.trim() !== '',
	);
	return images.length === children.length ? images : [];
}

/**
 * @param {import('hast').Element} image
 * @param {import('hast').ElementContent[]} heading
 */
async function screenshotCard(image, heading = []) {
	const { src, alt, title } = image.properties;
	const asset = new URL(String(src).slice('/blog/'.length), blogAssets);
	if (!asset.href.startsWith(blogAssets.href)) {
		throw new Error(`Invalid blog screenshot path: ${src}`);
	}
	const { autoOrient } = await sharp(fileURLToPath(asset)).metadata();
	return element('figure', { className: ['screenshot-card'] }, [
		...heading,
		element(heading.length ? 'p' : 'figcaption', { className: ['screenshot-card__body'] }, [
			{ type: 'text', value: String(title) },
		]),
		element('div', { className: ['screenshot-frame'] }, [
			element('img', {
				src, alt, width: autoOrient.width, height: autoOrient.height, loading: 'lazy',
			}),
		]),
	]);
}

/**
 * @param {import('hast').Element} block
 * @param {URL} fileURL
 */
function titledCards(block, fileURL) {
	const children = content(block.children);
	const cards = [];
	for (let i = 0; i < children.length; i += 3) {
		const [title, label, imageBlock] = children.slice(i, i + 3);
		const images = imageBlock?.type === 'element' ? screenshotImages(imageBlock) : [];
		if (title?.type !== 'element' || title.tagName !== 'h2' ||
			label?.type !== 'element' || label.tagName !== 'p' || images.length !== 1) {
			throw new Error(`Each screenshots card needs an H2, a label, and a captioned image in ${fileURL.pathname}`);
		}
		const heading = [
			element('div', { className: ['screenshot-card__eyebrow'] }, label.children),
			element('h2', { className: ['screenshot-card__title'] }, title.children),
		];
		cards.push({ image: images[0], heading });
	}
	return cards.map(({ image, heading }) => screenshotCard(image, heading));
}

/** @type {NonNullable<import('@astrojs/markdown-satteri').SatteriProcessorOptions['hastPlugins']>[number]} */
export const blogScreenshots = ({ fileURL }) => {
	if (!fileURL?.href.startsWith(blogContent)) return;

	return {
		name: 'blog-screenshots',
		async before(root, context) {
			await Promise.all(root.children.map(async (block) => {
				if (block.type !== 'element') return;
				const classes = block.properties.className;
				const cards = await Promise.all(
					Array.isArray(classes) && classes.includes(richGalleryClass)
						? titledCards(block, fileURL)
						: screenshotImages(block).map((image) => screenshotCard(image)),
				);
				if (!cards.length) return;

				const className = ['screenshot-gallery'];
				if (cards.length === 1) className.push('screenshot-gallery--single');
				context.replaceNode(block, element('div', { className }, cards));
			}));
		},
	};
};
