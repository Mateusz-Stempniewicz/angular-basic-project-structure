var gulp = require('gulp');
var path = require('./path');

require('./html');
require('./javascript');
require('./sass');
require('./resources');

gulp.task('watch', function() {
  gulp.watch(path.html + '/**/*.html', ['html:dev']);
  gulp.watch(path.js + '/**/*.js', ['js:dev']);
  gulp.watch(path.sass + '/**/*.scss', ['sass:dev']);
  gulp.watch(path.resources + '/**/*', ['images:dev', 'fonts']);
});