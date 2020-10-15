const gulp = require("gulp");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const replace = require("gulp-replace");
const browsersync = require("browser-sync").create(); //自動リロード
const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

gulp.task("ejs", done => {
    gulp
        .src(["./src/ejs/**/*.ejs", "!./src/**/_*.ejs"])
        .pipe(plumber())
        .pipe(ejs({}, {}, { ext: ".html" }))
        .pipe(rename({ extname: ".html" }))
        .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
        .pipe(gulp.dest("./public/"));
    done();
});

// webpackの設定ファイルの読み込み
const webpackConfig = require("./build/webpack.config");
gulp.task("webpack", () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('./public/assets/js/'));
});

//sass
const webpackSass = require("./build/webpack.config-scss");
gulp.task("sass", () => {
    return webpackStream(webpackSass, webpack)
        .pipe(gulp.dest('./public/assets/css/'));
});

//サーバーを立ち上げる
gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "./public/" //root directory
        }
    });
    done();
    console.log('�Server was launched');
});

// ブラウザのリロード
gulp.task('browser-reload', function (done) {
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});

// 監視ファイル
gulp.task('watch-files', function (done) {
    gulp.watch('./src/js/**/*.js', gulp.task('webpack'));
    gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
    gulp.watch('./src/ejs/**/*.ejs', gulp.task('ejs'));
    gulp.watch('./**/*', gulp.task('browser-reload'));
    done();
    console.log(('gulp watch'));
});

// タスクの実行
gulp.task('default', gulp.series('build-server', 'watch-files', function (done) {
    done();
    console.log('Default all task done!');
}));

