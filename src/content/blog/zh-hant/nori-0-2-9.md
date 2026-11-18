---
title: "Nori 0.2.9：儲存社群貼文、分享圖片卡片、自訂清單排序"
description: 儲存社群貼文的可讀副本以便離線閱讀，將書籤轉換為圖片卡片，並為每個清單選擇不同的排序方式。
date: 2026-11-18
product: nori
---

書籤儲存的是網址。透過 **Nori 0.2.9 行動版**，您也可以保留社群貼文的可讀副本。此外，此版本還支援將書籤分享為圖片卡片，並可選擇每個清單的排序方式。

## 保留貼文副本

當您將支援的社群貼文加入書籤時，Nori 會自動嘗試儲存其內容以便離線閱讀。一旦儲存，即使處於離線狀態或原貼文消失，該副本依然可供瀏覽。

支援的服務包括 **X、Instagram、Threads、TikTok、Facebook、Bluesky、Reddit 和 Mastodon**。視平台提供的內容而定，儲存的副本會包含作者、貼文內文、附帶圖片以及引用或相關貼文。您也可以複製貼文內文。

**影片和音訊會儲存為預覽縮圖，而非可離線播放的下載檔案。**

部分網站需要登入或會阻擋自動擷取。如果貼文未能儲存，請選擇 **從頁面儲存貼文**，依網站要求登入，待 Nori 找到貼文後點擊 **儲存**。

在書籤編輯器中，**已儲存的貼文** 會顯示您儲存副本的日期。使用 **重新整理** 可再次擷取；若網站回傳的內容較少，Nori 會保留現有的副本。

自動儲存預設為開啟。您可以在 **設定 → 一般 → 離線儲存社群貼文** 中將其關閉。如果您使用 **Nori Sync**，已儲存的貼文及其圖片會在您的裝置之間同步。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">即使手機處於飛航模式，已儲存的 Bluesky 貼文與圖片依然清晰可讀。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="在開啟飛航模式的情況下，Nori 顯示已儲存的 Bluesky 貼文，包含作者、內文與附帶圖片" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 分享的不只是連結

找到想轉傳的內容嗎？開啟書籤的操作選單並選擇 **以圖片分享**。Nori 會將網頁書籤或已儲存的社群貼文轉為圖片卡片，讓您在傳送前先預覽。

選擇 **淺色或深色** 背景，並決定是否包含書籤的 **備註** 和 **標籤**（若有）。備註預設為隱藏，讓您可以自行選擇是否分享寫給自己的內容。

點擊 **分享** 透過裝置的分享選單傳送卡片，或點擊下載按鈕 **儲存圖片** 至您的相簿。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">預覽卡片、選擇要包含的內容，然後分享或儲存圖片。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="「以圖片分享」預覽畫面，包含淺色與深色主題、備註與標籤控制項、下載按鈕及分享按鈕" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 為每個清單設定專屬順序

將待讀佇列維持在您想閱讀的順序、在另一個清單中將新發現排在最前，並依字母順序排列參考資料合集。

開啟 **編輯清單**，或建立 **新清單**，然後選擇 **書籤順序**：

- **手動（拖曳重新排序）**：依您自行安排的順序排列。
- **最新優先** 或 **最舊優先**：依書籤加入的時間排序。
- **名稱 A–Z** 或 **名稱 Z–A**：依名稱排序。

該選擇僅套用於該清單，因此您的其他清單可以各自保有自己的順序。您也可以在同一個編輯器中重新命名清單。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">為 Reading queue 清單選擇書籤順序。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Reading queue 的編輯清單畫面，顯示全部五個書籤順序選項" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

此版本也改善了 iOS 上 **所有書籤** 抽屜的捲動體驗，並修正了一項同步問題。詳情請參閱 [完整發布說明](https://github.com/nonbili/Nori/releases/tag/v0.2.9)。

[安裝或更新 Nori](/zh-hant/nori/install/)，或探索 [Nori 文件](/zh-hant/nori/)。
