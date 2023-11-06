"use strict";

//파일 시스템 불러오기
const fs = require("fs").promises;
class UserStorage{
 
     //가독성있게 바꿈 은닉 클래스는 맨위/ 콘벤션(코딩문화)
     static #getUserInfo(data, id){
        const users =JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users); // => [id,password,name]
            const userInfo = usersKeys.reduce((newUser, info)=>{
                newUser[info] =users[info][idx];
                return newUser;
            },{});
            console.log(userInfo);

            return userInfo;
    };
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field]= users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
    static getUserInfo(id){
        return fs
        .readFile("./src/databases/user.json")
        //성공했을 때 실행  
        .then((data) => {
            return this.#getUserInfo(data,id);
            
        })
        //실패했을때 실행
        .catch((err)=>console.log(err));
       
     
    };
   

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};

    };
};

module.exports = UserStorage;