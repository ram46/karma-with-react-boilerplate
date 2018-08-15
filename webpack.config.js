var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var SPEC_DIR = path.join(__dirname, '/tests/clientSpecs');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: path.join(__dirname, 'node_modules'),
        include : [SRC_DIR, SPEC_DIR],
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};