var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.base.config.js')

config.devtool = "#eval-source-map"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-local.json'}),
])

config.module.rules.push(
  {
	 test: /\.jsx?$/,
	 exclude: /(node_modules)/,
	 use:  [
		  {
			loader: 'react-hot-loader', 
		  }, 
		  { 
			loader: 'babel-loader',
		  }
		]
  }
)

module.exports = config
