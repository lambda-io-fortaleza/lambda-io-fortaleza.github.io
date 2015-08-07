'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build', ['ls', 'jade', 'sass', 'imagemin', 'deploy']);
