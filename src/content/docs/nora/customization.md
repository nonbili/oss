---
title: Customization
description: CSS and browsing adjustments in Nora.
sidebar:
  order: 8
---
Nora supports custom CSS so you can reshape the service websites it embeds.

## Common Uses

- Hide distracting UI
- Improve density for timeline-heavy layouts
- Remove service-specific chrome you never use
- Make desktop multi-column setups easier to scan

## Keep Changes Maintainable

Because Nora depends on the live websites of external services, upstream markup can change without warning.

Use a conservative approach:

- Prefer small, targeted rules
- Re-test after service redesigns
- Avoid broad overrides unless you control the fallout

## Pair CSS With Profiles

If you use separate profiles for different services or roles, keep CSS adjustments aligned with those profiles so behavior stays predictable.
