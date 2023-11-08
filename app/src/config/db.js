"use restrict";

const mysql = require("mysql2");

const pool = mysql.createPool({
    host :"practice-jwj.crbxucrmfhkm.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "12345678",
    database : "practice_jwj",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();



module.exports = pool;