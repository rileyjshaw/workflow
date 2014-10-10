var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: false});
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var paths = {
  src: {
    scripts: {
      entry: './src/js/main.jsx',
      all: './src/js/**/*.jsx',
      ext: ['./src/bower_components/**/*.js'],
    },
    stylesheets: {
      css: './src/stylesheets/**/*.css',
      sass: './src/stylesheets/**/*.sass',
      sassDir: './src/stylesheets/sass'
    }
  },
  temp: './temp',
  dist: './dist'
};

gulp.task('lint', function() {
  return gulp.src(paths.src.scripts.all)
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'));
});

gulp.task('scripts', [/*'lint'*/], function() {
  return browserify(paths.src.scripts.entry, {
      insertGlobals: false,
      transform: ['reactify'],
      debug: false,
      standalone: 'screener' // TODO: probably don't need
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe($.rename('bundle.min.js'))
    .pipe($.streamify( $.uglify() ))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('sass', function () {
  return gulp.src(paths.src.stylesheets.sass)
    .pipe($.rubySass({
      loadPath: paths.src.stylesheets.sassDir
    }))
    .pipe($.autoprefixer())
    .pipe(gulp.dest(paths.temp))
});

gulp.task('css_concat', ['sass'], function () {
  return gulp.src([paths.src.stylesheets.css, paths.temp + '/**/*.css'])
    .pipe($.concat('main.css'))
    .pipe($.minifyCss())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('watch', function() {
  gulp.watch([paths.src.scripts.all, paths.src.scripts.ext], [/*'lint',*/'scripts']);
  gulp.watch([paths.src.stylesheets.sass, paths.src.stylesheets.css], ['sass', 'css_concat']);
});

/*
gulp.task('deploy', function () {
  gulp.src(paths.dist + '/*.*')
    .pipe($.ghPages('https://github.com/rileyjshaw/screener.git', 'origin'));
});
*/

gulp.task('webserver', function() {
  gulp.src(paths.dist)
    .pipe($.webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true
    }));
});

gulp.task( 'default', [ 'scripts', 'sass', 'css_concat', 'webserver', 'watch' ] );
