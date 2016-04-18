# gulp-hjson

[![Build Status](https://img.shields.io/travis/laktak/gulp-hjson.svg?style=flat-square)](http://travis-ci.org/laktak/gulp-hjson)
[![NPM version](https://img.shields.io/npm/v/gulp-hjson.svg?style=flat-square)](http://www.npmjs.com/package/gulp-hjson)

Hjson plugin for gulp, converts from and to JSON.

[Hjson](http://hjson.org), the Human JSON. A configuration file format that caters to humans and helps reduce the errors they make.

It supports `#`, `//` and `/**/` style comments as well as avoiding trailing/missing comma and other mistakes. For details and syntax see [hjson.org](http://hjson.org).

## Usage

First, install `gulp-hjson` as a development dependency:

```shell
npm install --save-dev gulp-hjson
```

Then, add it to your `gulpfile.js`:

```javascript
var Hjson = require('gulp-hjson');

gulp.task('hjson', function() {
  gulp.src(['*.hjson'])
    .pipe(Hjson({ to: 'json' }))
    .pipe(gulp.dest('output'));
});
```

## options

### { to: 'json' }

Convert to JSON.

### { to: 'json', jsonSpace: '  ' }

Convert to formatted JSON.

### { to: 'hjson' }

Convert to Hjson.

