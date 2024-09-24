const fs = require("fs");

if (fs.existsSync("./test")) { // 디렉터리가 있다면
    console.log("폴더가 이미 있습니다.");
} else {
    fs.mkdir("./test", () => {
        console.log("폴더가 생성되었습니다.");
    });
}