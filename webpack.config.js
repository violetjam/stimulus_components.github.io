const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = {
    mode: "development",
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
        poll: true,
        ignored: ["node_modules/**"],
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname),
        watchContentBase: true,
        compress: true,
        publicPath: "/",
        watchOptions: {
            poll: true,
            ignored: ["node_modules/**"],
        },
    },
    module: {
        rules: [
            
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                },
            },{
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
              },
        ]
    },
    plugins: [
        new ExtraWatchWebpackPlugin({
            dirs: [ path.join(__dirname, 'src') ],
        }),
        new HtmlWebpackPlugin({
            title: "index",
            template: path.join(__dirname, "./src/templates/index.html"),
            filename: "index.html",
            minify: false,
            inject: false,

        }),
        new HtmlWebpackPlugin({
            title: "showDropDown",
            template: path.join(__dirname, "./src/templates/showDropDown.html"),
            filename: "showDropDown.html",
            minify: false,
            inject: false,

        }),
        new HtmlWebpackPlugin({
            title: "showFormCheck",
            template: path.join(__dirname, "./src/templates/showFormCheck.html"),
            filename: "showFormCheck.html",
            minify: false,
            inject: false,

        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/dropdown.html'),
            location: 'dropdown',
            template_filename: "showDropDown.html",
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/formCheck.html'),
            location: 'formCheck',
            template_filename: "showFormCheck.html",
        })
    ],
}