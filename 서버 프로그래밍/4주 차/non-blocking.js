const fs = require("fs");

const data = fs.readFile("example.txt", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});
console.log("코드 끝!");