const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const asyncHandler = require("express-async-handler");
const Post = require("../models/Post"); // Post 모델 추가

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('지원하지 않는 파일 형식입니다.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 15 * 1024 * 1024 // 15MB
  }
});

// 업로드 페이지 렌더링
router.get("/upload", asyncHandler(async (req, res) => {
  const locals = {
    title: "새 게시물 작성"
  };
  res.render("upload", {
    locals,
    layout: "layouts/main"
  });
}));

// 파일 업로드 및 게시물 생성 처리
router.post("/upload", upload.single('image'), asyncHandler(async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    const savedPost = await Post.create(newPost);
    console.log('게시물이 성공적으로 업로드되었습니다:', {
      제목: savedPost.title,
      작성일: savedPost.createdAt,
      이미지경로: savedPost.image
    });

    res.redirect('/allPosts');
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "게시물 생성 중 오류가 발생했습니다.",
      error: error.message
    });
  }
}));

// 에러 처리 미들웨어
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        message: '파일 크기는 15MB를 초과할 수 없습니다.'
      });
    }
  }
  res.status(500).json({
    message: error.message
  });
});

module.exports = router;