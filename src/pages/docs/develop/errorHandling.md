---
description: "Error Handling Guide"
layout: "guide"
title: "Error Handling"
category: "Develop"
weight: 2
---

# Error Handling

<article id="error-handling">

## Error Handling

It's important to understand how to handle errors when using Senna.js. The three error handling options in Senna.js are Invalid Status, Request Error, and Timeout.

>**Invalid Status:**
>
>Returns true for an invalid status. Any status code 2xx or 3xx is considered valid.

>**Request Error:**
>
>Returns true if there was an error with the request.

>**Timeout:**
>
>Returns true if the request timed out.

With just one simple funciton, you can control how your app handles those errors.


```
<script>
  var app = new senna.App();

  app.on('endNavigate', function(event) {
    if (event.error) {
      if (event.error.invalidStatus) {
        //do something to handle invalid status
      }

      if (event.error.requestError) {
        //do something to handle an error with the request
      }

      if (event.error.timeout) {
        //do something to handle a timeout
      }

      if (event.error.statusCode == 404) {
        //return "Page Not Found" message
      }
    }
  });
</script>
```


</article>