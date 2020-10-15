webpack = require('webpack');

module.exports = {
  // mode: "develop",
  entry: `${__dirname}/../src/js/index.js`,
  output: {
    path: `${__dirname}/../public/assets/js/`,
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                '@babel/preset-env',
              ]
            }
          }
        ],

      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};