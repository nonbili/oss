---
title: "Nora 0.9.2: 피드를 팔로우하는 더 많은 방법"
description: imginn에서 Instagram 피드를, Nitter 인스턴스에서 X 피드를 읽고, 타임라인과 갤러리 미디어를 확대하며, Android에서 다운로드 저장 위치를 선택하세요.
date: 2026-10-29
product: nora
---

Instagram이나 X 업데이트가 멈췄나요? **Nora 0.9.2**는 피드가 계속 업데이트되도록 돕는 선택적 대체 소스를 추가했습니다. 또한 타임라인과 갤러리 확대/축소, 동영상 재생 속도 제어, Android에서 다운로드 저장 위치 선택 기능도 제공합니다.

Nora의 피드 리더가 처음이라면 [0.9.0 소개 글](/ko/blog/nora-0-9-0/)부터 시작해 보세요.

## imginn에서 Instagram, Nitter에서 X 읽기

로그인 없이 공개 **Instagram** 및 **X** 프로필을 팔로우하면 로그인 요구 화면이나 요청 제한에 부딪힐 수 있습니다. Nora 0.9.2는 계정에 로그인하지 않고도 타임라인이 계속 업데이트되도록 **Feed Settings**에 두 가지 선택적 대안을 추가했습니다:

- **Read Instagram from imginn:** 대체 수단으로 imginn을 사용하려면 **When Instagram fails**를, imginn을 먼저 확인하려면 **First, then Instagram**을 선택하세요. 두 모드 모두 Nora가 열려 있는 동안에만 작동합니다. imginn에서 로봇이 아님을 확인하라고 요청하면 Nora가 앱 내에서 확인을 완료하도록 안내합니다.
- **Read X from Nitter:** **When X fails** 또는 **First, then X**를 선택하고 하나 이상의 Nitter 인스턴스 주소를 추가하세요. Nora가 입력한 인스턴스를 순서대로 시도합니다. 브라우저 확인이 필요한 인스턴스는 Nora가 열려 있는 동안에만 작동합니다.

두 옵션 모두 기본값은 꺼져 있으며 **Feed Settings**에서 언제든지 활성화할 수 있습니다.

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">피드 설정</div>
    <h2 class="screenshot-card__title">imginn 및 Nitter 소스</h2>
    <p class="screenshot-card__body">
      Instagram 프로필은 imginn에서, X 프로필은 설정한 Nitter 인스턴스에서 대체 소스 또는 기본 소스로 읽어옵니다.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.webp" alt="imginn 및 Nitter 옵션이 표시된 Nora 0.9.2 피드 설정" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">미디어</div>
    <h2 class="screenshot-card__title">전체 화면 갤러리 및 확대/축소</h2>
    <p class="screenshot-card__body">
      전체 화면 갤러리에서 핀치로 사진과 동영상을 확대하고, 화면 가장자리를 길게 눌러 빠르게 재생하거나, 미디어를 바로 저장하세요.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.webp" alt="Nora 0.9.2 전체 화면 미디어 갤러리 화면" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">프로필</div>
    <h2 class="screenshot-card__title">프로필에서 탭 다시 열기</h2>
    <p class="screenshot-card__body">
      헤더 메뉴나 탭 전환기에서 열려 있는 모바일 탭을 다른 Nora 프로필로 바로 전환하세요.
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.webp" alt="Nora 0.9.2 프로필에서 탭 다시 열기 대화상자" />
    </div>
  </figure>
</div>

## 피드 동영상 제어, 확대/축소 및 알림

피드에서 타임라인과 미디어를 확인하는 과정도 더욱 유연해졌습니다:

- **갤러리 내 동영상 속도 제어:** 이제 피드 동영상에 **Default video playback speed** 및 **Long-press edge for 2x speed** 설정이 적용됩니다. 재생 중인 동영상의 왼쪽이나 오른쪽 가장자리를 길게 터치하면 2배속으로 전환되며, 가로로 슬라이드하여 속도를 바꿀 수 있습니다.
- **타임라인 및 갤러리 확대/축소:** 피드 타임라인과 전체 화면 사진·동영상 갤러리 모두에서 모바일에서는 핀치로, 데스크톱에서는 `Ctrl`/`Cmd` 키를 누른 채 스크롤하여 확대/축소할 수 있습니다. 확대된 상태에서도 동영상 재생 및 탐색 컨트롤을 계속 사용할 수 있습니다.
- **타임라인에서 알림 열기:** 이제 새 게시물 알림을 탭하면 해당하는 Nora 타임라인이 바로 열립니다.
- **재생 실패 동영상 대체 동작:** 전체 화면 갤러리에서 동영상을 재생할 수 없을 때 원본 사이트에서 해당 게시물을 바로 열 수 있습니다.

## 다운로드, 프로필 및 사이트 개선

이번 릴리스에는 플랫폼 전반의 브라우징 및 다운로드 개선 사항도 포함되었습니다:

- **Android에서 다운로드 저장 위치 선택:** **Settings → Downloads**에서 **Ask where to save each download**를 켜면 각 파일의 대상 폴더와 파일 이름을 직접 고를 수 있습니다. 또한 다운로드 저장 안정성도 향상되었습니다.
- **헤더 메뉴에서 프로필로 다시 열기:** 탭 전환기에서 탭을 길게 누르는 것 외에도 헤더 메뉴에서 활성 모바일 탭을 다른 Nora 프로필로 바로 전환할 수 있습니다.
- **TikTok 및 Instagram 수정:** 새로운 전체 화면 버튼으로 TikTok 동영상을 시청하고, Instagram 로그아웃 상태를 포함해 TikTok과 Instagram에서 동영상을 더욱 안정적으로 다운로드할 수 있습니다.
- **더 부드러운 스크롤 및 백그라운드 확인:** 툴바가 숨겨지거나 나타날 때 페이지가 튀는 현상이 없어졌으며, Android에서 백그라운드 피드 확인이 더 잘 작동합니다.

전체 릴리스 세부 정보는 [변경 로그](/ko/nora/changelog/)를 참고하세요.

## Nora 0.9.2 받기

Android, iOS, Linux, macOS 또는 Windows에서 [Nora 설치 또는 업데이트](/ko/nora/install/)를 진행하세요.

[Nora 문서](/ko/nora/)를 살펴보거나 [GitHub의 릴리스 노트](https://github.com/nonbili/Nora/releases/tag/v0.9.2)를 읽을 수도 있습니다.
