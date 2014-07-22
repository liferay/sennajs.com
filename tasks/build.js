'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var util = require('./util');

gulp.task('build-css', ['build-images'], function() {
  return gulp.src('app/styles/**/*.{css,scss}')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.if('*.scss', plugins.compass({
      config_file: 'app/styles/.compass',
      css: 'dist/styles',
      image: 'dist/images',
      logging: false,
      sass: 'app/styles'
    })))
    .pipe(util.buildCss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-html', ['build-css', 'build-javascript'], function() {
  return gulp.src('app/**/*.html')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-icons', function() {
  return gulp.src('app/images/icons/**/*.svg')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.iconfontCss({
      fontName: 'icons',
      fontPath: '../images/icons/',
      path: 'app/styles/.icons',
      targetPath: '../../styles/icons.css'
    }))
    .pipe(plugins.iconfont({
      fontName: 'icons',
      normalize: true
    }))
    .pipe(util.buildCss())
    .pipe(util.buildImages())
    .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('build-images', function() {
  return gulp.src('app/images/*.{gif,jpeg,png,svg}')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildImages())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build-javascript', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildJavaScript())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('build-templates', function() {
  return gulp.src('app/**/*.soy')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.soynode({
      loadCompiledTemplates: true,
      renderSoyWeb: true
    }))
    .pipe(util.buildHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['build-images', 'build-icons', 'build-css', 'build-javascript', 'build-html', 'build-templates'], cb);
});
