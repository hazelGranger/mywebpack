module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
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
	}
}