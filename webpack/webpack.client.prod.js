const path = require('path'),
	merge = require('webpack-merge'),
	BrotliPlugin = require('brotli-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	webpackCommon = require('./webpack.client.base');

module.exports = merge(webpackCommon, {
	devtool: '',
	entry: path.resolve(__dirname, '../client/index.js'),
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../build/client'),
		publicPath: 'build/client/'
	},
	plugins: [
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			sourceMap: true
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}
	}
});
