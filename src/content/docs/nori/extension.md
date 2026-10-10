---
title: Browser Extension
description: Using the Nori browser extension on Firefox and Chrome.
sidebar:
  order: 5
---

Nori includes a local-first browser extension for Mozilla Firefox and Google Chrome.

## Key Features

- **Mirrored mobile experience**: The extension popup provides the same lists, search drawer, history, list management, and settings as the mobile app.
- **One-click bookmarking**: Instantly bookmark the current tab into your chosen list with automatic title retrieval.
- **Fast launcher**: Search and open your saved links into new tabs directly from your browser toolbar.
- **Local storage**: Stores bookmarks locally in your browser's extension storage with optional Nori Sync support.
- **Privacy focused**: No browsing activity or page contents are tracked. Nori only receives links you explicitly save.

## Installing The Extension

Install Nori directly from the official extension stores:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## Building From Source

The extension is open source and built with [WXT](https://wxt.dev/) using Manifest V3:

```bash
cd extension
bun install
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production zip packages
```
