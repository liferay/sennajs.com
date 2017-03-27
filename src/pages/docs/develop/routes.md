---
description: "Routes Guide"
layout: "guide"
title: "Routes"
category: "Develop"
weight: 6
---

# Routes

<article id="Routes">

## Routes

As seen on the previous example, you can register `senna.Route` on `senna.App`. A route is a tuple containing a path and a handler function:


```
var route = new senna.Route('/path/file.html', function() {
  // Fires when a link with path /path/file.html is clicked.
});
```


The path also supports strings, regular expressions or functions.


```
var route = new senna.Route(/.*/, function() {
  // Fires when any link is clicked.
});
```



```
var resolvePath = function() {
  return '/path/file.html';
}
var route = new senna.Route(resolvePath, function() {
  // Fires when a link with path /path/file.html is clicked.
});
```


From the handler callback you can update parts of your page, though it is hard to grow your application from a simple callback like this. For that reason, Senna.js provides `senna.Screen`. A screen is nothing more than a special type of route handler that provides an asynchronous lifecycle. The following section will detail how `senna.Screen` can help you manage your surfaces.

</article>