var gulp = require('gulp');
var runSequence = require('run-sequence');

var path = require('./path');

require('./clean');
require('./html');
require('./javascript');
require('./sass');
require('./resources');
require('./libs');

var buildProject = function(production, callback) {
  if (production) {
    runSequence('clean', 'html:production', 'js:production', 'sass:production', 'images:production', 'fonts', 'buildLibs');
  } else {
    runSequence('clean', 'html:dev', 'js:dev', 'sass:dev', 'images:dev', 'fonts', 'buildLibs');
  }
};

gulp.task('build:dev', function(callback) {
  buildProject(false, callback);
});

gulp.task('build:production', function(callback) {
  buildProject(true, callback);
});