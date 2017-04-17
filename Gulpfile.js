var gulp = require('gulp'),
	less = require('gulp-less'),
	babel = require('gulp-babel'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify');


gulp.task('babelify', function(){
	return browserify({
		entries: './public/script/script.js',
		debug: true
	})
	.transform('babelify', {presets: ["es2015"]})
	.bundle()
	.pipe(source('build.js'))
	.pipe(gulp.dest('./public/script/'))
})

gulp.task('less', function(){
	gulp.src('./public/style/style.less')
	.pipe(less())
	.pipe(gulp.dest('./public/style'))
});

gulp.task('watch', function(){
	gulp.watch(['./public/script/script.js'], ['babelify'])
	gulp.watch(['./public/style/**/*.less'], ['less'])
})

gulp.task('default', ['watch', 'less', 'babelify'])