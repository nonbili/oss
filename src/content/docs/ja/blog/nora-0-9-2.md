---
title: "Nora 0.9.2: フィードをフォローする方法がさらに充実"
description: imginn からの Instagram フィード取得や Nitter インスタンスからの X フィード取得、タイムラインとギャラリーメディアのズーム、Android でのダウンロード保存先の選択に対応しました。
sidebar:
  label: Nora 0.9.2 リリース
  order: 2
---

*2026年10月29日公開*

Instagram や X のフィードが更新されなくなりましたか？ **Nora 0.9.2** では、フィードの更新を維持するためのオプションの代替ソースが追加されました。また、タイムラインやギャラリーのズーム表示、動画の再生速度コントロール、Android でのダウンロード保存先の選択にも対応しています。

Nora のフィードリーダーを初めて使う方は、[0.9.0 の紹介記事](/ja/blog/nora-0-9-0/)からご覧ください。

## imginn から Instagram を、Nitter から X を読み込む

サインインせずに **Instagram** や **X** の公開プロフィールをフォローしていると、ログイン画面やレート制限に阻まれることがあります。Nora 0.9.2 では **フィード設定** に2つのオプションの代替手段が追加され、アカウントにログインしなくてもタイムラインの更新を続けられるようになりました：

- **imginn から Instagram を読み込む:** imginn をフォールバックとして使う **Instagram の取得失敗時**、または最初に imginn を確認する **優先（次に Instagram）** から選択できます。いずれのモードも Nora を開いている間のみ動作します。imginn でロボットではないことの確認を求められた場合は、アプリ内で確認を完了するよう促されます。
- **Nitter から X を読み込む:** **X の取得失敗時** または **優先（次に X）** を選択し、1つ以上の Nitter インスタンスのアドレスを追加します。Nora は登録されたインスタンスを順番に試行します。ブラウザ確認が必要なインスタンスは、Nora を開いている間のみ動作します。

どちらのオプションもデフォルトではオフになっており、**フィード設定** からいつでも有効にできます。

<div class="screenshot-gallery">
  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">フィード設定</div>
    <h2 class="screenshot-card__title">imginn と Nitter ソース</h2>
    <p class="screenshot-card__body">
      Instagram プロフィールを imginn から、X プロフィールを設定した Nitter インスタンスから、フォールバックまたはメインの取得元として読み込めます。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/feed-settings.png" alt="imginn と Nitter のオプションを表示する Nora 0.9.2 のフィード設定" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">メディア</div>
    <h2 class="screenshot-card__title">全画面ギャラリーとズーム</h2>
    <p class="screenshot-card__body">
      全画面ギャラリーで写真や動画をピンチ操作でズームしたり、画面端の長押しで再生速度を上げたり、メディアを直接保存したりできます。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/media-gallery.png" alt="Nora 0.9.2 の全画面メディアギャラリー画面" />
    </div>
  </figure>

  <figure class="screenshot-card">
    <div class="screenshot-card__eyebrow">プロフィール</div>
    <h2 class="screenshot-card__title">別のプロフィールでタブを開き直す</h2>
    <p class="screenshot-card__body">
      開いているモバイルタブを、ヘッダーメニューやタブ切り替え画面から直接別の Nora プロフィールに切り替えられます。
    </p>
    <div class="screenshot-frame">
      <img src="/blog/nora-0-9-2/reopen-in-profile.png" alt="Nora 0.9.2 のプロフィールでタブを開き直すダイアログ" />
    </div>
  </figure>
</div>

## フィード動画の操作、ズーム、通知

フィード内のタイムラインやメディアの閲覧もさらに柔軟になりました：

- **ギャラリーでの動画速度コントロール:** フィード内の動画に **デフォルトの動画再生速度** と **画面端の長押しで2倍速** の設定が適用されるようになりました。再生中の動画の左端または右端を長押しすると2倍速になり、そのまま横にスライドすると速度を切り替えられます。
- **タイムラインとギャラリーのズーム:** フィードのタイムラインと全画面の写真・動画ギャラリーの両方で、モバイルではピンチ操作、デスクトップでは `Ctrl`/`Cmd` キーを押しながらスクロールしてズームできます。ズーム中も動画の再生やシーク操作が可能です。
- **通知からタイムラインを直接開く:** 新着投稿の通知をタップすると、対応する Nora のタイムラインが直接開くようになりました。
- **再生できない動画のフォールバック:** 全画面ギャラリーで動画を再生できない場合、元のサイトで直接投稿を開くことができます。

## ダウンロード、プロフィール、サイトの改善

このリリースには、各プラットフォームにおけるブラウジングとダウンロードの改善も多数含まれています：

- **Android でダウンロードの保存先を選択:** **設定 → ダウンロード** の **ダウンロードごとに保存先を確認する** をオンにすると、ファイルごとに保存先フォルダとファイル名を選択できます。また、ダウンロードの保存処理の信頼性も向上しました。
- **ヘッダーメニューから別のプロフィールで開き直す:** タブ切り替え画面でのタブ長押しに加え、ヘッダーメニューからも直接アクティブなモバイルタブを別の Nora プロフィールに切り替えられるようになりました。
- **TikTok と Instagram の修正:** TikTok 動画に新しい全画面ボタンが追加されたほか、Instagram からログアウトしている場合を含め、TikTok や Instagram からの動画ダウンロードがより安定しました。
- **より滑らかなスクロールとバックグラウンドチェック:** ツールバーの表示・非表示の切り替え時にページがガタつく問題を解消し、Android でのバックグラウンドのフィード更新チェックを改善しました。

すべてのリリース詳細については[更新履歴](/ja/nora/changelog/)をご覧ください。

## Nora 0.9.2 を入手

Android、iOS、Linux、macOS、Windows で [Nora をインストールまたはアップデート](/ja/nora/install/)できます。

[Nora のドキュメント](/ja/nora/)をご覧いただくか、[GitHub のリリースノート](https://github.com/nonbili/Nora/releases/tag/v0.9.2)をご確認ください。
