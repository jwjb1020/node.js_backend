"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    if (!id.value) return alert("please input id")
    //비밀번호 일치 확인 코드
    if(!password.value){
        return alert("please input password")
    }
    const req = {
        id : id.value,
        password : password.value,
    };

    console.log(req, "1");
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res) =>{
        if (res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
    
        console.error();
    })
    
}