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
    res.render("index", {locals, data, layout: mainLayout});
  })
);

// GET post/:id
// 게시물 상세 보기

router.get(
  "/post/:id",
  asynchandler(async (req, res) => {
    const data = await Post.findOne({_id: req.params.id});
    res.render("post", {data, layout: mainLayout});
  })
);

module.exports = router;
