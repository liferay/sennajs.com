(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces(['body']);
    app.addRoutes([
      new senna.Route('/', senna.HtmlScreen),
      new senna.Route('/about', senna.HtmlScreen),
      new senna.Route('/docs', senna.HtmlScreen)
    ]);

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
    app.on('endNavigate', function(event) {
      ga('set', 'page', event.path);
      ga('send', 'pageview');
    });
  });
}());
