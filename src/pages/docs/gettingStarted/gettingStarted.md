---
description: "Installing Senna Guide"
layout: "guide"
title: "Installing Senna"
category: "Getting Started"
weight: 1
---

# Installing Senna

<article id="getting-the-project">

## Getting the Project

To get started, [download the project](https://github.com/liferay/senna.js/archive/master.zip). This project includes an initial version of the project plus all of the Senna.js examples (source code dependencies that will help you get started).

Unzip the project somewhere on your local drive. While you're working, you'll need a basic HTTP server to serve your pages because Senna will not be able to fully run if you simply open the files of your app in a browser. If you already have a local server ready to run, then skip to the [Start using Senna.js in your app](#start-using).

</article>

<article id="http-server">

## Setting up a local server

If you don't already have a server, <a href="https://www.npmjs.com/package/http-server" target="_blank">http-server</a> is a great solution. The easiest way to install `http-server` is via npm by running the following command in the command line.


```
npm install http-server -g
```


This will install `http-server`. To run your local server, go to the directory that contains your app and run:


```
http-server
```


Your app is now live at <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.


</article>

<article id="start-using">

## Start using Senna.js in your app

Setting up Senna.js is as easy as linking Senna.js to your document and adding `data-senna` and `data-senna-surface` as attributes to your `<body>` element. 


```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Turbolinks</title>
  <link rel="shortcut icon" href="http://sennajs.com/images/favicon.ico">
  <!-- Link Senna to document -->
  <script src="../../build/globals/senna-debug.js"></script>
</head>
  <!-- Add Senna attributes -->
<body data-senna data-senna-surface>
  <!-- Senna surface -->
    <a href="/pages/page1.html">Page 1</a>
    <a href="/pages/page2.html">Page 2</a>
  <!-- End of Senna surface -->
</body>
</html>
```


Now your page is already faster! By adding `data-senna` and `data-senna-surface`, we are telling the browser to replace just the body on each navigation and keep the rest of the resources instead of completly reloading a new page. 

</article>