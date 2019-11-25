"use strict";

var gulp = require('gulp'),
 sass = require('gulp-sass'),
 inject = require('gulp-inject'),
 wiredep = require('wiredep').stream,
 mainBowerFiles = require('main-bower-files'),
 filter = require('gulp-filter'),
 concat = require('gulp-concat'),
 uglify = require('gulp-uglify'),
 rename = require('gulp-rename'),
 maps = require('gulp-sourcemaps');

gulp.task('concatSass', function(){
  var injectAppFiles = gulp.src('assets/styles/*.scss', {read: false}); //custom scss files for the entire app
  var injectComponentFiles = gulp.src('components/**/*.scss', {read: false});
  var injectSharedFiles = gulp.src('shared/**/*.scss', {read: false});  //scss files for the shared partials of the app
  var injectGlobalFiles = gulp.src('assets/global/*.scss', {read: false});//scss files for overwriting framworks i.e. bootstrap

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

  var injectComponentOptions = {
    transform: transformFilepath,
    starttag: '// inject:components',
    endtag: '// endinject',
    addRootSlash: false
  };

  var injectSharedOptions = {
    transform: transformFilepath,
    starttag: '// inject:shared',
    endtag: '// endinject',
    addRootSlash: false
  };

    gulp.src('src/main.scss')
    .pipe(wiredep())
    .pipe(inject(injectAppFiles, injectAppOptions)) 
    .pipe(inject(injectComponentFiles, injectComponentOptions))
    .pipe(inject(injectSharedFiles, injectSharedOptions))
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(maps.init()) //this maps the css file for browser debugging
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(maps.write('./')) //this maps the css file for browser debugging
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('concatVendors', function(){
  gulp.src(mainBowerFiles())
  .pipe(filter('*.css'))
  .pipe(maps.init()) //this maps the css file for browser debugging
  .pipe(sass())
  .pipe(concat('vendors.css'))
  .pipe(maps.write('./')) //this maps the css file for browser debugging
  .pipe(gulp.dest('assets/styles'));
});

gulp.task('concatScripts', function(){
  gulp.src([
    'assets/js/route.js',
    'shared/**/*.js',
    'components/**/*.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('assets/js/dist'));
});

gulp.task("minifyScripts", function(){
  gulp.src("assets/js/dist/app.js")
  .pipe(maps.init()) //this maps the css file for browser debugging
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(maps.write('./')) //this maps the css file for browser debugging
  .pipe(gulp.dest('assets/js/dist'));
});

gulp.task('watch', function(){
  gulp.watch('assets/**/*.scss', ['concatSass']);
  gulp.watch('shared/**/*.scss', ['concatSass']);
  gulp.watch('components/**/*.scss', ['concatSass']);
  gulp.watch('assets/**/*.js', ['concatScripts']);
  gulp.watch('shared/**/*.js', ['concatScripts']);
  gulp.watch('components/**/*.js', ['concatScripts']);
  gulp.watch('shared/**/*.html', ['build']);
  gulp.watch('components/**/*.html', ['build']);
  gulp.watch('src/*.html', ['build']);
});

gulp.task('build', ['concatSass', 'concatVendors', 'concatScripts', 'minifyScripts'], function(){
  var injectFiles = gulp.src(['assets/styles/vendors.css','assets/styles/main.css','assets/js/jquery.min.js','assets/js/bootstrap.min.js','assets/js/angular.min.js','assets/js/modernizr-custom.js','assets/js/angular-ui-router.min.js','assets/js/angulartics.min.js','assets/js/angulartics-ga.min.js','assets/js/dist/app.js']);
  var injectOptions = {
    addRootSlash: false,
    ignorePath: ['src']
  };

    gulp.src('src/index.html')
    .pipe(inject(injectFiles, injectOptions))
    .pipe(gulp.dest('./'));
});

gulp.task("default", ["build"]);