const fs = require("fs");

const data = fs.readFileSync("example.txt");
console.log(data);
console.log("코드 끝!");
