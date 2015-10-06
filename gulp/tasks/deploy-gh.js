'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,paths   = require('../paths')
    ,ghPages = require('gulp-gh-pages');

// Deploy to GitHub Pages
module.exports = gulp.task('deploy-pages', function () {
  return gulp.src(paths.build.html)
  .pipe(ghPages());
});
