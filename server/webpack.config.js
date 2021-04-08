const path = require("path")
const MinifyPlugin = require("babel-minify-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new MinifyPlugin({}, {
            comments: false
        })
    ]
}
