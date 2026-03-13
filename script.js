function generatePassword(){

let length = document.getElementById("length").value;
let useSymbols = document.getElementById("symbols").checked;

let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";

let characters = letters + numbers;

if(useSymbols){
characters += symbols;
}

let password = "";

for(let i=0;i<length;i++){
let random = Math.floor(Math.random()*characters.length);
password += characters[random];
}

document.getElementById("password").value = password;

}

function copyPassword(){

let pass = document.getElementById("password");

pass.select();
document.execCommand("copy");

alert("Password Copied!");

}