'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('build-icons', function() {
  return gulp.src(['app/images/icons/*.svg'])
    .pipe(plugins.iconfontCss({
      fontName: 'icons',
      fontPath: '../images/icons/',
      path: 'app/styles/icons.css.template',
      targetPath: '../../styles/icons.css'
    }))
    .pipe(plugins.iconfont({
      fontName: 'icons',
      normalize: true
    }))
    .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('build-images', function() {
  return gulp.src('app/images/**/*')
    .pipe(plugins.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['build-images', 'build-icons'], cb);
});
