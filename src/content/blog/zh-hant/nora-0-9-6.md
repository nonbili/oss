---
title: "Nora 0.9.6：Android 主畫面捷徑支援廣告阻擋"
description: 在 Android 主畫面捷徑中使用廣告阻擋與連結、圖片選單，並修正動態文字選取、標頭動畫及分頁覆蓋層問題。
date: 2026-11-12
product: nora
---

行動端 **Nora 0.9.6** 為從 Android 主畫面捷徑開啟的網站帶來了廣告阻擋以及連結與圖片選單。內建動態閱讀器亦針對選取文字、捲動與切換分頁進行了修正。

## 主畫面捷徑同樣套用廣告阻擋設定

在 **Android** 上，透過 Nora 的 **新增至主畫面** 功能儲存的網站會在獨立視窗中開啟。這些視窗現在同樣會套用 Nora 的廣告阻擋設定，包含網路阻擋與隱藏頁面廣告元素的規則。

若要體驗此功能，只需在 Nora 中開啟網站，從頁面選單中選擇 **新增至主畫面**，接著從啟動器開啟捷徑即可。您所設定的阻擋規則也會套用在該處。

## 長按連結與圖片

Android 主畫面捷徑現在提供捷徑選單：

- **長按連結**：複製其位址，或在新的 Nora 分頁中開啟。
- **長按圖片**：儲存圖片、複製其位址，或在新的 Nora 分頁中開啟。

您可以在獨立視窗中繼續閱讀，並將想要詳細瀏覽的連結傳送至 Nora 分頁中開啟。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">在 Android 主畫面捷徑中長按圖片可開啟 Nora 的圖片操作選單。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.webp" alt="Nora 的獨立 Android 捷徑畫面，顯示儲存圖片、在新分頁中開啟圖片以及複製圖片連結操作" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 更流暢的動態閱讀體驗

此版本亦修正了 Nora 內建動態閱讀器中的三項互動問題：

- **文字選取：** 選取貼文描述中的文字運作更為穩定。
- **標頭動畫：** 動態標頭在收合與展開時能正確播放動畫。
- **切換分頁時的覆蓋層：** 動態覆蓋層現已正確歸屬於開啟它們的分頁，防止其意外顯示在其他分頁之上。

剛接觸動態閱讀器嗎？[Nora 0.9.0 介紹](/zh-hant/blog/nora-0-9-0/)詳細解說了來源、時間軸與媒體網格。

完整變更清單請參閱 [GitHub 上的版本資訊](https://github.com/nonbili/Nora/releases/tag/v0.9.6)。

## 取得 Nora

[安裝或更新 Nora](/zh-hant/nora/install/)，或瀏覽 [Nora 說明文件](/zh-hant/nora/)以了解更多資訊。
