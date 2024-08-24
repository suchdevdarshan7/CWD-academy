// function sum(num1,num2){
//     console.log(num1+num2)
// }

// let a = 10 ;
// let b = 20 ; 
// let sum = sum(a,b);
// console.log(sum);

// //? DRY ==> Do not repeat yourself : 

// let sum2 = a + b;

//! Types:

//! 1. Anonmyous function ==> function without name : 

// function (){
//     console.log("Hello world")
// }


// ! 2. Function with expression

// let a = function (){
//     console.log("Hello!")
// }

// a();

//! 3. Named Functions :

// function greet(){
//     console.log("Welcome to this course!")
// }
// greet();

//! 4. Arrow function: --> expressions

// let func = () => {
//      console.log("Hello") 
//      console.log("hellow")
// }

// func()

//! 5. Higher Order functions 
// ? The function which accepts callback function or returns a function is called as higher order function

// function HOF(cb){
//     cb();
//     console.log("Do something")
// }

//! 6. Callback functions 
// ? The function which is passed as an argument is called as callback function

// function something(){
//     console.log("I am a callback!")
// }

// HOF(something)

// ! IIFE --> Immediately invoked function expression (or) self invoked functions

// (function (){
//     console.log("Connect to database");
// })()


// function greet(){
//     console.log("Hello world ") // no returns --> void (nothing)
// }

// greet();

// function greet(a,b){
//     return a+b;
// }

// let sum = greet(10,29);
// console.log(sum)

// let number = (num) => {
//     return num<10
// };


// let functionresult =  number(1);

// console.log(functionresult)

// ! default parameters 

// let greet = (name="Student") =>{
//     console.log("Welcome to our class "+name);
// }

// greet();

//& arguments keyword: 

//! function keyword you will have arguments keyword 

// function named(){
//     console.log(arguments)
// }

// named(10,20,30,40,50);

//! arrow function we don't have arguments keyword

// let arrow = ()=>{
//     console.log(arguments)
// }

// arrow(10,20,30,40);




