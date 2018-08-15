
var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = undefined;

module.exports = function(config) {
  config.set({

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    reporters: ['progress', 'coverage'],

    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'client/src/components/*.jsx',
      { pattern: 'tests/**/*.js'}
    ],
    exclude: [
      'tests/**/*.swp'
    ],
    preprocessors: {
        'client/src/components/*.jsx': ['webpack', 'coverage'],
        'tests/**/*.js': ['webpack'] // DO NOT ADD test in test coverage
    },
    webpack: webpackConfig,

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}


// reference - https://www.npmjs.com/package/karma-coverage






