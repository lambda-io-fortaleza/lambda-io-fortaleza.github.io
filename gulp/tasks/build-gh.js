'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build-gh', ['js', 'jade', 'sass', 'img-min', 'deploy-gh']);
