(() => {
	const SELECTOR = '.screenshot-frame img';
	/** @type {HTMLDialogElement | null} */
	let dialog = null;
	/** @type {HTMLImageElement | null} */
	let dialogImg = null;
	/** @type {HTMLElement | null} */
	let dialogCaption = null;
	/** @type {HTMLButtonElement | null} */
	let prevBtn = null;
	/** @type {HTMLButtonElement | null} */
	let nextBtn = null;
	/** @type {HTMLImageElement[]} */
	let currentGroup = [];
	let currentIndex = -1;
	let touchStartX = 0;

	function step(delta) {
		if (currentGroup.length <= 1) return;
		showAt((currentIndex + delta + currentGroup.length) % currentGroup.length);
	}

	function ensureDialog() {
		if (dialog) return dialog;

		dialog = document.createElement('dialog');
		dialog.className = 'image-lightbox';
		dialog.setAttribute('closedby', 'any');
		dialog.setAttribute('aria-label', 'Image preview');

		dialog.innerHTML = `
			<div class="image-lightbox__content">
				<button type="button" class="image-lightbox__close" aria-label="Close preview">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
				<button type="button" class="image-lightbox__nav image-lightbox__nav--prev" aria-label="Previous image">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="m15 18-6-6 6-6" />
					</svg>
				</button>
				<img class="image-lightbox__img" alt="" />
				<button type="button" class="image-lightbox__nav image-lightbox__nav--next" aria-label="Next image">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</button>
				<p class="image-lightbox__caption"></p>
			</div>
		`;

		dialogImg = dialog.querySelector('.image-lightbox__img');
		dialogCaption = dialog.querySelector('.image-lightbox__caption');
		prevBtn = dialog.querySelector('.image-lightbox__nav--prev');
		nextBtn = dialog.querySelector('.image-lightbox__nav--next');
		const closeBtn = dialog.querySelector('.image-lightbox__close');

		closeBtn?.addEventListener('click', () => dialog?.close());
		dialogImg?.addEventListener('click', () => dialog?.close());
		prevBtn?.addEventListener('click', (event) => {
			event.stopPropagation();
			step(-1);
		});
		nextBtn?.addEventListener('click', (event) => {
			event.stopPropagation();
			step(1);
		});

		// Fallback for browsers without <dialog closedby="any"> support
		if (!('closedBy' in HTMLDialogElement.prototype)) {
			dialog.addEventListener('click', (event) => {
				if (event.target !== dialog) return;
				const rect = dialog.getBoundingClientRect();
				const isDialogContent =
					rect.top <= event.clientY &&
					event.clientY <= rect.top + rect.height &&
					rect.left <= event.clientX &&
					event.clientX <= rect.left + rect.width;
				if (isDialogContent) return;
				dialog.close();
			});
		}

		// Close when clicking anywhere in the transparent content wrapper outside the image or nav buttons
		dialog.querySelector('.image-lightbox__content')?.addEventListener('click', (event) => {
			if (event.target === event.currentTarget) {
				dialog?.close();
			}
		});

		dialog.addEventListener(
			'touchstart',
			(event) => {
				if (event.touches.length === 1) {
					touchStartX = event.touches[0].clientX;
				}
			},
			{ passive: true },
		);

		dialog.addEventListener(
			'touchend',
			(event) => {
				if (!touchStartX || event.changedTouches.length !== 1) return;
				const deltaX = event.changedTouches[0].clientX - touchStartX;
				touchStartX = 0;
				if (Math.abs(deltaX) > 48) {
					step(deltaX < 0 ? 1 : -1);
				}
			},
			{ passive: true },
		);

		document.addEventListener('keydown', (event) => {
			if (!dialog?.open || currentGroup.length <= 1) return;
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				step(1);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				step(-1);
			}
		});

		document.body.appendChild(dialog);
		return dialog;
	}

	/**
	 * @param {number} index
	 */
	function showAt(index) {
		const target = currentGroup[index];
		if (!target || !dialogImg || !dialogCaption) return;
		currentIndex = index;
		dialogImg.src = target.currentSrc || target.src;
		dialogImg.alt = target.alt || '';
		const cardTitle = target.closest('.screenshot-card')?.querySelector('.screenshot-card__title')?.textContent?.trim();
		const baseCaption = cardTitle || target.alt || '';
		const hasMultiple = currentGroup.length > 1;
		const countText = hasMultiple ? `${index + 1} / ${currentGroup.length}` : '';
		dialogCaption.textContent = baseCaption && countText ? `${baseCaption} (${countText})` : baseCaption || countText;
		dialogCaption.hidden = !dialogCaption.textContent;
		if (prevBtn) prevBtn.hidden = !hasMultiple;
		if (nextBtn) nextBtn.hidden = !hasMultiple;
	}

	function bindImages() {
		const images = Array.from(document.querySelectorAll(SELECTOR));
		for (const img of images) {
			if (!(img instanceof HTMLImageElement) || img.dataset.lightboxBound === 'true') continue;
			img.dataset.lightboxBound = 'true';
			img.tabIndex = 0;
			img.setAttribute('role', 'button');

			const open = () => {
				const gallery = img.closest('.screenshot-gallery');
				currentGroup = gallery
					? Array.from(gallery.querySelectorAll(SELECTOR)).filter((el) => el instanceof HTMLImageElement)
					: [img];
				const d = ensureDialog();
				showAt(Math.max(0, currentGroup.indexOf(img)));
				if (!d.open) {
					d.showModal();
				}
			};

			img.addEventListener('click', open);
			img.addEventListener('keydown', (event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					open();
				}
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', bindImages);
	} else {
		bindImages();
	}
	document.addEventListener('astro:page-load', bindImages);
})();
