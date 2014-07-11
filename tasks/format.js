'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('format-javascript', function() {
  return gulp.src(['app/scripts/**/*.js'])
  .pipe(plugins.esformatter())
  .pipe(gulp.dest('app/scripts'))
  .pipe(plugins.size({
    title: 'format-javascript'
  }));
});

gulp.task('format', ['format-javascript']);
