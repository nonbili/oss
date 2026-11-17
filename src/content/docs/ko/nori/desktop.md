---
title: 데스크톱
description: Linux, macOS 및 Windows에서 Nori 사용하기.
sidebar:
  order: 4
---

Nori는 Linux, macOS 및 Windows용 전용 데스크톱 앱을 제공합니다.

## 데스크톱 버전의 추가 기능

데스크톱 버전은 Nori의 체계적인 북마크 런처를 컴퓨터에서 빠르고 키보드 친화적인 동반 앱으로 제공합니다:

- **독립 실행형 런처**: 브라우저 탭 바를 어지럽히지 않고 독립된 창에서 링크를 정리해 보관하세요.
- **로컬 우선 아키텍처**: [Wails v3](https://v3.wails.io/)와 Go로 구축되어 네이티브 OS 창 관리와 최신 웹 UI 구성 요소를 결합했습니다.
- **시스템 브라우저 실행**: 링크를 클릭하면 기본 데스크톱 브라우저에서 바로 열립니다.
- **동기화 연동**: Nori Sync 계정을 연결해 데스크톱, 모바일, 브라우저 확장 프로그램 간에 북마크를 매끄럽게 공유하세요.

## 플랫폼 패키지

- **Linux**: `amd64`용 포터블 AppImage 및 `.tar.gz` 패키지로 배포됩니다.
- **macOS**: Apple Silicon(`arm64`) 및 Intel(`amd64`) 유니버설 지원, `.dmg` 설치 프로그램과 `.app.zip` 번들로 배포됩니다.
- **Windows**: 설치 프로그램(`.exe`) 및 포터블 `.zip` 아카이브로 배포됩니다.

## Linux 시스템 요구 사항

Linux AppImage는 시스템 WebKit 엔진을 사용합니다. 시스템에 GTK 3 및 `webkit2gtk-4.1`이 설치되어 있는지 확인하세요:

- **Debian / Ubuntu**:
  ```bash
  sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0 libfuse2
  ```
- **Fedora**:
  ```bash
  sudo dnf install webkit2gtk4.1 gtk3
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S webkit2gtk-4.1 gtk3
  ```

## 릴리스

최신 데스크톱 다운로드 및 릴리스 노트는 [Nori GitHub Releases](https://github.com/nonbili/Nori/releases) 페이지를 방문하세요.
