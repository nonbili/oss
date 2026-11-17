---
title: FAQ
description: Nori에 대해 자주 묻는 질문.
sidebar:
  order: 9
---

## 모바일 브라우저에서 Nori로 링크를 어떻게 저장하나요?

표준 시스템 공유 메뉴를 사용하세요:

1. 브라우저(Chrome, Firefox, Safari, Brave 등)에서 **공유**를 탭합니다.
2. 앱 목록에서 **Nori**를 선택합니다.
3. 링크를 저장할 대상 목록을 선택하거나, 설정에서 **Quick save shared links**를 켜면 묻지 않고 지정된 목록에 바로 저장됩니다.

## 인앱 탭 대신 내 브라우저 앱에서 북마크를 바로 열 수 있나요?

네. **Settings → General**로 이동하여 **Open links in default browser**를 켜세요. 활성화하면 북마크를 탭할 때 즉시 휴대전화의 기본 브라우저 앱으로 URL이 전달됩니다.

## 데스크톱 브라우저에서 북마크를 어떻게 가져오나요?

기존 북마크를 HTML 파일로 내보내세요:

- **Chrome / Brave / Edge**: 북마크 관리자(`Ctrl+Shift+O` 또는 `Cmd+Option+B`) 열기 → `⋮` 메뉴 클릭 → **북마크 내보내기** 선택.
- **Firefox**: 라이브러리(`Ctrl+Shift+O` 또는 `Cmd+Shift+O`) 열기 → **가져오기 및 백업** → **북마크를 HTML로 내보내기…**.
- **Safari**: 파일 → **책갈피 내보내기…**.

그런 다음 Nori에서 **Settings → Bookmarks → Import bookmarks**로 이동하여 `.html` 파일을 선택하면 Nori가 모든 링크와 폴더를 해당하는 목록으로 가져옵니다.

## 북마크를 백업하고 복원할 수 있나요?

네. **Settings → Bookmarks**에서 가능합니다:

- **Export backup**: 모든 목록, 북마크, 태그 및 설정이 포함된 전체 JSON 백업 파일을 저장합니다.
- **Restore backup**: 기존 Nori 백업 파일에서 복원합니다.
- **Export HTML / Plain text**: 브라우저 호환 HTML 파일 또는 읽기 쉬운 텍스트 목록을 만듭니다.

## 다중 기기 동기화는 어떻게 작동하나요?

Nori Sync는 모바일 앱, 데스크톱 앱 및 브라우저 확장 프로그램을 연결합니다:

- 완벽한 오프라인 기능을 위해 북마크는 각 기기에 로컬로 캐시된 상태를 유지합니다.
- 연결되면 변경 사항이 활성화된 모든 클라이언트 간에 매끄럽게 동기화됩니다.

## 브라우저 확장 프로그램이 내 브라우징 활동을 추적하나요?

아니요. Nori는 브라우징 기록을 모니터링하거나 웹 페이지 콘텐츠를 읽지 않습니다. 확장 프로그램은 사용자가 팝업을 열고 클릭하여 현재 탭을 북마크할 때만 URL을 수신합니다.

## 이슈를 제보하거나 기능을 요청하려면 어디로 가야 하나요?

모든 개발 및 이슈 추적은 GitHub에서 호스팅됩니다:

- [nonbili/Nori Issues](https://github.com/nonbili/Nori/issues)
