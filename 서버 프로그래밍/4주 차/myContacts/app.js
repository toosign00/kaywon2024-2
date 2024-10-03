// URL: http://localhost:3000/
// express 모듈을 사용하여 서버를 실행
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 이미지가 안뜨는 문제가 발생하여 아래 링크를 참고하여 해결
// https://als2019.tistory.com/137 참고
// 이미지 요청 처리
// 이미지가 있는 폴더를 public 폴더로 설정하고, 이미지 요청이 들어오면 해당 이미지를 응답으로 전송
var router = express.Router();
app.use(express.static('public'));

router.get('/images/:imageName', function (req, res) {
    var imgName = req.params.imageName;
    console.log('이미지 요청: ' + imgName);
    res.sendFile('/public/image/' + imgName);
});

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello, Node!");
});

// 모든 연락처 가져오기, index.html 파일을 보여줌
app.get("/contacts", (req, res) => {
    // res.status(200).send("Contacts Page");
    res.sendFile(__dirname + "/index.html");
});

// 새 연락처 생성
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

// 연락처 상세보기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기
app.delete("/content/:id", (req, res) => {
    res.status(200).send(`Delate Contact for ID: ${req.params.id}`);
});

// app.get("/", (req, res) => {
//     const headers = req.headers;
//     res.send(headers);
// });

// app.get("/", (req, res) => {
//     res.status(200);
//     res.send("Hello, Node!");
// });

// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});