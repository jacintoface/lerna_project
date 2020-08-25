const path = require('path');

exports.resolve = (...route) => {
  return path.join.apply(null, [__dirname, '../src', ...route]);
};

exports.cssLoaders = (...loaders) => {
  return [{
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  }, ...loaders];
};
