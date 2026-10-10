---
title: Nori
description: Overview of Nori and its bookmark management and launcher model.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori logo" />
  <p class="product-overview-header__meta">Android, iOS, desktop, and extension</p>
</div>

Nori is an open-source bookmark manager and launcher designed for fast everyday access across mobile devices, desktop computers, and web browsers.

Instead of burying links inside deep browser folder trees or closed ecosystems, Nori organizes your bookmarks into clean, focused lists with instant launching, search, rich card previews, and share sheet integration.

## Highlights

- Multiple custom bookmark lists
- Instant launching into the system default browser or native custom tabs
- Save shared URLs from any app with list picker and quick-save options
- Compact launcher mode and rich card preview mode with website cover images
- Fast search drawer with keyword and tag filtering
- Recently used and recently added launch history
- Import and export via standard HTML bookmarks, plain text, and full JSON backups
- Flexible appearance: Light, Dark, AMOLED, and custom accent colors
- Local-first browser extension for Chrome and Firefox
- Cross-platform desktop app for Linux, macOS, and Windows
- Optional multi-device synchronization via Nori Sync

## Platforms

- **Android**: Available on Google Play and direct GitHub APK releases.
- **iOS**: Available on the App Store for iPhone and iPad.
- **Desktop**: Standalone native apps for Linux (AppImage & tarball), macOS (Apple Silicon & Intel), and Windows.
- **Browser Extension**: Manifest V3 extension for Mozilla Firefox and Google Chrome.

## First Run

A sensible first setup is:

1. Create a few lists for your common link categories (e.g. `Daily`, `Tools`, `Reading`, `Work`).
2. Add your primary go-to links or import existing bookmarks from your browser HTML export.
3. Test launching a bookmark to confirm your default browser opens links as expected.
4. Try sharing a webpage from your mobile browser into Nori using the system share menu.
5. Customize appearance settings, such as dark mode or your preferred accent color.

## How It Works

Nori decouples your bookmark collection from specific browser engines:

- On Android, bookmarks open through Custom Tabs via `expo-web-browser` or hand off directly to your default browser app.
- On iOS, bookmarks open via the native browser sheet or the system default browser.
- On desktop and extension, bookmarks open directly in your active browser tabs.

This approach ensures you always browse with your preferred ad blockers, logins, and browser profiles intact, while keeping all your links organized in one fast, searchable launcher.

## More Links

For source code, releases, and issue tracking, use the GitHub repository:

- [nonbili/Nori](https://github.com/nonbili/Nori)

Continue with [Install](/nori/install/) for store badges, APKs, desktop downloads, and browser extension packages.
