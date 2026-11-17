---
title: FAQ
description: GitHub 이슈에서 모아온 자주 묻는 Nora 질문.
sidebar:
  order: 9
---
이 페이지는 공개 GitHub 이슈 트래커에서 반복적으로 올라오는 사용자 질문을 요약합니다.

## 다른 앱에서 Instagram이나 Facebook 링크를 Nora로 바로 열 수 있나요?

네, 그렇게 작동하도록 설계되어 있습니다. 관리자에 따르면 다음 설정이 필요할 수 있습니다:

- Android에서 Nora에 대해 `Open by default` 동작 활성화
- 공식 앱이 계속 같은 링크를 가로챈다면 공식 앱을 제거하거나 비활성화
- 딥링크가 앱은 열지만 요청한 게시물로 이동하지 않는다면 최신 Nora 릴리스로 업데이트

출처:

- [Issue #51: Support opening links in Nora](https://github.com/nonbili/Nora/issues/51)

## Nora 안에서 Instagram이 열리지 않습니다

현재 열려 있는 이슈를 보면 새로고침, 데스크톱 사이트 모드, WebView 데이터 삭제를 시도한 후에도 일부 사용자가 여전히 Instagram 오류 페이지를 마주하는 경우가 있습니다. 아직 확정된 해결책은 없습니다. 기기에서 이 문제가 발생하면:

- 새로고침 시도
- 데스크톱 사이트 모드 시도
- Nora의 WebView 데이터 삭제
- 그래도 해결되지 않으면 GitHub에서 업데이트를 확인하거나 해당 이슈에 기기 세부 정보를 추가하세요

출처:

- [Issue #147: Issue when trying to open Instagram](https://github.com/nonbili/Nora/issues/147)

## 앱을 나간 뒤에도 미디어가 계속 재생됩니다

유용한 제어 수단 없이 백그라운드에서 Instagram 오디오가 계속 재생된다는 보고가 있었습니다. 관리자가 다음 릴리스에서 수정하겠다고 답변했으므로, 우선 스토어나 릴리스 채널에서 제공되는 최신 버전으로 Nora를 업데이트하세요.

출처:

- [Issue #119: can you make it stop playing in background ? pls](https://github.com/nonbili/Nora/issues/119)

## 이미지나 동영상을 다운로드할 수 있나요?

네, 최소한 일부 기능은 이미 지원됩니다:

- 이미지를 길게 눌러 다운로드 메뉴 표시
- 해당 이슈가 논의될 당시 이미 Facebook 및 Instagram Reel 다운로드가 지원됨
- 이후 X 동영상 다운로드 지원이 추가됨

출처:

- [Issue #153: download](https://github.com/nonbili/Nora/issues/153)

## X 로그인이 왜 실패하나요?

이슈 논의에 따르면 일반 이메일/비밀번호 로그인은 작동할 것으로 예상되지만, WebView 내 Google 기반 로그인에는 추가 작업이 필요했습니다. 이후 관리자는 영향을 받는 사용자를 위한 우회 방법으로 `v0.1.5`에 `Inject cookie` 메뉴가 추가되었다고 안내했습니다.

출처:

- [Issue #1: Unable to sign in to X](https://github.com/nonbili/Nora/issues/1)

## Nora 안에서 uBlock Origin이나 Dark Reader 같은 브라우저 확장 프로그램을 사용할 수 있나요?

전체 브라우저 프로필과 동일한 방식으로는 사용할 수 없습니다. 기능 요청 논의에서 관리자는 내장 브라우저 확장 프로그램 지원을 약속하는 대신 UI 변경을 위해 Nora 자체의 사용자 지정 CSS 지원을 활용하도록 안내했습니다.

출처:

- [Issue #96: Open the socials in the webview provided by browser](https://github.com/nonbili/Nora/issues/96)

## 버그를 제보하거나 기능을 요청하려면 어디로 가야 하나요?

GitHub 저장소를 이용해 주세요:

- [nonbili/Nora issues](https://github.com/nonbili/Nora/issues)
