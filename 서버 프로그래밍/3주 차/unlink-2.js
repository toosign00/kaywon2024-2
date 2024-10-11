const fs = require("fs");

if (!fs.existsSync("./text-1.txt")) {
    console.log("파일이 존재하지 않습니다.");
} else {
    fs.unlink("./text-2.txt", () => {
        console.log("파일이 삭제되었습니다.");
    });
}