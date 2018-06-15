const path = require('path'),
	AssetsPlugin = require('assets-webpack-plugin'),
	BrotliPlugin = require('brotli-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
console.log('process.env.NODE_ENV ', process.env.NODE_ENV);
/**
 * Plugins for dev environment
 */
const devPlugins = [
	new HtmlWebpackPlugin({
		template: './client/index.html',
		title: 'Bus Booking in Africa'
	}),
	new AssetsPlugin({
		prettyPrint: true,
		filename: 'assets.json',
		path: path.resolve(__dirname, 'build')
	})
];
/**
 * Plugins for production environment
 */
const prodPlugins = [
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
];
/**
 * Merging plugins on the basis of env
 */
const pluginList = isProd ? [...devPlugins, ...prodPlugins] : devPlugins;

module.exports = {
	devtool: isProd ? '' : 'inline-source-map',
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
	plugins: pluginList,
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
