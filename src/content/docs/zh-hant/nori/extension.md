---
title: 瀏覽器擴充功能
description: 在 Firefox 和 Chrome 上使用 Nori 瀏覽器擴充功能。
sidebar:
  order: 5
---

Nori 包含面向 Mozilla Firefox 和 Google Chrome 的本地優先瀏覽器擴充功能。

## 核心特色

- **同步行動端體驗**：擴充功能彈出視窗提供與行動應用程式相同的列表、搜尋抽屜、歷史紀錄、列表管理與設定。
- **一鍵新增書籤**：即時將目前分頁儲存至指定列表，並自動取得網頁標題。
- **快速啟動器**：直接在瀏覽器工具列中搜尋已儲存的連結並在新分頁中開啟。
- **本地儲存**：書籤本地儲存在瀏覽器的擴充功能儲存空間中，並支援可選的 Nori Sync 同步。
- **注重隱私**：不監控瀏覽活動或讀取網頁內容，Nori 僅接收您明確儲存的連結。

## 安裝擴充功能

可直接從官方擴充功能商店安裝 Nori：

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## 從原始碼建置

該擴充功能為開源專案，基於 [WXT](https://wxt.dev/) 和 Manifest V3 建置：

```bash
cd extension
bun install
bun run dev          # Chrome 開發模式
bun run dev:firefox  # Firefox 開發模式
bun run build:all    # 建置生產環境 zip 安裝包
```
