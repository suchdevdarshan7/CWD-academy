// ~ Line by line execution is called as synchrounous
// const hello = "Hello welcome to this course";
// console.log(hello)
// console.log("I am working")

// ~ If it is not executing in line by line then asynchrounous:

// const hello = "hello";

// setTimeout(() => {
//     console.log("I am the fastest")
// }, 2000);

// console.log(hello)

//~ SetTimeOut()

// console.log("Hello i am line 1")

// function hello() {
//     console.log("Good this one is working")
// }

// setTimeout(hello, 2000);

//! Recursive calls --> function which calls itself :
// function something() {
//     console.log("I am working")
//     something();
// }

// something()


// console.log("Hello i am this last line");

// ~ SetInterval()
// ! call stack overflow : --> stack overflow :

// let i = 0;

// let numberInterval = setInterval(() => {
//     ++i;
//     if (i === 10) {
//         clearInterval(numberInterval);
//     }
//     console.log("I am working perfectly " + i)
// }, 1000)


// setTimeout(() => {
//     alert("You must login to view the content")
// }, 2000)


// setInterval(() => {
//     console.log("I am working")
//     setTimeout(() => {
//         console.log("This is working")
//         setInterval(() => {
//             console.log("working perfectly")
//             setTimeout(()=>{
//                 console.log("This is will work don't worry ")
//             },2000)
//         },2000)

//     },2000)
// },2000)


// ! Promises: 

// let promise1 = new Promise((resolved, rejected) => {
//     console.log("I am good promise")
// })

// console.log(promise1)

//! Promise handling : rejected resolved ==> then() catch()

let array = [
    {
        element: "something",
        id: 1,
    },
    {
        element: "anything",
        id: 2,
    }
]


//! handling resolved state:
// let promise = new Promise((res, rej) => {
//     res(array)
// }).then((data) => {
//     console.log(data)
// })

//! handling rejected state :

// let promise1 = new Promise((res, rej) => {
//     res("You have been resolved come in ......!")
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("I don't care i will work if you are rejected or resolved")
// })

// ! If we have multiple promises nested then we will use promise chaining

async function func() {
    let promise = new Promise((res, rej) => {
        res("I am resolved")
    })

    const ans = await promise
    console.log(ans)
}
func()
//& --> mostly used in fetching api : 


