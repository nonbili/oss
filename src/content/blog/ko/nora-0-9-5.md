---
title: "Nora 0.9.5: 프록시 로그인과 더 조용해진 X"
description: Android 및 iOS 17 이상에서 프록시에 로그인하고, X에서 숨길 항목을 선택하며, 검색 기본값을 Latest로 설정하고, 일반 Facebook 게시물이 가려지지 않도록 유지합니다.
date: 2026-11-06
product: nora
---

**모바일용 Nora 0.9.5**는 모바일에 프록시 사용자 이름 및 비밀번호 입력 필드를 추가하고 X에 표시되는 항목에 대한 제어 기능을 강화했습니다. 또한 Facebook 광고 필터링과 브라우저 쿠키 가져오기도 개선했습니다.

## 모바일에서 프록시 로그인

**Settings → Browsing → Proxy**를 열어 HTTP 또는 SOCKS를 선택하고 호스트와 포트를 입력한 뒤 사용자 이름과 비밀번호를 입력할 수 있습니다. 인증이 필요한 프록시는 **Android** 및 **iOS 17 이상**에서 브라우징과 피드 요청 모두에 지원됩니다.

자격 증명은 기기에만 저장되며 백업 및 동기화에서 제외됩니다. iOS 16에서는 프록시 지원이 피드용 비인증 HTTP 프록시 요청으로 계속 제한됩니다.

## X에서 숨길 항목 선택

**Settings → Services → X**에서 이제 다음 항목을 숨기도록 선택할 수 있습니다:

- **Grok UI**: Grok 인터페이스 요소를 제거합니다.
- **Recommendations**: 추천 팔로우(Who to follow), 트렌드, 더 알아보기(Discover more)를 포함합니다.
- **Engagement counts**: 시선을 분산시키는 숫자를 줄인 타임라인을 제공합니다.

이 제어 기능들은 선택 사항입니다. 같은 설정 섹션에서 **Default search to Latest**도 제공하므로 검색 시 인기(Top) 결과 대신 최신 게시물부터 열 수 있습니다. 원할 때 X에서 검색 탭을 전환해 다른 보기로 바꿀 수도 있습니다.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Android용 Nora의 X 제어 기능: 숨길 인터페이스 요소와 검색을 Latest로 열지 여부를 선택할 수 있습니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-5/x-settings.png" alt="Pixel 휴대전화의 Nora X 설정 화면으로 선택적 Grok, 추천, 참여 수 및 최신 검색 제어가 표시되어 있음" width="1080" height="2220" loading="lazy" />
    </div>
  </figure>
</div>

## 일반 Facebook 게시물 표시 유지

Facebook 광고 필터링이 이제 스폰서 라벨 자체를 확인합니다. 우연히 “Ad” 또는 “広告”라는 단어가 포함된 일반 게시물이 실수로 숨겨질 가능성이 줄어듭니다.

## 더욱 안정적인 쿠키 가져오기

브라우저 쿠키를 가져올 때 이제 `__Host-` 및 `__Secure-`로 시작하는 이름의 접두사가 보존됩니다. 접두사를 그대로 유지함으로써 사이트가 가져온 세션을 올바르게 인식하는 데 도움이 됩니다.

전체 변경 목록은 [GitHub의 릴리스 노트](https://github.com/nonbili/Nora/releases/tag/v0.9.5)를 참고하세요.

## Nora 받기

[Nora를 설치 또는 업데이트](/ko/nora/install/)하거나 [Nora 문서](/ko/nora/)에서 자세히 알아보세요.
