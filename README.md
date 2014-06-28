# gulp-hjson

Hjson to/from JSON convert plugin for gulp 3.

## Usage

First, install `gulp-hjson` as a development dependency:

```shell
npm install --save-dev gulp-hjson
```

Then, add it to your `gulpfile.js`:

```javascript
var Hjson = require('gulp-hjson');

gulp.task('json', function() {
  gulp.src(['*.json'])
    .pipe(Hjson({ to: 'hjson' }))
    .pipe(gulp.dest('output'));
});
```

## options

### { to: 'json' }

Convert to JSON.

### { to: 'hjson' }

Convert to Hjson.

