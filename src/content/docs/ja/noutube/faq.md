---
title: よくある質問 (FAQ)
description: GitHub の issue から抽出された NouTube に関するよくある質問。
sidebar:
  order: 9
---
このページでは、公開されている GitHub の issue トラッカーに寄せられた、よくある質問をまとめています。

## ログインに関する問題

Google はウェブページを埋め込んだアプリからのログインを拒否することが多いため、NouTube 内でのログインは Android 版でもデスクトップ版でも失敗することがあります。多くの場合、「このブラウザまたはアプリは安全でない可能性があります」というエラーが表示されます。デスクトップ版で「ログイン」ボタンが表示されない場合は、まず「YouTube でのデータ」メニューを開いてみてください。

ログインできない場合は、代わりに **Inject cookie (クッキーの注入)** 機能を使用してください：

1. パソコンの Chrome または Chromium ベースのブラウザで YouTube にログインし、ブラウザ拡張機能（`getcookies.txt` など）を使用して YouTube のクッキーをエクスポートします。
2. Android の場合は、エクスポートしたファイルを端末にコピーします。
3. NouTube で **Settings > Tools > Inject cookie** を開き、ファイルをインポート（または内容を貼り付け）して保存します。

この方法は Google の安全なブラウザチェックをバイパスし、現在 Android 版とデスクトップ版の両方でログイン問題に対する最も信頼性の高い解決策です。

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
