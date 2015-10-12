'use strict';

var gulp = require('gulp');

// Build and Deploy
module.exports = gulp.task('build', ['js', 'jade', 'sass', 'img-min', 'deploy-rsync']);
