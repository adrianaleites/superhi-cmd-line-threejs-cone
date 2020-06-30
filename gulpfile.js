const gulp = require('gulp');
const { series } = require('gulp');
const webpack = require('webpack-stream');

const browserSync = require('browser-sync').create();

// Sends all (*) HTML files from src folder to dist folder
function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
}

// Compiles all (*) JS files from src folder to just one file in dist/js folder
function js() {
    return gulp.src('src/js/*')
        .pipe(
            webpack({
                mode: 'production',
                devtool: 'source-map',
                output: {
                    filename: 'app.js'
                }
            })
        )
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Watches files for changes
function watch() {
    // Initializes static server
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch('src/*.html', html).on('change', browserSync.reload);
    gulp.watch('src/js/*', js);
}

exports.html = html;
exports.js = js;
exports.watch = watch;
exports.default = series(html, js, watch);
