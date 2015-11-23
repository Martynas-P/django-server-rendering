const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-2', 'react']
    }))
    .pipe(gulp.dest('server'));
});

gulp.task('watch', ['build'], () => {
  watch(['src/**/*.js'], () => {
    gulp.start('build');
  });
});