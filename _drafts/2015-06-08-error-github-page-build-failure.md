---
layout: post
tags: [jekyll, github-page]
category: articlces
---
## Situation
1. my jekyll page is running my site locally.
2. I got an email "[mildronize.github.io] Page build failure"
3. I ask the problem to supportor

    > Dear GitHub,

    > I don't understand why my file contains syntax errors. Because I can run normally this file in local (using jekyll serve)
    > Can you show me more information about this errors or suggest anything.

    > Thank you so much

    > Regards,
    > mildronize
    
4. He responed me

    > Hi Mildronize,
    >  
    >  You should be running your site locally exactly as per these instructions:
    >  
    >  https://help.github.com/articles/using-jekyll-with-pages
    >  
    >  I cloned your repository and reproduced the issue locally by using a Gemfile and running:
    >  
    >  bundle exec jekyll build
    >  
    >  Which produced the error details:
    >  
    >  Conversion error: Jekyll::Converters::Markdown encountered an error converting '_posts/2015-06-08-upgrade-debian-to-sid.md'.
    >  ...
    >  ClassNotFound('no lexer for alias %r found' % _alias) ClassNotFound: no lexer for alias 'shell' found
    >  
    >  Cheers,
    >  James


## solution

> You can't use `shell` as a lexer name. Try `bash`. 
<https://github.com/jekyll/jekyll/issues/1183>