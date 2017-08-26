var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');

var path = require('./path');

var buildHtml = function(production) {
  var htmlFiles = gulp.src(path.html + '/**/*.html');

  if (production) {
    htmlFiles = htmlFiles.pipe(htmlMin({
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true
    }));
  }

  return htmlFiles.pipe(gulp.dest(path.build.html));
}

gulp.task('html:dev', function() {
  return buildHtml(false);
});

gulp.task('html:production', function() {
  return buildHtml(true);
});