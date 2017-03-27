---
description: "Screens Guide"
layout: "guide"
title: "Screens"
category: "Fully Functional"
weight: 1
---

# Screens

<article id="senna.HTMLScreen">

## Senna.HTMLScreen

Senna.js provides a special type of route handler, or interface, called `senna.Screen`. This in itself is not an active class, rather, it merely defines the screen interface methods and demonstrates how to use the API. The real magic happens when we extend `senna.Screen`. 

We knew this might be a little tricky at first, so we creating our own extention: `senna.HTMLScreen`- the default screen we created to make Senna.js ready to work straight out of the box.

</article>

<article id="senna.ScreenToWork">

## How can you put Senna.HTMLScreen to work?

We designed Senna to use `senna.HTMLScreen` as the default extension for all navigation so you can start using Senna without worrying about changing anything in your back end. But how do I start setting up my screens with `senna.HTMLScreen`? That's the thing, you already did! 

When you added `data-senna` and `data-senna-surface` to your document (see [Getting Started](/docs/intro/gettingStarted.html)), you told senna to route all the navigations through `senna.HTMLScreen`. 

</article>

<article id="moreScreens">

## Screens, screens, and more screens

We want you to know how Senna works so that you can fully trust it to empower your app. Bellow are the cycle logs for senna.Screen. Feel free to look at them or even inspect your own browser console during a link navigation using Senna.

You can also jump to [Controlling Surfaces](/docs/fullyFunctional/controllingSurfaces.html) to learn more about how to customize screens on your app.


```
Navigate to [/examples/mysite/pages/page1.html]
Create screen for [/examples/mysite/pages/page1.html]
Screen [screen_1408572719183] load
XHR finished loading: GET "http://localhost:8000/examples/mysite/pages/page1.html".
Screen [screen_1408572719183] add content to surface [header]
Screen [screen_1408572719183] add content to surface [content]
Screen [screen_1408572719183] flip
Screen [screen_1408572719183] activate
Navigation done
```


</article>

