// ! 1. Write a javascript program to print all natural numbers from 1 to n. – using while loop

// let n = 100;
// for(let i = 1;i<=n;i=i+1){
//     console.log(i)
// }

// ! 2. Write a javascript program to print all natural numbers in reverse (from n to 1). – using while loop

// let n = 100;

// for(let i =n; i>=1 ; i--){
//     console.log(i);
// }

// ! 3. Write a javascript program to print all even numbers between 1 to 100. – using while loop

// for(let i = 1;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// ! 4. Write a javascript program to print all odd number between 1 to 100.

// for(let i = 1;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

//! 5. Write a javascript program to find sum of all natural numbers between 1 to n.

// let n = 4;
// let sum = 0 ;
// for(let i = 1;i<=n;i++){
//     sum = sum +i;
// }
// console.log(sum);

// ! 6. Write a javascript program to find sum of all even numbers between 1 to n.

// let sum = 0;
// let n = 10;

// for(let i = 1;i<=n;i++){
//     if(i%2===0){
//         sum = sum + i;
//     }
// }

// console.log(sum)


//! 7. Write a javascript program to find sum of all odd numbers between 1 to n.

// let sum = 0;
// let n = 10;

// for (let index = 0; index < n; index++) {
//     if(index%2!==0){
//         sum = sum + index;
//     }
// }

// console.log(sum)

//! 8. Write a javascript program to print multiplication table of any number.
// &  HW (reverse the mulitplication table)

// let table = 4;

// for(let i = 1;i<=10;i++){
//     console.log(`${table} X ${i} = ${table*i}`);
// }


// ! 9. Write a javascript program to count number of digits in a number.

// let number = 12345;
// let count = 0;

// while(number!=0){
//     count++;
//     number = Math.floor(number/10); // to ignore calculations of decimals we use it 
// }

// console.log(count)

// ! 10. Write a javascript program to calculate sum of digits of a number.

// let number = 123;
// let sum = 0;
// while(number!=0){
//     let last = number%10;
//     sum = sum + last;
//     number = Math.floor(number/10);
// }
// console.log(sum)

//& 11. Write a javascript program to calculate product of digits of a number. HW

//! 12. Write a javascript program to enter a number and print its reverse.

// let number  = 123;
// let sum = 0;

// while(number!=0){
//     let last =  number%10;
//     sum = sum*10 + last;
//     number = Math.floor(number/10);
// }
// console.log(sum)


//& 13. Write a javascript program to check whether a number is palindrome or not.


//! 14 . Write a javascript program to find power of a number using for loop.

// let base = 10;
// let expo = 2;
// let power = base ** expo;

// let base = 15 ;
// let expo = 2; 
// let power = 1;
// for(let i = 1; i<=expo;i++){
//     power = power * base;
// }

// console.log(power)

//! 15. Write a javascript program to find all factors of a number.

// let number = 10;

// for(let i = 1;i<=number;i++){
//     if(number%i===0){
//         console.log(i)
//     }
// }


// ! 16. Write a javascript program to calculate factorial of a number.

// let number = 5; 
// let fact = 1;

// for(let i = 1;i<=number;i++){
//     fact = fact * i;
// }

// console.log(fact)


// ! 17. Write a javascript program to find LCM of two numbers.

// let number1 = 9;
// let number2 = 15;

// for(let i = 2; i<=number1;i++){
//     if(number1%i===0 && number2%i===0){
//         console.log(i)
//     }
// }