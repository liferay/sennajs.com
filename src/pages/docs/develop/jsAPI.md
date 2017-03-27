---
description: "JavaScript APIs"
layout: "guide"
title: "JavaScript APIs"
category: "Develop"
weight: 5
---

# JavaScript APIs

<article id="js-api">

## Full control using JavaScript APIs

It's easy to create your own screen whenever you want.

Let's say for example that you need a screen that injects the content "Header changed" and "Body changed" on the respective surface elements when you navigate to the path `/foo`.



```
function FooScreen() {
  FooScreen.base(this, 'constructor');
}
senna.inherits(FooScreen, senna.Screen);

FooScreen.prototype.cached = true;

FooScreen.prototype.getSurfaceContent = function(surfaceId) {
  switch(surfaceId) {
    case 'header':
      return 'Header changed';
    case 'body':
      return 'Body changed';
  }
};
```




```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Senna - hello</title>
  <!-- Senna optional styles -->
  <link rel="stylesheet" href="../build/senna.css">
  <!-- Senna -->
  <script src="../build/senna-debug.js"></script>
</head>
<body>
  <!-- Content surface -->
  <div id="header">
    Header
  </div>
  <div id="body">
    Body
  </div>
  <!-- End of content surface -->
  <script>
    var app = new senna.App();
    app.addSurfaces(['header', 'body']);
    app.addRoutes(new senna.Route('/foo', FooScreen));
  </script>
</body>
</html>
```


</article>