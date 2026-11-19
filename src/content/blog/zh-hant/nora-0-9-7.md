---
title: "Nora 0.9.7：選擇下載資料夾並自訂選單"
description: 在 Android 上選擇下載儲存位置、隱藏三點選單中少用的動作，並帶來 WhatsApp Web、Facebook Marketplace 與分頁導覽的修正。
date: 2026-11-19
product: nora
---

透過 **Nora 0.9.7 行動版**，您可以將 Android 下載內容儲存到自選資料夾，並將瀏覽器的三點選單精簡為只保留常用的動作。此版本也會自動以電腦版模式開啟 WhatsApp Web 與 Facebook Marketplace。

## 選擇下載儲存位置

在 Android 上，開啟 **設定 → 偏好設定 → 下載 → 將下載儲存至**，即可設定瀏覽器下載內容的儲存位置。

- **下載** 使用 Android 預設的 Downloads 資料夾。
- **每次詢問** 讓您為每次下載選擇儲存位置。
- **選擇資料夾…** 將之後的下載內容儲存到您所選的資料夾。

若您選擇了資料夾，在 Android 10 及更新版本上，Nora 也會將從動態消息儲存的媒體存放於此資料夾中。此版本同時修正了 `data:` 連結的下載問題（部分網站會用這類連結提供在瀏覽器中產生的檔案）。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">已選取 Nora Downloads 作為之後下載的儲存位置。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.png" alt="Android 下載設定畫面，已選取 Nora Downloads，並顯示下載、每次詢問與選擇資料夾選項" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 自訂三點選單

開啟 **設定 → 外觀 → 工具列 → 自訂三點選單**，關閉您很少使用的動作。舉例來說，若您很少切換版面配置，可以保留 **在頁面中尋找** 與 **分享**，並隱藏 **電腦版網站**。保留的動作會在目前分頁可使用時顯示。

**設定** 會保留在選單中，點選 **重設為預設選單** 即可一鍵清除您的變更。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">保持「在頁面中尋找」開啟，並關閉「電腦版網站」。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.png" alt="展開的自訂三點選單設定，其中在頁面中尋找為開啟狀態，電腦版網站為關閉狀態" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">瀏覽器選單保留了在頁面中尋找、分享與設定。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.png" alt="自訂後的瀏覽器選單，顯示在頁面中尋找、分享與設定，並隱藏電腦版網站" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web 與 Facebook Marketplace 以電腦版模式開啟

在 **WhatsApp Web** 中，現在開啟螢幕鍵盤時不會再關閉選擇器。**Facebook Marketplace** 會使用電腦版網站，讓您能直接從商品頁面傳訊息給賣家。

## 瀏覽與動態消息修正

- Facebook 廣告封鎖現在即使贊助貼文的標籤延遲出現也能成功攔截。長按 Facebook 心情按鈕時，瀏覽器的右鍵／內容選單不會再跳出來干擾操作。
- Reddit 遊戲過濾器會繼續讓一般貼文保持可見。
- 開啟分頁切換器時，目前使用中的分頁會直接顯示在畫面內。在新分頁中，輸入的網址在首次點擊 **前往** 時就會開啟，開啟外部傳入的連結時也會保留您的其他分頁。
- 在媒體檢視器中進行手勢操作時，下拉重新整理不會再造成干擾。

完整變更清單請參閱 [GitHub 上的發行說明](https://github.com/nonbili/Nora/releases/tag/v0.9.7)。

## 取得 Nora

[安裝或更新 Nora](/zh-hant/nora/install/)，或瀏覽 [Nora 文件](/zh-hant/nora/)以了解更多資訊。
