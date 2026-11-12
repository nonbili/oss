---
title: "Nora 0.9.4：更清爽的 X 链接与更可靠的下载"
description: 移除 X 帖子链接中的分享标记，修复视频下载卡在“解析中”的问题，并保持文件名及恢复 TikTok 全屏控制。
date: 2026-11-03
product: nora
---

复制的帖子链接应当便于直接分享，视频下载也不该卡在 **解析中**。移动端 **Nora 0.9.4** 针对这两个问题进行了改进，并为链接分享、文件保存以及观看 TikTok 视频带来了一系列修复。

## 分享无需附带额外标记的 X 链接

现在当你在 Nora 中复制或分享帖子链接时，会自动移除 `s` 和 `t` 等 X 分享参数。例如：

```text
Before: https://x.com/nonbili/status/1234567890?s=20&t=example
After:  https://x.com/nonbili/status/1234567890
```

帖子地址保持完好，冗余的分享标记被彻底清理。此清理仅针对 X 和 Twitter 的帖子 URL，无关页面上同名的短参数将保持不变。

## 解决保存视频时卡在“解析中”的问题

部分视频下载此前可能会在开始下载前的 **解析中**（Parsing）阶段卡住。本版本修复了该问题，使受影响的下载能够正常继续。

此外，由网页通过 `blob:` URL 生成的文件，现在能够在可用时保留其原定文件名，方便日后识别和查找。

## 恢复 TikTok 全屏控制

当页面脚本在主体内容准备就绪之前执行时，Nora 的 TikTok 全屏控件可能无法正常显示。控件现已能够妥善处理此类加载顺序，使全屏按钮如期出现。

完整更改列表请参见 [GitHub 上的发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.4)。

## 获取 Nora

[安装或更新 Nora](/zh-hans/nora/install/)，或查阅 [Nora 文档](/zh-hans/nora/)了解更多信息。
