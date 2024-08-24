//! Output methods : 


// console.log("Hello world!")

// document.write("Hi")
// document.write("Hi")

// document.writeln("hi")
// document.write('<br/>')
// document.writeln("hi")


// let value = alert("Are you okay with this?")

// console.log(typeof value,value)

// let Confirmation = confirm("Are you sure?")

// console.log(Confirmation,typeof Confirmation)


// let a = parseInt(prompt("Enter a number "))
// let b = parseInt(prompt("Enter another number"))

// console.log(typeof a , a)
// console.log(typeof b , b)

// let c = a + b;

// document.write(c)

// let str = ""
// let str1 = ''

// let str2 = ``;

// let str1 = "Thilak";
// let marks = [100,200,300,400,500];

// marks[0] = "Ajay"

// str1[0] = 'D'

// console.log(str1[0])
// console.log(str1[1])
// console.log(str1[2])
// console.log(str1[3])
// console.log(str1[4])
// console.log(str1[5])

// console.log("-------------------------------------------------------")

// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])


//! Array questions: 

// 1. What are the different way to create an array :

// ~ Array literals: 

// let arr = [1,2,3,4,5];

// console.log(arr)

// ~ Array constructors

// let arr = new Array(1,2,3,3,4,5);

// console.log(arr)

//~ Array from method:

// let arr = [100,500,800,200,300,40,600];
        // 0   1   2   3   4   5 6 
        
//! Printing         
// for(let i = 0;i<=4;i++){
//     console.log(arr[i])
// }

//! Largest element

// let max = -1 ;

// for(let i = 0 ; i<=6;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// console.log(max)

// let max = -1 ;

//! Smallest element in an array ?

// let min = 1000;

// for(let i = 0 ; i<=6;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }

// console.log(min)


// let arr = [1,2,3,4,5];
// let crr = [];
// let j = 0;
// for(let i = 4;i>=0;i--){
//     crr[j++] = arr[i];
// }

// console.log(crr)

// let arr  =[1,2,3,4,5];

// console.log("The array before reversing ")
// console.log(arr)
// let start = 0;
// let end = 4;

// while(start<=end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log("The array after reversing")
// console.log(arr)


// ! [1,2,3,4,5] ==> [2,1,4,3,5];
// ! [1,2,3,4,5] ==> Search for an element ! : if the element present you should print the index number : if the element is not present you should print -1