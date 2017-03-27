---
description: "UI Feedback"
layout: "guide"
title: "UI Feedback"
category: "Develop"
weight: 1
---

# UI Feedback

<article id="default-ui-feedback">

###### If you have large content on your page and it takes time to load, you can give your users feedback so they know the content is coming.

## 1. Add UI Feedback

Senna comes with working UI feedback straight out of the box. All you have to do is add `<div class="senn-loading-bar"></div>` to the top of your `<body>`.


```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>UI Feedback</title>
    <link rel="shortcut icon" href="http://sennajs.com/images/favicon.ico">
    <script src="../../build/globals/senna-debug.js"></script>
  </head>
  <body data-senna data-senna-surface>
    <!-- Add Senna UI Feedback -->
    <div class="senn-loading-bar"></div>
    <!-- Body content -->
  </body>
</html>
```
 

</article>

<article id="customize-feedback">
  
## 2. Customize using CSS

Now that you have added the default UI Feedback, you can edit the style of the animation inside of `senna/src/senna.css`.


```
.senna-loading .senna-loading-bar {
  animation: shift-rightwards 1s ease-in-out infinite;
  animation-delay: .4s;
  display: block;
}

.senna-loading-bar {
  transform: translateX(100%);
  
  /* Change color of feedback bar */
  background: #2fa4f5;

  display: none;
  height: 2px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
}
```
 

</article>