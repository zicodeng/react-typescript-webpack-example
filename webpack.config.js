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
            // There are two types of loaders for TypeScript files:
            // ts-loader: needs to work with babel, and some babel presets and plugins.
            // awesome-typescript-loader: can work without babel because babel is already integrated.
            {
                loader: "awesome-typescript-loader",
                test: /\.ts$|\.tsx$/,
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

        // Serve production build React.
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
    ]
}