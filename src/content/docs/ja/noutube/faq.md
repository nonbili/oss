---
title: よくある質問 (FAQ)
description: GitHub の issue から抽出された NouTube に関するよくある質問。
sidebar:
  order: 9
---
このページでは、公開されている GitHub の issue トラッカーに寄せられた、よくある質問をまとめています。

## デスクトップ版でサインインボタンが表示されない、またはログインが停止する

デスクトップアプリに「サインイン」ボタンが表示されない場合は、まず「YouTube でのデータ」メニューを開いてみてください。issue の議論では、この経路からサインインフローに到達できることが報告されています。開発者は、`v0.1.6` でサインインボタンが再表示されるようになると述べています。

ソース：

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## サインインページが開いてもデスクトップ版のログインに失敗する

一部のデスクトップ環境で、データを消去しても Google ログインに失敗するという報告があります。issue では普遍的な解決策は確認されていませんが、現実的なガイドラインは以下の通りです：

- 最新のデスクトップリリースにアップデートする
- 既にログインを試したことがある場合は、アプリのウェブビュー/プロフィールデータを消去する
- それでも解決しない場合は、OS、パッケージ形式、スクリーンショットを添えて GitHub で報告してください

ソース：

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music が正しく読み込まれません

文書化されているトラブルシューティングの手順は以下の通りです：

1. `NouTube` が `music.youtube.com` のデフォルトアプリに設定されていることを確認する。
2. 公式の YouTube Music アプリがインストールされている場合は、まずそのアプリのデフォルトのリンク処理を解除する。
3. 問題が解決しない場合は、「設定 > ツール > カスタムユーザーエージェント」からカスタムユーザーエージェントを試す。

このガイドは、issue スレッドで開発者から直接提供された回避策であり、すべてのデバイスで保証されるものではありません。

ソース：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## 一部の広告が表示されます

動画の前に短い YouTube Premium の広告が表示されるという報告がありました。開発者は `v0.4.9` を案内しており、その後のリリースで広告ブロックの修正が行われたことを示唆しています。広告が表示される場合は：

- F-Droid または GitHub から最新リリースにアップデートする
- 問題が解決しない場合は、アプリのバージョンとスクリーンショットを添えて新しい issue を作成してください

ソース：

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube がホームページではなくキューを再度開く

NouTube がホームページではなく、以前のアイテムや再生状態を復元し続ける場合は、キューアイコンがアクティブなままになっていないか確認してください。issue スレッドでは、開発者はクリアされていないキューが再生を再開しようとし続ける原因であると特定しています。

ソース：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## バグ報告や機能のリクエストはどこですればよいですか？

GitHub リポジトリを使用してください：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
