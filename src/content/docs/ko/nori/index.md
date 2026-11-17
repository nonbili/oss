---
title: Nori
description: Nori 개요 및 북마크 관리·런처 모델.
sidebar:
  order: 1
---
<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/nori.png" alt="Nori 로고" />
  <p class="product-overview-header__meta">Android, iOS, 데스크톱 및 확장 프로그램</p>
</div>

Nori는 모바일 기기, 데스크톱 컴퓨터, 웹 브라우저 전반에서 빠르고 일상적인 접근을 위해 설계된 오픈소스 북마크 관리자 겸 런처입니다.

깊은 브라우저 폴더 트리나 폐쇄된 생태계 안에 링크를 파묻어 두는 대신, Nori는 즉시 실행, 검색, 리치 카드 미리보기, 공유 시트 연동을 갖춘 깔끔하고 집중된 목록으로 북마크를 정리합니다.

## 주요 특징

- 여러 개의 사용자 지정 북마크 목록
- 시스템 기본 브라우저 또는 네이티브 커스텀 탭으로 즉시 실행
- 목록 선택기 및 빠른 저장 옵션으로 모든 앱에서 공유된 URL 저장
- 컴팩트 런처 모드와 웹사이트 커버 이미지가 포함된 리치 카드 미리보기 모드
- 키워드 및 태그 필터링을 지원하는 빠른 검색 서랍
- 최근 사용 및 최근 추가 실행 기록
- 표준 HTML 북마크, 일반 텍스트 및 전체 JSON 백업을 통한 가져오기/내보내기
- 유연한 모양: Light, Dark, AMOLED 및 사용자 지정 강조 색상
- Chrome 및 Firefox용 로컬 우선 브라우저 확장 프로그램
- Linux, macOS 및 Windows용 크로스 플랫폼 데스크톱 앱
- Nori Sync를 통한 선택적 다중 기기 동기화

## 플랫폼

- **Android**: Google Play 및 GitHub 직접 APK 릴리스에서 제공됩니다.
- **iOS**: iPhone 및 iPad용 App Store에서 제공됩니다.
- **데스크톱**: Linux(AppImage & tarball), macOS(Apple Silicon & Intel) 및 Windows용 독립 실행형 네이티브 앱.
- **브라우저 확장 프로그램**: Mozilla Firefox 및 Google Chrome용 Manifest V3 확장 프로그램.

## 처음 실행 시

권장하는 초기 설정 순서는 다음과 같습니다:

1. 자주 쓰는 링크 카테고리용 목록을 몇 개 만듭니다(예: `Daily`, `Tools`, `Reading`, `Work`).
2. 자주 방문하는 기본 링크를 추가하거나 브라우저에서 내보낸 HTML 북마크를 가져옵니다.
3. 북마크 실행을 테스트해 기본 브라우저가 예상대로 링크를 여는지 확인합니다.
4. 시스템 공유 메뉴를 사용해 모바일 브라우저에서 Nori로 웹페이지를 공유해 보세요.
5. 다크 모드나 선호하는 강조 색상 등 모양 설정을 사용자 지정합니다.

## 작동 방식

Nori는 북마크 컬렉션을 특정 브라우저 엔진과 분리합니다:

- Android에서는 `expo-web-browser`를 통해 Custom Tabs로 북마크를 열거나 기본 브라우저 앱으로 직접 전달합니다.
- iOS에서는 네이티브 브라우저 시트 또는 시스템 기본 브라우저를 통해 북마크를 엽니다.
- 데스크톱과 확장 프로그램에서는 활성 브라우저 탭에서 북마크를 바로 엽니다.

이 접근 방식은 선호하는 광고 차단기, 로그인, 브라우저 프로필을 그대로 유지하면서 모든 링크를 하나의 빠르고 검색 가능한 런처에 정리해 둘 수 있도록 보장합니다.

## 추가 링크

소스 코드, 릴리스 및 이슈 추적은 GitHub 저장소를 이용하세요:

- [nonbili/Nori](https://github.com/nonbili/Nori)

스토어 배지, APK, 데스크톱 다운로드 및 브라우저 확장 프로그램 패키지는 [설치](/ko/nori/install/)에서 계속 확인하세요.
