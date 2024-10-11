const fs = require("fs");

const data = fs.readFileSync("./text-1.txt", "utf8"); // 읽어올 파일 내용
if (fs.existsSync("./text-2.txt")) { // 파일이 존재할 때
    console.log("파일이 이미 존재합니다.");
} else { // 파일이 존재하지 않을 때
    fs.writeFileSync("./text-2.txt", data); // 파일 내용을 복사
    console.log("파일이 복사되었습니다.");
}