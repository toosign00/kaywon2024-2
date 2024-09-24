const fs = require("fs");

if (fs.existsSync("./test2/test3/test4")) { // 디렉터리가 있다면
    console.log("폴더가 이미 있습니다.");
} else {
    fs.mkdir("./test2/test3/test4", {recursive : true}, (err) => {
        console.log("폴더가 생성되었습니다.");
    });
}