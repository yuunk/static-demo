const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');


module.exports = {
    mode: "production",
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/public/assets/js/`,
        filename: "main.js"
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },
            ]
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '65-80'
            },
            svgo: {
            },
            plugins: [
                ImageminMozjpeg({
                    quality: 85,
                    progressive: true
                })
            ]
        }),

    ]

};