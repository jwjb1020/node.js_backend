// 서버 기본 설정 파일
"use strict";

// 모듈
const express = require("express");
const app = express();
//이전방식 현재는 express에 내장되어있음
// const bodyParser = require("body-parser");


const home = require("./src/routes/home");


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended :true }));

// use -> 미들 웨어를 등록해주는 매서드
//순서가 중요함!
app.use("/", home);
module.exports = app;
