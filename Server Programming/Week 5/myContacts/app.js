const express = require("express");
const app = express();
const path = require("path");
const port = 3000;




/*
MongoDB Extension 설치 후 MongoDB 사이트에서 가져온 cluster의 connection string을 입력해도
myContacts 데이터베이스와 contact 컬렉션이 생성이 안되어서 아래와 같이 코드를 작성하여 
데이터베이스와 컬렉션을 생성하고, localhost:3000/ 경로로 접속하여 GET 요청을 보내면
name: '노현수', phone: '010-1234-5678' 데이터가 추가되도록 하였습니다. (데이터가 추가되지 않으면 데이터베이스와 컬렉션이 보이지 않았습니다.)
그리고 cluster의 Collections와  MongoDB Extension에서 확인 해보니, myContacts 데이터베이스와 contact 컬렉션이 생성되어 있었습니다.
Document에 .json 형식으로 id, name, phone 데이터가 추가되어 있는 것 또한 확인할 수 있었습니다.
추후 사용자에게 입력받은 데이터를 추가하도록 수정이 필요해 보입니다.
코딩애플 node.js 온라인 강의를 참고하여 코드를 작성하였습니다.
*/

// MongoDB 연결
const { MongoClient } = require('mongodb');

let db;
const url = 'mongodb+srv://toosign:437377@main.vrmnq.mongodb.net/';
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공');
    db = client.db('myContacts');

    // 서버 실행
    app.listen(port, () => {
        console.log(`${port}번 포트에서 서버 실행 중`);
    });

}).catch((err) => {
    console.log(err);
});

app.get("/", () => {
    db.collection('contact').insertOne({
        name: '노현수',
        phone: '010-1234-5678'
    });
    console.log('데이터 추가 완료');
});

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

