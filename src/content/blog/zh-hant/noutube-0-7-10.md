---
title: "NouTube 0.7.10：更快的影片起播、自訂下載資料夾與社群貼文"
description: 縮短等待影片開始播放的時間，在 Android 上選擇下載儲存位置，並將已儲存頻道的社群貼文帶入你的動態消息中。
date: 2026-11-16
product: noutube
---

**Android 版 NouTube 0.7.10** 縮短了影片開始播放前的等待時間。本文也介紹了 **0.7.9** 的新增功能：在 Android 上選擇下載資料夾，以及在動態閱讀器中查看已儲存頻道的社群貼文。

## 減少播放前的等待時間

NouTube 現在會在收到影片頁面回應時邊接收邊處理，無需等待整個回應完成即可開始播放。在**啟用廣告攔截**的情況下，它還會請求無片頭廣告的播放，進一步減少起播延遲。

**桌面版**的相關改進也讓影片頁面能更快開始載入。這些更動無需開啟任何新設定即可生效。

## 在 Android 上選擇下載資料夾

想把下載的影片存放在專用資料夾中嗎？在 **Android** 上，你現在可以選擇它們的儲存位置。

在下載對話框中，點擊**資料夾**底下的**瀏覽**，然後在 Android 資料夾選擇器中選擇一個資料夾。若要恢復預設位置，請點擊**使用 Downloads 資料夾**。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">將影片儲存到專用資料夾，或切換回 Downloads。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/download-folder.webp" alt="NouTube 的 Android 下載對話框，顯示選取的資料夾 Download/NouTube、瀏覽與使用 Downloads 資料夾" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 在動態閱讀器中查看社群貼文

你儲存的頻道可能會在影片上傳之間分享近況。**頻道動態**現在可以將他們的社群貼文與影片一同顯示，讓你在同一個地方閱讀。

若要試用，請開啟**設定 → 外觀**，並開啟位於**頻道動態**正下方的**在動態中顯示社群貼文**。此選項**預設為關閉**：包含貼文意味著需要檢查每個已儲存頻道的「貼文」分頁，這會在重新整理動態時使用更多網路流量。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">在外觀設定中啟用社群貼文。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-posts-setting.webp" alt="Android 版 NouTube 的外觀設定，已開啟頻道動態與在動態中顯示社群貼文" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">社群貼文會與已儲存頻道的影片一同顯示。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-post-in-feed.webp" alt="NouTube 動態顯示帶有文字和圖片的 Veritasium 社群貼文以及上傳的影片" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 細節修正

這次更新也讓幾項日常操作更加流暢：

- **Android 橫向版面：** 應用程式檢視畫面與翻譯卡片會避開系統導覽列。
- **Android 連結選單：** 長按影片連結顯示的選單會呈現正確的影片標題與操作圖示。
- **桌面版書籤：** 從縮圖將影片加入星號收藏時會儲存正確的標題。

此外也更新了波蘭語、法語、加利西亞語、義大利語、葡萄牙語（巴西）和俄語的翻譯。

完整變更清單請參閱 [GitHub 上的發行說明](https://github.com/nonbili/NouTube/releases/tag/v0.7.10)。

## 取得 NouTube

[安裝或更新 NouTube](/zh-hant/noutube/install/)，或瀏覽 [NouTube 說明文件](/zh-hant/noutube/)以了解更多資訊。
