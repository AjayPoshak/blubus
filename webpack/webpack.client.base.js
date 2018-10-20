const path = require('path'),
	webpack = require('webpack'),
	AssetsPlugin = require('assets-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	name: 'client',
	target: 'web',
	// May add cheap-module-source-map to devtool to generate source maps to prod builds
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../client/index.html'),
			title: 'Bus Booking in Africa'
		}),
		new AssetsPlugin({
			prettyPrint: true,
			filename: 'assets.json',
			path: path.resolve(__dirname, '../build')
		}),
		new webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV === 'production',
			__ENV__: JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
};
