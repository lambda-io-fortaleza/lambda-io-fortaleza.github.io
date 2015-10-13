'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,paths   = require('../paths');

// Deploy to GitHub Pages
module.exports = gulp.task('deploy-master', function () {
  return gulp.src('./www/**/*')
  .pipe(gulp.dest('./'))
});
