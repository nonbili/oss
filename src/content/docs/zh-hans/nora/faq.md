---
title: 常见问题 (FAQ)
description: 从 GitHub Issue 中提取的常见 Nora 问题。
---
本页面总结了来自公开 GitHub 问题追踪器的常见用户问题。

## Nora 能否直接从其他应用打开 Instagram 或 Facebook 链接？

是的，这正是设计的功能。维护者表示你可能需要：

- 为 Nora 启用 Android 的“默认打开”行为
- 如果官方应用持续抢占相同的链接，请卸载或禁用官方应用
- 如果深度链接打开了应用但没有打开请求的帖子，请更新到较新的 Nora 版本

来源：

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram 无法在 Nora 中打开

目前的一个开放 Issue 显示，部分用户在尝试重新加载、切换到桌面版网站模式以及清除 Webview 数据后，仍然会遇到 Instagram 错误页面。这意味着目前还没有确认的修复方案。如果在你的设备上发生这种情况：

- 尝试重新加载
- 尝试桌面版网站模式
- 清除 Nora 的 Webview 数据
- 如果仍然失败，请检查 GitHub 以获取更新或在 Issue 中添加你的设备详细信息

来源：

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## 离开应用后媒体仍在播放

据报告，Instagram 的音频在后台继续播放且没有有效的控制。维护者回复说这将在下一个版本中修复，因此首先要做的是将 Nora 更新到应用商店或发布频道中可用的最新版本。

来源：

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## 我可以下载图片或视频吗？

可以，至少部分功能已经支持：

- 长按图片显示下载菜单
- 在讨论该问题时，已支持 Facebook 和 Instagram Reel 下载
- 随后增加了 X 视频下载支持

来源：

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## 为什么 X 登录失败？

Issue 讨论表明，普通的邮箱/密码登录应该是可以工作的，而 Webview 中的 Google 登录需要额外的工作。维护者后来表示在 `v0.1.5` 中添加了“注入 Cookie (Inject cookie)”菜单，作为受影响用户的变通方案。

来源：

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## 我可以在 Nora 中使用像 uBlock Origin 或 Dark Reader 这样的浏览器扩展吗？

不能像在完整的浏览器配置文件中那样使用。在功能请求的讨论中，维护者引导用户使用 Nora 自身的自定义 CSS 支持来进行 UI 更改，而不是承诺提供嵌入式浏览器扩展支持。

来源：

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## 我应该在哪里报告 Bug 或请求功能？

请使用 GitHub 仓库：

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
