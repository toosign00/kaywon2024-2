const fs = require("fs");

if (fs.existsSync("./test")) { // 삭제할 디렉터리가 있다면
    fs.rmdir("./test", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("폴더가 삭제되었습니다.");
        }
    });
} else { // 삭제할 디렉터리가 없다면
    console.log("폴더가 존재하지 않습니다.");
}