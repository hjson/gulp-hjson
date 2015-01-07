
var path=require("path");
var fs=require("fs");
var gulp=require("gulp");
var hjson=require("..");

function root(p) { return path.join(__dirname, p); }

gulp.task("hjson", function()
{
  var opts={ spare:true, quotes:true };
  return gulp.src([root("*.hjson")])
    .pipe(hjson({ to: "hjson" }))
    .pipe(gulp.dest(root("out")));
});

gulp.task("default", [ "hjson" ]);
