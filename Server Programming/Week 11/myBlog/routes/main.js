const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asynchandler = require("express-async-handler");

// "/home" 라우트
router.get(
  ["/", "/home"],
  asynchandler(async (req, res) => {
    const locals = {
      title: "Home",
    };
    const data = await Post.find();
    res.render("index", { locals, data, layout: mainLayout });
  })
);

// GET /post/:id
// 게시물 상세 보기
router.get(
  "/post/:id",
  asynchandler(async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }); // 데이터를 'post'로 가져옴
    if (!post) {
      return res.status(404).send("게시물을 찾을 수 없습니다.");
    }
    res.render("post", { post, layout: mainLayout }); // post 객체로 전달
  })
);

module.exports = router;