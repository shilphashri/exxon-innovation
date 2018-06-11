var gulp = require('gulp')
var args = require('yargs').argv;
var merge = require('merge-stream')
var del = require('del')
var browserSync = require('browser-sync')
var plugins = require('gulp-load-plugins')({ lazy: true });
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
const fs = require('fs-extra');

var placeholders = {
  functionDefLoadCustomStyles : '// loadCustomStyle function definition',
  functionCallLoadCustomStyles : '// loadCustomStyle function call',
  scriptTagTemplatesJS : '<!-- script tag for templates js -->',
  buildJsStart : '<!-- build:js main.bundle.js -->',
  buildJsEnd : '<!-- endbuild -->'
};

var stringConstants = {
  functionDefLoadCustomStyles : `
      scope.loadCustomStyle = function() {
        var node = document.createElement('link');
        node.href = 'assets/css/custom-styles.css';
        node.type = 'text/css';
        node.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(node);
      }
  `,
  functionCallLoadCustomStyles : `
      scope.loadCustomStyle();
  `,
  scriptTagTemplatesJS : `<script src="assets/js/templates.js"></script>`
};

// Delete the contents of the existing dist folder
gulp.task('build-clean', function () {
  log('Erased dist folder');
  return del(['dist/*']);

});

// Minify CSS and JS files; copy all images and fonts to dist folder
gulp.task('build-cssjs', ['build-clean'], function () {

  log('Minimizing CSS and JavaScript files');

  var html = gulp.src('index.html')
    .pipe(plugins.useref())
    .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(plugins.if('*.css', plugins.csso({ restructure: false })))
    .pipe(gulp.dest('dist'))

  var templates = gulp.src('app/**/*.html')
    .pipe(plugins.angularTemplatecache({ root: 'app/', module: 'app' }))
    .pipe(gulp.dest('dist/assets/js/'));

  var fonts = gulp.src('app/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'))

  var images = gulp.src('assets/images/**/*')
    .pipe(gulp.dest('dist/assets/images'))

  return merge(html, templates, fonts, images)

})

// Add Angular .html template files
gulp.task('build-templates', ['build-cssjs'], function () {

  log('Adding Angular templates to dist build');

  gulp.src('./dist/index.html')
    .pipe(plugins.inject(gulp.src('./dist/assets/js/templates.js', { read: false }), { relative: true }))
    .pipe(gulp.dest('./dist'));

});

// gulp task to copy required assets to dist folder
gulp.task('copy-assets', ['build-templates'], function () {
  log('Starting copy-assets');
  copyCustomStyles();
});

// Gulp task to update the code to load custom styles
gulp.task('update-theme-003', function () {
  log('Starting update-theme-003');
  updateTheme003();
});

// Gulp task to update the code to link script tag for templates.js
gulp.task('update-index-html', ['build-cssjs'], function () {
  log('Starting update-index-html');
  updateIndexHTML();
});

function updateTheme003() {
  var filePath = 'app/resources/themes/theme-003/theme-003-directive.js';
  var key = "functionDefLoadCustomStyles";
  var fileContent = fs.readFileSync(filePath, "utf8");

  var placeholder = placeholders[key];
  var stringToReplace = stringConstants[key];
  fileContent = fileContent.replace(placeholder, stringToReplace);

  key = "functionCallLoadCustomStyles";
  placeholder = placeholders[key];
  stringToReplace = stringConstants[key];
  fileContent = fileContent.replace(placeholder, stringToReplace);

  fs.writeFileSync(filePath, fileContent);
}

function updateIndexHTML() {
  var filePath = 'dist/index.html';
  var key = "scriptTagTemplatesJS";
  var fileContent = fs.readFileSync(filePath, "utf8");

  var placeholder = placeholders[key];
  var stringToReplace = stringConstants[key];
  fileContent = fileContent.replace(placeholder, stringToReplace);

  fs.writeFileSync(filePath, fileContent);
}

function copy(fromFilePath, ToFilePath) {
  if (fs.existsSync(fromFilePath)) {
    try {
      fs.copySync(fromFilePath, ToFilePath)
    } catch (err) {
      console.error(err)
    }
  }
}

function copyCustomStyles() {
  fs.mkdirsSync('dist/assets/css');
  copy('assets/css/custom-styles.css', 'dist/assets/css/custom-styles.css');
}

// Aditional support functions
function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        plugins.util.log(plugins.util.colors.green(msg[item]));
      }
    }
  } else {
    plugins.util.log(plugins.util.colors.green(msg));
  }
}

// Main task to clean-up, minify and add templates
// How to run: gulp build
gulp.task('build', ['update-theme-003', 'build-cssjs', 'build-templates', 'update-index-html', 'copy-assets']);

// Runs Browser Sync to perform cross-browser testing
// How to run: gulp serve-dev
gulp.task('server', function () {
  startBrowserSync();
});

function startBrowserSync() {
  if (browserSync.active) {
    return;
  }
  log('Starting BrowserSync');

  var options = {
    port: 5000,
    files: [
      '/**/*.html',
      '/**/*.css',
      './**/*.js'
    ],
    startPath: "./",
    server: true,
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'debug',
    logPrefix: 'gulp-patterns',
    notify: true,
    reloadDelay: 10 //1000
  };

  browserSync(options);

}
