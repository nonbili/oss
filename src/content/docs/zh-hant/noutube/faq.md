---
title: 常見問題（FAQ）
description: 從 GitHub Issue 中提取的 NouTube 常見問題。
---
本頁面總結了來自公開 GitHub Issue 追蹤器中經常出現的使用者問題。

## 桌面版登入按鈕缺失或登入似乎卡住了

如果桌面版應用程式未顯示「登入」按鈕，請嘗試先開啟「您在 YouTube 中的資料」選單。在 Issue 討論中，此路徑讓受影響的使用者能夠進入登入流程，維護者隨後表示該按鈕應在 `v0.1.6` 中恢復顯示。

來源：

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## 即使開啟了登入頁面，桌面版登入仍然失敗

有回報指出，某些桌面環境在清除資料後仍然無法進行 Google 登入。該討論串尚未得出確定的通用解決方案，因此建議的做法是：

- 更新到最新的桌面版本
- 如果您已經嘗試過登入，請清除應用程式的 WebView/設定檔資料
- 如果仍然失敗，請在 GitHub 上回報您的作業系統、軟體包格式以及螢幕截圖

來源：

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music 無法正確載入

一個已記錄的疑難排解路徑如下：

1. 確保 `NouTube` 是 `music.youtube.com` 的預設應用程式。
2. 如果安裝了官方 YouTube Music 應用程式，請先移除其預設的連結處理設定。
3. 如果問題持續，請嘗試在 `Settings > Tools > Custom user agent` 中設定自定義使用者代理（User Agent）。

這項指引直接來自維護者在 Issue 討論串中的回覆。這是一個權宜之計，並非對所有裝置都保證有效的修復方案。

來源：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## 仍然有部分廣告出現

曾有回報指出在影片前出現了短暫的 YouTube Premium 廣告。維護者建議使用者使用 `v0.4.9` 版本，這意味著廣告阻擋的修復已在後續版本中發布。如果您看到廣告：

- 更新至來自 F-Droid 或 GitHub 的最新版本
- 如果問題仍然存在，請建立一個新的 Issue，並附上應用程式版本與螢幕截圖

來源：

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube 重新開啟了播放隊列而非首頁

如果 NouTube 持續恢復播放或開啟舊項目而非首頁，請檢查播放隊列圖示是否仍處於啟用狀態。在 Issue 討論串中，維護者指出未清除的隊列是 NouTube 持續嘗試恢復播放的原因。

來源：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## 我應該在哪裡回報錯誤或請求功能？

請使用 GitHub 儲存庫：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
