---
title: "NouTube 0.7.10: 더 빠른 동영상 시작, 사용자 지정 다운로드 폴더 및 커뮤니티 게시물"
description: 동영상이 시작될 때까지 기다리는 시간을 줄이고, Android에서 다운로드 저장 위치를 선택하며, 저장한 채널의 커뮤니티 게시물을 피드로 가져오세요.
date: 2026-11-16
product: noutube
---

**Android용 NouTube 0.7.10**은 동영상이 재생을 시작하기 전의 대기 시간을 줄여줍니다. 이 글에서는 **0.7.9**에 추가된 Android 다운로드 폴더 선택 기능과 피드 리더에서 저장한 채널의 커뮤니티 게시물을 읽는 기능도 함께 소개합니다.

## 재생 전 대기 시간 단축

이제 NouTube가 동영상 페이지 응답이 도착하는 대로 처리하므로 전체 응답을 기다리지 않고도 재생을 시작할 수 있습니다. **광고 차단이 활성화된 상태**에서는 프리롤 광고 없이 재생을 요청하므로 또 다른 시작 지연 원인도 줄어듭니다.

**데스크톱**의 관련 개선 사항 덕분에 동영상 페이지 로딩 시작도 더 빨라졌습니다. 이러한 변경 사항을 위해 별도로 켜야 하는 새 설정은 없습니다.

## Android에서 다운로드 폴더 선택

다운로드한 동영상을 전용 폴더에 보관하고 싶으신가요? 이제 **Android**에서 저장 위치를 직접 선택할 수 있습니다.

다운로드 대화상자에서 **Folder** 아래의 **Browse**를 탭한 다음 Android 폴더 선택기에서 폴더를 고르세요. 기본 위치로 돌아가려면 **Use Downloads folder**를 탭하면 됩니다.

<div class="screenshot-gallery" style="max-width: 24rem;">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">전용 폴더에 동영상을 저장하거나 Downloads 폴더로 다시 전환하세요.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/download-folder.png" alt="선택된 폴더로 Download/NouTube가 표시되고 Browse 및 Use Downloads folder 버튼이 있는 NouTube의 Android 다운로드 대화상자" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 피드 리더의 커뮤니티 게시물

저장한 채널이 동영상 업로드 사이에 소식을 올릴 때가 있습니다. 이제 **Channels feed**에 동영상과 함께 커뮤니티 게시물도 포함되어 한곳에서 모두 읽을 수 있습니다.

사용해 보려면 **Settings → Appearance**를 열고 **Channels feed** 바로 아래에 있는 **Community posts in feed**를 켜세요. 기본값은 **꺼짐**입니다. 게시물을 포함하면 저장된 각 채널의 Posts 탭을 확인해야 하므로 피드를 새로고침할 때 데이터를 더 많이 사용합니다.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">Appearance 설정에서 커뮤니티 게시물을 활성화하세요.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-posts-setting.png" alt="Channels feed와 Community posts in feed가 활성화된 Android용 NouTube Appearance 설정" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
  <figure class="screenshot-card">
    <figcaption class="screenshot-card__body">저장한 채널의 동영상과 함께 커뮤니티 게시물이 표시됩니다.</figcaption>
    <div class="screenshot-frame">
      <img src="/blog/noutube-0-7-10/community-post-in-feed.png" alt="동영상 업로드와 함께 텍스트 및 이미지가 포함된 Veritasium 커뮤니티 게시물이 표시된 NouTube 피드" width="1080" height="2400" loading="lazy" />
    </div>
  </figure>
</div>

## 소소한 수정 사항

이번 업데이트로 일상적인 몇 가지 상호작용도 더 매끄러워졌습니다:

- **Android 가로 모드 레이아웃:** 앱 화면과 번역 카드가 시스템 내비게이션 바에 가려지지 않습니다.
- **Android 링크 메뉴:** 동영상 링크를 길게 누를 때 표시되는 메뉴에 올바른 동영상 제목과 작업 아이콘이 나타납니다.
- **데스크톱 북마크:** 썸네일에서 동영상에 별표를 누르면 올바른 제목으로 저장됩니다.

폴란드어, 프랑스어, 갈리시아어, 이탈리아어, 포르투갈어(브라질), 러시아어 번역도 업데이트되었습니다.

전체 변경 목록은 [GitHub의 릴리스 노트](https://github.com/nonbili/NouTube/releases/tag/v0.7.10)를 참고하세요.

## NouTube 받기

[NouTube를 설치 또는 업데이트](/ko/noutube/install/)하거나 [NouTube 문서](/ko/noutube/)에서 자세히 알아보세요.
