'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var util = require('./lib/util');
var config = require('./lib/flavor').generateFlavoredConfig();

gulp.task('build-compass', function() {
  return gulp.src(config.globScss)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.compass({
      config_file: 'src/styles/.compass',
      css: 'dist/styles',
      image: 'dist/images',
      logging: true,
      sass: 'src/styles'
    }))
    .pipe(plugins.if(config.optimizeStyle, util.buildCss()))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-styles', function() {
  return gulp.src(config.globStyle)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.if(config.optimizeStyle, util.buildCss()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-html', function() {
  return gulp.src(config.globHtml)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.if(config.optimizeHtmlResource, util.buildHtmlResources()))
    .pipe(plugins.if(config.optimizeHtml, util.buildHtml()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-icons', function() {
  return gulp.src(config.globIcon)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.iconfontCss({
      fontName: 'icons',
      fontPath: '../images/icons/',
      path: 'src/styles/.icons',
      targetPath: '../../styles/icons.css'
    }))
    .pipe(plugins.iconfont({
      fontName: 'icons',
      normalize: true
    }))
    .pipe(plugins.if(config.optimizeStyle, util.buildCss()))
    .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('build-images', function() {
  return gulp.src(config.globImage)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.if(config.optimizeImage, plugins.imagemin({
      interlaced: true,
      progressive: true
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-scripts', function() {
  return gulp.src(config.globScript)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.if(config.optimizeScript, util.buildJavaScript()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-templates', function() {
  return gulp.src(config.globTemplate)
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.soynode({
      loadCompiledTemplates: true,
      renderSoyWeb: true
    }))
    .pipe(plugins.if(config.optimizeHtmlResource, util.buildHtmlResources()))
    .pipe(plugins.if(config.optimizeHtml, util.buildHtml()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence('build-images', 'build-icons', 'build-scripts', 'build-styles', 'build-compass', 'build-html', 'build-templates', cb);
});
