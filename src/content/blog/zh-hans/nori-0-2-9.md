---
title: "Nori 0.2.9：保存社交帖文、分享图片卡片、自定义列表排序"
description: 保存社交帖文的可读副本以供离线阅读，将书签转为图片卡片，并为每个列表选择不同的排序方式。
date: 2026-11-18
product: nori
---

书签保存的是网址。借助 **Nori 0.2.9 移动版**，您还可以保留社交帖文的可读副本。此外，此版本还支持将书签分享为图片卡片，并可为每个列表选择排序方式。

## 保留帖文副本

当您收藏受支持的社交帖文时，Nori 会自动尝试保存其内容以便离线阅读。保存后，即使您处于离线状态或原帖消失，该副本依然可以查看。

受支持的服务包括 **X、Instagram、Threads、TikTok、Facebook、Bluesky、Reddit 和 Mastodon**。根据平台提供的数据，保存的副本会包含作者、帖文正文、附图以及引用或相关帖文。您还可以复制帖文正文。

**视频和音频会保存为预览缩略图，而非可离线播放的下载文件。**

部分网站需要登录或会阻止自动抓取。如果帖文未能保存，请选择 **从页面保存帖文**，按网站提示登录，待 Nori 识别到帖文后点击 **保存**。

在书签编辑器中，**已保存的帖文** 会显示所存副本的日期。使用 **刷新** 可重新获取；如果网站返回的内容变少，Nori 会保留现有副本。

自动保存默认开启。您可以在 **设置 → 通用 → 离线保存社交帖文** 中将其关闭。如果您使用 **Nori Sync**，已保存的帖文及其图片会在您的设备间同步。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">即使手机开启飞行模式，已保存的 Bluesky 帖文及其图片仍可正常阅读。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/saved-social-post.png" alt="在开启飞行模式的情况下，Nori 显示已保存的 Bluesky 帖文，包含作者、正文和附图" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 分享不止于链接

发现了想转发的内容？打开书签的操作菜单并选择 **以图片分享**。Nori 会将网页书签或已保存的社交帖文转换为图片卡片，您可以在发送前预览效果。

选择 **浅色或深色** 背景，并决定是否包含书签的 **备注** 和 **标签**（如有）。备注默认隐藏，方便您自行选择是否分享写给自己的内容。

点击 **分享** 通过设备的系统分享面板发送卡片，或点击下载按钮 **保存图片** 到您的照片图库。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">预览卡片，选择要包含的内容，然后分享或保存图片。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/share-as-image.png" alt="“以图片分享”预览界面，显示浅色与深色主题、备注和标签开关、下载按钮与分享按钮" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 为每个列表设置专属顺序

按您计划阅读的顺序保留待读队列，在另一个列表中把新发现放在最前面，并按名称排序参考资料合集。

打开 **编辑列表**，或创建一个 **新列表**，然后选择 **书签顺序**：

- **手动（拖动重新排序）**：按您自己排列的顺序显示。
- **最新优先** 或 **最早优先**：按书签添加时间排序。
- **名称 A–Z** 或 **名称 Z–A**：按名称排序。

该设置仅归属于当前列表，因此您的其他列表可以各自保持自己的顺序。您也可以在同一编辑器中重命名列表。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">为 Reading queue 列表选择书签顺序。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nori-0-2-9/list-bookmark-order.png" alt="Reading queue 的编辑列表界面，显示全部五个书签顺序选项" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

此版本还改进了 iOS 上 **所有书签** 抽屉的滚动体验，并修复了一个同步问题。详情请参阅 [完整发布说明](https://github.com/nonbili/Nori/releases/tag/v0.2.9)。

[安装或更新 Nori](/zh-hans/nori/install/)，或浏览 [Nori 文档](/zh-hans/nori/)。
