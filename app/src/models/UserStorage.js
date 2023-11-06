"use strict";

const { throws } = require("assert");

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

    static #getUsers(data,isAll,fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers,field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field]= users[field];
            }
            return newUsers;
        }, {});
        return newUsers;

    }

    static getUsers(isAll,...fields){
        return fs
        .readFile("./src/databases/user.json")
        //성공했을 때 실행  
        .then((data) => {
            return this.#getUsers(data,isAll,fields);
            
        })
        //실패했을때 실행
        .catch((err)=>console.log(err));

     
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
   

    static async save(userInfo){
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)){
           throw "existed id"

        }
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        //data 추가
        fs.writeFile("./src/databases/user.json",JSON.stringify(users))
        return {success : true};

    };
};

module.exports = UserStorage;