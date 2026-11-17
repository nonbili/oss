---
title: Câu hỏi thường gặp
description: Các câu hỏi phổ biến về Nora được tổng hợp từ GitHub issues.
sidebar:
  order: 9
---
Trang này tổng hợp các câu hỏi thường gặp của người dùng từ trình theo dõi lỗi công khai trên GitHub.

## Nora có thể mở trực tiếp liên kết Instagram hoặc Facebook từ các ứng dụng khác không?

Có, tính năng này được thiết kế để hoạt động. Người bảo trì cho biết bạn có thể cần:

- bật hành vi `Open by default` của Android cho Nora
- gỡ cài đặt hoặc vô hiệu hóa ứng dụng chính thức nếu nó vẫn tiếp tục nhận các liên kết đó
- cập nhật lên phiên bản Nora mới hơn nếu liên kết sâu mở được ứng dụng nhưng không mở đúng bài viết được yêu cầu

Nguồn:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Instagram không mở được bên trong Nora

Một issue đang mở hiện tại cho thấy một số người dùng vẫn gặp trang lỗi Instagram ngay cả sau khi đã thử tải lại, bật chế độ trang web cho máy tính và xóa dữ liệu webview. Điều đó có nghĩa là chưa có bản sửa lỗi được xác nhận. Nếu điều này xảy ra trên thiết bị của bạn:

- thử tải lại trang
- thử chế độ trang web cho máy tính
- xóa dữ liệu webview của Nora
- nếu vẫn lỗi, hãy kiểm tra GitHub để xem bản cập nhật hoặc bổ sung thông tin thiết bị của bạn vào issue

Nguồn:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## Phương tiện vẫn tiếp tục phát sau khi tôi rời khỏi ứng dụng

Vấn đề này được báo cáo đối với âm thanh Instagram tiếp tục phát ở chế độ nền mà không có nút điều khiển hữu ích. Người bảo trì đã phản hồi rằng lỗi sẽ được sửa trong bản phát hành tiếp theo, vì vậy việc đầu tiên cần làm là cập nhật Nora lên phiên bản mới nhất có trên cửa hàng hoặc kênh phát hành của bạn.

Nguồn:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## Tôi có thể tải xuống hình ảnh hoặc video không?

Có, ít nhất một phần tính năng này đã được hỗ trợ:

- nhấn giữ một hình ảnh để hiển thị menu tải xuống
- tải xuống Facebook và Instagram Reel đã được hỗ trợ khi issue được thảo luận
- hỗ trợ tải video X đã được bổ sung sau đó

Nguồn:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## Tại sao đăng nhập X bị lỗi?

Thảo luận trong issue cho thấy đăng nhập bằng email/mật khẩu thông thường được kỳ vọng hoạt động, trong khi đăng nhập bằng Google trong webview cần xử lý thêm. Người bảo trì sau đó cho biết menu `Inject cookie` đã được thêm vào phiên bản `v0.1.5` như một giải pháp tạm thời cho người dùng bị ảnh hưởng.

Nguồn:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Tôi có thể dùng các tiện ích mở rộng của trình duyệt như uBlock Origin hoặc Dark Reader bên trong Nora không?

Không theo cách giống như một hồ sơ trình duyệt đầy đủ. Trong thảo luận yêu cầu tính năng, người bảo trì đã hướng dẫn người dùng sử dụng hỗ trợ CSS tùy chỉnh của riêng Nora để thay đổi giao diện thay vì hứa hẹn hỗ trợ tiện ích mở rộng trình duyệt nhúng.

Nguồn:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## Tôi nên báo cáo lỗi hoặc đề xuất tính năng ở đâu?

Hãy sử dụng kho lưu trữ GitHub:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
