const fs = require("fs");

let data = fs.readFileSync("./example.txt", "utf8"); // 읽어올 파일 내용
console.log(data); // 파일 내용 출력