---
title: Nori
description: Nori 概覽以及書籤管理與啟動器工作模式。
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori 圖示" />
  <p class="product-overview-header__meta">Android、iOS、桌面版與擴充功能</p>
</div>

Nori 是一款開源書籤管理器和啟動器，專為在行動裝置、桌上型電腦與 Web 瀏覽器之間快速日常存取而設計。

Nori 不會將連結深埋在繁雜的瀏覽器資料夾層級或封閉生態中，而是將書籤整理為清晰專注的列表，並提供即時啟動、搜尋、豐富卡片預覽以及系統分享功能表整合。

## 主要特色

- 多個自訂書籤列表
- 即時在系統預設瀏覽器或原生 Custom Tabs 中啟動
- 接收來自任何應用程式分享的連結，支援列表選擇器與快速儲存
- 精簡啟動器模式與帶網站封面圖的預覽卡片模式
- 支援關鍵字和標籤篩選的快速搜尋抽屜
- 最近使用與最近新增的啟動歷史紀錄
- 透過標準 HTML 書籤、純文字及完整 JSON 備份進行匯入與匯出
- 靈活的外觀自訂：淺色、深色、AMOLED 以及自訂強調色
- 面向 Chrome 和 Firefox 的本地優先瀏覽器擴充功能
- 面向 Linux、macOS 和 Windows 的跨平台桌面應用程式
- 可選透過 Nori Sync 實現多裝置雲端同步

## 支援平台

- **Android**：可在 Google Play 下載或直接取得 GitHub APK 發行版本。
- **iOS**：可在 iPhone 與 iPad 的 App Store 中取得。
- **桌面版**：適用於 Linux（AppImage 與 tarball）、macOS（Apple Silicon 與 Intel）以及 Windows 的獨立原生應用程式。
- **瀏覽器擴充功能**：適用於 Mozilla Firefox 和 Google Chrome 的 Manifest V3 擴充功能。

## 初次使用

建議的初次設定步驟：

1. 為常用連結類別建立幾個列表（例如 `常用`、`工具`、`閱讀`、`工作`）。
2. 新增首批核心連結，或從瀏覽器匯出的 HTML 書籤中匯入。
3. 點選啟動書籤，確認預設瀏覽器是否如預期開啟連結。
4. 嘗試從行動裝置瀏覽器使用系統分享功能表將網頁分享至 Nori。
5. 自訂外觀設定，例如深色模式或喜愛的強調色。

## 運作原理

Nori 將書籤集合與具體的瀏覽器核心解耦：

- 在 Android 上，書籤透過基於 `expo-web-browser` 的 Custom Tabs 開啟，或直接調用系統的預設瀏覽器應用程式。
- 在 iOS 上，書籤透過原生瀏覽器彈窗或系統預設瀏覽器開啟。
- 在桌面端與擴充功能上，書籤直接在現用瀏覽器分頁中開啟。

這種方式確保您始終保留偏好的廣告攔截擴充功能、登入憑證與瀏覽器設定檔，同時將所有連結整理在一個快速、易於搜尋的啟動器中。

## 相關連結

原始碼、版本發行與 Issue 追蹤請造訪 GitHub 存放庫：

- [nonbili/Nori](https://github.com/nonbili/Nori)

商店徽章、APK、桌面端下載與瀏覽器擴充功能安裝包請參閱 [安裝](/zh-hant/nori/install/)。
