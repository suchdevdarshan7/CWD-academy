
// ! Hoisting : 
// console.log(a)
// var a = 10 ;
// console.log(a)

//! Temporal dead zone: 

// console.log(a)
// console.log(b)

// let a = 10 ; 
// const b = 20 ; 


// ! Behind the scenes of javascript: 


// let a = 10 ; 
// let b = 20 ; 

// function greet(){
//     console.log("HI i am greet")
// }

// function Sweet(){
//     console.log("Hi i am sweet")
// }

// greet();


// function greet(){
//     console.log("Hi i am greet");
//     sweet();
// }
// function sweet(){
//     console.log("Hi i am sweet")
// }

// greet()


// ! Tricky : Closures : 

// function greet(){
//     let a = 10 ;
//     function sweet(){
//         console.log(a);
//     }
//     sweet();
// }

// greet();


// function hello(){

//     var a  = 10 ; 
//     let b = ()=>{
//         console.log(a)
//     }
//     b()

// }

// hello();



// function arrow(){
//     var a = 10 ; // Function scope
//     console.log("Hi")
// }

// console.log(a); //Outside function

// arrow()







