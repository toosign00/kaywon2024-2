const fs = require("fs");

fs.readFile("./text-1.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile("./text-2.txt", data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("파일이 복사되었습니다.");
    });
});