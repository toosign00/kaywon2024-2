const fs = require("fs");

if (!fs.existsSync("./text-2.txt")) { // 파일이 존재하지 않으면
    console.log("파일이 존재하지 않습니다.");
} else { // 파일이 존재한다면
    fs.unlink("./text-2.txt", () => { 
        console.log("파일이 삭제되었습니다.");
    });
}