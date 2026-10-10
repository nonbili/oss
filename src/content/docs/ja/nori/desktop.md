---
title: デスクトップ
description: Linux、macOS、Windows での Nori デスクトップ版の利用。
sidebar:
  order: 4
---

Nori は Linux、macOS、Windows 向けのスタンドアロンデスクトップアプリを提供しています。

## デスクトップ版の特徴

デスクトップ版は、キーボード操作に適した高速なブックマークランチャーとして PC 上で動作します:

- **独立したランチャー**: ブラウザのタブバーを散らかすことなく、独立した専用ウィンドウでリンクをすっきり整理できます。
- **ローカルファーストアーキテクチャ**: [Wails v3](https://v3.wails.io/) と Go で構築され、OS ネイティブのウィンドウ機能とモダンな Web UI を両立しています。
- **システムブラウザでの起動**: リンクをクリックすると、デスクトップのデフォルトブラウザで直接開きます。
- **同期の統合**: Nori Sync アカウントを連携することで、デスクトップ、モバイル、ブラウザ拡張機能の間でシームレスにブックマークを共有できます。

## 提供パッケージ

- **Linux**: `amd64` 向けポータブル AppImage および `.tar.gz` パッケージ。
- **macOS**: Apple Silicon（`arm64`）および Intel（`amd64`）に対応した Universal 構成で、`.dmg` インストーラーおよび `.app.zip` バンドルを提供。
- **Windows**: セットアップインストーラー（`.exe`）およびポータブル `.zip` アーカイブ。

## Linux のシステム要件

Linux AppImage はシステムの WebKit エンジンを利用します。GTK 3 および `webkit2gtk-4.1` がインストールされていることを確認してください:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## リリース

最新のデスクトップ向けダウンロードや更新情報については [Nori GitHub Releases](https://github.com/nonbili/Nori/releases) をご覧ください。
