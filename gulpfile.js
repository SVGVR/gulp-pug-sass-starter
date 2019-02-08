const gulp = require('gulp');

require('./gulp/tasks/pug');
require('./gulp/tasks/clean');
require('./gulp/tasks/scripts');
require('./gulp/tasks/sass');
require('./gulp/tasks/fonts');
require('./gulp/tasks/images');
require('./gulp/tasks/server');
require('./gulp/tasks/watch');

gulp.task('dev', gulp.series('clean', gulp.parallel('pug:all', 'javascript', 'sass', 'fonts', 'image:minify'), gulp.parallel('watch','serve')));

gulp.task('build', gulp.series('clean', gulp.parallel('pug:all', 'javascript', 'sass', 'fonts', 'image:minify')));

gulp.task('default', gulp.series('dev'));