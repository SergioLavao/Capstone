const path = require("path");

module.exports = {
	mode:"development",
	watch:true,
	entry:"./src/ts/game.ts",
	output:{
		filename:"game.js",
		path: path.resolve(__dirname, "../build/core/static")
	},
	resolve: {
        alias: {
          cannon: path.resolve(__dirname, './src/lib/cannon/cannon.js')
        },
        extensions: [ '.tsx', '.ts', '.js' ],
    },
	module:{
		rules:[
		{
			test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,	
		},
		{
            test: /\.css$/,
            use: [
            	{ loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
				{ loader: 'css-loader' },
            ]
        }
		]
	}
};
