'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,paths   = require('../paths')
    ,autoprefixer = require('gulp-autoprefixer')
    ,combinemq = require('gulp-combine-media-queries')
    ,sass  = require('gulp-sass');

// Call SASS
module.exports = gulp.task('sass', function () {
  return gulp.src(paths.source.files.sass)
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer( { browsers: [ '> 1%' ] } ))
    .pipe(combinemq())
    .pipe(gulp.dest(paths.build.css))
});
