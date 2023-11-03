"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        password : password.value,
    };
    fetch("/login", {
        method : "post",
        headers: {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(req)
    })
}