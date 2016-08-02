var gulp = require("gulp"),
    less = require("gulp-less"),
    watch = require("gulp-watch"),
    cleanCSS = require("gulp-clean-css"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("less", function () {
    watch('src/less/*.less', function () {
        gulp.src('src/less/all.less')
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'Android >= 4.0'],
                cascsde: true, // 是否美化属性值 默认：true 像这样：
                // -webkit-transform: rotate(45deg);
                //         transform: rotate(45deg);
                remove: true // 是否去掉不必要的前缀 默认：true
            }))
            .pipe(gulp.dest('src/css/'))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist/css'))
        console.log('complete build less');
    });
});