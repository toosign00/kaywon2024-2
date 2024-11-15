const mongoose = require('mongoose');

// Mongoose 스키마 가져오기
const Schema = mongoose.Schema;

// 사용자 스키마 정의
const userSchema = new Schema({
    username: {
        type: String,
        required: true, // 필수 필드
        unique: true // 고유한 필드
    },
    password: {
        type: String,
        required: true // 필수 필드
    },
});

// User 모델을 만들고 내보내기
module.exports = mongoose.model('User', userSchema);