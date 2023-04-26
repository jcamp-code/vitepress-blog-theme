# Post Front Matter

Each post at the top of its Markdown file can have frontmatter set. You can use any frontmatter provided by VitePress as well. These are the ones that VitePress Blog deals with.

```yaml
---
date: 2022-12-01
title: 'Markdown: The Language of the Web'
author: Robot Editor
category: Tutorial
next: false
tags:
  - vue
  - web development
---
```

## date

The post's date, in yyyy-mm-dd format.

## title

The post's title

## author

Specify the author for the post. Additional details can set in the authors file. A default author can be set in config.
This should match the name in one of the [author](./frontmatter-author) files to ensure additional information shown.

## category

Specify what category you want for the post, limited to one. A default category can be set in config.

## tags

Tags for this post, can be listed comma separated or individually
