## Build Project:
### Part 1:
1. Make a working directory named "p4final".
2. Git init the working directory.
3. Make a directory named "dist".
4. Git clone the repository--frontend-nanodegree-mobile-portfolio to directory named "src".
5. npm install grunt and plugin(grunt-responsive-images);
6. config gurntfile.js to compress images.
7. copy some big weight images to "img_src" directory then run grunt to compress images. And compressed images will be put into "img_dist" directory.
8. replace the big weight images with compressed ones.
9. add media="print" to the CSS link if necessary.
10. use async attribute on *script* tag.
11. use web font loader function to load fonts from vendors.
12. Extract & Inline Critical-path CSS in HTML pages, then minify the HTML/CSS/JS files and upload them to the dist folder(production code folder) by using gulp and plugin(critical/gulp-cssnano/gulp-htmlmin/gulp-uglify):
  1. npm install --save critical
  2. npm install --save-dev gulp
  3. npm install --save-dev gulp-cssnano
  4. npm install --save-dev gulp-htmlmin
  5. npm install --save-dev gulp-uglify
  6. config gulpfile.js to extract & Inline Critical-path CSS in HTML pages.
  7. config gulpfile.js to minify HTML/CSS/JS files.
13. install gulp-sourcemaps to map origin source code to minified code.
### Part 2:
1. Modify updatePositions function in main.js file, separate read and write action in a loop.
2. Add a line to .mover selector: will-change:left. This will promote a layer for each sliding pizza image.
