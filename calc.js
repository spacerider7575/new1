let inp1 = document.querySelector("#first")
let inp2 = document.querySelector("#second")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let result = document.querySelector(".result")
add.addEventListener('click',()=>{
    let fn =inp1.value;
    let sn =inp2.value;

    let sum =(+fn)+(+sn);
    
    result.textContent =sum;
 }
 )
 subtract.addEventListener('click',()=>{
    let fn =inp1.value;
    let sn =inp2.value;

    let difference =(+fn)-(+sn);
    
    result.textContent =difference;
 }
 )
 multiply.addEventListener('click',()=>{
    let fn =inp1.value;
    let sn =inp2.value;

    let product =(+fn)*(+sn);
    
    result.textContent =product;
 }
 )
divide.addEventListener('click',()=>{
    let fn =inp1.value;
    let sn =inp2.value;

    let quotient =(+fn)-(+sn);
    
    result.textContent = quotient;
 }
 )