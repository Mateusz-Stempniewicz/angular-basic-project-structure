var path = {
  app: './app',
  html: './app/html',
  js: './app/js',
  sass: './app/sass',
  resources: './app/resources',
  libs: './node_modules',
  build: {
    base: './build',
    html: './build/html',
    js: './build/js',
    css: './build/css',
    resources: './build/resources',
    libs: {
      js: './build/libs/js',
      css: './build/libs/css'
    }
  }
};

module.exports = path;