---
title: 常见问题 (FAQ)
description: 从 GitHub Issue 中提取的常见 NouTube 问题。
---
本页面总结了来自公开 GitHub 问题追踪器的常见用户问题。

## 桌面端登录按钮丢失或登录似乎卡住

如果桌面应用没有显示可见的“登录 (Sign in)”按钮，请尝试先打开“你在 YouTube 中的数据 (Your data in YouTube)”菜单。在 Issue 讨论中，该路径允许受影响的用户进入登录流程，维护者后来表示可见按钮应在 `v0.1.6` 中回归。

来源：

- [Issue #46: desktop version never logs in always error](https://github.com/nonbili/NouTube/issues/46)

## 即便打开了登录页面，桌面端登录仍然失败

有报告称，部分桌面端设置在清除数据后仍然无法进行 Google 登录。Issue 讨论串并未以确认的通用修复方案结束，因此实际建议为：

- 更新到最新的桌面端版本
- 如果已经尝试过登录，请清除应用的 Webview/配置文件数据
- 如果仍然失败，请在 GitHub 上报告你的操作系统、安装包格式和屏幕截图

来源：

- [Issue #103: Unable to login from desktop client](https://github.com/nonbili/NouTube/issues/103)

## YouTube Music 无法正确加载

一个已文档化的故障排除路径是：

1. 确保 `NouTube` 是 `music.youtube.com` 的默认应用。
2. 如果安装了官方 YouTube Music 应用，请先移除其默认链接处理。
3. 如果问题仍然存在，请尝试通过 `设置 > 工具 > 自定义用户代理` (Settings > Tools > Custom user agent) 使用自定义用户代理。

此建议直接来自 Issue 讨论串中的维护者。这是一种变通方法，并不能保证在每台设备上都有效。

来源：

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## 仍有一些广告出现

曾有报告称在视频前出现了较短的 YouTube Premium 广告。维护者引导用户关注 `v0.4.9`，这暗示广告拦截修复已在随后的版本中发布。如果你看到广告：

- 从 F-Droid 或 GitHub 更新到最新版本
- 如果问题仍然存在，请开一个新的 Issue，并提供应用版本和屏幕截图

来源：

- [Issue #117: Ad not blocked](https://github.com/nonbili/NouTube/issues/117)

## NouTube 重新打开了队列而不是主页

如果 NouTube 持续恢复播放或打开旧项目而不是主页，请检查队列图标是否仍处于激活状态。在 Issue 讨论串中，维护者确认未清除的队列是 NouTube 持续尝试恢复播放的原因。

来源：

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## 我应该在哪里报告 Bug 或请求功能？

请使用 GitHub 仓库：

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
