"use strict";

var gulp = require("gulp"),
    gg = require("gore-gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require("gulp-minify-css"),
    browsersync = require("browser-sync"),
    reload = browsersync.reload;

gg(__dirname).setup(gulp);

gulp.task("sass", function () {
    gulp.src("./scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ["last 4 versions"],
            cascade: false
        }))
        .pipe(minifycss())
        // Only if developement mode is on
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./web/css"))
        .pipe(reload({stream: true}));
});

gulp.task("watch", function () {
    gulp.watch("./scss/*.scss", ["sass"]);
    gulp.watch("./web_modules/*.js*", ["webpack"]);
});

gulp.task("serve", ["watch"], function () {
    browsersync({
        server: "./web"
    });

    gulp.watch("web/*.html").on("change", reload);
});
