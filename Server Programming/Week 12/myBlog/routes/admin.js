const express = require("express");
const router = express.Router();
const adminLayout = "layouts/admin";
const adminLayout2 = "layouts/admin-nologout";
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/post");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// GET /admin
// 관리자 페이지
router.get("/admin", (req, res) => {
  const locals = {
    title: "관리자 페이지",
  };
  res.render("admin/index", {locals, layout: adminLayout2});
});

// GET /register
// 회원가입 페이지
router.get(
  "/register",
  asyncHandler(async (req, res) => {
    res.render("admin/index", {layout: adminLayout2});
  })
);

// POST /register
// 회원가입
// router.post(
//   "/register",
//   asyncHandler(async (req, res) => {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10); // 비밀번호 암호화
//     const user = await User.create({
//       username: req.body.username,
//       password: hashedPassword, // 암호화된 비밀번호
//     });

//     res.json(`user created : ${user}`); // 생성된 유저 정보 출력
//   })
// );

// POST /admin
// 관리차 페이지 로그인
router.post(
  "/admin",
  asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if (username === "admin" && password === "admin") {
      res.send("로그인 성공");
    } else {
      res.send("로그인 실패");
    }
  })
);

module.exports = router;
