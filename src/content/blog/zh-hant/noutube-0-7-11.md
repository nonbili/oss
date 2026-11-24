---
title: "NouTube 0.7.11 新增 Android 自訂工具列與 iOS 影片下載"
description: 將常用動作放到 Android 工具列上、滑動進入全螢幕、隱藏 YouTube 留言，並在 iPhone 和 iPad 上儲存影片。
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 讓你可以將 **分享** 和 **開啟網址** 等動作直接放到 Android 工具列上。在 iPhone 和 iPad 上，現在可以透過 **工具** 下載相容的影片，影片的啟動速度也更快了。這次行動版更新還加入了全螢幕滑動手勢，以及隱藏 YouTube 留言的設定。

## 將最常用的動作放到 Android 工具列上

開啟 **設定 → 外觀 → 工具列按鈕**。使用開關選擇要顯示的按鈕，再拖曳把手調整順序。例如，開啟 **分享** 和 **開啟網址** 並將它們拖到清單頂端，觀看影片時兩個動作都觸手可及。

你也可以將 **工具**、**桌面版網站**、**設定** 或 **YouTube / YouTube Music** 切換按鈕加入工具列。在同一份清單中，也能重新排列 **媒體庫**、**頻道動態** 和 **觀看記錄** 等現有按鈕。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">開啟分享和開啟網址，並將它們拖到清單頂端。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="Android 外觀設定，前兩列的分享和開啟網址已開啟，右側顯示拖曳把手" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">分享和開啟網址現在是觀看頁面工具列上的前兩個按鈕。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Big Buck Bunny 觀看頁面上方的 NouTube 工具列，最左側是分享圖示與開啟網址的連結圖示" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 在 iPhone 和 iPad 上下載影片

對於你有權儲存的影片，開啟 **工具** 並點一下 **下載影片**。若有相容的 MP4，NouTube 就會下載。下載完成後，點一下 **匯出** 即可儲存或分享檔案。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">工具會自動填入目前影片的網址。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="iPhone 下載面板，已填入影片網址，顯示 MP4 可用性說明和下載影片按鈕" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">檔案準備好後，下載歷史記錄中會出現匯出按鈕。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="iPhone 下載歷史記錄中的項目，帶有綠色勾號、下載完成狀態和匯出按鈕" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

0.7.10 在 Android 上推出的更快影片啟動，現在也套用到 iOS。在 iPad 上，全螢幕時仍可使用 YouTube 的播放控制項。

## 滑動切換全螢幕或隱藏留言

在行動裝置上，於 YouTube 播放器上向上滑動即可進入全螢幕，向下滑動則回到觀看頁面。請從影片畫面本身開始滑動，這樣播放控制項和進度列仍可照常操作。

若要從 YouTube 觀看頁面移除留言區，請開啟 **設定 → 偏好設定 → 無干擾模式**，然後開啟 **隱藏留言**。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">隱藏留言位於無干擾模式設定的最下方。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="Android 偏好設定畫面，無干擾模式區段最下方的隱藏留言開關已開啟" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 其他修正

- Opus 音訊下載現在使用 `.opus` 副檔名。NouTube 修正了 Android 正式版中 yt-dlp 的啟動問題，並能更可靠地處理下載和播放失敗。
- YouTube 桌面版觀看頁面現在能配合較窄的 Android 螢幕。在 Android 上，動態預覽不再列入觀看記錄；系統 YouTube Music 控制項中的 **下一個** 也不會再影響 NouTube 自己的佇列。
- 此版本更新了義大利文、波蘭文、巴西葡萄牙文、俄文和烏克蘭文翻譯。

[在 GitHub 上查看此版本](https://github.com/nonbili/NouTube/releases/tag/v0.7.11)。

## 取得 NouTube

[安裝或更新 NouTube](/zh-hant/noutube/install/)，或瀏覽 [NouTube 說明文件](/zh-hant/noutube/)。
