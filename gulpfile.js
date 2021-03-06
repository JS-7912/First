const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");


//创建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});

gulp.task("copyIndex", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});
gulp.task("copyImg", done => {
    gulp.src("img/**")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
    done();
});
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init()) //浏览器调试代码时，让浏览器展示的代码和源代码发生关联
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});
gulp.task("babel", done => {
    gulp.src("js/*.js")
        //.pipe(babel({ presets: ["@babel/evn"] }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});
gulp.task("libs", done => {
    gulp.src("libs/*.js")
        .pipe(gulp.dest("dist/libs"));
    done();
});
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("copyIndex"));
    gulp.watch("img/**", gulp.series("copyImg"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("babel"));
    gulp.watch("libs/*.js", gulp.series("libs"));
    done();
});

//默认任务
gulp.task("default", gulp.parallel("watch", "server"));