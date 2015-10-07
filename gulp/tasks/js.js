'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,gutil   = require('gulp-util')
    ,paths   = require('../paths')
    ,uglify  = require('gulp-uglify')
    ,concat  = require('gulp-concat')
    ,series  = require('stream-series');

// Call Concat and Uglify
module.exports = gulp.task('js', function () {
  return series(
    gulp.src('src/scripts/ryejs.js')
    ,gulp.src('src/scripts/components.js')
    ,gulp.src('src/scripts/smooth-scroll.js')
    ,gulp.src('src/scripts/component.form-label-dynamic.js')
    ,gulp.src('src/scripts/component.google-analytics.js')
    ,gulp.src('src/scripts/component.navigation.js')
    ,gulp.src('src/scripts/component.navigation-mobile.js')
    ,gulp.src('src/scripts/konami-code.js')
    ,gulp.src('src/scripts/boot.js')
  )

  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(gulp.dest(paths.build.js))

});
