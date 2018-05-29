const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './client/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build/client'),
		publicPath: 'build/client',
	},
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			title: 'Bus Booking in Africa',
		}),
	],
};
