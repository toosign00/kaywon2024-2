const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});