const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const config = require('../config');

gulp.task('javascript', () => {
	return gulp.src([config.paths.scripts.vendorSrc, config.paths.scripts.src])
	.pipe(plumber())
	.pipe(gulpif(config.options.sourceMaps, sourcemaps.init()))
	.pipe(gulpif(config.options.useBabel, babel({
		presets: ['@babel/preset-env']
	})))
	.pipe(concat('bundle.js'))
	.pipe(gulpif(config.options.uglifyJS, uglify()))
	.pipe(gulpif(config.options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(config.paths.scripts.dest));
});