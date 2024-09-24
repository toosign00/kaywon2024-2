const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
        readStream.pipe(res); 
    } else if (method === "GET" && url === "/home") {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(__dirname + "/home.html", "utf8");
        readStream.pipe(res);
    } else if (method === "GET" && url === "/about") {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(__dirname + "/about.html", "utf8");
        readStream.pipe(res);
    } else if (method === "GET" && url === "/content") {
        res.setHeader("Content-Type", "text/html");
        const readStream = fs.createReadStream(__dirname + "/content.html", "utf8");
        readStream.pipe(res);
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("NOT FOUND");
    }
});

server.listen(3000, () => {
    console.log("서버가 3000번 포트에서 실행 중입니다.");
});