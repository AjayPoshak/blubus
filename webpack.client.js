const path = require('path'),
	webpack = require('webpack'),
	AssetsPlugin = require('assets-webpack-plugin'),
	BrotliPlugin = require('brotli-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	WriteFilePlugin = require('write-file-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

/**
 * Plugins for dev environment
 */
const devPlugins = [
	new webpack.HotModuleReplacementPlugin(),
	new WriteFilePlugin(),
	new HtmlWebpackPlugin({
		template: './client/index.html',
		title: 'Bus Booking in Africa'
	}),
	new AssetsPlugin({
		prettyPrint: true,
		filename: 'assets.json',
		path: path.resolve(__dirname, 'build')
	}),
	new webpack.DefinePlugin({
		__DEV__: true,
		__ENV__: JSON.stringify(process.env.NODE_ENV || 'development')
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
	name: 'client',
	target: 'web',
	// May add cheap-module-source-map to devtool to generate source maps to prod builds
	devtool: isProd ? '' : 'inline-source-map',
	entry: ['webpack-dev-server/client?http://localhost:8080/', './client/index.js'],
	output: {
		filename: isProd ? '[name].[chunkhash].js' : '[name].bundle.js',
		path: path.resolve(__dirname, 'build/client'),
		publicPath: 'http://localhost:8080/build/client/'
	},
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
	},
	devServer: {
		hot: true,
		port: 8080,
		noInfo: true, // only errors & warns on hot reload
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		contentBase: path.join(__dirname, 'build/client'),
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
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
		},
		runtimeChunk: {
			name: 'manifest'
		}
	}
};
