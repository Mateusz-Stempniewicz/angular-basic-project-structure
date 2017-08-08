var gulp = require('gulp');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var stripDebug = require('gulp-strip-debug');

var path = require('./path');

var buildJavaScript = function(production) {
  var javaScriptFiles = gulp.src(path.js + '/**/*.js');

  if (production) {
    javaScriptFiles = javaScriptFiles.pipe(uglify({
        preserveComments: 'license'
      }).on('error', util.log))
      .pipe(stripDebug());
  }

  javaScriptFiles = javaScriptFiles.pipe(gulp.dest(path.build.js));
  return javaScriptFiles;
};

gulp.task('js:dev', function() {
  return buildJavaScript(false);
});

gulp.task('js:production', function() {
  return buildJavaScript(true);
});