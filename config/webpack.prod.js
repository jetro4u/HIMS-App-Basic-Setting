const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
//const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/myapp/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myapp',
      filename: 'remoteEntry.js',
      exposes: {
        './MyApp': './src/bootstrap',
      }
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
