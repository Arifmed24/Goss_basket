const Path = require('path');
const Webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const sourcePath = Path.join(__dirname, '../../app');
const buildPath = Path.join(__dirname, '../../dist');

module.exports = (options) => {
  const webpackConfig = {
    devtool: options.devtool,
    entry: [
      Path.join(__dirname, '../../app/index'),
    ],
    output: {
      path: buildPath,
      filename: `./scripts/${options.jsFileName}`,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: sourcePath,
          query: {
            extends: Path.join(__dirname, '../.babelrc'),
          },
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          include: sourcePath,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction
            ? 'production'
            : 'development'),
        },
      }),
      new HtmlWebPackPlugin({
        template: 'app/index.html',
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
        },
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          // cache: true,
          // parallel: true,
          // uglifyOptions: {
          //   compress: false,
          //   ecma: 6,
          //   mangle: true
          // },
          sourceMap: true,
        }),
      ],
    },
    devServer: {
      contentBase: Path.join(__dirname, '../../dev_mode/'),
      port: 3000,
      progress: true,
      open: true,
      historyApiFallback: true,
      stats: 'errors-only',
    },
  };

  if (options.isProduction) {
    webpackConfig.plugins.push(new MiniCssExtractPlugin({
      filename: `./styles/${options.cssFileName}`,
    }));

    webpackConfig.module.rules.push(
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'less-loader',
        ],
      },
    );
  } else {
    webpackConfig.module.rules.push(
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
    );
  }

  return webpackConfig;
};
