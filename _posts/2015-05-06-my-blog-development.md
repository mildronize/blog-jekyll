---
layout: post
title: My blog development
description: Tools, structure, extension and everything for building this blog
tags: [jekyll, github-page, angularjs]
category: notes
permalink: notes/my-blog-dev
---

## Main Tools
- [GitHub Page](https://pages.github.com)
- [Jekyll](http://jekyllrb.com)
- [Hyde](http://hyde.getpoole.com/)

## Tools
- [angularJS](https://angularjs.org/) for search page
- [Expanding Search Bar](http://tympanus.net/Tutorials/ExpandingSearchBar/)
- [Font Awesome](http://fontawesome.io)

## Structure
[see README.MD in this repository](https://github.com/mildronize/mildronize.github.io/blob/master/README.md)

## Timeline
- 01 Oct 2014 &raquo; Register [GitHub Page](https://pages.github.com)
- [02 May 2015][t01] &raquo; Clone [Hyde](http://hyde.getpoole.com/) theme
- [03 May 2015][t02] &raquo; Create a my [first post]({{site.url}}articles/2015/05/03/how-to-setup-this-blog/) and fill my profile
- [03 May 2015][t03] &raquo; Add [Note page], [read more](#structure)
- [04 May 2015][t04] &raquo; Add social icons using [Font Awesome](fontawesome.io) at sidebar
- [04 May 2015][t05] &raquo; Add [google analytics](http://www.google.com/analytics/) at header
- [04 May 2015][t06] &raquo; Add showcase layout, [read more](#structure)
- [05 May 2015][t07] &raquo; Add [Search page]
- [05 May 2015][t08] &raquo; Add [search bar](#tools), and binding url and search bar on [Search page]
- [06 May 2015][t09] &raquo; Add this note
- [06 May 2015][t10] &raquo; [Add hover anchor links to header on GitHub Pages using Jekyll](http://milanaryal.com/2015/adding-hover-anchor-links-to-header-on-github-pages-using-jekyll)

[t01]: https://github.com/mildronize/mildronize.github.io/commit/a48c4b03033496c16e1eeb6377f7a2fb6fa79586
[t02]: https://github.com/mildronize/mildronize.github.io/commit/58f941a5a9d0066c5ea939aaab98f1adef291647
[t03]: https://github.com/mildronize/mildronize.github.io/commit/5b51c7691acb01beec8df5f3704f57d3da272922
[t04]: https://github.com/mildronize/mildronize.github.io/commit/8f8d30957145551e13cec173019a8aeb19efe5e4
[t05]: https://github.com/mildronize/mildronize.github.io/commit/b4d40e52dae31f81b242ff689ad3fc0ae93f0b71
[t06]: https://github.com/mildronize/mildronize.github.io/commit/8604dd5504b7cd794da59923a36878b43df48cc3
[t07]: https://github.com/mildronize/mildronize.github.io/commit/831f4fb466d0f9cd513a45c299b946ca2f398aed
[t08]: https://github.com/mildronize/mildronize.github.io/commit/45272e4bb72d121d144827c6075a2a0bd48cd764
[t09]: https://github.com/mildronize/mildronize.github.io/commit/8f83e6963f2a70b0979ff4be8a85541a19e34594
[t10]: https://github.com/mildronize/mildronize.github.io/commit/ca7df4be719fd2b9891cbea53fce88722196f419

[Search page]: {{site.url}}search/
[Note page]: {{site.url}}notes/

## Next Plans
- Add html header for friendly with search engine such as keywords, description, etc.
- Build a tools for auto generate prototype of post (YAML header)
  - Convert to title string to lowercase of string and dash.
  - Generate simple YAML file.
  - It's called 'Tools' page.
- Fix Related post to show only the posts that have related tags
