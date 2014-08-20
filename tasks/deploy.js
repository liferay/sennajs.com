'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;

gulp.task('install-bower', function (cb) {
  spawn('bower', ['install'], {
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('install-npm', function (cb) {
  spawn('npm', ['install'], {
    cwd: 'src/public/vendor/senna',
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('run-api', function (cb) {
  spawn('gulp', ['docs'], {
    cwd: 'src/public/vendor/senna',
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('clean-modules', function() {
  return gulp.src('src/public/vendor/senna/node_modules')
    .pipe(plugins.rimraf());
});

gulp.task('copy-api', function () {
  return gulp.src('src/public/vendor/senna/docs/**')
    .pipe(gulp.dest('dist/public/api'));
});

gulp.task('copy-build', function () {
  return gulp.src('src/public/vendor/senna/build/**')
    .pipe(gulp.dest('dist/public/build'));
});

gulp.task('copy-examples', function () {
  return gulp.src('src/public/vendor/senna/examples/**')
    .pipe(gulp.dest('dist/public/examples'));
});

gulp.task('replace-bower', function () {
  return gulp.src('dist/public/examples/**/*.html')
    .pipe(plugins.replace('bower_components', 'vendor'))
    .pipe(gulp.dest('dist/public/examples'));
});

gulp.task('gh-pages', function () {
  return gulp.src('dist/public/**/*')
    .pipe(plugins.ghPages());
});

gulp.task('deploy', ['clean'], function(cb) {
  runSequence('build', 'install-bower', 'install-npm', 'run-api', 'clean-modules',
    'copy-api', 'copy-build', 'copy-examples', 'replace-bower', 'gh-pages', cb);
});
