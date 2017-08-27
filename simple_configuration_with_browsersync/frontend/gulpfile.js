const gulp = require('gulp');
const gulpSync = require('gulp-sync')(gulp);
const requireDir = require('require-dir');

requireDir('./gulp/tasks');
browserSync = require('browser-sync').create();

const paths = require('./gulp/config/paths');

gulp.task('default', ['serve']);

gulp.task('build', gulpSync(['styles', 'scripts', 'images', 'copy', 'markup']));

gulp.task('watch', ['styles:watch', 'scripts:watch', 'images:watch', 'copy:watch', 'markup:watch']);

gulp.task('serve', ['build', 'watch'], () => {
  browserSync.init({
    server: paths.dist.dir
  });
  gulp.watch([paths.dist.markup, paths.dist.script, paths.dist.styles]).on("change", browserSync.reload);
});