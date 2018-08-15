
var path = require('path');
var TEST_DIR = path.join(__dirname, '/test/clientSpecs');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = undefined;

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'tests/**/*.js', watching: true }
    ],
    exclude: [
      'tests/**/*.swp'
    ],
    preprocessors: {
        'tests/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
