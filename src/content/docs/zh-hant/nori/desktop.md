---
title: 桌面版
description: 在 Linux、macOS 和 Windows 上使用 Nori 桌面應用程式。
sidebar:
  order: 4
---

Nori 為 Linux、macOS 和 Windows 提供了專用的獨立桌面應用程式。

## 桌面版的優勢

桌面版本將 Nori 的書籤啟動體驗帶入電腦端，成為高效且鍵盤友好的桌面夥伴：

- **獨立啟動器**：在專用視窗中整理連結，避免瀏覽器分頁列雜亂無章。
- **本地優先架構**：基於 [Wails v3](https://v3.wails.io/) 與 Go 構建，將作業系統原生視窗能力與現代 Web 介面完美結合。
- **呼叫系統瀏覽器啟動**：點選連結直接在桌面的預設瀏覽器中開啟。
- **同步整合**：連接 Nori Sync 帳號，在桌面端、行動裝置與瀏覽器擴充功能之間無縫共享書籤。

## 各平台安裝包

- **Linux**：提供適用於 `amd64` 的便攜式 AppImage 與 `.tar.gz` 壓縮包。
- **macOS**：通用二進位檔支援 Apple Silicon（`arm64`）與 Intel（`amd64`），提供 `.dmg` 安裝程式與 `.app.zip` 歸檔。
- **Windows**：提供安裝程式（`.exe`）與便攜式 `.zip` 壓縮包。

## Linux 系統相依性要求

Linux AppImage 使用系統的 WebKit 引擎。請確保已安裝 GTK 3 和 `webkit2gtk-4.1`：

- **Debian / Ubuntu**：
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**：
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**：
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## 版本發行

最新桌面端安裝包與發行說明請造訪 [Nori GitHub Releases](https://github.com/nonbili/Nori/releases) 頁面。
