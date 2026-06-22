const mongoose = require("mongoose");
const asynchandler = require("express-async-handler");
require("dotenv").config(); // .env 파일 사용하기 위해

const connectDb = asynchandler(async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`DB connected: ${connect.connection.host}`);
});

module.exports = connectDb;