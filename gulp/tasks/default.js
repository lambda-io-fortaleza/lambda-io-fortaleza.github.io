'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['ls', 'jade', 'sass', 'imagemin', 'watch', 'browser-sync']);
