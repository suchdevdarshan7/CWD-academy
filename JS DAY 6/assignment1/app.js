let text = document.querySelector('.text');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let i = 0;

function increment(){
    i = i + 1;
    text.innerText = i
}
function decrement(){
    i = i - 1; 
    text.innerText = i;
}
function reset(){
    i = 0;
    text.innerText = i;
}