---
layout: post
description: 
tags: []
category: articles
---

## update repository

[debian repository](https://wiki.debian.org/UnofficialRepositories)
using
`deb http://dl.google.com/linux/chrome/deb/ stable main`
into file
`/etc/apt/source.list`

## Download Chrome installation file
Download from Google's web.
Go to this link
`http://www.google.co.th/intl/th/chrome/browser/desktop/index.html`
select your linux distrubution. for me I select debian 64 bit


```shell

sudo aptitude install chromium
sudo dpkg -i google-chrome-stable_current_amd64.deb 
sudo aptitude update
```
if you got the error look like this
```
W: GPG error: http://dl.google.com stable Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY A040830F7FAC5991
```
use the beblowing command to sign & trust the new repository from google
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys [Your public KEY]
example
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A040830F7FAC5991

sudo aptitude install google-chrome-stable 
```

