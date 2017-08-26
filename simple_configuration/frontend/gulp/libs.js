var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var path = require('./path');

gulp.task('libs:js', function() {
  var paths = [
    path.libs + '/angular/angular.min.js',
    path.libs + '/bootstrap/dist/js/bootstrap.min.js',
    path.libs + '/jquery/dist/jquery.min.js',
  ];

  return gulp.src(paths)
    .pipe(gulp.dest(path.build.libs.js));
});

gulp.task('libs:css', function() {
  var paths = [
    path.libs + '/bootstrap/dist/css/bootstrap.min.css'
  ];

  return gulp.src(paths)
    .pipe(gulp.dest(path.build.libs.css));
});

gulp.task('libs:requireJS', function() {
  return gulp.src([path.libs + '/requirejs/require.js'])
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename('require.min.js'))
    .pipe(gulp.dest(path.build.libs.js));
});

gulp.task('buildLibs', ['libs:js', 'libs:css', 'libs:requireJS']);