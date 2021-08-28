---
title: I need to vent
description: Github Actions has cost me a good night's sleep and I am not happy.
date: 2021-08-28
tags:
  - Eleventy/11ty
  - Github Pages
  - Netlify
---

## The Calm Before the Storm

There exists a beautiful Github feature called Github Pages. As long as it's enabled in the repository settings, it will automatically read your `index.html` and host your site. It's very easy to do for static sites like <b>my webpage 1.0</b>, and its free! 

But what happens when you have a more complicated site, like a React App or an SSG? Not to fear! GitHub has a beautiful feature called GitHub Actions. A properly written GitHub Action will automate the building of your site and deploy it. This is life saving when your site needs pre-installed `npm` packages to build successsfully, like Eleventy.

## The Journey Begins

Shouldn't be a problem. The <b>my webpage 2.0</b> is already written. I just need to whip up that Github Action real quick, add it to the repository, and BAM! Success. There are already extensive guides and [pre-built scripts](https://github.com/peaceiris/actions-gh-pages) floating around out there, you just have to tinker with them to fit your requirements. I never wrote a Github Action before so it'll be a fun learning experience.

The tinkering begins. 

Fast forward. It's 02:00. Six hours of tinkering later. 30+ commits deep. Eyes are bloodshot. I'm four loops deep into my Spotify Discover Weekly. It's not even a good Discover Weekly this week either, adding to my suffering and pain. 

All of the tests pass. Just like the previous 10 commits, theres a big, fat, green checkmark on my screen letting me know I did a good job. But when I check the domain, I get a nice '404 wut r u looking for its not here get rekt lol' message from GitHub. Not only is my site not up, but because of that check mark, I don't even know where to look to find the error or bug. I keep looking. It has to be on my end. Pathing error maybe? The site runs fine locally...

Nothing works. I become disillusioned. Out of desperation, I discover a weird site called Netlify. These Netlify clowns are claiming that the service they provide will do exactly what my Github Action will do. For free, no less! Snake oil salesmen. Can't trust 'em.

Unfortunately by this time, it has transitioned from late-late-night to early-early-moring and I need sleep. I link my GitHub and my repository and literally two clicks later, they have my site up. 

## Emotional Battery

I am devastated and relieved at the same time. Sleep deprivation probably has a compounding effect on these emotions. I feel as if I spent 6 hours hiking three quarters up a mountain, only to realize there's a gondola that takes you from basecamp to summit in 15 minutes. This experience has probably taught me some life lesson. Let me sleep on it.



