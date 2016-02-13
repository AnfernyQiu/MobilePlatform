var gulp=require('gulp');
var critical=require('critical').stream;
var cssnano=require('gulp-cssnano');
var htmlmin=require('gulp-htmlmin');
var jsmin=require('gulp-uglify');
var sourcemap=require('gulp-sourcemaps');

gulp.task('criticalMinHtml',function(){
    return gulp.src('src/*.html')
                .pipe(critical({minify:true,inline:true,css:['src/css/style.css','src/css/print.css']}))
                .pipe(htmlmin({collapseWhitespace:true}))
                .pipe(gulp.dest('dist'));
});

gulp.task('criticalMinHtml2',function(){
    return gulp.src('src/views/*.html')
                .pipe(critical({minify:true,inline:true,css:['src/views/css/style.css','src/views/css/bootstrap-grid.css']}))
                .pipe(htmlmin({collapseWhitespace:true}))
                .pipe(gulp.dest('dist/views'));
});

gulp.task('cssnano',function(){
    return gulp.src('src/css/*.css')
                .pipe(cssnano())
                .pipe(gulp.dest('dist/css'));
});

gulp.task('cssnano2',function(){
    return gulp.src('src/views/css/*.css')
                .pipe(cssnano())
                .pipe(gulp.dest('dist/views/css'));
});

gulp.task('jsMin',function(){
    return gulp.src('src/js/*.js')
                .pipe(sourcemap.init())
                    .pipe(jsmin())
                .pipe(sourcemap.write())
                .pipe(gulp.dest('dist/js'));
});

gulp.task('jsMin2',function(){
    return gulp.src('src/views/js/*.js')
                .pipe(sourcemap.init())
                    .pipe(jsmin())
                .pipe(sourcemap.write())
                .pipe(gulp.dest('dist/views/js'));
});

gulp.task('img',function(){
    return gulp.src('src/img/*.{gif,jpg,png}')
                .pipe(gulp.dest('dist/img'));
});

gulp.task('img2',function(){
    return gulp.src('src/views/images/*.{gif,jpg,png}')
                .pipe(gulp.dest('dist/views/images'));
});

gulp.task('serve',function(){
    gulp.watch('src/*.html',['criticalMinHtml']);
    gulp.watch('src/views/*.html',['criticalMinHtml2']);
    gulp.watch('src/css/*.css',['cssnano']);
    gulp.watch('src/views/css/*.css',['cssnano2']);
    gulp.watch('src/js/*.js',['jsMin']);
    gulp.watch('src/views/js/*.js',['jsMin2']);
    gulp.watch('src/img/*.{gif,jpg,png}',['img']);
    gulp.watch('src/views/images/*.{gif,jpg,png}',['img2']);
    
});

gulp.task('default',['criticalMinHtml','criticalMinHtml2','cssnano','cssnano2','jsMin','jsMin2','img','img2','serve']);