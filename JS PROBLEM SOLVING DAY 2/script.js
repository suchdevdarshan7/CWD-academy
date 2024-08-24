//! Peterson number:

// function factorial(n){
//     let fact = 1;
//     for(let i = 1; i<=n;i++){
//         fact = fact * i;

//     }
//     return fact;
// }

// let number = 145;
// let temp = number;
// let sum = 0;

// while(temp!==0){
//     let last = temp%10;
//     sum = sum + factorial(last);
//     temp =  Math.floor(temp/10);
// }

// let ans = (sum===number)? "Peterson Number" : "Not a peterson number";

// console.log(ans)


// ! Neon number

// let number = 1;

// let square = number**2;

// let sum = 0;

// while(square!=0){
//     let last = square%10;
//     sum = sum + last;
//     square = Math.floor(square/10);

// }

// let ans = (sum===number)? "Neon Number" : "Not a neon Number";

// console.log(ans)


//! Tech number;

// let count = (num)=>{
//     let count = 0; 

//     while(num!=0){
//         count++;
//         num= Math.floor(num/10);
//     }
//     return count
// }
// let number = 2025;
// let countOfNumber = count(number);

// if(countOfNumber%2===1){
//     console.log("Not a tech number");
// }

// let numberToDivide = 10 ** (countOfNumber/2);

// let lastNumber = number%numberToDivide;
// let firstNumber = Math.floor(number/numberToDivide);

// let sum = lastNumber + firstNumber;

// let SquareSum = sum**2;

// if(number===SquareSum){
//     console.log("Tech Number")
// }
// else{
//     console.log("Not a tech number")
// }

//! Prime number:

// function isPrime(num){
//     if(num===1||num===0){
//         return "Not Prime"
//     }
    
//     for(let i = 2;i<num;i++){
//         if(num%i===0){
//             return "Not prime";
//         }
//     }

//     return "Prime"

// }
function isPrime(num){
    if(num===1||num===0){
        return false;
    }
    
    for(let i = 2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }

    return true;

}

for(let i =1;i<=40;i++){
    if(isPrime(i)){
        console.log(i);
    }
}


//! 

number = 10;

//& n primes :  2 3 5 7 11 13 17 19 23 29

// Disarium Number

//& 1. Given a number “n”, find if it is Disarium or not. A number is called Disarium if sum of its digits powered with their respective positions is equal to the number itself.


