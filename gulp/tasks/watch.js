const gulp = require('gulp');

const config = require('../config');

gulp.task('watch:pug', () => {
	let path = config.paths.pages.watch;
	path = path.substring(2);
	return gulp.watch(path, gulp.series('pug:compile'));
});

gulp.task('watch:data', () => {
	let path = config.paths.data.src;
	let count = 0;
	while (count < path.length) {
		path[count] = path[count].substring(2);
		count++;
		if(count === path.length) {
			return gulp.watch(path, gulp.series('pug:all'));
		}
	}
});

gulp.task('watch:styles', () => {
	let path = config.paths.styles.watch;
	path = path.substring(2);
	return gulp.watch(path, gulp.series('sass'));
});

gulp.task('watch:scripts', () => {
	let path = config.paths.scripts.watch;
	path = path.substring(2);
	return gulp.watch(path, gulp.series('javascript'));
});

gulp.task('watch:images', () => {
	let path = config.paths.images.src;
	path = path.substring(2);
	return gulp.watch(path, gulp.series('image:minify'));
});

gulp.task('watch', gulp.parallel('watch:data', 'watch:pug', 'watch:styles', 'watch:scripts', 'watch:images'));