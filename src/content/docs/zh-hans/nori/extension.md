---
title: 浏览器扩展
description: 在 Firefox 和 Chrome 上使用 Nori 浏览器扩展。
sidebar:
  order: 5
---

Nori 包含面向 Mozilla Firefox 和 Google Chrome 的本地优先浏览器扩展。

## 核心特性

- **同步移动端体验**：扩展弹出窗口提供与移动应用相同的列表、搜索抽屉、历史记录、列表管理与设置。
- **一键添加书签**：即时将当前标签页保存至指定列表，并自动获取网页标题。
- **快速启动器**：直接在浏览器工具栏中搜索已保存的链接并在新标签页中打开。
- **本地存储**：书签本地保存在浏览器的扩展存储中，并支持可选的 Nori Sync 同步。
- **注重隐私**：不监控浏览活动或读取网页内容，Nori 仅接收您明确保存的链接。

## 安装扩展

可直接从官方扩展商店安装 Nori：

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## 从源码构建

该扩展为开源项目，基于 [WXT](https://wxt.dev/) 和 Manifest V3 构建：

```bash
cd extension
bun install
bun run dev          # Chrome 开发模式
bun run dev:firefox  # Firefox 开发模式
bun run build:all    # 构建生产环境 zip 安装包
```
