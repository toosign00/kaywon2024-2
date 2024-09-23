const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files); // [ 'list-1.js', 'package-lock.json', 'path.js' ]