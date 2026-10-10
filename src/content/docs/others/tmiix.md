---
title: Tmiix
description: Tmux/SSH session and snippet manager.
sidebar:
  order: 3
---

<div class="product-overview-header">
  <img class="product-overview-header__logo" src="/app-logos/tmiix.png" alt="Tmiix logo" />
  <p class="product-overview-header__meta">Desktop (Linux, macOS, Windows)</p>
</div>

Tmiix is a Tmux/SSH session and snippet manager for [tmux](https://github.com/tmux/tmux) across local workstations and remote SSH servers.

- **Source Code**: [nonbili/tmiix](https://github.com/nonbili/tmiix)
- **Releases**: [Download on GitHub](https://github.com/nonbili/tmiix/releases/latest)

## Key Features

- **Session Management**: Visually inspect, attach, detach, and switch between active tmux sessions on both local machines and remote SSH hosts.
- **AI Coding Agent Integration**: Paste clipboard images directly into CLI-based AI coding assistants running over remote SSH sessions with automatic upload handling.
- **Fast Keyboard Navigation**: Quick keyboard switcher shortcuts to hop between sessions without breaking terminal flow.
- **Customizable Themes**: Tailor UI appearances to match your terminal emulator color scheme.

## Installation & Running

Download prebuilt binaries from the [GitHub Releases page](https://github.com/nonbili/tmiix/releases/latest).

### Building From Source

Tmiix is built with Go, Bun, and [Wails](https://wails.io/):

```bash
# Clone the repository
git clone https://github.com/nonbili/tmiix.git
cd tmiix

# Run live development mode
wails dev

# Build production executable
wails build
```
