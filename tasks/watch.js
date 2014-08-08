'use strict';

var gulp = require('gulp');
var config = require('./lib/ProductFlavors').generateFlavoredConfig();

gulp.task('watch', ['serve'], function(cb) {
  gulp.watch(config.globHtml, ['build-html']);
  gulp.watch(config.globIcon, ['build-icons']);
  gulp.watch(config.globImage, ['build-images']);
  gulp.watch(config.globScript, ['build-scripts']);
  gulp.watch(config.globScss, ['build-compass']);
  gulp.watch(config.globStyle, ['build-styles']);
  gulp.watch(config.globTemplate, ['build-templates']);
});
