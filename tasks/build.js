'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var util = require('./util');

gulp.task('build-compass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.compass({
      config_file: 'src/styles/.compass',
      css: 'dist/styles',
      image: 'dist/images',
      logging: true,
      sass: 'src/styles'
    }))
    .pipe(util.buildCss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-css', function() {
  return gulp.src('src/styles/**/*.css')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildCss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-icons', function() {
  return gulp.src('src/images/icons/*.svg')
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
    .pipe(util.buildCss())
    .pipe(util.buildImages())
    .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('build-images', function() {
  return gulp.src('src/images/**/*.{gif,jpg,jpeg,png,svg}')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildImages())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build-javascript', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(plugins.plumber(util.logError))
    .pipe(util.buildJavaScript())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('build-templates', function() {
  return gulp.src('src/**/*.soy')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.soynode({
      loadCompiledTemplates: true,
      renderSoyWeb: true
    }))
    .pipe(util.buildHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['build-images', 'build-icons', 'build-javascript'], 'build-css', 'build-compass', 'build-html', 'build-templates', cb);
});
