//install in project folder
//npm init
//npm i gulp --save-dev
//npm i gulp-sass --save-dev
//npm i browser-sync --save-dev
//npm i gulp-autoprefixer --save-dev

var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename = require('gulp-rename'), // Переименование новых изменённых файлов
    purgecss = require('gulp-purgecss'); // Будем уюирать лишний css

gulp.task('sass', function () { // Создаем таск Sass
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('purgecss', () => {
    return gulp.src('app/css/style.css')
        .pipe(purgecss({
            content: ['app/css/*.html', 'app/js/**/*.js' ]
        }))
        .pipe(gulp.dest('app/buildcss'))
});

gulp.task('code', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.{sass,scss}', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
});
gulp.task('default', gulp.parallel('sass', 'purgecss', 'watch'));