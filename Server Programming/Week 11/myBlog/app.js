require("dotenv").config(); // .env에 있는 변수 가져오기
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000; // .env에 포트가 없으면 3000번 포트로 설정

app.use(expressEjsLayouts); // ejs 레이아웃 사용
app.set("view engine", "ejs"); // ejs 사용
app.set("views", __dirname + "/views"); // views 폴더 설정

app.use("/", require("./routes/main")); // 루트 경로로 들어오면 main.js로 이동

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
