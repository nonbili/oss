---
title: 浏览器扩展
description: 在 Firefox 和 Chrome 上使用 NouTube 浏览器扩展。
sidebar:
  order: 6
---

NouTube 提供面向 Mozilla Firefox 和 Google Chrome 的浏览器扩展，将 NouTube 更清爽的浏览体验、增强播放、个性化订阅源、书签和自定义工具直接带到你的桌面浏览器中。

## 安装扩展

可直接从官方扩展商店安装 NouTube：

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## 从源码构建

该扩展为开源项目，与 NouTube 应用共享代码，并基于 [WXT](https://wxt.dev/) 使用 Manifest V3 构建：

```bash
bun link
bun install
cd extension
bun run dev          # Chrome 开发模式
bun run dev:firefox  # Firefox 开发模式
bun run build:all    # 构建生产安装包
```
