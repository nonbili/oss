---
title: "Nora 0.9.2: Nhiều cách hơn để theo dõi bảng tin của bạn"
description: Đọc bảng tin Instagram từ imginn và bảng tin X từ các phiên bản Nitter, phóng to trong dòng thời gian và thư viện phương tiện, đồng thời chọn nơi lưu tệp tải xuống trên Android.
date: 2026-10-29
product: nora
---

Instagram hoặc X ngừng cập nhật? **Nora 0.9.2** bổ sung các nguồn thay thế tùy chọn giúp bảng tin của bạn luôn hoạt động. Bản cập nhật cũng mang đến tính năng phóng to dòng thời gian và thư viện, điều khiển tốc độ video và tùy chọn nơi lưu tệp tải xuống trên Android.

Nếu bạn mới sử dụng trình đọc bảng tin của Nora, hãy bắt đầu với [bài giới thiệu 0.9.0](/vi/blog/nora-0-9-0/).

## Đọc Instagram từ imginn và X từ Nitter

Việc theo dõi các hồ sơ **Instagram** và **X** công khai mà không đăng nhập có thể gặp tường đăng nhập hoặc giới hạn tần suất. Nora 0.9.2 bổ sung hai tùy chọn thay thế tự chọn trong **Feed Settings** để dòng thời gian của bạn luôn cập nhật mà không cần đăng nhập tài khoản:

- **Đọc Instagram từ imginn:** Chọn **When Instagram fails** để dùng imginn làm phương án dự phòng, hoặc **First, then Instagram** để kiểm tra imginn trước. Cả hai chế độ chỉ hoạt động khi Nora đang mở. Nếu imginn yêu cầu bạn xác nhận không phải rô-bốt, Nora sẽ nhắc bạn hoàn thành bước kiểm tra ngay trong ứng dụng.
- **Đọc X từ Nitter:** Chọn **When X fails** hoặc **First, then X** và thêm một hoặc nhiều địa chỉ phiên bản Nitter. Nora sẽ thử lần lượt các phiên bản của bạn. Các phiên bản yêu cầu kiểm tra trình duyệt chỉ hoạt động khi Nora đang mở.

Cả hai tùy chọn đều tắt theo mặc định và có thể bật bất cứ lúc nào trong **Feed Settings**.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Feed Settings</div>
    <h2 class="screenshot-card__title">Nguồn imginn & Nitter</h2>
    <p class="screenshot-card__body">
      Đọc hồ sơ Instagram từ imginn và hồ sơ X từ các phiên bản Nitter đã cấu hình — làm nguồn dự phòng hoặc nguồn chính.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.webp" alt="Cài đặt bảng tin Nora 0.9.2 hiển thị các tùy chọn imginn và Nitter" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Media</div>
    <h2 class="screenshot-card__title">Thư viện toàn màn hình & Phóng to</h2>
    <p class="screenshot-card__body">
      Chụm để phóng to ảnh và video trong thư viện toàn màn hình, giữ cạnh màn hình để tăng tốc độ phát hoặc lưu phương tiện trực tiếp.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.webp" alt="Màn hình thư viện phương tiện toàn màn hình Nora 0.9.2" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">Profiles</div>
    <h2 class="screenshot-card__title">Mở lại thẻ trong hồ sơ</h2>
    <p class="screenshot-card__body">
      Chuyển bất kỳ thẻ di động đang mở nào sang một hồ sơ Nora khác trực tiếp từ menu tiêu đề hoặc trình chuyển thẻ.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.webp" alt="Hộp thoại mở lại thẻ trong hồ sơ Nora 0.9.2" />
    </div>
  </figure>
</div>

## Điều khiển video bảng tin, phóng to và thông báo

Theo dõi dòng thời gian và phương tiện trong bảng tin cũng trở nên linh hoạt hơn:

- **Điều khiển tốc độ video trong thư viện:** Video trong bảng tin giờ đây sử dụng các tùy chọn **Default video playback speed** và **Long-press edge for 2x speed** của bạn. Chạm và giữ cạnh trái hoặc phải của video đang phát để tăng lên tốc độ 2x, sau đó trượt ngang để chuyển đổi tốc độ.
- **Phóng to dòng thời gian và thư viện:** Chụm để phóng to trên di động — hoặc giữ `Ctrl`/`Cmd` và cuộn trên máy tính — trong cả dòng thời gian bảng tin và thư viện ảnh, video toàn màn hình. Các nút phát và tua video vẫn khả dụng khi đang phóng to.
- **Mở thông báo trong dòng thời gian:** Nhấn vào thông báo bài viết mới giờ đây sẽ mở trực tiếp vào dòng thời gian Nora tương ứng.
- **Phương án dự phòng cho video lỗi:** Khi không thể phát video trong thư viện toàn màn hình, bạn có thể mở bài viết trực tiếp trên trang gốc.

## Tải xuống, hồ sơ và cải tiến trang web

Bản phát hành này cũng bao gồm một số cải tiến duyệt web và tải xuống trên các nền tảng:

- **Chọn nơi lưu tệp tải xuống trên Android:** Bật **Ask where to save each download** trong **Settings → Downloads** để chọn thư mục đích và tên tệp cho từng tệp. Bản phát hành này cũng giúp việc lưu tệp tải xuống ổn định hơn.
- **Mở lại trong hồ sơ từ menu tiêu đề:** Chuyển thẻ di động đang hoạt động sang hồ sơ Nora khác trực tiếp từ menu tiêu đề, bên cạnh việc nhấn giữ thẻ trong trình chuyển thẻ.
- **Sửa lỗi TikTok và Instagram:** Xem video TikTok với nút toàn màn hình mới và tải video ổn định hơn từ TikTok và Instagram, bao gồm cả khi đã đăng xuất khỏi Instagram.
- **Cuộn mượt mà hơn và kiểm tra nền tốt hơn:** Trang không còn bị nhảy khi thanh công cụ ẩn hoặc hiện, và việc kiểm tra bảng tin nền hoạt động tốt hơn trên Android.

Xem [nhật ký thay đổi](/vi/nora/changelog/) để biết chi tiết đầy đủ về bản phát hành.

## Tải Nora 0.9.2

[Cài đặt hoặc cập nhật Nora](/vi/nora/install/) trên Android, iOS, Linux, macOS hoặc Windows.

Bạn cũng có thể khám phá [tài liệu Nora](/vi/nora/) hoặc đọc [ghi chú phát hành trên GitHub](https://github.com/nonbili/Nora/releases/tag/v0.9.2).
