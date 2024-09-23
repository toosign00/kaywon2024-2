const fs = require("fs");

const data = fs.readFileSync("./text-1.txt", "utf8"); // 읽어올 파일 내용
fs.writeFileSync("./text-2.txt", data); // 파일 내용을 복사