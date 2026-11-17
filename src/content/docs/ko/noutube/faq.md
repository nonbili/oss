---
title: FAQ
description: GitHub 이슈에서 모아온 자주 묻는 NouTube 질문.
sidebar:
  order: 9
---
이 페이지는 공개 GitHub 이슈 트래커에서 반복적으로 올라오는 사용자 질문을 요약합니다.

## 로그인 문제

Google은 웹 페이지를 내장한 앱에서의 로그인을 거부하는 경우가 많아 Android와 데스크톱 모두에서 NouTube 내부 로그인이 실패할 수 있으며, 보통 "This browser or app may not be secure" 오류가 표시됩니다. 데스크톱에서 `Sign in` 버튼이 보이지 않는다면 먼저 `Your data in YouTube` 메뉴를 열어 보세요.

로그인할 수 없는 경우 대신 **Inject cookie** 기능을 사용하세요:

1. 컴퓨터에서 Chrome이나 다른 Chromium 기반 브라우저로 YouTube에 로그인한 다음 브라우저 확장 프로그램(`getcookies.txt` 등)으로 YouTube 쿠키를 내보냅니다.
2. Android에서는 내보낸 파일을 기기로 복사합니다.
3. NouTube에서 **Settings > Tools > Inject cookie**를 열고 파일을 가져오거나 내용을 붙여넣은 뒤 저장합니다.

이 방법은 Google의 보안 브라우저 검사를 우회하며 현재 Android와 데스크톱 모두에서 로그인 문제를 해결하는 가장 확실한 방법입니다.

출처:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## 왜 아직 F-Droid에서 최신 업데이트를 받을 수 없나요?

F-Droid의 릴리스 일정은 NouTube 관리자가 제어하지 않습니다. F-Droid는 업데이트를 일괄 처리해 독립적으로 빌드하고 배포하므로, GitHub에 새 버전이 릴리스된 후 보통 며칠이 걸립니다.

최신 버전을 즉시 받고 싶다면 [GitHub Releases](https://github.com/nonbili/NouTube/releases) 페이지에서 APK를 다운로드할 수 있습니다. 다만 GitHub 릴리스는 F-Droid와 다른 서명 키를 사용하므로 GitHub의 APK를 설치하기 전에 먼저 F-Droid 버전을 제거해야 합니다.

출처:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music이 제대로 로드되지 않습니다

YouTube Music이 제대로 로드되지 않으면 애플리케이션 메뉴에서 **Desktop site**를 전환해 보세요.

출처:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube가 홈 페이지 대신 대기열을 다시 엽니다

NouTube가 계속 재생을 복원하거나 홈 페이지 대신 이전 항목을 다시 연다면, 대기열 아이콘이 여전히 활성화되어 있는지 확인하세요. 이슈 스레드에서 관리자는 NouTube가 계속 재생을 재개하려 했던 원인으로 비워지지 않은 대기열을 지목했습니다.

출처:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## 버그를 제보하거나 기능을 요청하려면 어디로 가야 하나요?

GitHub 저장소를 이용해 주세요:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
