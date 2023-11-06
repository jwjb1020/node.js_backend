"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password") ,
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("please input id")
    //비밀번호 일치 확인 코드
    if(password.value !== confirmPassword.value){
        return alert("password not same")
    }

    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
    };
   
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res) =>{
        if (res.success){
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("sign up error");
    })
    
}