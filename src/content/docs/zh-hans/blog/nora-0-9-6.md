---
title: "Nora 0.9.6：Android 主屏幕快捷方式支持广告拦截"
description: 在 Android 主屏幕快捷方式中使用广告拦截与链接、图片菜单，并修复动态文本选择、标头动画及标签页覆盖层问题。
sidebar:
  label: Nora 0.9.6 发布
  order: 2
---

*2026年11月12日发布*

移动端 **Nora 0.9.6** 将广告拦截以及链接和图片菜单带到了从 Android 主屏幕快捷方式打开的网站中。内置动态阅读器也针对文本选择、滚动和标签页切换进行了修复。

## 主屏幕快捷方式同样应用广告拦截设置

在 **Android** 上，通过 Nora 的 **添加至主屏幕** 功能保存的网站会在独立窗口中打开。这些窗口现在同样会应用 Nora 的广告拦截设置，包括网络拦截和隐藏页面广告元素的规则。

体验该功能，只需在 Nora 中打开任意网站，从页面菜单中选择 **添加至主屏幕**，然后从桌面启动该快捷方式即可。你配置的拦截规则会在其中生效。

## 长按链接与图片

Android 主屏幕快捷方式现在支持上下文菜单：

- **长按链接**：复制链接地址，或在新的 Nora 标签页中打开。
- **长按图片**：保存图片、复制图片地址，或在新的 Nora 标签页中打开。

你可以在独立窗口中继续阅读，并将想要深入查看的链接发送至 Nora 标签页中打开。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">在 Android 主屏幕快捷方式中长按图片可打开 Nora 的图片操作菜单。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.webp" alt="Nora 的独立 Android 快捷方式界面，显示保存图片、在新标签页中打开图片和复制图片链接操作" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 更顺畅的动态阅读体验

本版本还修复了 Nora 内置动态阅读器中的三项交互问题：

- **文本选择：** 选中帖子正文描述中的文本更加稳定可靠。
- **标头动画：** 动态标头在收起与展开时能够正确播放动画。
- **切换标签页时的覆盖层：** 动态覆盖层现已归属于打开它们的标签页，避免在切换到其他标签页时发生遮挡。

初次使用动态阅读器？[Nora 0.9.0 介绍](/zh-hans/blog/nora-0-9-0/)详细讲解了数据源、时间线与媒体网格。

完整更改列表请参见 [GitHub 上的发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.6)。

## 获取 Nora

[安装或更新 Nora](/zh-hans/nora/install/)，或查阅 [Nora 文档](/zh-hans/nora/)了解更多信息。
