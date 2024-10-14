const http = require("http");

const server = http.createServer((req, res) => {
    console.log("요청 발생");
});

server.listen(3000, () => {
    console.log("서버 실행 중");
});