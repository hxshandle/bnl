"use strict";
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var path = require('path');


gulp.task('compile-jade', function() {
  console.log('compile-jade');
  gulp.src('src/jade/**/[!^_]*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('www'));
});

gulp.task('compile-scss', function() {
  console.log('compile-scss');
  return sass('src/scss/')
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('www/css'));
});

gulp.task('concat-js', function() {
  return gulp.src([
    'src/js/main.js', 
    'src/js/_tabbar.js', 
    'src/js/_loading.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('www/js'));
});

gulp.task('move-js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('www/js'));
})

gulp.task('watch-jade', function() {
  gulp.watch('src/jade/**/*.jade', ['compile-jade']);
});

gulp.task('watch-scss', function() {
  gulp.watch('src/scss/**/*.scss', ['compile-scss']);
});

gulp.task('watch-js', function() {
  gulp.watch('src/js/**/*.js', ['move-js','concat-js']);
});

gulp.task('default', ['watch-jade', 'watch-scss', 'watch-js']);