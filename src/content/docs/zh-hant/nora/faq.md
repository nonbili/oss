---
title: 常見問題（FAQ）
description: 從 GitHub Issue 中提取的 Nora 常見問題。
sidebar:
  order: 9
---
本頁面總結了來自公開 GitHub Issue 追蹤器中經常出現的使用者問題。

## Nora 可以直接從其他應用程式開啟 Instagram 或 Facebook 連結嗎？

可以，這是預期中的功能。維護者表示您可能需要：

- 為 Nora 啟用 Android 的「預設開啟」行為
- 如果官方應用程式持續佔用相同的連結，請解除安裝或停用官方應用程式
- 如果深度連結（Deep Links）開啟了應用程式但未開啟請求的貼文，請更新到較新的 Nora 版本

來源：

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram 無法在 Nora 內開啟

目前的一個待解決問題顯示，部分使用者在嘗試重新整理、切換到電腦版網站模式以及清除 WebView 資料後，仍然會遇到 Instagram 錯誤頁面。這意味著目前尚未有確定的修復方案。如果您的裝置發生這種情況：

- 嘗試重新整理
- 嘗試切換到電腦版網站模式
- 清除 Nora 的 WebView 資料
- 如果仍然失敗，請查看 GitHub 以獲取更新，或在 Issue 中提供您的裝置詳細資訊

來源：

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## 離開應用程式後媒體仍在播放

有回報指出 Instagram 的音訊會在背景持續播放，且缺乏實用的控制選項。維護者回覆這將在下一個版本中修復，因此首要採取的行動是將 Nora 更新到商店或發行管道中提供的最新版本。

來源：

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## 我可以下載圖片或影片嗎？

可以，至少部分功能已經支援：

- 長按圖片以顯示下載選單
- 在討論該問題時，已經支援 Facebook 與 Instagram Reels 的下載
- 隨後增加了 X 的影片下載支援

來源：

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## 為什麼 X 登入失敗？

Issue 討論建議一般的電子郵件/密碼登入應該可以運作，而在 WebView 中使用 Google 帳號登入則需要額外處理。維護者後來表示在 `v0.1.5` 中加入了「注入 Cookie」選單，作為受影響使用者的權宜之計。

來源：

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## 我可以在 Nora 內使用瀏覽器的擴充功能（如 uBlock Origin 或 Dark Reader）嗎？

無法像完整的瀏覽器設定檔那樣使用。在功能請求討論中，維護者建議使用者使用 Nora 自有的自定義 CSS 支援來進行 UI 變更，而非承諾嵌入瀏覽器擴充功能。

來源：

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## 我應該在哪裡回報錯誤或請求功能？

請使用 GitHub 儲存庫：

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
