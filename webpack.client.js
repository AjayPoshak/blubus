const path = require('path'),
	AssetsPlugin = require('assets-webpack-plugin'),
	BrotliPlugin = require('brotli-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	devtool: isProd ? 'inline-source-map' : '',
	entry: './client/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build/client'),
		publicPath: 'build/client'
	},
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
	},
	devServer: {
		port: 8080,
		compress: true,
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'build/client')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			title: 'Bus Booking in Africa'
		}),
		new AssetsPlugin({
			prettyPrint: true,
			filename: 'assets.json',
			path: path.resolve(__dirname, 'build')
		}),
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
		}) // eslint-disable-line
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
		}
	}
};
