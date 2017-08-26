var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var path = require('./path');

var buildSass = function(production) {
    var sassFiles = gulp.src([path.sass + '/**/*.scss']);

    sassFiles = sassFiles.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer());

    if (production) {
        sassFiles = sassFiles.pipe(cssnano())
            .pipe(rename({
                suffix: '.min'
            }));
    }
    sassFiles = sassFiles.pipe(gulp.dest(path.build.css));

    return sassFiles;
};

gulp.task('sass:dev', function() {
    return buildSass(false);
});

gulp.task('sass:production', function() {
    return buildSass(true);
});