"use strict"
// controller 분리한 클래스
const home = (req,res)=>{
    res.render("home/index");
};

const login = (req,res)=>{
    res.render("home/login")
};

// 외부로 내보내기 
// home : home, login: login 과 같음
module.exports = {
    home,
    login,
};