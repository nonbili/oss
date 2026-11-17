---
title: Câu hỏi thường gặp
description: Các câu hỏi phổ biến về NouTube được tổng hợp từ GitHub issues.
sidebar:
  order: 9
---
Trang này tổng hợp các câu hỏi thường gặp của người dùng từ trình theo dõi lỗi công khai trên GitHub.

## Sự cố đăng nhập

Google thường từ chối đăng nhập từ các ứng dụng nhúng trang web, nên việc đăng nhập bên trong NouTube có thể thất bại trên cả Android và máy tính, thường kèm lỗi "This browser or app may not be secure". Trên máy tính, nếu không thấy nút `Sign in`, hãy thử mở menu `Your data in YouTube` trước.

Nếu bạn không thể đăng nhập, hãy dùng tính năng **Inject cookie** để thay thế:

1. Trên máy tính, đăng nhập YouTube bằng Chrome hoặc trình duyệt nền Chromium khác, sau đó xuất cookie YouTube của bạn bằng tiện ích mở rộng trình duyệt (như `getcookies.txt`).
2. Trên Android, sao chép tệp đã xuất sang thiết bị của bạn.
3. Trong NouTube, mở **Settings > Tools > Inject cookie**, nhập tệp (hoặc dán nội dung của tệp) và lưu lại.

Cách này bỏ qua bước kiểm tra trình duyệt an toàn của Google và hiện là giải pháp ổn định nhất cho sự cố đăng nhập trên cả Android và máy tính.

Nguồn:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Tại sao bản cập nhật mới nhất chưa có trên F-Droid?

Lịch phát hành trên F-Droid không do người bảo trì NouTube kiểm soát. F-Droid tự động biên dịch và phát hành bản cập nhật độc lập theo từng đợt, thường mất vài ngày sau khi phiên bản mới được phát hành trên GitHub.

Nếu bạn muốn dùng phiên bản mới nhất ngay lập tức, bạn có thể tải APK từ trang [GitHub Releases](https://github.com/nonbili/NouTube/releases). Tuy nhiên, xin lưu ý rằng bản phát hành GitHub sử dụng khóa ký khác với F-Droid, vì vậy bạn phải gỡ cài đặt phiên bản F-Droid trước khi cài APK từ GitHub.

Nguồn:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music không tải đúng cách

Nếu YouTube Music không tải đúng cách, hãy thử bật/tắt **Desktop site** trong menu ứng dụng.

Nguồn:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube mở lại hàng đợi thay vì trang chủ

Nếu NouTube liên tục khôi phục phát lại hoặc mở lại một mục cũ thay vì trang chủ, hãy kiểm tra xem biểu tượng hàng đợi có còn đang bật không. Trong luồng issue, người bảo trì xác định hàng đợi chưa được xóa là lý do NouTube liên tục cố tiếp tục phát lại.

Nguồn:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Tôi nên báo cáo lỗi hoặc đề xuất tính năng ở đâu?

Hãy sử dụng kho lưu trữ GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
