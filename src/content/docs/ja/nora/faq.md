---
title: よくある質問 (FAQ)
description: GitHub の issue から抽出された Nora に関するよくある質問。
---
このページでは、公開されている GitHub の issue トラッカーに寄せられた、よくある質問をまとめています。

## Nora は他のアプリから Instagram や Facebook のリンクを直接開くことができますか？

はい、それは意図された動作です。開発者によると、以下の操作が必要になる場合があります：

- Android の「デフォルトで開く」設定で Nora を有効にする
- 公式アプリが同じリンクを横取りし続ける場合は、公式アプリをアンインストールまたは無効にする
- ディープリンクによってアプリは開くものの、リクエストされた投稿が開かない場合は、最新の Nora にアップデートする

ソース：

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Nora 内で Instagram が開けません

現在、リロード、PC版サイトモード、ウェブビューデータの消去を試しても、Instagram のエラーページが表示されるという報告が一部のユーザーから寄せられています。つまり、まだ確定した修正方法はありません。お使いのデバイスでこの問題が発生した場合は、以下をお試しください：

- リロードする
- PC版サイトモードを試す
- Nora のウェブビューデータを消去する
- それでも解決しない場合は、GitHub で更新を確認するか、issue にお使いのデバイスの詳細を追加してください

ソース：

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## アプリを閉じた後もメディアの再生が続きます

Instagram の音声がバックグラウンドで再生され続け、コントロールできないという問題が報告されました。開発者は、次のリリースで修正されると回答しています。まずは、ストアまたはリリースチャンネルで利用可能な最新バージョンの Nora にアップデートしてください。

ソース：

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## 画像や動画をダウンロードできますか？

はい、少なくとも一部はすでにサポートされています：

- 画像を長押ししてダウンロードメニューを表示する
- Facebook と Instagram リールのダウンロードは、この issue が議論された時点で既にサポートされていました
- X の動画ダウンロード機能はその後追加されました

ソース：

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## X のサインインに失敗するのはなぜですか？

issue の議論によると、通常のメールアドレス/パスワードによるサインインは動作するはずですが、ウェブビュー内での Google アカウントによるサインインには追加の対応が必要でした。開発者は後に、影響を受けるユーザーのための回避策として、`v0.1.5` で「Inject cookie」メニューを追加したと述べています。

ソース：

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Nora 内で uBlock Origin や Dark Reader などのブラウザ拡張機能を使用できますか？

フル機能のブラウザプロフィールと同じようには使用できません。機能リクエストの議論の中で、開発者は、ブラウザ拡張機能の埋め込みサポートを約束する代わりに、UI の変更には Nora 独自のカスタム CSS サポートを利用するよう案内しています。

ソース：

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## バグ報告や機能のリクエストはどこですればよいですか？

GitHub リポジトリを使用してください：

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
