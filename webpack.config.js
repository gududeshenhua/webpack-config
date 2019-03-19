const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // JS 执行入口文件
  entry: ["babel-polyfill","./main.js"], 
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },{
		  test:/\.js$/, 
		  use:['babel-loader']
	  }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
	new webpack.HotModuleReplacementPlugin()//该插件能让热更新替换使用
  ],
  devtool:'source-map' ,
  devServer:{ 
	  contentBase:path.join(__dirname,"dist"), //服务器默认地址-
	  compress:true,
	  port:9000, 
	  overlay:true, 
	  hot:true,
	  inline:true //自动刷新配置
  }
};
