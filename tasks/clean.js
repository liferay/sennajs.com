'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('clean', function() {
  return gulp.src('dist').pipe(plugins.rimraf());
});
