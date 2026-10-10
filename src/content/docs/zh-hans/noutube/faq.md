---
title: 常见问题 (FAQ)
description: 从 GitHub Issue 中提取的常见 NouTube 问题。
sidebar:
  order: 9
---
本页面总结了来自公开 GitHub 问题追踪器的常见用户问题。

## 登录问题

Google 经常拒绝来自内嵌网页的应用的登录请求，因此在 NouTube 内登录在 Android 和桌面端都可能失败，通常会提示“此浏览器或应用可能不安全”。在桌面端，如果没有显示可见的“登录”按钮，请尝试先打开“你在 YouTube 中的数据”菜单。

如果无法登录，请改用 **Inject cookie** 功能：

1. 在电脑上使用 Chrome 或基于 Chromium 的浏览器登录 YouTube，然后使用浏览器扩展（如 `getcookies.txt`）导出你的 YouTube cookie。
2. 如果使用 Android，请将导出的文件复制到你的设备上。
3. 在 NouTube 中打开 **Settings > Tools > Inject cookie**，导入该文件（或粘贴其内容）并保存。

此方法绕过了 Google 的安全浏览器检查，是目前在 Android 和桌面端解决登录问题最可靠的方法。

来源：

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## 为什么 F-Droid 上还没有最新更新？

F-Droid 上的发布日程并非由 NouTube 维护者控制。F-Droid 通过自己的批处理周期独立构建和发布更新，通常在 GitHub 发布新版本后需要数天时间才能上架。

如果您想立即使用最新版本，可以从 [GitHub Releases](https://github.com/nonbili/NouTube/releases) 页面下载 APK。但请注意，GitHub 版本使用的签名密钥与 F-Droid 不同，因此在安装 GitHub 的 APK 之前，必须先卸载 F-Droid 版本。

来源：

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music 无法正确加载

如果 YouTube Music 无法正确加载，请尝试在应用菜单中切换 **桌面网站**。

来源：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube 重新打开了队列而不是主页

如果 NouTube 持续恢复播放或打开旧项目而不是主页，请检查队列图标是否仍处于激活状态。在 Issue 讨论串中，维护者确认未清除的队列是 NouTube 持续尝试恢复播放的原因。

来源：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## 我应该在哪里报告 Bug 或请求功能？

请使用 GitHub 仓库：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
