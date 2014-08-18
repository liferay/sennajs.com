'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./lib/ProductFlavors').generateFlavoredConfig();

gulp.task('lang', function() {
  return gulp.src(config.globTemplate)
    .pipe(plugins.soynode.lang({
      outputFile: config.extractedMessagesFilepath
    }));
});
