---
layout: post
title: 'Vim+Janus & TMUX'
description: 'Usage & key reference for vim, janus, tmux'
tags: [vim, janus, tmux, editor]
category: notes
permalink: notes/vim-janus-tmux/
toc: true
featured: true
---

> Note: ปุ่มบางอย่าง ถูกตั้งค่าใหม่ ตามนี้ <https://github.com/mildronize/dotfiles>

# Vim
## Basic usage
- **Mode**:
	- *Normal*: `ESC` (สำหรับการพิมพ์คำสั่งต่างๆ)
	- *Visual*: `v` (สำหรับการเลือกข้อความ)
	- *Insert*: `i` (สำหรับการพิมพ์ข้อความ)

> Note: Belowing command using in `normal mode` only

- **Move Cursor**: `h`,`j`,`k`,`l`

- **Exit**:
	- *Exit without save*: `:q!`
	- *Save & Exit*: `:wq`
- **Save**: `:w`

## Text Operation
- **Copy**: `y`
- **Paste**: `p`
- **Undo**: `u`
- **Search**: `Search`

## Movement
- **Mode**:
	- *Normal*: `ESC` (สำหรับการพิมพ์คำสั่งต่างๆ)
	- *Visual*: `v` (สำหรับการเลือกข้อความ)
	- *Insert*: `i` (สำหรับการพิมพ์ข้อความ)

> Note: Belowing command using in `normal mode` only

- **Move Cursor**: `h`,`j`,`k`,`l`

- **Exit**:
	- *Exit without save*: `:q!`
	- *Save & Exit*: `:wq`
- **Save**: `:w`

## Text Operation
- **Copy**: `y`
- **Paste**: `p`
- **Undo**: `u`
- **Search**: `/ตามด้วยคำที่ต้องการหา`

## Movement
- **Move Cursor**: `h`,`j`,`k`,`l`
- **เลื่อน cursor ไปทีละคำ**: `w`, `b`
- **เลื่อน cursor ไปหลังสุดของคำ**: `e`
- **Go to line**: `:[line]` ex `:10` go to line 10

## Visual Mode
เลือกข้อความทีละหลายๆ บรรทัด

1. **Enther visual mode**: `v`
2. **กดปุ่มเลื่อน Cursor เพื่อคลุมดำข้อความ**: `h`,`j`,`k`,`l`

วางจาก หน้าเว็บมันจะ auto indent ให้ `F4`

## Vim Theme
- [Monokai](https://github.com/sickill/vim-monokai)
- [Solarized](https://github.com/altercation/vim-colors-solarized)

------------

## Janus

`<leader> = space`

- [EasyMotion](https://github.com/Lokaltog/vim-easymotion)
วาร์ปไปที่คำอะไรก็ได้

วาร์ปไปข้างหน้า (ลงล่าง): `space` `space` `w`

วาร์ปขึ้นบน: `space` `space` `b`

- [CtrlP](https://github.com/kien/ctrlp.vim)
เครื่องมือเทพ ช่วยหาและเปิดไฟล์
`space` `p`

- [NERDCommenter](http://github.com/ddollar/nerdcommenter)
เครื่องมือช่วย comment ให้
`space` `/`

- สลับหน้าต่าง Vim: `Ctrl+n`

- [GoldenView](http://zhaocai.github.io/GoldenView.Vim/)
เวลา active vim หน้าไหน ก็จะขยายขนาดให้ใหญ่

- Live preview HTML by [Browserlink](https://github.com/jaxbot/browserlink.vim)
- เปิด file explorer with [NERDTree](https://github.com/scrooloose/nerdtree): `space` `n`
- เปิดปิด highlight การ search: `space` `hs`

--------------


# TMUX

**Default prefix key**: `Ctrl+b`
**My prefix key**: `Ctrl+a`

ปรับปุ่มทิศทางให้ตรงกับ Vim แล้ว
> **Note**: 
> `+` คือ กดปุ่มพร้อมๆ กัน
> เว้นวรรค คือ กดแล้วก็ ปล่อย
> เฃ่น `Ctrl+a` `%` คือ กด `Ctrl` พร้อมกับ `a` แล้วปล่อย จากนั้นกด `%`

- **แบ่งแนวตั้ง**: `Ctrl+a` `%`
- **แบ่งแนวนอน**: `Ctrl+a` `"`
- **ปิด pane**: `Ctrl+d` (คำสั่ง linux )
- **สลับตำแหน่ง pane**: `Ctrl+a` `o`
- **ย้ายไป pane ทางซ้าย,ขวา**: `Ctrl+a` `h`, `Ctrl+a` `l`
- **ย้ายไป pane บนล่าง**: `Ctrl+a` `k`, `Ctrl+a` `j`

Ref:
- <http://dev.im-bot.com/vim/>
- [Janus](https://github.com/carlhuda/janus
- [TMUX](https://tmux.github.io/)


-----------

# Troubleshooting

## ปัญหา background ของ Vim เมื่อใช้บน TMUX
A: <http://stackoverflow.com/questions/30385304/how-do-i-stop-my-vim-background-from-being-transparent-in-tmux-where-there-is-no>

## Reloading tmux config
- บน tmux กด `Ctrl+a` `:` แล้วก็พิมพ์

```
:source-file ~/.tmux.conf
```

- หรือบน bash shell

```bash
$ tmux source-file ~/.tmux.conf
```
From <http://blog.sanctum.geek.nz/reloading-tmux-config/>

## Reloading zsh config

```
source ~/.zshrc
```

หรือแบบนี้

```
. ~/.zshrc
```

From <http://www.geekmind.net/2011/08/how-to-reload-your-zshrc.html>
