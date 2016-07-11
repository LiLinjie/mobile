/**
 * Created by Administrator on 2016/7/11  011.
 */
var gulp = require("gulp"),
    less = require("gulp-less"),
    watch = require("gulp-watch"),
    cleanCSS = require("gulp-clean-css");

gulp.task("less", function () {
    watch('src/less/*.less', function () {
        gulp.src('src/less/all.less')
            .pipe(less())
            .pipe(gulp.dest('src/css/'))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist/css'))
        console.log('complete build less');
    });
});