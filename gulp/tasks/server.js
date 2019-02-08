const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const config = require('../config');

gulp.task('serve', () => {
	browserSync.init({
		server: {
			baseDir: config.paths.pages.dest
		},
		files: [
			config.paths.pages.dest + '*.html',
			config.paths.scripts.dest + '/*.js',
			config.paths.styles.dest + '/*.css',
			config.paths.images.dest + '/**/*',
		],
		ghostMode: false,
		open: false,
		notify: false,
	});
});