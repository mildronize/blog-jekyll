---
layout: post
title: Awesome responsive HTML5 templates
description: collection of beautiful responsive HTML5 templates
tags: [web, design, template, html5, css3, responsive, photography, art, white, dark, black]
category: notes
permalink: notes/awesome-responsive-templates/

data: [
  {
    title: Squadfree template,
    description: Free HTML5 Responsive Website Template for creative,
    image: "http://bootstraptaste.com/wp-content/uploads/2014/08/sqfree.jpg",
    home: "http://bootstraptaste.com/squadfree-free-bootstrap-template-creative/",
    demo: "http://bootstraptaste.com/theme/squadfree/",
    source: "http://bootstraptaste.com/download-theme/142/"
  }
  ,
  {
    title: Magnetic template,
    description: Free HTML5 Responsive Photography & Art work Template in white style,
    image: "http://pixelhint.pixelhint.netdna-cdn.com/wp-content/uploads/2014/05/home-portfolio.jpg",
    home: "http://pixelhint.com/magnetic-free-html5-responsive-photography-website-template/",
    demo: "http://pixelhint.com/demo/magnetic",
    source: "http://pixelhint.pixelhint.netdna-cdn.com/wp-content/uploads/2014/05/magnetic.zip"
  }
  ,
  {
    title: Brushed Template,
    description: Free HTML5 Responsive Photography & Art work Template in dark style,
    image: "http://upic.me/i/gn/8capture.jpg",
    home: "http://www.alessioatzeni.com/blog/brushed-template/",
    demo: "http://www.themes.alessioatzeni.com/html/brushed/index.html",
    source: "http://themes.alessioatzeni.com/html/brushed/brushed.zip"
  }
]
---

## Web design sites & blogs
- [pixelhint](http://pixelhint.com/): Photoshop step by step for web design, a lot of awesome responsive HTML5 template demo & source code

## My favorite templates
<ul class="my-favorite-templates">
   {% for post in page.data %}{% if post.title != null %}
     <li itemscope>
       <h3>{{ post.title }}</h3>
       {{post.description}}
       <img alt="{{post.title}}" src="{{ post.image }}">
       <a class="pure-button button-small" href="{{ post.home }}"><i class="fa fa-home"></i>Home</a>
       <a class="pure-button button-small" href="{{ post.demo }}"><i class="fa fa-play"></i>Demo</a>
       <a class="pure-button button-small" href="{{ post.source }}"><i class="fa fa-code"></i>Source code</a>
     </li>
   {% endif %}{% endfor %}
 </ul>
