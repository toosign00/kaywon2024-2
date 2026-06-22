const mongoose = require('mongoose');

// 스키마 정의
const imageSchema = new mongoose.Schema({
  // 게시물 제목
  title: {
    type: String,
    required: true,
  },

  // 게시물 내용
  body: {
    type: String,
    required: true,
  },

  // 게시물 작성일
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  // 업로드된 파일 정보
  filename: {
    type: String,
    required: true, // 파일 이름은 필수
  },
  path: {
    type: String,
    required: true, // 파일 경로도 필수
  },
  size: {
    type: Number,
    required: true, // 파일 크기도 필수
  }
});

// 모델 내보내기
module.exports = mongoose.model('Image', imageSchema);