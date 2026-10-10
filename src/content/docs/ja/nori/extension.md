---
title: ブラウザ拡張機能
description: Firefox および Chrome での Nori ブラウザ拡張機能の利用。
sidebar:
  order: 5
---

Nori には、Mozilla Firefox および Google Chrome 向けのローカルファーストなブラウザ拡張機能が用意されています。

## 主な特徴

- **モバイル版と同じ使い心地**: 拡張機能のポップアップから、モバイルアプリと同様のリスト、検索ドロワー、履歴、リスト管理、設定を利用できます。
- **1 クリック保存**: 現在開いているタブを、タイトル自動取得とともに指定のリストへ即座にブックマークできます。
- **高速ランチャー**: ブラウザのツールバーから保存済みリンクを検索し、新しいタブで素早く開けます。
- **ローカルストレージ**: ブラウザの拡張機能ストレージ内にローカル保存され、Nori Sync による同期にも対応しています。
- **プライバシー重視**: 閲覧アクティビティやページ内容の追跡は一切行いません。Nori はユーザーが明示的に保存したリンクのみを受信します。

## 拡張機能のインストール

公式ストアから直接インストールできます:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## ソースコードからのビルド

拡張機能はオープンソースであり、[WXT](https://wxt.dev/) と Manifest V3 で構築されています:

```bash
cd extension
bun install
bun run dev          # Chrome 開発モード
bun run dev:firefox  # Firefox 開発モード
bun run build:all    # 本番用 zip パッケージのビルド
```
