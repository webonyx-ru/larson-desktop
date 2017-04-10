// DEV PLUGINS
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    clean = require('gulp-clean');


/* CLEAN -------------------------------------------------------------------- */
gulp.task('clean', function () {
    gulp.src('dist', {read: false})
        .pipe(clean());
});

/* BUILD -------------------------------------------------------------------- */
gulp.task('build', ["clean"], function () {
    setTimeout(function () {
        gulp.start('build_dist');
        gulp.start('fonts');
        gulp.start('images');
        gulp.start('js');
        gulp.start('css');
        gulp.start('static');
    }, 500);
});

gulp.task('build_dist', function () {
    gulp.src([
        'app/*.html'
    ])
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    gulp.src([
        'app/css/**'
    ])
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    gulp.src([
        'app/js/**'
    ])
        .pipe(gulp.dest('dist/js'));
});

gulp.task('static', function () {
    gulp.src([
        'app/static/**'
    ])
        .pipe(gulp.dest('dist/static'));
});

gulp.task('fonts', function () {
    gulp.src([
        'app/fonts/**'
    ])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function () {
    gulp.src([
        'app/images/**',
        '!app/images/icons',
        '!app/images/icons-2x',
        '!app/images/icons/**',
        '!app/images/icons-2x/**'
    ])
        .pipe(gulp.dest('dist/images'));
});