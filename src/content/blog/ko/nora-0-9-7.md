---
title: "Nora 0.9.7: 다운로드 폴더 선택 및 메뉴 사용자 지정"
description: Android에서 다운로드 저장 위치를 선택하고, 점 세 개 메뉴에서 잘 쓰지 않는 작업을 숨기며, WhatsApp Web, Facebook Marketplace 및 탭 탐색 관련 수정 사항을 받아보세요.
date: 2026-11-19
product: nora
---

**모바일용 Nora 0.9.7**에서는 Android 다운로드를 원하는 폴더로 저장하고, 브라우저의 점 세 개 메뉴를 자주 쓰는 작업만 남기도록 정리할 수 있습니다. 또한 이번 릴리스에서는 WhatsApp Web과 Facebook Marketplace가 자동으로 데스크톱 모드로 열립니다.

## 다운로드 저장 위치 선택하기

Android에서 **설정 → 기본 설정 → 다운로드 → 다운로드 저장 위치**를 열어 브라우저 다운로드가 저장될 위치를 설정하세요.

- **다운로드**는 Android 기본 Downloads 폴더를 사용합니다.
- **매번 묻기**를 선택하면 다운로드할 때마다 저장 위치를 고를 수 있습니다.
- **폴더 선택…**은 앞으로의 다운로드를 지정한 폴더에 저장합니다.

폴더를 선택하면 Android 10 이상에서 피드에서 저장하는 미디어에도 Nora가 해당 폴더를 사용합니다. 또한 이번 릴리스에서는 일부 사이트가 브라우저에서 생성한 파일에 사용하는 `data:` 링크의 다운로드 문제도 수정했습니다.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">앞으로의 다운로드 대상으로 Nora Downloads가 선택되어 있습니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/download-destination.webp" alt="Nora Downloads가 선택되어 있고 다운로드, 매번 묻기, 폴더 선택 옵션이 보이는 Android 다운로드 설정" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 점 세 개 메뉴 사용자 지정하기

**설정 → 모양 → 도구 모음 → 점 세 개 메뉴 사용자 지정**을 열고 자주 쓰지 않는 작업을 끄세요. 예를 들어 **페이지에서 찾기**와 **공유**는 켜 두고, 레이아웃을 거의 바꾸지 않는다면 **데스크톱 사이트**를 숨길 수 있습니다. 유지한 작업은 현재 탭에서 사용할 수 있을 때 나타납니다.

**설정**은 메뉴에 항상 남으며, **메뉴 기본값 복원**을 한 번 탭하면 변경 사항이 초기화됩니다.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">페이지에서 찾기는 켜 두고 데스크톱 사이트는 끕니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customize-three-dot-menu.webp" alt="페이지에서 찾기가 켜져 있고 데스크톱 사이트가 꺼져 있는 확장된 점 세 개 메뉴 사용자 지정 설정" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">브라우저 메뉴에 페이지에서 찾기, 공유, 설정만 남습니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-7/customized-three-dot-menu.webp" alt="데스크톱 사이트가 숨겨지고 페이지에서 찾기, 공유, 설정이 표시된 사용자 지정 브라우저 메뉴" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## WhatsApp Web과 Facebook Marketplace를 데스크톱 모드로 열기

**WhatsApp Web**에서는 이제 선택기를 닫지 않고도 화면 키보드를 열 수 있습니다. **Facebook Marketplace**는 데스크톱 사이트를 사용하므로 게시물에서 바로 판매자에게 메시지를 보낼 수 있습니다.

## 브라우징 및 피드 수정 사항

- Facebook 광고 차단이 라벨이 늦게 표시되는 스폰서 게시물도 잡아냅니다. Facebook 반응 버튼을 길게 눌러도 브라우저 컨텍스트 메뉴가 방해하지 않습니다.
- Reddit 게임 필터가 일반 게시물을 계속 표시합니다.
- 탭 전환기를 열면 활성 탭이 화면에 바로 보입니다. 새 탭에서 입력한 주소는 첫 번째 **이동** 탭에서 열리며, 외부 링크를 열어도 다른 탭이 유지됩니다.
- 미디어 뷰어 안에서 제스처를 사용할 때 당겨서 새로고침이 방해하지 않습니다.

전체 변경 목록은 [GitHub 릴리스 노트](https://github.com/nonbili/Nora/releases/tag/v0.9.7)에서 확인하세요.

## Nora 받기

[Nora 설치 또는 업데이트](/ko/nora/install/)를 진행하거나 [Nora 문서](/ko/nora/)에서 더 자세히 알아보세요.
