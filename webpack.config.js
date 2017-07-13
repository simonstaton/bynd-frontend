const path = require('path');

module.exports = {
  entry: './demo/demo.jsx',
  output: {
    path: path.resolve(__dirname, "demo"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  }
};
