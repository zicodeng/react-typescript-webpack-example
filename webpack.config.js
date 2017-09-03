var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/app.tsx"
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name]-bundle.min.js"
    },
    
    // Enable source map for debugging webpack's output.
    devtool: "source-map",

    watch: true,

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: ["node_modules", "src"]
    },

    module: {
        loaders: [
            {
				loader: "babel-loader",
				test: /\.js$|\.jsx$/,
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
                }
            },
            {
                loader: "awesome-typescript-loader",
                test: /\.ts$|\.tsx$/,
                exclude: /node_modules/
            },
            {
                loader: "source-map-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
		new webpack.optimize.UglifyJsPlugin({
            minimize: true, 
            // Enable source map when uglifying code.
            sourceMap: true
		}),

		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
    ]
}