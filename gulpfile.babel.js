import gulp from "gulp"
// import concat from "gulp-concat"
import postcss from "gulp-postcss"
import sourcemaps from "gulp-sourcemaps"
import autoprefixer from "autoprefixer"
import precss from "precss"

const postcssSrc = './src/postcss/*.css'

gulp.task("css", ()=>{
    gulp.src(postcssSrc)
        .pipe( sourcemaps.init() )
        .pipe( postcss([ precss, autoprefixer ]) )
        // .pipe( concat("bundle.css") )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('build/css/') );
})

gulp.task("default", ["css"])

gulp.task("watch", ["css"], ()=>{
    gulp.watch(postcssSrc, ["css"])
})