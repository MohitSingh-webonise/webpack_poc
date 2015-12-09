module.exports = {
  entry: {
    main: './entryPoints/es5.js',
    html: './index.html'
  },

  output: {
    path: './build',
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8149' },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
