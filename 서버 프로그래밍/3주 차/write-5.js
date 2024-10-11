const fs = require("fs");

fs.appendFile("./text-2.txt", "\n\n 새로운 내용을 추가", (err) => {
    if (err) {
        console.error(err);
    }
    console.log("파일에 내용이 추가되었습니다.");
});