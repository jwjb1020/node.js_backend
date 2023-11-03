// 자바스크립트의 문법을 준수하겠다는 표시
"use strict";

const express = require("express");
const router = express.Router();

//controller로 만든 메서드 불러오기
const ctrl = require("./home.controller");

router.get("/", ctrl.home);
router.get("/login", ctrl.login );

// 외부에서 받아올 수 있도록 모듈화
module.exports = router;