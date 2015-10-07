'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'sass', 'img-min', 'watch', 'browser-sync']);
