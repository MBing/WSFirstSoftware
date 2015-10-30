---
title: README
author: its
date: 2013-04-30
template: article.jade
---

Welcome to your new blog! This is the default blog template with RSS, pagination and an archive. There are other templates available -- run `wintersmith new --help` to list them.

## _Repeat after me:_ This is my blog. There are many like it, but this one is mine. My blog is my best friend. It is my life. I must master it as I must master my life. My blog, without me, is useless. Without my blog, I am useless.

Good, now, the directory structure of your blog is as follows:

```
├── config.json               <- site configuration
├── contents
│   ├── about.md
│   ├── archive.json
│   ├── articles              <– each article has its own directory
│   │   ├── another-test
│   │   │   └── index.md
│   │   ├── bamboo-cutter
│   │   │   ├── index.md
│   │   │   └── taketori_monogatari.jpg
│   │   ├── hello-world
│   │   │   └── index.md
│   │   ├── markdown-syntax
│   │   │   └── index.md
│   │   └── red-herring
│   │       ├── banana.png
│   │       └── index.md
│   ├── authors               <- author metadata, check author.jade
│   │   ├── baker.json
│   │   └── the-wintersmith.json
│   ├── css
│   │   └── main.css
│   └── feed.json
├── plugins
│   └── paginator.coffee      <- paginator plugin
├── templates
│   ├── archive.jade
│   ├── article.jade
│   ├── author.jade
│   ├── feed.jade
│   ├── index.jade
│   └── layout.jade
└── views
    └── articles.coffee       <- view that lists articles
```
