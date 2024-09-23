const fs = require("fs");

fs.readFile("./example.txt", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
        console.log("\n");
        console.log(data.toString());
    }
});