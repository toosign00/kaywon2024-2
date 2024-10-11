const fs = require("fs");

fs.readdir("./", (err, files) => {
    if (err) {
        console.error(err); // 에러 발생 시 에러 출력
    }
    console.log(files); // [ 'list-1.js', 'list-2.js', 'package-lock.json', 'path.js' ]
});