---
layout: post
title: How to upgrade Debian to SID
description: Instruction for upgrading debian from stable to SID, sudo command setup, installing non-free packages(non open source)
tags: [upgrade, debian, linux, how-to, font-thai, firmware-linux, sudo, update, sorces.list, non-free, archive-area]
category: articles
---

**Optional:** Add `sudo` into your user

```
su
aptitude install sudo
usermod -a -G sudo [USERNAME]
exit
```

1. Replace the belowing text into `/etc/apt/sorces.list` with your favorite editor. In my case I use 
`sudo vi /etc/apt/sorces.list`

    ```
    deb http://ftp.th.debian.org/debian/ sid main contrib non-free
    deb-src http://ftp.th.debian.org/debian/ sid main contrib non-free

    deb http://ftp.th.debian.org/debian/ stable main contrib non-free
    deb http://ftp.th.debian.org/debian/ testing main contrib non-free
    deb http://ftp.th.debian.org/debian/ experimental main contrib non-free
    ```
    > Read more about Archive areas:
    > [main](https://www.debian.org/doc/debian-policy/ch-archive.html#s-main), 
    > [contrib](https://www.debian.org/doc/debian-policy/ch-archive.html#s-contrib), 
    > [non-free](https://www.debian.org/doc/debian-policy/ch-archive.html#s-non-free)
2. Update a list of repositories

    ```shell
    sudo aptitude update
    ```
2. Upgrade your debian version into sid version

    ```shell
    sudo aptitude dist-upgrade
    ```
3. After it finished, reboot system

    ```shell
    sudo reboot
    ```

**Optional:** 

- For installing firmware for various drivers in consist of [non-free](https://www.debian.org/doc/debian-policy/ch-archive.html#s-non-free) packages or drivers using: 

```
sudo aptitude install firmware-linux
```
- For installing some thai font: 

```
sudo aptitude install xfonts-thai
```


