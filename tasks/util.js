var gutil = require('gulp-util');

module.exports.logError = function(err) {
  if (err.fileName) {
    gutil.log(gutil.colors.red('Error'), err.fileName, lookupErrorLine(err));
  } else {
    gutil.log(gutil.colors.red('Error'), err.message);
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
