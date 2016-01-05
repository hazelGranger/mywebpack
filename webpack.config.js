var SwigWebpackPlugin = require('swig-webpack-plugin');
module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + "/outscripts",
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080' + '/outscripts/',

	},
	module: {
		loaders: [
			{ 
				test: /\.less$/, 
			  	loader: 'style!css!less' 
			}, // use ! to chain loaders
      		{ 
      			test: /\.css$/, 
      			loader: 'style-loader!css-loader' 
      		}
		]
	},
	plugins: [new SwigWebpackPlugin({
		template: 'partial.html'
	})]
}