var gutil = require('gulp-util');
var lazypipe = require('lazypipe');
var plugins = require('gulp-load-plugins')();

module.exports.buildCss = lazypipe()
  .pipe(plugins.autoprefixer, [
    'android >= 4.4',
    'bb >= 10',
    'chrome >= 34',
    'ff >= 30',
    'ie >= 8',
    'ie_mob >= 10',
    'ios >= 7',
    'opera >= 23',
    'safari >= 7'
    ])
  .pipe(plugins.csso);

module.exports.buildJavaScript = lazypipe()
  .pipe(plugins.uglify, {
    preserveComments: 'some'
  });

module.exports.logError = function(err) {
  if (err.fileName) {
    gutil.log(gutil.colors.red('Error'), err.fileName, lookupErrorLine(err));
  } else if (err.message) {
    gutil.log(gutil.colors.red('Error'), err.message);
  } else {
    gutil.log(gutil.colors.red('Error'), err);
  }
  return this;
};

var lookupErrorLine = function(err) {
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
};
