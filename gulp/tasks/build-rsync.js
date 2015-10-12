'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build-rsync', ['js', 'jade', 'sass', 'img-min', 'deploy-rsync']);
