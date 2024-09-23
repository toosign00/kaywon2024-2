const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});