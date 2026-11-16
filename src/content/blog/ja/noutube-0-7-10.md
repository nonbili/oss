---
title: "NouTube 0.7.10: 動画の再生開始を高速化、カスタムダウンロードフォルダ、コミュニティ投稿に対応"
description: 動画の再生開始までの待ち時間を短縮し、Android でダウンロードの保存先フォルダを選択可能に。保存したチャンネルのコミュニティ投稿もフィードに表示できます。
date: 2026-11-16
product: noutube
---

**Android 版 NouTube 0.7.10** では、動画の再生が始まるまでの待ち時間を短縮しました。本記事では **0.7.9** で追加された機能（Android でのダウンロードフォルダ選択、保存したチャンネルのコミュニティ投稿のフィードリーダー表示）もあわせて紹介します。

## 再生開始までの待ち時間を短縮

NouTube は動画ページのレスポンスを受信しながら順次処理するようになり、レスポンス全体の完了を待たずに再生を開始できるようになりました。**広告ブロックを有効にしている場合**はプレロール広告なしでの再生をリクエストするため、再生開始時の遅延要因をさらに減らせます。

**デスクトップ版**でも関連する改善により、動画ページの読み込みをより早く開始できるようになりました。これらの変更にあたって新たに有効にする設定はありません。

## Android でダウンロードフォルダを選択

ダウンロードした動画を専用のフォルダにまとめておきたい場合は、**Android** で保存先を選択できるようになりました。

ダウンロードダイアログの **フォルダ** の下にある **参照** をタップし、Android のフォルダピッカーでフォルダを選択してください。デフォルトの保存先に戻すには、**Downloads フォルダを使用** をタップします。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">動画を専用フォルダに保存したり、Downloads フォルダに戻したりできます。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/download-folder.png" alt="選択されたフォルダとして Download/NouTube、「参照」、「Downloads フォルダを使用」が表示されている NouTube の Android ダウンロードダイアログ" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## フィードリーダーでのコミュニティ投稿表示

保存したチャンネルが動画のアップロードの合間に近況を共有することがあります。**チャンネルフィード** に動画と並べてコミュニティ投稿を含められるようになり、両方をひとつの場所で読めるようになりました。

試すには、**設定 → 外観** を開き、**チャンネルフィード** のすぐ下にある **フィードにコミュニティ投稿を表示** をオンにしてください。**デフォルトではオフ**になっています。投稿を含めると保存した各チャンネルの「投稿」タブを確認するため、フィード更新時のデータ通信量が増えます。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">外観設定でコミュニティ投稿を有効にします。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-posts-setting.png" alt="「チャンネルフィード」と「フィードにコミュニティ投稿を表示」が有効になっている Android 版 NouTube の外観設定" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">保存したチャンネルの動画と並んでコミュニティ投稿が表示されます。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-post-in-feed.png" alt="テキストと画像を含む Veritasium のコミュニティ投稿がアップロード動画と並んで表示されている NouTube のフィード" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## その他の細かな修正

日常の操作をより快適にする修正も含まれています：

- **Android 横向きレイアウト:** アプリ画面や翻訳カードがシステムナビゲーションバーと重ならないようになりました。
- **Android リンクメニュー:** 動画リンクの長押しメニューで、正しい動画タイトルとアクションアイコンが表示されるようになりました。
- **デスクトップのブックマーク:** サムネイルから動画にスターを付けた際、正しいタイトルが保存されるようになりました。

ポーランド語、フランス語、ガリシア語、イタリア語、ポルトガル語（ブラジル）、ロシア語の翻訳も更新されています。

変更点の全一覧は [GitHub のリリースノート](https://github.com/nonbili/NouTube/releases/tag/v0.7.10) をご覧ください。

## NouTube を入手

[NouTube をインストールまたは更新](/ja/noutube/install/)するか、[NouTube のドキュメント](/ja/noutube/)で詳細をご確認ください。
