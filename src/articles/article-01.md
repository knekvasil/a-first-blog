---
title: Why use Eleventy?
description: A quick overview on why this website was built using Eleventy.
date: 2021-08-19
tags:
  - Eleventy/11ty
---

## Motivation

React is the BMOC framework when it comes to building webpage UIs, so it's usually the primary weapon of choice when creating a new website. While React has many benefits, I decided that using React for this tiny website would be a tad overkill. I don't have a need for some flashy, super-dynamic UI just to display a few webpages with text and maybe a photo. A static HTML/CSS webpage could do 90% of legwork twice as fast, but c'mon... its 2021! There are many tools out there that do the job while offering the same React-level of flexibility. Thats where Eleventy (or 11ty) comes in.


Eleventy is a static site generator (SSG) built on Node. SSGs take your page data (HTML, CSS, Javascript, etc.), assigns it to a template, in our case we're using Nunjucks, then spits out the static site. Unlike React, all of this is done at build-time. There is no server receiving calls after each page request like most webapps. This makes SSGs quicker and more secure than regular dynamic webpages, but at a cost of scalability and user-interactivity. But don't get confused, content on SSGs can still be dynamic. For example, content can be grabbed through API calls or even client-side .js files. Long story short, If you want to make a small or primarily text-based site for reasons personal or otherwise, SSGs are probably your best bet. For anything else, go the dynamic webapp route and choose React.

