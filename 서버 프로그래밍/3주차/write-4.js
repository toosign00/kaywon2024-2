const fs = require("fs");

let content = `
=====================================
새로운 내용을 추가해 보겠습니다.
=====================================
`;

fs.writeFileSync("./text-1.txt", content, { flag: "a" });

console.log("파일에 내용이 추가되었습니다.");