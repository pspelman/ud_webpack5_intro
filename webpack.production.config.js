const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'helloWorld': './src/helloWorld.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'production',
  optimization: {
    splitChunks: {chunks: "all"}
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'helloWorld.html',
      chunks: ['helloWorld'],
      title: 'Hello world with my handlebars',
      template: "src/page-template.hbs",
      description: 'some Handlebars descriptive stuff',
      // minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'My little Kiwi',
      template: "src/page-template.hbs",
      description: 'some Kiwi with Handlebars',
      // minify: false
    })
  ]
}