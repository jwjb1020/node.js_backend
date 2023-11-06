"use strict";

const {response} =require("express");
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body =body;
    }
    //async가 있는 곳에만 await를 사용가능
    async login(){
        const client = this.body;
        //promise를 반환하는 곳에 await를 쓸 수 있음
        const { id, password} = await UserStorage.getUserInfo(client.id);

        if (id){
            if (id===client.id && password === client.password){
                return {success : true};
            }
            return {success :false, msg: "password incorrect"};
        }
        return {success : false, msg: "no account"
    };
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return {success : false, msg: err}
        }
       
    }
}

module.exports = User;