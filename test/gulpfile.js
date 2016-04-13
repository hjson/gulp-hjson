
var path=require("path");
var fs=require("fs");
var gulp=require("gulp");
var hjson=require("..");

function root(p) { return path.join(__dirname, p); }

gulp.task("hjson", function()
{
  return gulp.src([root("*.hjson")])
    .pipe(hjson({ to: "json" }))
    .pipe(gulp.dest(root("out")));
});

gulp.task("default", [ "hjson" ]);
