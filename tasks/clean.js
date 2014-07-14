'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  })
  .pipe(plugins.rimraf());
});
