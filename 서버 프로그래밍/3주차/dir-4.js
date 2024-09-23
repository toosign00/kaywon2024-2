const fs = require("fs");

fs.rm("./test2", {recursive : true}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("폴더가 삭제되었습니다.");
    }
});