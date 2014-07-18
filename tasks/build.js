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
    .pipe(plugins.csso())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-html', ['build-css', 'build-javascript'], function() {
  return gulp.src('app/**/*.html')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.useref.assets({
      searchPath: 'dist'
    }))
    .pipe(plugins.if('*.js', plugins.uglify({
      preserveComments: 'some'
    })))
    .pipe(plugins.if('*.css', plugins.csso()))
    .pipe(plugins.useref.restore())
    .pipe(plugins.useref())
    .pipe(plugins.if('*.html', plugins.minifyHtml()))
    .pipe(gulp.dest('dist'));
});

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
    .pipe(plugins.if('*.css', plugins.csso()))
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

gulp.task('build-javascript', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(plugins.plumber(util.logError))
    .pipe(plugins.uglify({
      preserveComments: 'some'
    }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('build-templates', function() {
  return gulp.src('app/**/*.soy')
    .pipe(plugins.soynode({
      loadCompiledTemplates: true,
      renderSoyWeb: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['build-images', 'build-icons', 'build-css', 'build-javascript', 'build-html', 'build-templates'], cb);
});
