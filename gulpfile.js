
var gulp = 				require('gulp');
var gulpPlugins = 		require('gulp-load-plugins');
var sassInheritcance = 	require('gulp-sass-inheritance');
var webpack = 			require('webpack');
var webPackStream = 	require('webpack-stream');
var webpackConfig = 	require('./webpack.config.js');
var yargs = 			require('yargs');
var named = 			require('vinyl-named');
var rimraf = 			require('rimraf');
var sequence =			require('run-sequence');

var PRODUCTION = !!(yargs.argv.production)

var $ = gulpPlugins();
var watching = false;

function handleSuccess(file){
	return `${file.relative} succesfully compiled`;
}
function handleError(file){
	return `${file.relative} did not compile succesfully`;
}

gulp.task('clean',function(cb){
	rimraf('./dist',cb);
})

gulp.task('sass',function(){
	return gulp.src('./public/stylesheets/scss/**/*.scss')
	.pipe($.cached('sass'))
	.pipe($.if(watching, $.using({color:'green',filesize:true})))
	.pipe(sassInheritcance({dir:'./public/stylesheets/scss'}))
	.pipe($.sourcemaps.init())
	.pipe($.sass().on('error',$.sass.logError))
	.pipe($.sourcemaps.write())
	.pipe($.if(watching,$.notify(handleSuccess)))
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('nodemon',function(cb){
	if(!PRODUCTION){
		var called = false;
		$.nodemon({
			script:'app.js',
			ext:'html js scss json pug',
			env: {PORT:3000},
			ignore:[
				'gulpfile.js',
				'node_modules/'
			]
		})
		.on('start',function(){
			if(!called){
				called = true;
				cb();
			}
		})
	} else {
		cb()
	}
});

gulp.task('javascript',function(){
	return gulp.src(['./public/javascripts/**/*.js',])
	.pipe($.cached('js'))
	.pipe($.sourcemaps.init())
	.pipe(named())
	.pipe(webPackStream(webpackConfig, webpack))
	.pipe($.sourcemaps.write())
	.pipe($.if(watching,$.notify(handleSuccess)))
	.pipe(gulp.dest('./dist/js'))
});

gulp.task('images',function(){
	return gulp.src('./public/images/**/*')
	.pipe($.cached('images'))
	.pipe($.if(PRODUCTION, $.imagemin({
		progressive:true
	})))
	.pipe($.if(watching,$.notify(handleSuccess)))
	.pipe(gulp.dest('./dist/img'))
})

gulp.task('watch:sass',function(){
	gulp.watch('./public/stylesheets/scss/**/*.scss',['sass'])
})
gulp.task('watch:js', function(){
	gulp.watch('./public/javascripts/**/*.js',['javascript'])
})
gulp.task('watch:img',function(){
	gulp.watch('./publicimages/**/*',['images'])
})
gulp.task('setwatch',function(){
	watching = true;
})

gulp.task('default',function(){
	sequence('clean',['sass','javascript','images','watch:sass','watch:js','watch:img'],'setwatch','nodemon',)
})





