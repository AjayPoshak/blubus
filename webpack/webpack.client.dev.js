const path = require('path'),
	webpack = require('webpack'),
	merge = require('webpack-merge'),
	WriteFilePlugin = require('write-file-webpack-plugin'),
	webpackCommon = require('./webpack.client.base');

module.exports = merge(webpackCommon, {
	devtool: 'inline-source-map',
	entry: ['webpack-dev-server/client?http://localhost:8080/', path.resolve(__dirname, '../client/index.js')],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../build/client'),
		publicPath: 'http://localhost:8080/build/client/'
	},
	devServer: {
		hot: true,
		port: 8080,
		noInfo: true, // only errors & warns on hot reload
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		contentBase: path.join(__dirname, '../build/client'),
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new WriteFilePlugin()],
	optimization: {
		splitChunks: false,
		runtimeChunk: {
			name: 'manifest'
		}
	}
});
