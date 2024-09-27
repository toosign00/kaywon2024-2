// URL: http://localhost:3000/
// express 모듈을 사용하여 서버를 실행
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello, Node!");
});

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
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
app.delete("content/:id", (req, res) => {
    res.status(200).send(`Delate Contact for ID: ${req.params.id}`);
})
// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});