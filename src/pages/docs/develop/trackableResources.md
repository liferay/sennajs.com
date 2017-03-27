---
description: "Trackable Resources Guide"
layout: "guide"
title: "Trackable Resources"
category: "Develop"
weight: 3
---

# Trackable Resources

<article id="trackable-resources">

## Trackable Resources

Senna.js provides an easy way to manage external style and script resources on the page. When including resources in the `<head>`, they can be annotated with the `data-senna-track` attribute. This attribute can be set to `temporary` or `permanent`, which determines whether a resource remains on the page permanently or is removed after navigation;


```
<link data-senna-track="permanent" href="main.css" rel="stylesheet">
<script data-senna-track="temporary" src="main.js"></script>
```


</article>