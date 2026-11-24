---
title: "NouTube 0.7.11: Android ツールバーのカスタマイズと iOS での動画ダウンロード"
description: よく使う操作を Android のツールバーに配置し、スワイプで全画面表示に切り替え、YouTube のコメントを非表示にし、iPhone と iPad で動画を保存できるようになりました。
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 では、**共有** や **URL を開く** などの操作を Android のツールバーに直接配置できるようになりました。iPhone と iPad では **ツール** から対応する動画をダウンロードできるようになり、動画の再生開始も速くなっています。モバイル版にはさらに、全画面表示のスワイプ操作と YouTube のコメントを非表示にする設定も追加されました。

## よく使う操作を Android のツールバーに配置する

**設定 → 外観 → ツールバーボタン** を開きます。スイッチで表示するボタンを選び、ハンドルをドラッグして並び順を設定します。たとえば **共有** と **URL を開く** をオンにしてリストの一番上にドラッグすれば、動画を見ながらどちらの操作にもすぐ手が届きます。

**ツール**、**PC 版サイト**、**設定**、**YouTube / YouTube Music** の切り替えボタンもツールバーに追加できます。同じリストで、**ライブラリ**、**チャンネルフィード**、**履歴** など既存のボタンの並び替えも可能です。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">共有と URL を開くをオンにして、リストの一番上にドラッグします。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-settings.webp" alt="最初の2行で共有と URL を開くがオンになり、右側にドラッグハンドルが表示されている Android の外観設定" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">共有と URL を開くが、再生ページのツールバーの最初の2つのボタンになりました。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/android-toolbar-result.webp" alt="Big Buck Bunny の再生ページ上部にある NouTube のツールバー。左端に共有アイコンと URL を開くリンクアイコンが並んでいる" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## iPhone と iPad で動画をダウンロードする

保存が許可されている動画で **ツール** を開き、**動画をダウンロード** をタップします。対応する MP4 があれば、NouTube がそれをダウンロードします。ダウンロードが完了したら、**エクスポート** をタップしてファイルを保存または共有します。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">ツールには再生中の動画の URL が自動で入力されます。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-tools.webp" alt="動画の URL が入力され、MP4 の利用可否の注記と動画をダウンロードボタンが表示されている iPhone のダウンロードパネル" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">ファイルの準備ができると、ダウンロード履歴にエクスポートが表示されます。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/ios-download-export.webp" alt="緑のチェックマーク、ダウンロード完了のステータス、エクスポートボタンが表示された iPhone のダウンロード履歴の項目" width="1206" height="2622" loading="lazy" />
    </div>
  </figure>
</div>

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

0.7.10 で Android に導入された動画の高速な再生開始が、iOS にも適用されるようになりました。iPad では、全画面表示中も YouTube の再生コントロールを利用できます。

## スワイプで全画面表示、コメントの非表示

モバイルでは、YouTube プレーヤー上で上にスワイプすると全画面表示になり、下にスワイプすると再生ページに戻ります。スワイプは動画そのものの上から始めるので、再生コントロールやシークバーはこれまでどおり操作できます。

YouTube の再生ページからコメント欄を取り除くには、**設定 → プリファレンス → 集中モード** を開き、**コメントを非表示** をオンにします。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">コメントを非表示は集中モード設定の一番下にあります。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-11/hide-comments-setting.webp" alt="集中モードセクションの一番下でコメントを非表示のスイッチがオンになっている Android のプリファレンス画面" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## その他の修正

- Opus 音声のダウンロードに `.opus` 拡張子が使われるようになりました。Android のリリースビルドでの yt-dlp の起動に関する問題を修正し、ダウンロードや再生の失敗もより確実に処理するようになりました。
- YouTube のデスクトップ版再生ページが、幅の狭い Android 画面に収まるようになりました。Android ではフィードのプレビューが再生履歴に残らなくなり、システムの YouTube Music コントロールの **次へ** が NouTube 独自のキューに影響しなくなりました。
- このリリースでは、イタリア語、ポーランド語、ブラジルポルトガル語、ロシア語、ウクライナ語の翻訳を更新しています。

[GitHub でリリースを見る](https://github.com/nonbili/NouTube/releases/tag/v0.7.11)。

## NouTube を入手

[NouTube をインストールまたは更新](/ja/noutube/install/)するか、[NouTube のドキュメント](/ja/noutube/)をご覧ください。
