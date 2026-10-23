---
title: "Nora 0.9.0：社群動態，匯聚一處"
description: 在 Nora 0.9.0 中以時間軸追蹤社群帳號，並在媒體網格中瀏覽相片與影片。
sidebar:
  label: Nora 0.9.0 發布
  order: 2
---

*2026年10月22日發布*

**Nora 0.9.0** 在 Android、iOS 與桌面端新增了內建 Feed 閱讀器。跨 X、Instagram、Bluesky、Mastodon 等支援的網路追蹤帳號，並將其貼文整理至專屬的時間軸中。許多來源無需登入即可直接瀏覽。

您可以將所有內容集中瀏覽、依興趣分類至不同時間軸，或切換為相片與影片網格。

## 跨社群網路追蹤帳號

在 Nora 分頁中開啟支援的個人檔案或社群，從選單中選取 **追蹤**（Watch）。最新貼文隨即會顯示於 Nora 的 **動態**（Feed）中。點擊貼文即可隨時開啟原始網頁，查看回覆或進行互動。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">動態</div>
    <h2 class="screenshot-card__title">自訂時間軸</h2>
    <p class="screenshot-card__body">
      按時間先後順序閱讀來自 Bluesky、Reddit、Mastodon 等追蹤社群帳號的最新動態。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/feed-timeline.png" alt="Nora 0.9.0 動態時間軸畫面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">媒體</div>
    <h2 class="screenshot-card__title">相片與影片網格</h2>
    <p class="screenshot-card__body">
      將任何時間軸切換為僅顯示相片與影片的網格檢視，並在全螢幕藝廊中滑動瀏覽。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/media-grid.png" alt="Nora 0.9.0 相片與影片網格畫面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">來源</div>
    <h2 class="screenshot-card__title">新增與管理來源</h2>
    <p class="screenshot-card__body">
      批次貼上個人檔案連結、匯入 OPML 檔案，或在專屬畫面中篩選與排序追蹤的來源。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/manage-sources.png" alt="Nora 0.9.0 動態來源管理畫面" />
    </div>
  </figure>
</div>

您可以追蹤：

- **X (Twitter)**、**Instagram**、**Threads**、**Bluesky** 與 **TikTok** 個人檔案
- 各伺服器上的 **Mastodon** 檔案
- **Reddit** 看板（Subreddit）與使用者個人檔案
- **Facebook** 粉絲專頁、個人檔案與社團

若要一次新增多個來源，可直接貼上連結清單或匯入 OPML 檔案。OPML 資料夾會直接轉換為時間軸，無縫沿用您既有的分類結構。在 **管理來源**（Manage Sources）畫面中，您可以搜尋、篩選、排序追蹤的帳號，並支援重新匯出。

## 自由整理專屬時間軸

將好友、新聞與興趣分別歸納入不同的 **自訂時間軸**，每個時間軸均可設定專屬 emoji 圖示與動態分頁。您可以將時間軸固定到新分頁以利快速存取，亦可將所有來源整合在單一動態中。

在時間軸中，點擊作者的頭像或名稱即可聚焦瀏覽其發布的貼文。您也可以從動態頂部的選擇器中切換特定來源。

自由設定 Nora 檢查更新的頻率以及觸發通知的貼文條件。您可以設定全域預設值、為個別時間軸調整，或靜音單一來源。如果某個網路需要登入，您還可以選擇要使用哪一個 Nora 設定檔（Profile），或關閉已登入狀態的檢查。

您追蹤的來源與時間軸均包含在設定備份及選用的雲端同步中，方便跨裝置同步保留。

## 瀏覽相片與影片

將時間軸切換為 **僅相片與影片**，即可在網格中輕鬆瀏覽媒體。開啟相片或影片即可滑動藝廊、放大檢視相片、播放影片，或下載媒體至您的裝置。

Nora 會在本地快取動態貼文與媒體。您可以限制媒體儲存上限、清除快取，並將媒體預載限制在 Wi-Fi 連線下。

## 其他改進

本版本亦包含以下更新：

- **分頁重新排序：** 在行動裝置的分頁切換畫面中，長按並拖曳分頁以重新排列。
- **頁面內尋找：** 搜尋開啟中的網頁，提供即時相符計數與前一個/下一個控制項。
- **識別設定檔的連結：** 連結始終在原始分頁所屬的設定檔中開啟，並支援長按分頁以在其他設定檔中重新開啟。
- **同步功能改進：** 設定、書籤與使用者樣式的變更可在裝置間合併，並提供本機備份以供復原。

完整版本資訊請參閱[更新日誌](/zh-hant/nora/changelog/)。

## 取得 Nora 0.9.0

在 Android、iOS、Linux、macOS 或 Windows 上[安裝或更新 Nora](/zh-hant/nora/install/)。

您也可以瀏覽 [Nora 說明文件](/zh-hant/nora/)或閱讀 [GitHub 上的版本資訊](https://github.com/nonbili/Nora/releases/tag/v0.9.0)。
