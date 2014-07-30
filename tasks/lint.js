'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./lib/flavor').generateFlavoredConfig();

gulp.task('lint', function() {
  return gulp.src(['tasks/**/*.js', config.globScript])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});
