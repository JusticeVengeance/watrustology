"use strict";

var gulp = require('gulp'),
 sass = require('gulp-sass'),
 inject = require('gulp-inject'),
 wiredep = require('wiredep').stream,
 del = require('del'),
 mainBowerFiles = require('main-bower-files'),
 filter = require('gulp-filter'),
 concat = require('gulp-concat'),
 csso = require('gulp-csso'),
 maps = require('gulp-sourcemaps');
//@TODO break this task down and write down what each line does
// gulp.task('clean', function(cb){
//   del(['dist'], cb);
// });
//@TODO break this task down and write down what each line does
gulp.task('concatSass', function(){
  var injectAppFiles = gulp.src('src/styles/*.scss', {read: false});
  var injectGlobalFiles = gulp.src('src/global/*.scss', {read: false});

  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }

  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };

  var injectGlobalOptions = {
    transform: transformFilepath,
    starttag: '// inject:global',
    endtag: '// endinject',
    addRootSlash: false
  };

  return gulp.src('src/main.scss')
    .pipe(wiredep())
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(maps.init()) //this i added most recently
    .pipe(sass())
    .pipe(csso())
    .pipe(maps.write('./')) //this i added most recently 
    .pipe(gulp.dest('dist/styles'));
});
//@TODO break this task down and write down what each line does
gulp.task('vendors', function(){
  return gulp.src(mainBowerFiles())
    .pipe(filter('*.css'))
    .pipe(maps.init()) //remove this
    .pipe(sass())
    .pipe(concat('vendors.css'))
    //.pipe(csso())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dist/styles'));
});
//@TODO break this task down and write down what each line does
gulp.task('concatScripts', function() {
//  var jsSources = (['src/js', 'bower_components/jquery/dist/jquery.js'])
  return gulp.src('src/js/*.js')          
          .pipe(filter('*.js'))
          .pipe(maps.init())
          .pipe(concat('app.js'))
          .pipe(maps.write('./'))
          .pipe(gulp.dest('dist/js'));
});
//@TODO break this task down and write down what each line does
gulp.task('default', [/*'clean',*/ 'vendors', 'concatSass', 'concatScripts'], function(){
  var injectFiles = gulp.src(['dist/styles/main.css', 'dist/styles/vendors.css', 'dist/js/app.js']);

  var injectOptions = {
    addRootSlash: false,
    ignorePath: ['src', 'dist']
  };

  return gulp.src('src/index.html')
    .pipe(inject(injectFiles, injectOptions))
    .pipe(gulp.dest('dist'));
});