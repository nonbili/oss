---
title: Browser Extension
description: Using the NouTube browser extension on Firefox and Chrome.
sidebar:
  order: 6
---

NouTube includes a browser extension for Mozilla Firefox and Google Chrome that brings NouTube's cleaner browsing, enhanced playback, personalized feeds, bookmarks, and customization tools directly to your desktop browser.

## Installing The Extension

Install NouTube directly from the official extension stores:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## Building From Source

The extension is open source, shares code with the NouTube app, and is built with [WXT](https://wxt.dev/) using Manifest V3:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production packages
```
