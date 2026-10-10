---
title: Nori
description: Nori 概览以及书签管理与启动器工作模式。
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori 图标" />
  <p class="product-overview-header__meta">Android、iOS、桌面版和扩展</p>
</div>

Nori 是一款开源书签管理器和启动器，专为在移动设备、桌面电脑和 Web 浏览器之间快速日常访问而设计。

Nori 不会将链接深埋在繁琐的浏览器文件夹层级或封闭生态中，而是将书签整理为清晰专一的列表，并提供即时启动、搜索、丰富卡片预览以及系统分享菜单集成。

## 主要特性

- 多个自定义书签列表
- 即时在系统默认浏览器或原生 Custom Tabs 中启动
- 接收来自任何应用分享的链接，支持列表选择器与快速保存
- 紧凑启动器模式与带网站封面图的预览卡片模式
- 支持关键字和标签过滤的快速搜索抽屉
- 最近使用与最近添加的启动历史记录
- 通过标准 HTML 书签、纯文本及完整 JSON 备份进行导入与导出
- 灵活的外观定制：浅色、深色、AMOLED 以及自定义强调色
- 面向 Chrome 和 Firefox 的本地优先浏览器扩展
- 面向 Linux、macOS 和 Windows 的跨平台桌面应用
- 可选通过 Nori Sync 实现多设备云端同步

## 支持平台

- **Android**：可在 Google Play 下载或直接获取 GitHub APK 发布包。
- **iOS**：可在 iPhone 和 iPad 的 App Store 中获取。
- **桌面版**：适用于 Linux（AppImage 与 tarball）、macOS（Apple Silicon 与 Intel）以及 Windows 的独立原生应用。
- **浏览器扩展**：适用于 Mozilla Firefox 和 Google Chrome 的 Manifest V3 扩展。

## 首次使用

推荐的首次配置步骤：

1. 为常用链接类别创建几个列表（例如 `常用`、`工具`、`阅读`、`工作`）。
2. 添加首批核心链接，或从浏览器导出的 HTML 书签中导入。
3. 点击启动书签，确认默认浏览器是否如期打开链接。
4. 尝试从移动端浏览器使用系统分享菜单将网页分享至 Nori。
5. 自定义外观设置，例如深色模式或喜爱的强调色。

## 工作原理

Nori 将书签集合与具体的浏览器内核解耦：

- 在 Android 上，书签通过基于 `expo-web-browser` 的 Custom Tabs 打开，或直接调用系统的默认浏览器应用。
- 在 iOS 上，书签通过原生浏览器弹窗或系统默认浏览器打开。
- 在桌面端和扩展上，书签直接在活跃的浏览器标签页中打开。

这种方式确保您始终保留偏好的广告拦截插件、登录凭据和浏览器配置文件，同时将所有链接整理在一个快捷、易于搜索的启动器中。

## 更多链接

源代码、版本发布与 Issue 跟踪请访问 GitHub 仓库：

- [nonbili/Nori](https://github.com/nonbili/Nori)

商店徽章、APK、桌面端下载及浏览器扩展安装包请参阅 [安装](/zh-hans/nori/install/)。
