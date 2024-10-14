const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request from client");

});

server.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});