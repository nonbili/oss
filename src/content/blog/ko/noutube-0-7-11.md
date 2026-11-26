---
title: "NouTube 0.7.11: Android 툴바 사용자 지정과 iOS 동영상 다운로드"
description: 자주 쓰는 작업을 Android 툴바에 배치하고, 스와이프로 전체 화면으로 전환하고, YouTube 댓글을 숨기고, iPhone과 iPad에서 동영상을 저장할 수 있습니다.
date: 2026-11-24
product: noutube
---

NouTube 0.7.11에서는 **공유**, **URL 열기** 같은 작업을 Android 툴바에 바로 배치할 수 있습니다. iPhone과 iPad에서는 이제 **도구**에서 호환되는 동영상을 다운로드할 수 있고, 동영상 재생도 더 빨리 시작됩니다. 이번 모바일 업데이트에는 전체 화면 스와이프 제스처와 YouTube 댓글 숨기기 설정도 추가되었습니다.

## 자주 쓰는 작업을 Android 툴바에 배치하기

**설정 → 화면 → 툴바 버튼**을 엽니다. 스위치로 표시할 버튼을 고른 다음, 핸들을 드래그해 순서를 정합니다. 예를 들어 **공유**와 **URL 열기**를 켜고 목록 맨 위로 드래그하면 동영상을 보면서 두 작업을 바로 사용할 수 있습니다.

**도구**, **데스크톱 사이트**, **설정**, **YouTube / YouTube Music** 전환 버튼도 툴바에 추가할 수 있습니다. 같은 목록에서 **보관함**, **채널 피드**, **기록** 같은 기존 버튼의 순서도 바꿀 수 있습니다.

![처음 두 행에서 공유와 URL 열기가 켜져 있고 오른쪽에 드래그 핸들이 있는 Android 화면 설정](/blog/noutube-0-7-11/android-toolbar-settings.webp "공유와 URL 열기를 켜고 목록 맨 위로 드래그합니다.")
![Big Buck Bunny 시청 페이지 위의 NouTube 툴바. 맨 왼쪽에 공유 아이콘과 URL 열기 링크 아이콘이 있음](/blog/noutube-0-7-11/android-toolbar-result.webp "이제 공유와 URL 열기가 시청 페이지 툴바의 첫 두 버튼입니다.")

## iPhone과 iPad에서 동영상 다운로드하기

저장 권한이 있는 동영상에서 **도구**를 열고 **동영상 다운로드**를 탭합니다. 호환되는 MP4가 있으면 NouTube가 이를 다운로드합니다. 다운로드가 끝나면 **내보내기**를 탭해 파일을 저장하거나 공유합니다.

![동영상 URL이 입력되어 있고 MP4 제공 여부 안내와 동영상 다운로드 버튼이 있는 iPhone 다운로드 패널](/blog/noutube-0-7-11/ios-download-tools.webp "도구에 현재 동영상의 URL이 자동으로 입력됩니다.")
![초록색 체크 표시, 다운로드 완료 상태, 내보내기 버튼이 있는 iPhone 다운로드 기록 항목](/blog/noutube-0-7-11/ios-download-export.webp "파일이 준비되면 다운로드 기록에 내보내기가 나타납니다.")

*Big Buck Bunny* © 2008 Blender Foundation / [www.bigbuckbunny.org](https://peach.blender.org/about/). [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

0.7.10에서 Android에 도입된 더 빠른 동영상 시작이 이제 iOS에도 적용됩니다. iPad에서는 전체 화면에서도 YouTube 재생 컨트롤을 계속 사용할 수 있습니다.

## 스와이프로 전체 화면 전환, 댓글 숨기기

모바일에서 YouTube 플레이어를 위로 스와이프하면 전체 화면으로 전환되고, 아래로 스와이프하면 시청 페이지로 돌아갑니다. 동영상 화면 위에서 스와이프를 시작하므로 재생 컨트롤과 진행 막대는 평소처럼 사용할 수 있습니다.

YouTube 시청 페이지에서 댓글 섹션을 없애려면 **설정 → 환경설정 → 방해 요소 제거**를 열고 **댓글 숨기기**를 켭니다.

![방해 요소 제거 섹션 맨 아래에서 댓글 숨기기 스위치가 켜져 있는 Android 환경설정 화면](/blog/noutube-0-7-11/hide-comments-setting.webp "댓글 숨기기는 방해 요소 제거 설정 맨 아래에 있습니다.")

## 기타 수정 사항

- Opus 오디오 다운로드에 이제 `.opus` 확장자가 사용됩니다. Android 릴리스 빌드에서 yt-dlp가 시작되지 않던 문제를 수정했으며, 다운로드 및 재생 실패를 더 안정적으로 처리합니다.
- YouTube 데스크톱 시청 페이지가 이제 좁은 Android 화면에 맞게 표시됩니다. Android에서 피드 미리보기가 시청 기록에 남지 않으며, 시스템 YouTube Music 컨트롤의 **다음**이 NouTube 자체 대기열에 영향을 주지 않습니다.
- 이번 릴리스에서는 이탈리아어, 폴란드어, 브라질 포르투갈어, 러시아어, 우크라이나어 번역이 업데이트되었습니다.

[GitHub에서 릴리스 보기](https://github.com/nonbili/NouTube/releases/tag/v0.7.11).

## NouTube 받기

[NouTube를 설치하거나 업데이트](/ko/noutube/install/)하거나 [NouTube 문서](/ko/noutube/)를 살펴보세요.
