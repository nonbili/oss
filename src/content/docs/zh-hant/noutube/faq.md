---
title: 常見問題（FAQ）
description: 從 GitHub Issue 中提取的 NouTube 常見問題。
sidebar:
  order: 9
---
本頁面總結了來自公開 GitHub Issue 追蹤器中經常出現的使用者問題。

## 桌面版登入問題

如果桌面版應用程式未顯示可見的「登入」按鈕，請嘗試先開啟「您在 YouTube 中的資料」選單。如果登入頁面已開啟，但您收到「瀏覽器或應用程式可能不安全」錯誤，請使用 **Inject cookie** 功能：

1. 使用瀏覽器擴充功能（如 `getcookies.txt`）匯出您的 YouTube cookie。
2. 使用 **Inject cookie** 按鈕將 cookie 匯入 NouTube。

此方法繞過了 Google 的安全瀏覽器檢查，是目前解決桌面版登入問題最可靠的方法。

來源：

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music 無法正確載入

如果 YouTube Music 無法正確載入，請嘗試在應用程式選單中切換 **電腦版網站**。

來源：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube 重新開啟了播放隊列而非首頁

如果 NouTube 持續恢復播放或開啟舊項目而非首頁，請檢查播放隊列圖示是否仍處於啟用狀態。在 Issue 討論串中，維護者指出未清除的隊列是 NouTube 持續嘗試恢復播放的原因。

來源：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## 我應該在哪裡回報錯誤或請求功能？

請使用 GitHub 儲存庫：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
