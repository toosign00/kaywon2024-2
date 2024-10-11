const fs = require("node:fs");

fs.readdir("./", (err, files) => {
    if (err) {
        console.error(err);
    }
    console.log(files);
});

console.log("Code is done");