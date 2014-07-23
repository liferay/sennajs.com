var gutil = require('gulp-util');
var lazypipe = require('lazypipe');
var plugins = require('gulp-load-plugins')();
var config = require('../config.json');

var environment = config.environments[config.defaultEnvironment];

module.exports = {
  buildCss: environment.minify ? buildCssPipeline() : gutil.noop,
  buildHtml: environment.minify ? buildHtmlPipeline() : plugins.prettify,
  buildImages: environment.minify ? buildImagesPipeline() : gutil.noop,
  buildJavaScript: environment.minify ? buildJavaScriptPipeline() : gutil.noop,
  logError: logError
};

function buildCssPipeline() {
  var browsers = [
    'android >= 4.4',
    'bb >= 10',
    'chrome >= 34',
    'ff >= 30',
    'ie >= 8',
    'ie_mob >= 10',
    'ios >= 7',
    'opera >= 23',
    'safari >= 7'
  ];
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.css',
        plugins.autoprefixer(browsers)
          .pipe(plugins.csso()));
    });
}

function buildImagesPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.{gif,jpeg,jpg,png,svg}',
        plugins.imagemin({
          interlaced: true,
          progressive: true
        }));
    });
}

function buildHtmlPipeline() {
  return lazypipe()
    .pipe(plugins.useref.assets, {
      searchPath: 'dist'
    })
    .pipe(plugins.useref.restore)
    .pipe(plugins.useref)
    .pipe(buildCssPipeline())
    .pipe(buildJavaScriptPipeline())
    .pipe(function() {
      return plugins.if('*.html', plugins.minifyHtml());
    });
}

function buildJavaScriptPipeline() {
  return lazypipe()
    .pipe(function() {
      return plugins.if('*.js',
        plugins.uglify({
          preserveComments: 'some'
        }));
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
  return this;
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
