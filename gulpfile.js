'use strict';

var gulp = require('gulp');

gulp.task('default', ['browser-sync','watch']);

require('require-dir')('./gulp_tasks');