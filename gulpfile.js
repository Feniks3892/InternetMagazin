const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;

const fonts = () => {
    return src(['./src/fonts/**.woff', './src/fonts/**.woff2'])
    .pipe(dest('./app/fonts'))
}

const svgSprites = () => {
    return src('./src/img/**.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest('./app/img'))
}

const styles = () => {
    return src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/css'))
    .pipe(browserSync.stream());
}

const htmlInclude = () => {
    return src(['./src/index.html', './src/partners.html', './src/catalog.html', './src/card.html'])
    .pipe(fileinclude({
        prefix: '@',
        basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream());
}

const imgToApp = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg', './src/img/**.svg'])
    .pipe(dest('./app/img'))
}

const clean = () => {
    return del('./app/*')
}

const scripts = () => {
    return src(['./src/js/app.js', './src/js/validate.js', './src/js/partners.js', './src/js/catalog.js', './src/js/card.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify().on("error", notify.onError()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());
}

const resources = () => {
	return src('./src/resources/**')
		.pipe(dest('./app/resources'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    watch('./src/scss/style.css', styles);
	watch('./src/index.html', htmlInclude);
	watch('./src/img/**.jpg', imgToApp);
	watch('./src/img/**.png', imgToApp);
	watch('./src/img/**.jpeg', imgToApp);
	watch('./src/img/**.svg', svgSprites);
    watch('./src/resources/**', resources);
	watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.clean = clean;

exports.default = series(clean, htmlInclude, scripts, fonts, resources, imgToApp, svgSprites, styles, watchFiles);

const stylesBuild = () => {
	return src('./src/scss/style.css')
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(dest('./app/css/'))
}

const scriptsBuild = () => {
	return src(['./src/js/app.js', './src/js/validate.js', './src/js/partners.js', './src/js/catalog.js', './src/js/card.js'])
		.pipe(uglify().on("error", notify.onError()))
		.pipe(dest('./app/js'))
}

exports.build = series(clean, htmlInclude, scriptsBuild, fonts, resources, imgToApp, svgSprites, stylesBuild);

