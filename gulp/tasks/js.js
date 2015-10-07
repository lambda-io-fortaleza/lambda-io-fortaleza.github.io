'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,gutil   = require('gulp-util')
    ,paths   = require('../paths')
    ,uglify  = require('gulp-uglify')
    ,concat  = require('gulp-concat');

// Call Concat and Uglify
module.exports = gulp.task('js', function () {
  return gulp.src(paths.source.files.js)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
});
