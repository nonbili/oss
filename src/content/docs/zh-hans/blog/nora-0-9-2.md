---
title: "Nora 0.9.2：更多方式，畅追动态"
description: 支持通过 imginn 读取 Instagram 动态、通过 Nitter 实例读取 X 动态，缩放时间线与画廊媒体，并在 Android 上选择下载保存位置。
sidebar:
  label: Nora 0.9.2 发布
  order: 2
---

*2026年10月29日发布*

Instagram 或 X 动态停止更新了？**Nora 0.9.2** 新增了可选的备用源，帮助你的动态持续保持更新。同时还带来了时间线与画廊缩放、视频倍速控制，以及在 Android 上选择下载文件保存位置的功能。

如果你是第一次使用 Nora 的内置阅读器，可以先阅读 [0.9.0 版本介绍](/zh-hans/blog/nora-0-9-0/)。

## 从 imginn 读取 Instagram，从 Nitter 读取 X

在未登录状态下关注公开的 **Instagram** 和 **X** 账号时，可能会遇到登录墙或请求频率限制。Nora 0.9.2 在 **动态设置**（Feed Settings）中新增了两项可选替代方案，让你无需登录账号也能保持时间线更新：

- **从 imginn 读取 Instagram：** 可选择 **当 Instagram 失败时** 将 imginn 作为备用回退，或选择 **优先，其次 Instagram** 优先检查 imginn。两种模式均仅在 Nora 打开期间运行。如果 imginn 要求进行人机验证，Nora 会提示你在应用内完成验证。
- **从 Nitter 读取 X：** 可选择 **当 X 失败时** 或 **优先，其次 X**，并添加一个或多个 Nitter 实例地址。Nora 会依次尝试你配置的实例。需要进行浏览器验证的实例仅在 Nora 打开期间运行。

这两项功能默认关闭，可随时在 **动态设置** 中启用。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">动态设置</div>
    <h2 class="screenshot-card__title">imginn 与 Nitter 源</h2>
    <p class="screenshot-card__body">
      从 imginn 读取 Instagram 主页，从配置的 Nitter 实例读取 X 主页——可作为备用源或首选源。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="显示 imginn 和 Nitter 选项的 Nora 0.9.2 动态设置界面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">媒体</div>
    <h2 class="screenshot-card__title">全屏画廊与缩放</h2>
    <p class="screenshot-card__body">
      在全屏画廊中双指缩放照片和视频，长按屏幕边缘加速播放，或直接保存媒体文件。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Nora 0.9.2 全屏媒体画廊界面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">身份资料</div>
    <h2 class="screenshot-card__title">在其他资料中重新打开标签页</h2>
    <p class="screenshot-card__body">
      直接从顶部菜单或标签页切换器，将任意打开的移动端标签页切换到另一个 Nora 身份资料。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Nora 0.9.2 在其他身份资料中重新打开标签页对话框" />
    </div>
  </figure>
</div>

## 动态视频控制、缩放与通知

浏览动态时间线和媒体内容的方式也更加灵活：

- **画廊中的视频倍速控制：** 动态视频现已遵循你的 **默认视频播放速度** 和 **长按边缘 2 倍速播放** 偏好设置。在视频播放时按住左侧或右侧边缘即可跳至 2 倍速，随后水平滑动手指即可切换其他倍速。
- **时间线与画廊缩放：** 在移动端使用双指捏合——或在桌面端按住 `Ctrl`/`Cmd` 并滚动鼠标滚轮——即可在动态时间线以及全屏照片和视频画廊中自由缩放。放大状态下依然可以使用视频播放和进度跳转控件。
- **从通知直接打开时间线：** 点击新帖子通知现在会直接进入对应的 Nora 时间线。
- **视频播放失败时的回退跳转：** 当视频无法在全屏画廊中播放时，你可以直接在原网站中打开该帖子。

## 下载、身份资料与站点改进

本次更新还包含多项跨平台的浏览与下载体验改进：

- **在 Android 上选择下载保存位置：** 在 **设置 → 下载** 中开启 **每次下载都询问保存位置**，即可为每个文件选择目标文件夹并修改文件名。本次更新还提升了保存下载文件的可靠性。
- **从顶部菜单在其他资料中重新打开：** 除了在标签页切换器中长按标签页外，现在还可以直接从顶部菜单将当前移动端标签页切换到另一个 Nora 身份资料。
- **TikTok 与 Instagram 修复：** 新增 TikTok 视频全屏按钮，并提升了从 TikTok 和 Instagram 下载视频的稳定性（包括未登录 Instagram 的情况）。
- **更流畅的滚动与后台检查：** 消除了工具栏隐藏或显示时的页面跳动问题，并改进了 Android 上的后台动态更新检查。

完整发布说明请查看[更新日志](/zh-hans/nora/changelog/)。

## 获取 Nora 0.9.2

在 Android、iOS、Linux、macOS 或 Windows 上[安装或更新 Nora](/zh-hans/nora/install/)。

你还可以查阅 [Nora 文档](/zh-hans/nora/)或在 [GitHub 上阅读发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.2)。
