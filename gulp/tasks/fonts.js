const gulp = require('gulp');

const config = require('../config');

gulp.task('fonts', () => {
	return gulp.src(config.paths.fonts.src)
		.pipe(gulp.dest(config.paths.fonts.dest));
});