---
title: NouTube
description: NouTube 개요 및 제작 목적.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/noutube.png" alt="NouTube 로고" />
  <p class="product-overview-header__meta">Android, iOS, 데스크톱 및 확장 프로그램</p>
</div>

NouTube는 YouTube 및 YouTube Music을 위한 Android, iOS, 데스크톱 및 브라우저 확장 프로그램 앱입니다.

모바일 YouTube 및 YouTube Music 웹 앱을 감싸고, 그 위에 광고 차단, 재생 제어 훅, 다운로드 지원, RSS 피드, 오프라인 친화적 라이브러리 관리 같은 네이티브 동작을 더했습니다.

## 주요 특징

- 광고 없음
- 백그라운드 재생
- 하나의 앱에서 동영상과 음악 모두 지원
- 로그인 없이 라이브러리 및 기록 관리
- 동영상 다운로드
- YouTube 채널용 RSS 피드 리더
- 실시간 채팅 지원
- 사용자 지정 CSS 지원

## 플랫폼

- **Android**: F-Droid 및 GitHub 직접 APK 릴리스에서 제공됩니다.
- **iOS**: TestFlight 베타를 통해 제공됩니다.
- **데스크톱**: Linux, macOS 및 Windows용 네이티브 설치 프로그램.
- **브라우저 확장 프로그램**: Mozilla Firefox 및 Google Chrome용 Manifest V3 확장 프로그램.

데스크톱 빌드는 모바일 앱과 동일한 제품 모델을 따르며, 큰 화면을 위한 네이티브 설치 프로그램을 제공합니다.

## 처음 실행 시

설치 후 실용적인 초기 설정 순서는 다음과 같습니다:

1. 앱 내에서 YouTube 또는 YouTube Music을 엽니다.
2. 재생 동작을 확인합니다. 특히 백그라운드 재생이 주된 목적이라면 반드시 확인하세요.
3. 라이브러리, 기록, 피드 및 다운로드 기본 설정을 구성합니다.
4. 기본 환경이 잘 작동하는 것을 확인한 후에만 사용자 지정 CSS를 추가합니다.

## 지원 링크

NouTube는 다음 호스트를 처리하도록 구성되어 있습니다:

- `youtube.com`
- `www.youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

기기에서 지원되는 링크를 어떤 앱으로 열지 물으면 `NouTube`를 선택하세요.

## 작동 방식

NouTube는 YouTube를 처음부터 새로 구현하는 대신 웹 앱을 감싸서 실행합니다. 실제로는 다음과 같은 의미가 있습니다:

- 공식 사이트의 흐름과 레이아웃을 그대로 유지합니다
- 앱이 광고 차단과 네이티브 재생 훅을 추가합니다
- 일반 브라우저에서 사이트를 여는 것보다 백그라운드 재생 및 기기 연동이 더 잘 작동합니다

## 추가 링크

릴리스, 이슈 추적 및 프로젝트 업데이트는 GitHub 저장소를 이용하세요:

- [nonbili/NouTube](https://github.com/nonbili/NouTube)

다운로드 및 패키지 링크는 [설치](/ko/noutube/install/)에서 계속 확인하세요.
