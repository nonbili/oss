---
title: ブラウザ拡張機能
description: Firefox および Chrome での NouTube ブラウザ拡張機能の利用。
sidebar:
  order: 6
---

NouTube には、Mozilla Firefox および Google Chrome 向けのブラウザ拡張機能が用意されており、よりクリーンな閲覧体験、再生機能の強化、パーソナライズされたフィード、ブックマーク、カスタマイズツールをデスクトップブラウザで直接利用できます。

## 拡張機能のインストール

公式の拡張機能ストアから直接インストールできます:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## ソースコードからのビルド

拡張機能はオープンソースであり、NouTube アプリとコードを共有し、[WXT](https://wxt.dev/) と Manifest V3 で構築されています:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome 開発モード
bun run dev:firefox  # Firefox 開発モード
bun run build:all    # 本番用パッケージのビルド
```
