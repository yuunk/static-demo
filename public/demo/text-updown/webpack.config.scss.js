const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = "development";

const enabledSourceMap = MODE === "development";

module.exports = {
    entry: {
        'style.css': `${__dirname}/../src/scss/style.scss`,
    },
    mode: MODE,
    output: {
        path: `${__dirname}/../public/assets/css/`,
        filename: '[name]',
    },

    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: [
                                require("autoprefixer")({
                                    grid: true
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap
                        },
                    },
                    'import-glob-loader'// *を使えるようにする
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name]',
        }),
    ],
};