const gulp = require('gulp');
const uglify = require("gulp-uglify");
// 下面是gulp的基本操作
gulp.task("q",function(){console.log("qq");})
gulp.task("w",function(){ console.log("www");})
gulp.task("e",function(){console.log("eeee");})
gulp.task("r",function(){ console.log("rrrr");})
gulp.task("default",function(){console.log("qwer");})


/*// 下面是gulp的api
1，gulp.src
     具体的某一个
     gulp.src("./src/css/base.css");
     gulp.src("./src/js/require.js")
     具体文件夹下面的所有
     gulp.src("./src/css/*.css");
     gulp.src("./src/js/*.js")

2,定义任务
      gulp.task("q",function(){
                console.log("qq");
        })
        gulp.task("w",function(){
            console.log("www");
        })
        gulp.task("e",function(){
            console.log("eeee");
        })
        gulp.task("r",function(){
            console.log("rrrr");
        })
        gulp.task("default",function(){
            console.log("qwer");
        })
3,监听某个路径下的文件，如果它发生改变了就执行对应的函数
        gulp.watch("./src/css/*.css",function(){
            console.log(6666);
        })
4,gulp.run("q");自接执行，不需要去命令行执行
        gulp.run("q");直接就会执行q这个任务，？？什么时候呢？？？
5，gulp.dest()输出到什么地方去*/

gulp("js",function(){
    return gulp.src("./src/js/index.js")
    .pipe(uglify())
    .pipe(gulp.dest("src/x"));
})


         


