const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.join(__dirname,'src','index.js'),
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'index.bundle.js'
   },
   mode: process.env.NODE_ENV || 'development',
   resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
   },
   devServer: {
      contentBase: path.join(__dirname,'src')
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']            
         },
         {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: true,
                  localIdentName: "[local]___[hash:base64:5]"
                }
              },
              {
                loader: "less-loader"
              }
            ]
         },
         {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
        }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: path.join(__dirname,'src','index.html')
      })
   ]
}