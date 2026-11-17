---
title: 瀏覽器擴充功能
description: 在 Firefox 和 Chrome 上使用 NouTube 瀏覽器擴充功能。
sidebar:
  order: 6
---

NouTube 提供適用於 Mozilla Firefox 與 Google Chrome 的瀏覽器擴充功能，將 NouTube 更清爽的瀏覽體驗、增強播放、個人化訂閱動態、書籤與自定義工具直接帶到您的桌面瀏覽器中。

## 安裝擴充功能

可直接從官方擴充功能商店安裝 NouTube：

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## 從原始碼建置

該擴充功能為開源專案，與 NouTube 應用程式共享程式碼，並基於 [WXT](https://wxt.dev/) 使用 Manifest V3 建置：

```bash
bun link
bun install
cd extension
bun run dev          # Chrome 開發模式
bun run dev:firefox  # Firefox 開發模式
bun run build:all    # 建置生產環境安裝套件
```
