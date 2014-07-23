'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['build-html']);
  gulp.watch('src/**/*.soy', ['build-templates']);
  gulp.watch('src/images/**/*.{gif,jpeg,jpg,png,svg}', ['build-images']);
  gulp.watch('src/images/icons/*.svg', ['build-icons']);
  gulp.watch('src/scripts/**/*.js', ['build-javascript']);
  gulp.watch('src/styles/**/*.css', ['build-css']);
  gulp.watch('src/styles/**/*.scss', ['build-compass']);
});
