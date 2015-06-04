---
layout: post
description: 
tags: []
category: articles
---

**Optional:** Setup `sudo` into your user

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

- For installing some non-open-source code using: `sudo aptitude install firmware-linux`
- For installing some thai font: 
    `sudo aptitude install xfonts-thai`


