var gulp = require('gulp'),
	less = require('gulp-less')

gulp.task('less', function(){
	gulp.src('./public/style/style.less')
	.pipe(less())
	.pipe(gulp.dest('./public/style'))
});

gulp.task('watch', function(){
	// gulp.watch(['./public/script/script.js'], ['babelify'])
	gulp.watch(['./public/style/**/*.less'], ['less'])
})

gulp.task('default', ['watch', 'less'])