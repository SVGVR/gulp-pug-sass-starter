const changed = require('gulp-changed');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

const config = require('../config');

gulp.task('image:minify', function () {
	return gulp.src(config.paths.images.src)
	.pipe(plumber())
	.pipe(changed(config.paths.images.dest))
	.pipe(imagemin())
	.pipe(gulp.dest(config.paths.images.dest));
});