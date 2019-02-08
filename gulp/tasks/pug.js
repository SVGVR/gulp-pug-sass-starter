const gulp = require('gulp');
const pug = require('gulp-pug');
const data = require('gulp-data');
const merge = require('gulp-merge-json');
const path = require('path');
const plumber = require('gulp-plumber');

const config = require('../config');

gulp.task('pug:data', () => {
	return gulp.src(config.paths.data.src)
	.pipe(plumber())
	.pipe(merge({
		fileName: config.paths.data.concatName,
		edit: (json, file) => {
			// Extract the filename and strip the extension
			// Извлекаем имя файла и убираем его расширение
			var filename = path.basename(file.path),
				primaryKey = filename.replace(path.extname(filename), '');
			
			// Set the filename as the primary key for our JSON data
			// Устанавливаем имя файла в качестве ключа к данным JSON
			let data = {};
			data[primaryKey.toLowerCase()] = json;
			
			return data;
		}
	}))
	.pipe(gulp.dest(config.paths.data.dest));
});

gulp.task('pug:compile', () => {
	return gulp.src(config.paths.pages.src)
		.pipe(plumber())
		.pipe(data(() => {
			let json = path.join('..', '..', config.paths.data.dest, config.paths.data.concatName);
			delete require.cache[require.resolve(json)];
			return require(json);
		}))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(config.paths.pages.dest));
});

gulp.task('pug:all', gulp.series('pug:data', 'pug:compile'));