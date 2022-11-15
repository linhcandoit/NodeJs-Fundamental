/* 
path module used to working with path
~ refer to the own home directory
. to the current working directory
*/
const path = require("path");

const newPath = path.join("tuanlinh", "yeuSarah", "ratnhieu!");
console.log(newPath);

const base = path.basename(newPath);
console.log(base);

const pathResolve = path.resolve("foo/bar", "tmp/file/");
console.log(pathResolve);
// From right to left, combine with the absolute path of current working directory.
// If can combine, then finished!
