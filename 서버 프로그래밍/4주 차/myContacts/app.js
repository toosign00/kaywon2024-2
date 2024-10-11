const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const requestTime = (req, res, next) => {
    let today = new Date();
    let now = today.toLocaleTimeString();
    req.requestTime = now;
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


// public 폴더를 정적 파일 제공을 위한 폴더로 설정
app.use(express.static(path.join(__dirname, 'public')));

// JSON 데이터를 파싱하기 위한 미들웨어 설정
app.use(express.json());

// contactRoutes.js 파일에서 라우트 설정 불러오기
app.use("/contacts", require("./routes/contactRoutes"));

// 서버 실행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});