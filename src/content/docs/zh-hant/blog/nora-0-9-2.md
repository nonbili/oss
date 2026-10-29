---
title: "Nora 0.9.2：更多方式，暢追動態"
description: 支援從 imginn 讀取 Instagram 動態、從 Nitter 站台讀取 X 動態，縮放時間軸與藝廊媒體，並在 Android 上選擇下載儲存位置。
sidebar:
  label: Nora 0.9.2 發布
  order: 2
---

*2026年10月29日發布*

Instagram 或 X 停止更新了嗎？**Nora 0.9.2** 新增了選用的替代來源，協助您的動態持續保持更新。同時還帶來了時間軸與藝廊縮放、影片播放速度控制，以及在 Android 上選擇下載檔案儲存位置的功能。

如果您是第一次使用 Nora 的動態閱讀器，可以先閱讀 [0.9.0 版本介紹](/zh-hant/blog/nora-0-9-0/)。

## 從 imginn 讀取 Instagram，從 Nitter 讀取 X

在未登入狀態下追蹤公開的 **Instagram** 與 **X** 個人檔案時，可能會遇到登入牆或請求頻率限制。Nora 0.9.2 在 **動態設定**（Feed Settings）中新增了兩項選用替代方案，讓您無需登入帳號也能保持時間軸更新：

- **從 imginn 讀取 Instagram：** 可選擇 **當 Instagram 失敗時** 將 imginn 作為備用方案，或選擇 **優先，接著 Instagram** 優先檢查 imginn。兩種模式皆僅在 Nora 開啟期間運作。如果 imginn 要求確認您不是機器人，Nora 會提示您在應用程式內完成驗證。
- **從 Nitter 讀取 X：** 可選擇 **當 X 失敗時** 或 **優先，接著 X**，並新增一個或多個 Nitter 站台位址。Nora 會依序嘗試您設定的站台。需要瀏覽器驗證的站台僅在 Nora 開啟期間運作。

這兩項選項預設皆為關閉，可隨時在 **動態設定** 中啟用。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">動態設定</div>
    <h2 class="screenshot-card__title">imginn 與 Nitter 來源</h2>
    <p class="screenshot-card__body">
      從 imginn 讀取 Instagram 個人檔案，並從您設定的 Nitter 站台讀取 X 個人檔案——可作為備用或主要來源。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="顯示 imginn 與 Nitter 選項的 Nora 0.9.2 動態設定畫面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">媒體</div>
    <h2 class="screenshot-card__title">全螢幕藝廊與縮放</h2>
    <p class="screenshot-card__body">
      在全螢幕藝廊中以雙指縮放相片與影片、長按畫面邊緣加速播放，或直接儲存媒體檔案。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Nora 0.9.2 全螢幕媒體藝廊畫面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">設定檔</div>
    <h2 class="screenshot-card__title">在設定檔中重新開啟分頁</h2>
    <p class="screenshot-card__body">
      直接從頂部選單或分頁切換器，將任何開啟中的行動版分頁切換至另一個 Nora 設定檔。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Nora 0.9.2 在設定檔中重新開啟分頁對話框" />
    </div>
  </figure>
</div>

## 動態影片控制、縮放與通知

在動態中瀏覽時間軸與媒體內容也變得更加靈活：

- **藝廊中的影片速度控制：** 動態影片現在會套用您的 **預設影片播放速度** 與 **長按邊緣以 2 倍速播放** 偏好設定。在影片播放時按住左側或右側邊緣即可跳至 2 倍速，接著水平滑動即可切換不同速度。
- **時間軸與藝廊縮放：** 在行動裝置上以雙指縮放——或在桌面端按住 `Ctrl`/`Cmd` 並捲動——即可在動態時間軸以及全螢幕相片與影片藝廊中自由縮放。放大檢視時仍可使用影片播放與進度控制項。
- **在時間軸中開啟通知：** 點擊新貼文通知現在會直接開啟對應的 Nora 時間軸。
- **無法播放影片時的備用方案：** 當影片無法在全螢幕藝廊中播放時，您可以直接在原始網站上開啟該則貼文。

## 下載、設定檔與網站改進

本版本亦包含多項跨平台的瀏覽與下載改進：

- **在 Android 上選擇下載儲存位置：** 在 **設定 → 下載** 下開啟 **每次下載前詢問儲存位置**，即可為每個檔案挑選目標資料夾與檔案名稱。本版本同時提升了儲存下載檔案的穩定性。
- **從頂部選單在設定檔中重新開啟：** 除了在分頁切換器中長按分頁外，現在也能直接從頂部選單將目前使用中的行動版分頁切換至另一個 Nora 設定檔。
- **TikTok 與 Instagram 修正：** 使用全新的全螢幕按鈕觀看 TikTok 影片，並更穩定地從 TikTok 與 Instagram 下載影片（包含未登入 Instagram 的情況）。
- **更流暢的捲動與背景檢查：** 工具列隱藏或顯示時頁面不再跳動，且 Android 上的背景動態檢查運作更加順暢。

完整版本資訊請參閱[更新日誌](/zh-hant/nora/changelog/)。

## 取得 Nora 0.9.2

在 Android、iOS、Linux、macOS 或 Windows 上[安裝或更新 Nora](/zh-hant/nora/install/)。

您也可以瀏覽 [Nora 說明文件](/zh-hant/nora/)或閱讀 [GitHub 上的版本資訊](https://github.com/nonbili/Nora/releases/tag/v0.9.2)。
