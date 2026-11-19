---
title: "Nora 0.9.7：选择下载文件夹与自定义菜单"
description: 在 Android 上指定下载保存位置，隐藏三点菜单中不常用的操作，并带来 WhatsApp Web、Facebook Marketplace 及标签页导航的修复。
date: 2026-11-19
product: nora
---

借助 **Nora 0.9.7 移动版**，您可以将 Android 下载保存到自选文件夹，并将浏览器的三点菜单精简为只保留您常用的操作。此版本还会自动以桌面模式打开 WhatsApp Web 和 Facebook Marketplace。

## 选择下载保存位置

在 Android 上，打开 **设置 → 偏好设置 → 下载 → 将下载保存至** 来设置浏览器下载的保存位置。

- **下载** 使用 Android 默认的 Downloads 文件夹。
- **每次询问** 让您为每次下载选择目标位置。
- **选择文件夹…** 将后续下载保存到您选择的文件夹。

如果您选择了文件夹，在 Android 10 及更高版本上，Nora 也会将从信息流保存的媒体文件存放在该文件夹中。此版本还修复了 `data:` 链接的下载问题（部分网站会使用此类链接提供在浏览器中生成的文件）。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">已将 Nora Downloads 选为后续下载的保存位置。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Android 下载设置界面，已选中 Nora Downloads，并显示下载、每次询问和选择文件夹选项" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 自定义三点菜单

打开 **设置 → 外观 → 工具栏 → 自定义三点菜单**，关闭您很少使用的操作。例如，如果您很少切换页面布局，可以保留 **在页面中查找** 和 **分享**，并隐藏 **桌面版网站**。保留的操作会在当前标签页可用时显示。

**设置** 会保留在菜单中，点击 **恢复默认菜单** 即可一键清除您的更改。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">保持“在页面中查找”开启，并关闭“桌面版网站”。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="展开的自定义三点菜单设置，其中在页面中查找已开启，桌面版网站已关闭" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">浏览器菜单保留了在页面中查找、分享和设置。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="自定义后的浏览器菜单，显示在页面中查找、分享和设置，桌面版网站已隐藏" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web 和 Facebook Marketplace 以桌面模式打开

在 **WhatsApp Web** 中，现在打开屏幕键盘时不会关闭选择器。**Facebook Marketplace** 会使用桌面版网站，方便您直接从商品页面向卖家发消息。

## 浏览与信息流修复

- Facebook 广告拦截现在即使在赞助帖文标签延迟出现时也能将其拦截。长按 Facebook 表情回应按钮时，浏览器的上下文菜单不再弹出干扰操作。
- Reddit 游戏过滤功能会继续保留普通帖文可见。
- 打开标签页切换器时，当前活动标签页会直接显示在视野中。在新标签页中，输入的网址只需首次点击 **前往** 即可打开，打开外部传入的链接时也会保留您的其他标签页。
- 在媒体查看器中进行手势操作时，下拉刷新不会再误触发。

完整变更列表请查看 [GitHub 上的发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.7)。

## 获取 Nora

[安装或更新 Nora](/zh-hans/nora/install/)，或查阅 [Nora 文档](/zh-hans/nora/)了解更多信息。
