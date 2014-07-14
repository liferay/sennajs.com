'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('format-css', function() {
  return gulp.src('app/styles/**/*.css')
    .pipe(plugins.autoprefixer([
      'android >= 4.4',
      'bb >= 10',
      'chrome >= 34',
      'ff >= 30',
      'ie >= 8',
      'ie_mob >= 10',
      'ios >= 7',
      'opera >= 23',
      'safari >= 7'
    ]))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({
      indent: '  '
    }))
    .pipe(gulp.dest('app/styles'))
});

gulp.task('format-javascript', function() {
  return gulp.src(['app/scripts/**/*.js'])
  .pipe(plugins.esformatter())
  .pipe(gulp.dest('app/scripts'))
});

gulp.task('format', ['format-css', 'format-javascript']);
