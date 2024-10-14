const express = require("express");
const path = require("path");
const router = express.Router();

// 모든 연락처 가져오기, index.html 파일 제공
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// 개별 연락처 가져오기, 수정하기, 삭제하기
router
    .route("/")
    .get((req, res) => {
        res.status(200).send("Conacts Page");
    })
    .post((req, res) => {
        console.log(req.body);
        const {name, email, phone} = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send("필수값이 입력되지 않았습니다.");
        }
    
        res.status(201).send("Create Contacts");
    });

module.exports = router;