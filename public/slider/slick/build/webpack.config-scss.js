const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = "development";

const enabledSourceMap = MODE === "development";

module.exports = {
    entry: {
        'style.css': `${__dirname}/../src/scss/style.scss`,
    },
    mode: "development",
    output: {
        path: `${__dirname}/../public/assets/css/`,
        filename: '[name]',
    },
    devtool: 'source-map',

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
                            sourceMap: true,
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
                            sourceMap: true
                        },
                    },
                    'import-glob-loader'// *を使えるようにする
                ]
            }
        ]
    },

    plugins: [
        // CSSファイルを外だしにするプラグイン
        new MiniCssExtractPlugin({
            // ファイル名を設定します
            filename: './[name]',
        }),
    ],
};