var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
  return gulp.src(['src/**/*.js', '!src/app/client/**/*'])
    .pipe(babel({
        modules: 'amd'
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('copy', function () {
  return gulp.src(['src/**', '!src/**/*.js'])
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel', 'copy']);
