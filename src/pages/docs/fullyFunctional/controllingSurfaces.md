---
description: "Controlling Surfaces"
layout: "guide"
title: "Controlling Surfaces"
category: "Fully Functional"
weight: 2
---

# Controlling Surfaces

<article id="data-attributes-explained">

## How do you make sure Senna does exactly what you want?

By default, Senna is setup to route every link to `senna.HTMLScreen`- the out-of-the-box screen that senna provides to handle navigation so you don't have to change anything in your existing back end. 

For most situations, this will be the ideal use of Senna because it is smart enough to know how to paint your surfaces with the new information when you navigate. 

But what if you want Senna to only be active during certain navigations? We make it easy for you to control what screens of your app interact with Senna and which ones do not. We call this [Controlling Data Attributes](#taking-control).

</article>

<article id="taking-control">

## Taking control of your surfaces

Once you have Senna fully running (see [Getting Started](/docs/intro/gettingStarted.html) if you are not sure), you can choose to limit Senna by controlling the data attributes. 

In order to limit your whole app from routing through `senna.HTMLScreen`, you can add `<link rel="senna-route">` to the `head` of your document. This will tell Senna to **only** route your specified paths through `senna.HTMLScreen`. Your document would look like this:


```
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Senna - blazing fast apps</title>
  <link rel="stylesheet" href="../build/senna.css">
    <!-- Controlling Data Attributes -->
  <link rel="senna-route" href="/examplePage1.html" type="senna.HtmlScreen">
  <script src="../build/senna-debug.js"></script>
</head>
<body data-senna>
  <a href="/pages/examplePage1.html">Page 1</a>
  <a href="/pages/examplePage2.html">Page 2</a>
  <div id="my-awesome-surface" data-senna-surface>
    <p>Default content of my website.</p>
  </div>
</body>
</html>
```


You can also use <a href="https://en.wikipedia.org/wiki/Regular_expression" target="_blank">RegEx</a> to select multiple paths with one string.


```
<link rel="senna-route" href="examplePage1.html" type="senna.HtmlScreen">
<link rel="senna-route" href="regex:examplePage[1-9].html" type="senna.HtmlScreen">
```


</article>



