---
layout: post
title: How to setup this blog?
tags: jekyll, blog, github-pages
---

I'm following [botbotbot 's blog](http://dev.im-bot.com/2014/06/16/how-to-set-up-this-blog/) to setup this blog. Some contents of this post is original from him.

> "This blog created by Jekyll that is ruby scripts to transforms plain text into static html website and blogs and hosted on Github Page that free hosting support Jekyll.This blog use Lanyon theme that based on Poole a minimal style of Jekyll." botbotbot said.

All of below steps are same as [botbotbot 's blog](http://dev.im-bot.com/2014/06/16/how-to-set-up-this-blog/), but I have used [Hyde](http://hyde.getpoole.com/) theme intead.

## Set up github page:
1. Follow setup guilde of Github page for more information about jekyll on github look at

    ```
    http://help.github.com/articles/using-jekyll-with-pages
    ```
2. Clone project from [Hyde](http://hyde.getpoole.com/).

    ```
    git clone https://github.com/poole/hyde.git
    ```
3. Configs jekyll in ```_config.yml```.

    ```yaml
    # Setup
    title:            Mildronize's blog
    tagline:          'mildronize-blog'
    description:      'My dev blog'
    url:              http://mildronize.github.io
    baseurl:          /
    paginate:         5
    ```
4. Make tags.md in root directory copy code from

    ```
     https://github.com/LanyonM/lanyonm.github.io/blob/master/tags.html
    ```
5. Let blog it.

### Note: 
If you got the message from jekyll build(or serve) ```Liquid Exception: Failed to get header.```, try to check your python version that is python 2.7.

See full instruction from [http://akenn.org/blog/Liquid-Exception-Jekyll/](http://akenn.org/blog/Liquid-Exception-Jekyll/)
