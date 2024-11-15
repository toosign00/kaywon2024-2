const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const path = require("path");

const port = 3000;
const app = express();

// EJS 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// method-override 설정
app.use(methodOverride("_method"));

// 데이터베이스 연결
dbConnect();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 요청 시간 미들웨어
app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleTimeString();
    next();
});

// 라우트 설정
app.use("/", require("./routes/loginRoutes")); // 로그인 관련 라우트
app.use("/contacts", require("./routes/contactRoutes"));  // 연락처 관련 라우트

// 서버 시작
app.listen(port, (err) => {
    if (err) {
        console.error(`서버 실행 중 오류 발생: ${err}`);
        return;
    }
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});