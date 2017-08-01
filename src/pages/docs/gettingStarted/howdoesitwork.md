---
description: "How It Works"
layout: "guide"
title: "How It Works"
category: "Getting Started"
weight: 2
---

<article id="step1">

## 1. Initial page load

When using Senna.js, your app will load all the background content, like css and script files, on the initial page load. They will be cached and used to speed up future navigation.

</article>

<article id="step2">

## 2. User clicks link to another page

When the user clicks a link to another page of your app, Senna.js begins to work its magic, first by populating a new URL even though the page did not fully reload. Everything feels normal to your user because Senna.js supports the [native browser capabilities](/docs/intro/capabilities.html).

</article>

<article id="step3">

## 3. Request is made for matching screen

The request is made for the new page but instead of pulling down a completely new package of elements from the server, Senna.js utilizes the cached resources that are shared across both pages.

</article>

<article id="step4">

## 4. Screen paints surfaces with new content

Quickly, Senna.js finds what content is new to the requested page and paints only the new content to the screen's surfaces, preventing your site from wasting time and bandwidth to download redundant resources.

</article>

<article id="thateasy">

## And voilà! Your app is now blazing fast!

Not only is Senna.js a powerful, easy-to-use tool, it also provides plenty of control so you can tailor it to your project. Keep reading through the docs to learn more about how you can leverage the power of Senna.js in your app.

</article>
