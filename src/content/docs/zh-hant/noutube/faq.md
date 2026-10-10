---
title: 常見問題（FAQ）
description: 從 GitHub Issue 中提取的 NouTube 常見問題。
sidebar:
  order: 9
---
本頁面總結了來自公開 GitHub Issue 追蹤器中經常出現的使用者問題。

## 登入問題

Google 經常拒絕來自內嵌網頁的應用程式的登入請求，因此在 NouTube 內登入在 Android 和桌面版都可能失敗，通常會顯示「這個瀏覽器或應用程式可能不安全」。在桌面版，如果沒有顯示可見的「登入」按鈕，請先嘗試開啟「你在 YouTube 中的資料」選單。

如果無法登入，請改用 **Inject cookie** 功能：

1. 在電腦上使用 Chrome 或以 Chromium 為基礎的瀏覽器登入 YouTube，然後使用瀏覽器擴充功能（如 `getcookies.txt`）匯出你的 YouTube cookie。
2. 如果使用 Android，請將匯出的檔案複製到你的裝置上。
3. 在 NouTube 中開啟 **Settings > Tools > Inject cookie**，匯入該檔案（或貼上其內容）並儲存。

此方法繞過了 Google 的安全瀏覽器檢查，是目前在 Android 和桌面版解決登入問題最可靠的方法。

來源：

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## 為什麼 F-Droid 上還沒有最新更新？

F-Droid 上的發布時程並非由 NouTube 維護者控制。F-Droid 透過自己的批次處理週期獨立建置與發布更新，通常在 GitHub 發布新版本後需要數天時間才能在商店中顯示。

如果您想立即取得最新版本，可以從 [GitHub Releases](https://github.com/nonbili/NouTube/releases) 頁面下載 APK。但請注意，GitHub 版本的簽署金鑰與 F-Droid 不同，因此在安裝 GitHub 的 APK 之前，必須先解除安裝 F-Droid 版本。

來源：

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

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
