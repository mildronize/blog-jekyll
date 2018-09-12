# mildronize.github.io (https://mildronize.com)
[![Build Status](https://travis-ci.org/mildronize/mildronize.github.io.svg?branch=jekyll)](https://travis-ci.org/mildronize/mildronize.github.io)

my blog

### My blog devlopment

stacks

- browsersync
- docker
- jekyll 
- unison (for docker)
 
prerequisites: `unison`, `docker`, `docker-compose`, `yarn`


## dev live preview by browsersync
```
yarn dev
```

## dev with docker
```
yarn dev:docker-init
yarn dev:docker
```

## build js
```
yarn build:webpack
```

> build manually

```
docker-compose up jekyll-build
```


## TODO
- add webpack 4

## Page
**Notes** is a collection of post which is "notes" category

## Categories
- articles
- templates
- notes
- projects

## Layouts
- **default**: the parent of other layouts
- **page**: page layout, it is located at root
- **post**: regular post, quick post, everything to write
    - Enable table of contents: add `toc` parameter into header
    ```yaml
    toc: true
    ```

- **showcase**: extra layout for displaying template, project script or anything want to show
    - There are 3 buttons: *Home*, *Demo*, *Source code*
    - extra parameter in yaml header of each file
        - **description**: brief explanation
        - **image**: screenshot of showcase
        - **home**: link to home of showcase
        - **demo**: link to demo of showcase
        - **source**: link to source code of showcase
    - example the post uses showcase layout

    ```yaml
    ---
    layout: showcase
    category: templates
    ---
    ```

## Structure
**/_posts** collects 3 categories:
- articles: quick post
- templates: use showcase layout

    ```yaml
    ---
    layout: showcase
    category: templates
    ---
    ```
- notes: flexible page, usually use *permalink* and *description*

    ```yaml
    ---
    layout: post
    category: notes
    permalink: notes/__note_name__
    ---
    ```
    - Feature the note: add `featured` parameter into header
    ```yaml
    featured: true
    ```

## Public Directory
### css
- Theme
    - hyde.css
    - mildronize.css
    - poole.css
    - syntax.css
- Font
    - boon-font.css
- Pure css
    - forms-min.css
    - buttons-min.css

- Icon
    - font-awesome-4.3.0.min.css
- Extension
    - expanding-search-bar.css

### js
- Expanding Search Bar
    - uisearch.js
    - classie.js
- Seach page
    - angular.min.js
