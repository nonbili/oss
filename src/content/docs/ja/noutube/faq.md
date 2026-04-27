---
title: よくある質問 (FAQ)
description: GitHub の issue から抽出された NouTube に関するよくある質問。
sidebar:
  order: 9
---
このページでは、公開されている GitHub の issue トラッカーに寄せられた、よくある質問をまとめています。

## デスクトップ版のログインに関する問題

デスクトップアプリに「サインイン」ボタンが表示されない場合は、まず「YouTube でのデータ」メニューを開いてみてください。サインインページは開くものの「ブラウザまたはアプリが安全でない可能性があります」というエラーが表示される場合は、**Inject cookie (クッキーの注入)** 機能を使用してください：

1. ブラウザ拡張機能（`getcookies.txt` など）を使用して、YouTube のクッキーをエクスポートします。
2. **Inject cookie** ボタンを使用して、クッキーを NouTube にインポートします。

この方法は Google の安全なブラウザチェックをバイパスし、現在デスクトップ版のログイン問題に対する最も信頼性の高い解決策です。

ソース：

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## YouTube Music が正しく読み込まれません

YouTube Music が正しく読み込まれない場合は、アプリケーションメニューの **デスクトップ用サイト (Desktop site)** を切り替えてみてください。

ソース：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube がホームページではなくキューを再度開く

NouTube がホームページではなく、以前のアイテムや再生状態を復元し続ける場合は、キューアイコンがアクティブなままになっていないか確認してください。issue スレッドでは、開発者はクリアされていないキューが再生を再開しようとし続ける原因であると特定しています。

ソース：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## バグ報告や機能のリクエストはどこですればよいですか？

GitHub リポジトリを使用してください：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
