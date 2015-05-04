---
layout: post
title: Awesome responsive HTML5 templates
description: collection of beautiful responsive HTML5 templates
tags: [web, design, template, html5, css3, responsive]
category: notes
permalink: notes/awesome-responsive-templates
---

## Web design sites & blogs
- [pixelhint](http://pixelhint.com/): Photoshop step by step for web design, a lot of awesome responsive HTML5 template demo & source code

## My favorite templates
<ul class="my-favorite-templates">
   {% for post in site.categories['templates'] %}{% if post.title != null %}
     <li itemscope>
       <a href="{{ post.url }}">
         {{ post.title }}
       </a>
       : {{post.description}}
       <img src="{{ post.image }}">
       <a class="pure-button button-small" href="{{ post.home }}"><i class="fa fa-home"></i>Home</a>
       <a class="pure-button button-small" href="{{ post.demo }}"><i class="fa fa-play"></i>Demo</a>
       <a class="pure-button button-small" href="{{ post.source }}"><i class="fa fa-code"></i>Source code</a>
     </li>
   {% endif %}{% endfor %}
 </ul>
