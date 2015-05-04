# mildronize.github.io
my blog

## Page
**Notes** is a collection of post which is "notes" category

## Categories
- articles
- templates
- notes

## Layouts
- **default**: the parent of other layouts
- **page**: page layout, it is located at root
- **post**: regular post, quick post, everything to write

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
