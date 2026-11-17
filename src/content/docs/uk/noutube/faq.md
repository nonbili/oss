---
title: Поширені запитання
description: Поширені запитання щодо NouTube, зібрані з обговорень на GitHub.
sidebar:
  order: 9
---
На цій сторінці узагальнено повторювані запитання користувачів із публічного трекера проблем на GitHub.

## Проблеми зі входом

Google часто відхиляє вхід із програм, які вбудовують вебсторінку, тому вхід усередині NouTube може завершуватися помилкою як на Android, так і на комп'ютері — зазвичай із повідомленням «This browser or app may not be secure». На комп'ютері, якщо немає видимої кнопки `Sign in`, спробуйте спочатку відкрити меню `Your data in YouTube`.

Якщо увійти не вдається, скористайтеся функцією **Inject cookie**:

1. На комп'ютері увійдіть у YouTube у Chrome або іншому браузері на базі Chromium, а потім експортуйте файли cookie YouTube за допомогою розширення браузера (наприклад, `getcookies.txt`).
2. На Android скопіюйте експортований файл на пристрій.
3. У NouTube відкрийте **Settings > Tools > Inject cookie**, імпортуйте файл (або вставте його вміст) і збережіть.

Це обходить перевірку захищеного браузера Google і наразі є найнадійнішим рішенням проблем зі входом як на Android, так і на комп'ютері.

Джерела:

- [Issue #142: Can't login to Google on Windows app](https://github.com/nonbili/NouTube/issues/142)

## Чому останнє оновлення ще не доступне у F-Droid?

Графік випусків у F-Droid не контролюється розробниками NouTube. F-Droid збирає та публікує оновлення незалежно пакетами, що зазвичай займає кілька днів після виходу нової версії на GitHub.

Якщо ви хочете отримати останню версію негайно, ви можете завантажити APK зі сторінки [GitHub Releases](https://github.com/nonbili/NouTube/releases). Проте зауважте, що випуски GitHub використовують інший ключ підпису, ніж F-Droid, тому перед встановленням APK з GitHub потрібно спочатку видалити версію з F-Droid.

Джерела:

- [Issue #16: Update request](https://github.com/nonbili/NouTube/issues/16)
- [Issue #14: Bug: rotate to landscape resets app to home page](https://github.com/nonbili/NouTube/issues/14)

## YouTube Music завантажується некоректно

Якщо YouTube Music завантажується некоректно, спробуйте перемкнути **Desktop site** у меню програми.

Джерело:

- [Issue #150: Noutube Music Error Message, Not Loading.](https://github.com/nonbili/NouTube/issues/150)

## NouTube знову відкриває чергу замість головної сторінки

Якщо NouTube продовжує відновлювати відтворення або відкриває старий елемент замість головної сторінки, перевірте, чи досі активна іконка черги. В обговоренні проблеми розробник визначив неочищену чергу як причину того, що NouTube постійно намагалася відновити відтворення.

Джерело:

- [Issue #138: Restoring playback](https://github.com/nonbili/NouTube/issues/138)

## Куди повідомляти про помилки або пропонувати нові функції?

Використовуйте репозиторій GitHub:

- [nonbili/NouTube issues](https://github.com/nonbili/NouTube/issues)
