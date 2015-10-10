'use strict';

// Necessary Plugins
var gulp         = require('gulp')
    ,paths       = require('../paths')
    ,nightwatch  = require('gulp-nightwatch');

// Run E2E tests
module.exports = gulp.task('tests', function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.source.files.tests
    }));
});
