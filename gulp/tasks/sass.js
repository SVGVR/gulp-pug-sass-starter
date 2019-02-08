const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const config = require('../config');

gulp.task('sass', () => {
	return gulp.src(config.paths.styles.src)
	.pipe(plumber())
	.pipe(gulpif(config.options.sourceMaps, sourcemaps.init()))
	.pipe(sass({
		includePaths: [config.paths.styles.src],
		outputStyle: 'compressed'
	}))
	.pipe(postcss([autoprefixer()]))
	.pipe(gulpif(config.options.sourceMaps, sourcemaps.write('../maps')))
	.pipe(gulp.dest(config.paths.styles.dest));
});