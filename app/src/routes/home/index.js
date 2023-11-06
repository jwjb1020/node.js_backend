// 자바스크립트의 문법을 준수하겠다는 표시
"use strict";

const express = require("express");
const router = express.Router();

//controller로 만든 메서드 불러오기
const ctrl = require("./homeCtrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login );
router.get("/register",ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// 외부에서 받아올 수 있도록 모듈화
module.exports = router;