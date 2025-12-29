---
title: "Neovim Diaries #1: Getting Started"
description:
  My journey into Neovim and why distros might be the right starting point
date: 2025-12-28
tags:
  - tooling
---

It's the holidays, and I finally have time to do something I've been putting
off: learn Neovim.

## Where I'm Starting From

I know a bit of Vim. Enough to write git commits, do some search and replace,
move around a file. I'm not fluent, but I'm comfortable enough for small tasks.
I like using Vim and want to use it more.

I'm also a single-screen person—just my MacBook, no external monitors. A
keyboard-driven workflow where I can switch between tabs and panes without
reaching for the mouse sounds appealing.

The thing holding me back has always been complexity. Neovim config feels
intimidating, and I don't know Vim well enough to just figure things out. I
can't rip out VS Code and Cursor and jump into something that foreign.

That was until a few days back, when I finally discovered something that works
for me.

## My Setup

### AstroNvim

[AstroNvim](https://astronvim.com/) is a Neovim distro that gives you a
polished, IDE-like experience out of the box. It doesn't come with language
support pre-configured, but it sets up the infrastructure—file explorer, fuzzy
finder, git integration, a nice UI—so you can focus on adding what you need.
The killer feature is **discoverability**.

Press the leader key and a pop-up shows you what's available: `<leader>e` for
file explorer, `<leader>f` for search, `<leader>b` for buffers. Press `y` and it
shows you yank options—end of line, end of block, etc. Instead of memorizing
keybindings upfront, you learn as you go.

### OpenCode

AstroNvim gets you far, but what happens when you need to customize something?
Neovim config is still daunting for a beginner.

[OpenCode](https://opencode.ai) fills this gap. It's a terminal-based AI agent.
I keep it in one tab (`Cmd+2`) and AstroNvim in another (`Cmd+1`). When I need
something—Prettier on save, LSP for a new language—I ask OpenCode to set it up.
Watching it edit config files in real time teaches me how Neovim actually works.

I also use it for basic questions: "how do I switch buffers?" or "what's the
motion for deleting inside quotes?" It's like having a tutor available while I
work.

This is how I prefer to learn—jump in head first and figure things out as
problems come up, rather than watching tutorials.

## Early Impressions

I'm only a few days in, but things feel fast. Navigating with the keyboard,
switching between files and panes without touching the mouse—it's already more
efficient than my old workflow.

The goal is to fully switch to Neovim, eventually even at work. For now, I'm
using it for personal projects while I build muscle memory. I'll post updates as
I go.
