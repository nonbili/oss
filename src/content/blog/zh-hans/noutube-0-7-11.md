---
title: "NouTube 0.7.11 新增 Android 自定义工具栏和 iOS 视频下载"
description: 把常用操作放到 Android 工具栏上，滑动进入全屏，隐藏 YouTube 评论，并在 iPhone 和 iPad 上保存视频。
date: 2026-11-24
product: noutube
---

NouTube 0.7.11 让你可以把 **分享** 和 **打开 URL** 等操作直接放到 Android 工具栏上。在 iPhone 和 iPad 上，你现在可以通过 **工具** 下载兼容的视频，视频的启动速度也更快了。此次移动端更新还加入了全屏滑动手势，以及隐藏 YouTube 评论的设置。

## 把最常用的操作放到 Android 工具栏上

打开 **设置 → 外观 → 工具栏按钮**。用开关选择要显示的按钮，然后拖动把手调整它们的顺序。例如，打开 **分享** 和 **打开 URL** 并将它们拖到列表顶部，这样看视频时两个操作都触手可及。

你还可以把 **工具**、**桌面版网站**、**设置** 或 **YouTube / YouTube Music** 切换按钮添加到工具栏。在同一个列表中，也可以重新排列 **媒体库**、**频道订阅源** 和 **历史记录** 等现有按钮。

![Android 外观设置，前两行的分享和打开 URL 已开启，右侧显示拖动把手](/blog/noutube-0-7-11/android-toolbar-settings.webp "打开分享和打开 URL，并将它们拖到列表顶部。")
![Big Buck Bunny 观看页面上方的 NouTube 工具栏，最左侧是分享图标和打开 URL 的链接图标](/blog/noutube-0-7-11/android-toolbar-result.webp "分享和打开 URL 现在是观看页面工具栏上的前两个按钮。")

## 在 iPhone 和 iPad 上下载视频

对于你有权保存的视频，打开 **工具** 并点按 **下载视频**。如果有兼容的 MP4，NouTube 会下载它。下载完成后，点按 **导出** 即可保存或分享文件。

![iPhone 下载面板，已填入视频 URL，显示 MP4 可用性提示和下载视频按钮](/blog/noutube-0-7-11/ios-download-tools.webp "工具会自动填入当前视频的 URL。")
![iPhone 下载记录中的一项，带有绿色对勾、下载完成状态和导出按钮](/blog/noutube-0-7-11/ios-download-export.webp "文件准备好后，下载记录中会出现导出按钮。")

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

0.7.10 在 Android 上引入的更快视频启动现在也适用于 iOS。在 iPad 上，全屏时也可以继续使用 YouTube 的播放控件。

## 滑动切换全屏或隐藏评论

在移动端，在 YouTube 播放器上向上滑动即可进入全屏，向下滑动则返回观看页面。从视频画面本身开始滑动，这样播放控件和进度条仍可照常使用。

要从 YouTube 观看页面移除评论区，请打开 **设置 → 偏好设置 → 无干扰模式**，然后打开 **隐藏评论**。

![Android 偏好设置界面，无干扰模式部分底部的隐藏评论开关已开启](/blog/noutube-0-7-11/hide-comments-setting.webp "隐藏评论位于无干扰模式设置的底部。")

## 其他修复

- Opus 音频下载现在使用 `.opus` 扩展名。NouTube 修复了 Android 正式版中 yt-dlp 的启动问题，并能更可靠地处理下载和播放失败。
- YouTube 桌面版观看页面现在能适应较窄的 Android 屏幕。在 Android 上，订阅源预览不再计入观看记录；系统 YouTube Music 控件中的 **下一个** 也不再影响 NouTube 自己的队列。
- 本次发布更新了意大利语、波兰语、巴西葡萄牙语、俄语和乌克兰语翻译。

[在 GitHub 上查看此版本](https://github.com/nonbili/NouTube/releases/tag/v0.7.11)。

## 获取 NouTube

[安装或更新 NouTube](/zh-hans/noutube/install/)，或浏览 [NouTube 文档](/zh-hans/noutube/)。
