const express = require("express");
const dbConnect = require("./config/dbConnect");
const path = require('path');

const app = express();

// EJS 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 제공
app.use(express.static("./public"));

// 데이터베이스 연결
dbConnect();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 요청 시간 미들웨어
const requestTime = (req, res, next) => {
    req.requestTime = new Date().toLocaleTimeString();
    next();
};

app.use(requestTime);

// 홈 경로 정의
app.get("/", (req, res) => {
    const responseText = `Hello Node! \n요청 시간 : ${req.requestTime}`;
    res.set("Content-type", "text/plain");
    res.send(responseText);
    console.log("현재 시간 : ", req.requestTime);
});

// contactRoutes.js 파일에서 라우트 설정 불러오기
try {
    app.use("/contacts", require("./routes/contactRoutes"));
} catch (err) {
    console.log("contactRoutes를 불러오는 도중 에러가 발생했습니다.", err);
}

app.listen(port, (err) => {
    if (err) {
        console.error(`서버 실행 중 오류 발생: ${err}`);
        return;
    }
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});