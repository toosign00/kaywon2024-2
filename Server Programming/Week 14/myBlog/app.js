require("dotenv").config(); // .env에 있는 변수 가져오기
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db"); // DB 연결 함수 가져오기
const cookieParser = require("cookie-parser"); // 쿠키 파서 가져오기
const methodOverride = require("method-override"); // PUT, DELETE 요청을 사용하기 위한 미들웨어
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // .env에 포트가 없으면 3000번 포트로 설정

connectDb(); // DB 연결 함수 실행

app.use(express.json()); // JSON 요청 본문 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문 파싱
app.use(expressEjsLayouts); // ejs 레이아웃 사용
app.use(cookieParser()); // 쿠키 파서 사용
app.use(methodOverride("_method")); // PUT, DELETE 요청을 사용하기 위한 미들웨어

app.set("view engine", "ejs"); // ejs 사용
app.set("views", __dirname + "/views"); // views 폴더 설정

app.use(express.static(__dirname + "/public")); // public 폴더 설정

// uploads 폴더를 정적 파일로 제공
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use("/", require("./routes/main")); // 루트 경로로 들어오면 main.js로 이동
app.use("/", require("./routes/admin")); // /admin 경로로 들어오면 admin.js로 이동
app.use("/", require("./routes/upload")); // /upload 경로로 들어오면 upload.js로 이동

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
