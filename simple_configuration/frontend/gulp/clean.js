var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var path = require('./path');

gulp.task('clean', function() {
    return gulp.src([
            path.build.base
        ])
        .pipe(rimraf({
            read: false
        }));
});