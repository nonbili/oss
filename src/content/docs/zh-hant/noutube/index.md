---
title: NouTube
description: NouTube 概覽及其設計初衷。
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="NouTube logo" />
  <p class="product-overview-header__meta">Android 與桌面版</p>
</div>

NouTube 是一款適用於 Android 與桌面版的 YouTube 與 YouTube Music 應用程式。

它封裝了 YouTube 與 YouTube Music 的行動版網頁應用程式，並在其上層疊了原生行為，包括廣告阻擋、播放控制掛鉤、下載支援、RSS 訂閱以及離線友善的媒體庫管理。

## 亮點

- 無廣告
- 背景播放
- 在單一應用程式中支援影片與音樂
- 無需登入即可進行媒體庫與歷史紀錄管理
- 影片下載
- 適用於 YouTube 頻道的 RSS 訂閱閱讀器
- 即時聊天支援
- 自定義 CSS 支援

## 平台

- Android
- 桌面版

桌面版本遵循與行動版相同的產品模式，具備適用於大螢幕的原生安裝程式。

## 初次運行

安裝後，建議的初次設定如下：

1. 在應用程式內開啟 YouTube 或 YouTube Music。
2. 檢查播放行為，特別是如果背景播放是您的主要使用情境。
3. 配置您的媒體庫、歷史紀錄、訂閱以及下載偏好。
4. 僅在確認預設體驗符合需求後，再添加自定義 CSS。

## 支援的連結

NouTube 已配置為處理以下主機：

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

如果您的裝置詢問應使用哪個應用程式開啟支援的連結，請選擇 `NouTube`。

## 運作原理

NouTube 是封裝網頁應用程式，而非從零開始重建 YouTube。在實踐中，這意味著：

- 您可以保留官方網站的流程與佈局
- 應用程式增加了廣告阻擋與原生播放掛鉤
- 背景播放與裝置整合的效果優於在一般瀏覽器中使用該網站

## 更多連結

有關發行版本、問題追蹤與專案更新，請參閱 GitHub 儲存庫：

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

請繼續閱讀 [安裝](/zh-hant/noutube/install/) 以獲取下載與套件連結。
