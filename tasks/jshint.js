'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('jshint', function() {
  return gulp.src(['tasks/*.js', 'app/scripts/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});
