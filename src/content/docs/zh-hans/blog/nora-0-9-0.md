---
title: "Nora 0.9.0：社交动态，汇聚一处"
description: 在 Nora 0.9.0 中以时间线关注社交账号，并在媒体网格中浏览照片与视频。
sidebar:
  label: Nora 0.9.0 发布
  order: 2
---

*2026年10月22日发布*

**Nora 0.9.0** 在 Android、iOS 和桌面端新增了内置 Feed 阅读器。跨 X、Instagram、Bluesky、Mastodon 等支持的网络关注账号，并将其帖子整理到你自己的时间线中。许多源无需登录即可直接查看。

你可以把所有内容集中浏览，也可以按兴趣划分成不同时间线，或者切换为照片与视频网格。

## 跨社交网络关注账号

在 Nora 标签页中打开支持的个人资料或社区，从菜单中选择 **关注**（Watch）。其最新帖子就会出现在 Nora 的 **动态**（Feed）中。点击帖子即可随时打开原始网页，查看回复或进行互动。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">动态</div>
    <h2 class="screenshot-card__title">自定义时间线</h2>
    <p class="screenshot-card__body">
      按时间顺序阅读来自 Bluesky、Reddit、Mastodon 等关注社交账号的最新更新。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/feed-timeline.png" alt="Nora 0.9.0 动态时间线界面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">媒体</div>
    <h2 class="screenshot-card__title">照片与视频网格</h2>
    <p class="screenshot-card__body">
      将任意时间线切换为仅显示照片和视频的网格视图，并在全屏画廊中滑动浏览。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/media-grid.png" alt="Nora 0.9.0 照片与视频网格界面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">源</div>
    <h2 class="screenshot-card__title">添加与管理源</h2>
    <p class="screenshot-card__body">
      批量粘贴个人主页链接、导入 OPML 文件，或在专属管理界面中筛选和排序关注的源。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-0/manage-sources.png" alt="Nora 0.9.0 动态源管理界面" />
    </div>
  </figure>
</div>

你可以关注：

- **X (Twitter)**、**Instagram**、**Threads**、**Bluesky** 和 **TikTok** 个人主页
- 各服务器上的 **Mastodon** 账号
- **Reddit** 版块（Subreddit）和用户资料
- **Facebook** 公共主页、个人主页和群组

若要一次性添加多个源，可直接粘贴主页链接列表或导入 OPML 文件。OPML 文件夹会自动转为时间线，无缝继承你原有的分类体系。在 **管理源**（Manage Sources）界面中，你可以搜索、筛选、排序关注的账号，并支持重新导出。

## 自由整理时间线

将好友动态、新闻和兴趣爱好分别归入不同的 **自定义时间线**，每个时间线均可设置专属 emoji 图标与动态标签。你可以将时间线固定到新标签页以便快速访问，也可以将所有源合并在一个时间线中浏览。

在时间线中，点击发布者的头像或名称即可只看其发布的帖子。你也可以通过动态顶部的情境选择器来切换特定源。

支持自定义 Nora 检查更新的频率以及触发通知的帖子类型。你可以设置全局默认值，为某个时间线单独微调，或者静音单个源。如果某个网络需要登录，还可以指定使用哪个 Nora 身份资料（Profile），或关闭已登录状态的自动检查。

关注的源和时间线都会包含在设置备份及可选的云同步中，方便跨设备无缝保留。

## 浏览照片与视频

将时间线切换为 **仅照片和视频**，即可在网格中直观浏览媒体内容。点击图片或视频可进入画廊滑动切换、放大照片、播放视频，或直接下载媒体到设备本地。

Nora 会在本地缓存动态帖子和媒体。你可以限制媒体存储空间、清理缓存，并将媒体预加载限制在 Wi-Fi 网络下。

## 其他改进

此版本还包含以下更新：

- **标签页重排：** 在移动端标签页切换视图中，长按并拖动标签页进行排序。
- **页内查找：** 在打开的网页中搜索，提供实时匹配计数和上一个/下一个控件。
- **关联资料的链接：** 链接始终在发起标签页的资料空间中打开，支持长按标签页在其他资料中重新打开。
- **同步优化：** 设置、书签和用户样式的修改可在各设备间合并同步，并提供本地备份用于恢复。

完整发布说明请查看[更新日志](/zh-hans/nora/changelog/)。

## 获取 Nora 0.9.0

在 Android、iOS、Linux、macOS 或 Windows 上[安装或更新 Nora](/zh-hans/nora/install/)。

你还可以查阅 [Nora 文档](/zh-hans/nora/)或在 [GitHub 上阅读发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.0)。
