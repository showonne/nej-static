const path = require('path')
const webpack = require('webpack')

module.exports = {
  "mode": "development",
  entry: {
    index: './entry.js'
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  output: {
    environment: {
      arrowFunction: false
    }
  },
  // output: {
  //   library: {
  //     name: 'nejRequire',
  //     type: 'umd'
  //   }
  // },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude(pathname) {
          const rule = /nej\-commonjs\/base\/(klass)\.js/.test(pathname)
          rule && console.log('match', pathname)
          return rule
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          {
            loader: 'imports-loader',
            options: {
              wrapper: 'window'
            }
          }
        ]
      },
      // {
      //   test: /nej\-commonjs/,
      //   use: [
      //     {
      //       loader: 'imports-loader',
      //       options: {
      //         wrapper: 'window'
      //       }
      //     }
      //   ],
      //   exclude(pathname) {
      //     return /nej\-commonjs\/base\/global\.js/.test(pathname)
      //   }
      // },
      {
        test: /\.(css|html)/,
        use: [
          {
            loader: 'cus-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        DEBUG: JSON.stringify(false), // 是否为 debug 模式
        CMPT: JSON.stringify(true)    // 是否开启兼容模式，即 `NEJ.C('xxx')`
    })
  ],
  optimization: {
    moduleIds: 'natural',
    chunkIds: 'natural',
    removeEmptyChunks: true
  }
}