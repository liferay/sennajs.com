'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var util = require('./lib/util');

gulp.task('format-css', function() {
  return gulp.src('app/styles/**/*.{css,scss}')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({
      indent: '  '
    }))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('format-javascript', function() {
  return gulp.src(['tasks/*.js', 'app/scripts/**/*.js'])
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.esformatter())
    .pipe(plugins.if('**/tasks/*.js', gulp.dest('tasks')))
    .pipe(plugins.if('**/app/scripts/**/*.js', gulp.dest('app/scripts')));
});

gulp.task('format', ['format-css', 'format-javascript']);
