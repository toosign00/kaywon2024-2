const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("HOME");
    } else if (req.url === "/about") {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end("ABOUT");
    } else {
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});