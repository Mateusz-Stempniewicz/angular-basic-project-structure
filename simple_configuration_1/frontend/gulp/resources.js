var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var flatten = require('gulp-flatten');

var path = require('./path');

// images

var buildImages = function(production) {
  var paths = [
    path.resources + '/**/*.jpg',
    path.resources + '/**/*.gif',
    path.resources + '/**/*.svg',
    path.resources + '/**/*.png',
    '!' + path.resources + '/favicon.ico'
  ];
  var images = gulp.src(paths);

  if (production) {
    images = images.pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({ plugins: [{ removeViewBox: false }] })
    ]));
  }

  return images.pipe(gulp.dest(path.build.resources));
};

gulp.task('images:favicon', function() {
  return gulp.src(path.resources + '/favicon.ico')
    .pipe(flatten())
    .pipe(gulp.dest(path.build.resources));
});

gulp.task('images:dev', ['images:favicon'], function() {
  return buildImages(false);
});

gulp.task('images:production', ['images:favicon'], function() {
  return buildImages(true);
});

// fonts

gulp.task('fonts:Lato', function() {
  return gulp.src(path.resources + '/font/**/*.ttf')
    .pipe(gulp.dest(path.build.resources));
});

gulp.task('fonts', ['fonts:Lato']);