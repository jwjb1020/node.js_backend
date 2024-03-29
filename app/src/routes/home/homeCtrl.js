"use strict"

const logger = require("../../config/logger")
const User = require("../../models/User");

//get 메서드
const output = {
    // controller 분리한 클래스
home : (req,res)=>{
    logger.info(`GET /200 "홈화면으로 이동"`);
    res.render("home/index");
},

login : (req,res)=>{
    logger.info(`GET /login 200 "로그인 화면으로 이동"`);
    res.render("home/login")
},

register : (req,res)=>{
    logger.info(`GET /register "회원가입 화면으로 이동"`);
    res.render("home/register")
}

}

const process = {
   login : async (req,res) => {
        const user =  new User(req.body);
        const response = await user.login();
        if (response.err)
        logger.error(`POST /login 200 Response : "success: ${response.success}, ${response.err}"`)
        else
        logger.info(
            `POST /login 200 Response : "success: ${response.success}, msg: ${response.msg}"`
        )
        return res.json(response);
    },

    register : async (req,res)=>{
        const user = new User(req.body);
        const response = await user.register();
        logger.info(
            `POST /register 200 Response : "success: ${response.success}, msg: ${response.msg}"`
        )
        return res.json(response);
    }
};


// 외부로 내보내기 
// home : home, login: login 과 같음
module.exports = {
    output,
    process,
};