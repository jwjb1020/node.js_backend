"use strict"


const User = require("../../models/User");


const output = {
    // controller 분리한 클래스
home : (req,res)=>{
    res.render("home/index");
},

login : (req,res)=>{
    res.render("home/login")
},

register : (req,res)=>{
    res.render("home/register")
}

}

const process = {
   login : async (req,res) => {
        const user =  new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register : (req,res)=>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
};


// 외부로 내보내기 
// home : home, login: login 과 같음
module.exports = {
    output,
    process,
};