---
title: "Nora 0.9.5：代理登录与更纯净的 X"
description: 在 Android 及 iOS 17 或更高版本上支持代理登录，自由选择在 X 上隐藏的内容，默认以“最新”排序搜索，并确保 Facebook 普通帖子正常显示。
sidebar:
  label: Nora 0.9.5 发布
  order: 3
---

*2026年11月6日发布*

移动端 **Nora 0.9.5** 在移动设备上新增了代理用户名和密码字段，并提供了更多关于 X 界面显示内容的控制选项。同时还改进了 Facebook 广告过滤与浏览器 Cookie 导入。

## 在移动端登录代理

打开 **设置 → 浏览 → 代理** 即可选择 HTTP 或 SOCKS，输入主机和端口，并填写用户名与密码。**Android** 以及 **iOS 17 或更高版本** 均支持认证代理，可同时应用于网页浏览与动态请求。

认证凭据保存在本地设备上，不包含在备份与同步中。在 iOS 16 上，代理支持仍仅限于免认证的 HTTP 动态请求代理。

## 选择在 X 上隐藏的内容

在 **设置 → 服务 → X** 下，你可以自主选择隐藏：

- **Grok UI**：移除 Grok 界面元素。
- **推荐内容**：包括“推荐关注”、热门趋势和“探索更多”。
- **互动计数**：减少时间线上争夺注意力的各种数据统计。

这些控制项均为可选。同一设置区域还提供了 **默认以“最新”搜索**，让搜索结果优先展示最新帖子而非热门内容。如果你需要不同的视图，仍可在 X 上随时切换搜索标签页。

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Android 版 Nora 的 X 控制选项：自由选择隐藏的界面元素以及搜索时是否默认打开“最新”。</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Pixel 手机上的 Nora X 设置界面，展示可选的 Grok、推荐、互动计数和最新搜索选项" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 保持 Facebook 普通帖子正常显示

Facebook 广告过滤现在会直接检查赞助标签本身，包含“Ad”或“広告”等字样的普通帖子不再容易被误隐藏。

## 更可靠的 Cookie 导入

导入浏览器 Cookie 时，现在会保留以 `__Host-` 和 `__Secure-` 开头的 Cookie 名称。完整保留这些前缀有助于网站正确识别已导入的会话。

完整更改列表请参见 [GitHub 上的发布说明](https://github.com/nonbili/Nora/releases/tag/v0.9.5)。

## 获取 Nora

[安装或更新 Nora](/zh-hans/nora/install/)，或查阅 [Nora 文档](/zh-hans/nora/)了解更多信息。
