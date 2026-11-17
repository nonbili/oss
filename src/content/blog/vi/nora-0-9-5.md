---
title: "Nora 0.9.5: Đăng nhập Proxy và X yên tĩnh hơn"
description: Đăng nhập vào proxy trên Android và iOS 17 trở lên, chọn nội dung cần ẩn trên X, đặt tìm kiếm mặc định sang Latest và giữ các bài viết Facebook thông thường luôn hiển thị.
date: 2026-11-06
product: nora
---

**Nora 0.9.5 cho di động** bổ sung trường tên người dùng và mật khẩu proxy trên di động cùng nhiều quyền kiểm soát hơn đối với những gì hiển thị trên X. Bản cập nhật cũng cải thiện khả năng lọc quảng cáo Facebook và nhập cookie trình duyệt.

## Đăng nhập Proxy trên di động

Mở **Settings → Browsing → Proxy** để chọn HTTP hoặc SOCKS, nhập máy chủ và cổng, rồi cung cấp tên người dùng và mật khẩu của bạn. Proxy có xác thực được hỗ trợ trên **Android** và **iOS 17 trở lên**, cho cả yêu cầu duyệt web và bảng tin.

Thông tin đăng nhập được lưu trên thiết bị và không nằm trong bản sao lưu hay đồng bộ hóa. Trên iOS 16, hỗ trợ proxy vẫn giới hạn ở các yêu cầu proxy HTTP không xác thực cho bảng tin.

## Chọn nội dung cần ẩn trên X

Trong **Settings → Services → X**, giờ đây bạn có thể chọn ẩn:

- **Grok UI**, để loại bỏ các thành phần giao diện Grok.
- **Recommendations**, bao gồm Who to follow, trends và Discover more.
- **Engagement counts**, để dòng thời gian ít con số gây mất tập trung hơn.

Các tùy chọn điều khiển này là tự chọn. Cùng mục cài đặt đó cũng cung cấp **Default search to Latest**, giúp các tìm kiếm mở ở bài viết gần đây thay vì kết quả Top. Bạn vẫn có thể chuyển thẻ tìm kiếm trên X khi muốn xem góc nhìn khác.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Các tùy chọn điều khiển X trong Nora trên Android: chọn thành phần giao diện cần ẩn và có mở tìm kiếm ở Latest hay không.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.webp" alt="Cài đặt X của Nora trên điện thoại Pixel, hiển thị các tùy chọn Grok, gợi ý, số lượt tương tác và tìm kiếm Latest" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## Giữ các bài viết Facebook thông thường hiển thị

Tính năng lọc quảng cáo Facebook giờ đây kiểm tra chính nhãn được tài trợ. Các bài viết thông thường tình cờ nhắc đến “Ad” hoặc “広告” sẽ ít có khả năng bị ẩn nhầm hơn.

## Nhập Cookie ổn định hơn

Việc nhập cookie trình duyệt giờ đây giữ nguyên các tên bắt đầu bằng `__Host-` và `__Secure-`. Việc giữ nguyên các tiền tố đó giúp trang web nhận diện phiên đã nhập chính xác hơn.

Xem [ghi chú phát hành trên GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.5) để biết danh sách đầy đủ các thay đổi.

## Tải Nora

[Cài đặt hoặc cập nhật Nora](/vi/nora/install/), hoặc khám phá [tài liệu Nora](/vi/nora/) để tìm hiểu thêm.
