//! 1 Write a javascript program to find maximum between two numbers.

// let number1 = 100;
// let number2 = 20;

// if(number1>number2){
//     console.log("The number is greater "+number1);
// }
// else{
//     console.log("The number is greater "+number2)
// }

//!  2 Write a javascript program to find maximum between three numbers.

// let number1 = 100;
// let number2 = 200;
// let number3 = 300;

// if(number1>number2 && number1>number3){
//     console.log("The largest number is "+number1);
// }
// else if(number2>number1 && number2>number3){
//     console.log("The largest number is "+number2)
// }
// else{
//     console.log("The largest number is "+number3)
// }

//! 3 Write a javascript program to check whether a number is negative, positive or zero.

// ?                   -2 -1 0 1 2 

// let number = 0;

// if(number===0){
//     console.log("The number is zero!")
// }
// else if(number>0){
//     console.log("The number is positive!")
// }
// else{
//     console.log("The number is negative")
// }

//! 4 Write a javascript program to check whether a number is divisible by 5 and 11 or not.

// let number = 55;

// if(number%5===0 && number%11===0){
//     console.log(number+" is divisible by 5 and 11");
// }
// else{
//     console.log(number+" is not divisible by 5 and 11")
// }

// ! 5 Write a javascript program to check whether a number is even or odd.

// let number = 2;

// if(number%2===0){
//     console.log("The number is even!");
// }
// else{
//     console.log("The number is odd")
// }

// ! 6 Write a javascript program to check whether a year is leap year or not.
// ! the year should be divisble by 4 or 400 and not divisble by 100

// let year = 2004;

// if((year%4===0 || year%400===0) && year%100!==0){
//     console.log("The year is leap year !")
// }
// else{
//     console.log("The year is not a leap year ")
// }


//! 7 Write a javascript program to input angles of a triangle and check whether triangle is valid or not.

// let angle1 = 60;
// let angle2 = 60;
// let angle3 = 60;

// let sumOfAngles = angle1 + angle2 + angle3;

// if(sumOfAngles === 180){
//     console.log("This is a valid triangle ! ")
// }
// else{
//     console.log("This is not a valid triangle ")
// }

// ! 8 Write a javascript program to check whether the triangle is equilateral, isosceles or scalene triangle.

// let side1 = 20;
// let side2 = 10; 
// let side3 = 30;

// if(side1===side2 && side2 ===side3){
//     console.log("The triangle is equilateral !")
// }
// else if(side1===side2 || side1===side3 || side2===side3 ){
//     console.log("The traingle is isoceles triangle ")
// }
// else{
//     console.log("The triangle is scalene")
// }


//! 9 Write a javascript program to calculate profit or loss.

// let BuyingPrice = 200;
// let SellingPrice = 200;

// if(BuyingPrice===SellingPrice){
//     console.log("This is neither profit nor loss")
// }
// else if(BuyingPrice>SellingPrice){
//     console.log("It is a loss")
// }
// else{
//     console.log("It is a profit")
// }

//!  10 Write a javascript program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// ! Percentage >= 90% : Grade A
// ! Percentage >= 80% : Grade B
// ! Percentage >= 70% : Grade C
// ! Percentage >= 60% : Grade D
// ! Percentage >= 40% : Grade E
// ! Percentage < 40% : Grade F

// let Physics = 100;
// let Chemistry = 100;
// let Biology = 100;
// let Mathematics = 100;
// let Computer = 100;

// let percentage = (Physics+Chemistry+Biology+Mathematics+Computer)/5;

// if(percentage>=90){
//     console.log("The grade is A ")
// }
// else if(percentage>=80){
//     console.log("The grade is B ")
// }
// else if(percentage>=70){
//     console.log("The grade is C ")
// }
// else if(percentage>=60){
//     console.log("The grade is D ")
// }
// else if(percentage>=40){
//     console.log("The grade is E ")
// }
// else{
//     console.log("You have failed go and study !")
// }


// ! 11 Write a javascript program to input basic salary of an employee and calculate its Gross salary according to following:
// !Basic Salary <= 10000 : HRA = 20%, DA = 80%
// !Basic Salary <= 20000 : HRA = 25%, DA = 90%
// !Basic Salary > 20000 : HRA = 30%, DA = 95%
//? gross = basic + hra + da 


// let BasicSalary = 10000;
// let hra , da;
// let GrossSalary;

// if(BasicSalary<=10000){
//     hra = 0.2 * BasicSalary;
//     da = 0.8 * BasicSalary;
//     GrossSalary = BasicSalary + hra + da;
//     console.log("The Gross salary is "+GrossSalary);
// }
// else if(BasicSalary<=20000){
//     hra = 0.25 * BasicSalary;
//     da = 0.9 * BasicSalary;
//     GrossSalary = BasicSalary + hra + da;
//     console.log("The Gross salary is "+GrossSalary);
// }
// else {
//     hra = 0.3 * BasicSalary;
//     da = 0.95 * BasicSalary;
//     GrossSalary = BasicSalary + hra + da;
//     console.log("The Gross salary is "+GrossSalary);
// }


// ! 12 Write a javascript program to input electricity unit charges and calculate total electricity bill according to the given condition:

//! For first 50 units Rs. 0.50/unit
//! For next 100 units Rs. 0.75/unit
//! For next 100 units Rs. 1.20/unit
//! For unit above 250 Rs. 1.50/unit

//! An additional surcharge of 20% is added to the bill

// & create functions for all the above programs

// let ElectricityUnit = 50;
// let bill;
// let additionalCharges ;
// let TotalCharges;

// if(ElectricityUnit<=50){
//     bill = ElectricityUnit * 0.50;
//     additionalCharges = bill * 0.2 ;
//     TotalCharges = additionalCharges + bill;
//     console.log(TotalCharges);
// }
// else if(ElectricityUnit<=100){
//     bill = ElectricityUnit * 0.75;
//     additionalCharges = bill * 0.2 ;
//     TotalCharges = additionalCharges + bill;
//     console.log(TotalCharges);
// }
// else if(ElectricityUnit>100 && ElectricityUnit<=250){
//     bill = ElectricityUnit * 1.20;
//     additionalCharges = bill * 0.2 ;
//     TotalCharges = additionalCharges + bill;
//     console.log(TotalCharges);
// }
// else{
//     bill = ElectricityUnit * 1.50;
//     additionalCharges = bill * 0.2 ;
//     TotalCharges = additionalCharges + bill;
//     console.log(TotalCharges);
// }


