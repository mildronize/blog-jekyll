---
# original from https://github.com/LanyonM/lanyonm.github.io/blob/master/tags.html
layout: page
title: Tags
description: "An archive of posts sorted by tag."
permalink: tags/
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
<!-- site_tags: {{ site_tags }} -->
{% assign tag_words = site_tags | split:',' | sort %}
<!-- tag_words: {{ tag_words }} -->
<div id="tags">

<!-- https://www.gungorbudak.com/blog/2017/12/08/tags-cloud-sorted-by-post-count-for-jekyll-blogs-without-plugins/ 
https://dev.to/rpalo/jekyll-tags-the-easy-way
-->

{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: -10000 }}###{{ tag[0] | replace: ' ', '##' }}###{{ tag[1].size }}
  {% endfor %}
{% endcapture %}
{% assign sorted_tags = tags | split: ' ' | sort %}
{% for sorted_tag in sorted_tags %}
    {% assign items = sorted_tag | split: '###' %}
    {% assign tag = items[1] | replace: '##', ' ' %}
    {% assign count = items[2] | plus: 0 %}
    {% if count > 1 %}
        {% assign size = count | times: 2 | plus: 10 %}
    {% else %}
        {% assign size = 12 %}
    {% endif %} 
    <span style="font-size: {{ size }}px">
        <a class="tag-link" href="#{{ tag | cgi_escape }}" rel="tag">{{ tag }}</a> {% if count > 1 %} ({{ count }}) {% endif %} 
    </span>
{% endfor %}

  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
  <ul class="posts">
    {% for post in site.tags[this_word] %}{% if post.title != null %}
      <li itemscope>
        <span class="entry-date">
          <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
        </span> &raquo;
        <a href="{{ site.baseurl }}{{ post.url }}">
          {{ post.title }}
        </a>
      </li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
</div>
