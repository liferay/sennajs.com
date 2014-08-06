'use strict';

var gutil = require('gulp-util');
var lazypipe = require('lazypipe');
var plugins = require('gulp-load-plugins')();
var config = require('./ProductFlavors').generateFlavoredConfig();

module.exports = {
  buildCss: buildCssPipeline(),
  buildHtml: buildHtmlPipeline(),
  buildHtmlResources: buildHtmlResourcePipeline(),
  buildJavaScript: buildJavaScriptPipeline(),
  buildMarkdown: buildMarkdownPipeline(),
  logError: logError
};

function buildCssPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.css', plugins.autoprefixer(config.autoprefixer).pipe(plugins.csso()));
    });
}

function buildHtmlPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.html', plugins.minifyHtml());
    });
}

function buildHtmlResourcePipeline() {
  return lazypipe()
    .pipe(plugins.usemin, {
      assetsDir: 'dist',
      css: ['concat'],
      js: ['concat']
    })
    .pipe(buildCssPipeline())
    .pipe(buildJavaScriptPipeline());
}

function buildJavaScriptPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.js', plugins.uglify({
        preserveComments: 'some'
      }));
    });
}

function buildMarkdownPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.md', plugins.markdown());
    });
}

function logError(err) {
  if (err.fileName) {
    gutil.log(gutil.colors.red('Error'), err.fileName, lookupErrorLine(err));
  } else if (err.message) {
    gutil.log(gutil.colors.red('Error'), err.message);
  } else {
    gutil.log(gutil.colors.red('Error'), err);
  }
}

function lookupErrorLine(err) {
  var line = '0';
  var position = '0';

  if (err.message) {
    var match = err.message.match(/line #?(\d+):?(\d+)?/i);
    if (match) {
      if (match[1]) {
        line = match[1];
      }
      if (match[2]) {
        position = match[2];
      }
    }
  }

  return line + ':' + position;
}
