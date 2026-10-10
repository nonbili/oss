---
title: 桌面版
description: 在 Linux、macOS 和 Windows 上使用 Nori 桌面应用。
sidebar:
  order: 4
---

Nori 为 Linux、macOS 和 Windows 提供了专用的独立桌面应用程序。

## 桌面版的优势

桌面版本将 Nori 的书签启动体验带入电脑端，成为高效且键盘友好的桌面伴侣：

- **独立启动器**：在专用窗口中整理链接，避免浏览器标签栏杂乱无章。
- **本地优先架构**：基于 [Wails v3](https://v3.wails.io/) 和 Go 构建，将操作系统原生窗口能力与现代 Web 界面完美结合。
- **调用系统浏览器启动**：点击链接直接在桌面的默认浏览器中打开。
- **同步集成**：连接 Nori Sync 账号，在桌面端、移动端和浏览器扩展之间无缝共享书签。

## 各平台安装包

- **Linux**：提供适用于 `amd64` 的便携式 AppImage 和 `.tar.gz` 压缩包。
- **macOS**：通用二进制支持 Apple Silicon（`arm64`）和 Intel（`amd64`），提供 `.dmg` 安装程序与 `.app.zip` 归档。
- **Windows**：提供安装程序（`.exe`）与便携式 `.zip` 压缩包。

## Linux 系统依赖要求

Linux AppImage 使用系统的 WebKit 引擎。请确保已安装 GTK 3 和 `webkit2gtk-4.1`：

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

## 版本发布

最新桌面端安装包和发布说明请访问 [Nori GitHub Releases](https://github.com/nonbili/Nori/releases) 页面。
