"use strict";

const pool = require("../config/db")

class UserStorage{
   
    static async getUserInfo(id){
        const query = "select *from users where id = ?;";
        const [rows] = await pool.query(query, [id]);
        console.log(rows)
     
        return rows[0];
    } ;
   

    static async save(userInfo){
        const query = "insert into users(id,name,password) values(?,?,?);";
        try{
            const [rows] = await pool.query(query, [userInfo.id,userInfo.name,userInfo.password]);
            console.log(rows);
            return rows;
            
        } catch (err){
            return {success : false, msg : err};
        }
       
      
    };
};

module.exports = UserStorage;