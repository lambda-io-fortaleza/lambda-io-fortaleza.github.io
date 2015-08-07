'use strict';

var gulp   = require('gulp')
    ,paths = require('../paths');

// Call Watch
module.exports = gulp.task('watch', function () {
  gulp.watch([paths.source.jade, paths.source.files.config], ['jade']);
  gulp.watch(paths.source.ls, ['ls']);
  gulp.watch(paths.source.sass, ['sass']);
  gulp.watch(paths.source.img, ['imagemin']);
});
