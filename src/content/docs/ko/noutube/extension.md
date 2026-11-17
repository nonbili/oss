---
title: 브라우저 확장 프로그램
description: Firefox 및 Chrome에서 NouTube 브라우저 확장 프로그램 사용하기.
sidebar:
  order: 6
---

NouTube는 Mozilla Firefox 및 Google Chrome용 브라우저 확장 프로그램을 포함하며, NouTube의 깔끔한 탐색, 향상된 재생, 맞춤 피드, 북마크 및 사용자 지정 도구를 데스크톱 브라우저로 바로 가져옵니다.

## 확장 프로그램 설치

공식 확장 프로그램 스토어에서 NouTube를 직접 설치하세요:

- [Firefox Add-ons](https://addons.mozilla.org/addon/noutube/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/noutube/cpmippodfdmialcoaegbbmhpdamodoif)

## 소스에서 빌드하기

이 확장 프로그램은 오픈소스이며 NouTube 앱과 코드를 공유하고 Manifest V3를 사용하는 [WXT](https://wxt.dev/)로 구축되었습니다:

```bash
bun link
bun install
cd extension
bun run dev          # Chrome 개발 모드
bun run dev:firefox  # Firefox 개발 모드
bun run build:all    # 프로덕션 패키지 빌드
```
