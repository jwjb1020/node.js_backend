"use strict";

// 모듈
const express = require("express")
const app = express()



const home = require("./src/routes/home")
// use -> 미들 웨어를 등록해주는 매서드
app.use("/", home);

//앱 세팅
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use(express.static(`${__dirname}/src/public`))

module.exports = app;
