var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');

var env = process.env.NODE_ENV || 'development';


gulp.task('css', function(){
  return sass('src/sass/main.scss', {
      sourcemap: true,
      compass: true
  })
  .on('error', function (err) {
      console.error('Error!', err.message);
  })
  .pipe(autoprefixer({
      browsers: ['last 10 versions']
  }))
  .pipe(sourcemaps.write())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('app/assets/css'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('coffee', function(){
  gulp.src('src/coffee/**/*.coffee')
    .pipe(plumber())
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/assets/js/'));
});

gulp.task('js_vendor', function(){
  return gulp.src('src/vendor/js/**/*.js')
    .pipe(gulp.dest('app/assets/js/vendor'));
});

gulp.task('fonts', function(){
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('app/assets/fonts'));
});

gulp.task('images', function(){
  return gulp.src('src/images/**')
    .pipe(gulp.dest('app/assets/img'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/coffee/**/*.coffee', ['coffee', browserSync.reload]);
  gulp.watch('src/vendor/js/**/*.scss', ['js_vendor', browserSync.reload]);
  gulp.watch('src/images/**', ['images']);
});

gulp.task('browser_sync', function(){
  var files = [
    'app/assets/css/**/*.css',
    'app/assets/js/**/*.js'
  ];

  browserSync({
    proxy: "http://mysite.dev"
  });

});

gulp.task('default', [
  'fonts',
  'css',
  'coffee',
  'js_vendor',
  'watch',
  'browser_sync',
  'images'
]);
