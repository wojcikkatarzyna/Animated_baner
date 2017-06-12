var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass',function() {
  return gulp.src('scss/*')
  .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){

  browserSync.init({
        server: "./"
    });

  gulp.watch('scss/**/*.scss',['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("**/*.css").on('change', browserSync.reload);
})
