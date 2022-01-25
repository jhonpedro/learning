const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.join(__dirname, 'src', 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name]-bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
	},
	watchOptions: {
		poll: 1000,
	},
	plugins: [new HtmlWebpackPlugin()],
}

module.exports = config
