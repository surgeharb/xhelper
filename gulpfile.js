/* Needed gulp config */
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('uglify', () => {
  return gulp.src([
      './xhelper.js'
    ])
    .pipe(concat({ path: 'xhelper.min.js' }))
    .pipe(uglify())
    .pipe(gulp.dest(__dirname));
})

gulp.task('default', ['uglify'], () => {});