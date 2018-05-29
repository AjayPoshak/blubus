const path = require('path'),
	nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './ssr/index.js',
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build/server'),
	},
	target: 'node', // Tells webpack not to touch any built-in modules like fs or path
	externals: [nodeExternals()], // Not to bundle node_modules at backend, should be included runtime
};
