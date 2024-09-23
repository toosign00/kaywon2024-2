const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);

    res.setHeader("Content-Type", "text/plain");
    res.write("Hello Node!");
    res.end();
});

server.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});