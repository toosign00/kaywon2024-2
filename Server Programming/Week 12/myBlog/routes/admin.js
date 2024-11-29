const express = require("express");
const router = express.Router();
const adminLayout = "layouts/admin";
const adminLayout2 = "layouts/admin-nologout";
const asyncHandler = require("express-async-handler");

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
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    res.send("회원가입 완료");
  })
);

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
