---
title: 브라우저 확장 프로그램
description: Firefox 및 Chrome에서 Nori 브라우저 확장 프로그램 사용하기.
sidebar:
  order: 5
---

Nori에는 Mozilla Firefox 및 Google Chrome용 로컬 우선 브라우저 확장 프로그램이 포함되어 있습니다.

## 주요 기능

- **모바일과 동일한 경험**: 확장 프로그램 팝업은 모바일 앱과 동일한 목록, 검색 서랍, 기록, 목록 관리 및 설정을 제공합니다.
- **원클릭 북마크**: 자동 제목 가져오기와 함께 현재 탭을 원하는 목록에 즉시 북마크합니다.
- **빠른 런처**: 브라우저 툴바에서 바로 저장된 링크를 검색하고 새 탭으로 엽니다.
- **로컬 저장소**: 선택적 Nori Sync 지원과 함께 브라우저의 확장 프로그램 저장소에 북마크를 로컬로 저장합니다.
- **개인정보 중심**: 브라우징 활동이나 페이지 콘텐츠를 추적하지 않습니다. Nori는 사용자가 명시적으로 저장한 링크만 수신합니다.

## 확장 프로그램 설치

공식 확장 프로그램 스토어에서 Nori를 직접 설치하세요:

- [Firefox Add-ons](https://addons.mozilla.org/addon/nori/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/nori/ojgmnocnegcbhlmfoackgoocnjbfejpg)

## 소스에서 빌드하기

이 확장 프로그램은 오픈소스이며 Manifest V3를 사용하는 [WXT](https://wxt.dev/)로 구축되었습니다:

```bash
cd extension
bun install
bun run dev          # Chrome development mode
bun run dev:firefox  # Firefox development mode
bun run build:all    # Build production zip packages
```
