const express = require("express");
const router = express.Router();
const adminLayout = "layouts/admin";
const adminLayout2 = "layouts/admin-nologout";
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Check Login
const checkLogin = async (req, res, next) => {
  const token = req.cookies.token; // 쿠키 정보 가져오기

  // 토큰이 없다면
  if (!token) {
    return res.redirect("/admin");
  }

  // 토큰이 있다면 토큰을 확인하고 사용자 정보를 요청에 추가
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // res.userId가 아닌 req.userId에 저장
    next();
  } catch (error) {
    return res.redirect("/admin");
  }
};
// GET /logout
// Admin Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/"); // 루트 페이지로 이동
});

// GET /admin
// 관리자 페이지
router.get("/admin", (req, res) => {
  const locals = {
    title: "관리자 페이지",
  };
  res.render("admin/index", { locals, layout: adminLayout2 });
});

// GET /register
// 회원가입 페이지
router.get(
  "/register",
  asyncHandler(async (req, res) => {
    res.render("admin/index", { layout: adminLayout2 });
  })
);

// POST /admin
// 관리자 페이지 로그인
router.post(
  "/admin",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body; // req.body에서 username과 password를 가져옴

    // 사용자 이름으로 사용자 찾기
    const user = await User.findOne({ username });

    // 일치하는 사용자가 없으면 에러 메시지 출력
    if (!user) {
      return res.status(401).json({ message: "일치하는 사용자가 없습니다." });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    // 비밀번호가 일치하지 않으면 에러 메시지 출력
    if (!isValidPassword) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    // JWT 토큰을 쿠키에 저장
    res.cookie("token", token, {
      httpOnly: true,
    });

    // 로그인에 성공하면 전체 게시물 목록 페이지로 이동
    res.redirect("/allPosts");
  })
);

// GET /allPosts
// 전체 게시물 목록 페이지
router.get(
  "/allPosts",
  checkLogin,
  asyncHandler(async (req, res) => {
    const locals = {
      title: "전체 게시물",
    };
    const data = await Post.find().sort({ updatedAt: "desc", createdAt: "desc" });
    res.render("admin/allPosts", {
      locals,
      data,
      layout: adminLayout,
    });
  })
);

// GET /add
// Admin - Add Post
router.get(
  "/add",
  checkLogin,
  asyncHandler(async (req, res) => {
    const locals = {
      title: "게시물 작성",
    };
    res.render("admin/add", {
      locals,
      layout: adminLayout,
    });
  })
);

// POST /add
// Admin - Add Post
router.post(
  "/add",
  checkLogin,
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const newPost = new Post({
      title: title,
      body: body,
    });

    await Post.create(newPost);
    res.redirect("/allPosts");
  })
);

module.exports = router;
