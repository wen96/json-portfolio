'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var paths = {
  dist: 'dist/',
  vendor: 'assets/lib/vendor'
};

// BOWER -----------------------------------

var bower = require('gulp-bower2');
var wiredep = require('wiredep').stream;

gulp.task('bower-install', function() {
  return bower();
});
gulp.task('bower-wiredep', function(){
  gulp.src('*.html')
    .pipe(wiredep({
      directory: paths.vendor
    }))
    .pipe(gulp.dest('.'));
  });
gulp.task('bower', function(cb){
  return runSequence(
    'bower-install',
    'bower-wiredep',
    cb);
});

gulp.task('default', function(callback){
  return runSequence(
              'bower',
              callback);
});
