---
title: "Nora 0.9.6: Android 홈 화면 바로가기에서의 광고 차단"
description: Android 홈 화면 바로가기에서 광고 차단과 링크·이미지 메뉴를 사용하고, 피드 텍스트 선택, 헤더 애니메이션, 탭 오버레이 문제를 수정했습니다.
date: 2026-11-12
product: nora
---

**모바일용 Nora 0.9.6**은 Android 홈 화면 바로가기에서 여는 사이트에도 광고 차단과 링크 및 이미지 메뉴를 제공합니다. 피드 리더 역시 텍스트 선택, 스크롤, 탭 전환 관련 수정 사항이 반영되었습니다.

## 홈 화면 바로가기에도 적용되는 광고 차단 설정

**Android**에서 Nora의 **Add to Home screen** 작업으로 저장한 사이트는 독립 실행형 창에서 열립니다. 이제 해당 창에서도 네트워크 차단 및 페이지 내 광고 요소 숨김 규칙을 포함한 Nora의 광고 차단 설정이 적용됩니다.

사용해 보려면 Nora에서 사이트를 열고 페이지 메뉴에서 **Add to Home screen**을 선택한 다음 런처에서 바로가기를 실행하세요. 설정해 둔 차단 규칙이 거기에도 적용됩니다.

## 링크 및 이미지 길게 누르기

이제 Android 홈 화면 바로가기에서도 컨텍스트 메뉴를 제공합니다:

- **링크 길게 누르기**: 주소를 복사하거나 새 Nora 탭에서 엽니다.
- **이미지 길게 누르기**: 이미지를 저장하거나, 주소를 복사하거나, 새 Nora 탭에서 엽니다.

독립 실행형 창에서 계속 읽다가 탭으로 자세히 살펴보고 싶은 링크만 Nora로 보낼 수 있습니다.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Android 홈 화면 바로가기에서 이미지를 길게 누르면 Nora의 이미지 작업 메뉴가 열립니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-6/shortcut-image-menu.webp" alt="Save image, Open image in new tab, Copy image link 작업이 표시된 Nora의 독립 실행형 Android 바로가기" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 피드에서의 더 편한 읽기 경험

이번 릴리스에서는 Nora의 내장 피드 리더에서 세 가지 상호작용도 수정했습니다:

- **텍스트 선택:** 게시물 설명에서 텍스트를 선택하는 동작이 더욱 안정적으로 작동합니다.
- **헤더 애니메이션:** 피드 헤더가 접히고 펼쳐질 때 애니메이션이 올바르게 작동합니다.
- **탭 전환 시 오버레이:** 피드 오버레이가 해당 오버레이를 연 탭에 속하도록 하여 다른 탭 위에 나타나는 문제를 방지합니다.

피드 리더가 처음이신가요? [Nora 0.9.0 소개 글](/ko/blog/nora-0-9-0/)에서 소스, 타임라인 및 미디어 그리드를 확인해 보세요.

전체 변경 목록은 [GitHub의 릴리스 노트](https://github.com/nonbili/Nora/releases/tag/v0.9.6)를 참고하세요.

## Nora 받기

[Nora를 설치 또는 업데이트](/ko/nora/install/)하거나 [Nora 문서](/ko/nora/)에서 자세히 알아보세요.
