const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "server.js"
    },
    target: 'node',
    resolve: {
        alias: {
            "@db": path.resolve(__dirname, "../db/src/")
        },
    },
    externalsPresets: {node: true},
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: ["/node_modules", "/server.js"],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["next/babel"]
                    }
                }
            }
        ]
    }
}