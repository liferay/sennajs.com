'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var util = require('./util');

gulp.task('build-icons', function() {
  return gulp.src('app/images/icons/*.svg')
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
    .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('build-images', function() {
  return gulp.src('app/images/**')
    .pipe(plugins.imagemin({
      interlaced: true,
      progressive: true
    }))
    .pipe(gulp.dest('dist/images'));
});

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
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['build-images', 'build-icons', 'build-css'], cb);
});
