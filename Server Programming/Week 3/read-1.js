const fs = require("fs");

let data = fs.readFileSync("./example.txt"); // 읽어올 파일 내용
console.log(data);