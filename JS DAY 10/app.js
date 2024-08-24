// name = darshan

//! Three different ways to create a objects :
//& Creation

//~ Object literals: 

// let object = {
//     name: "Gokul",
//     email: "gokul@email.com",
// }
// console.log(object)

//~ Object constructor:

// let obj = new Object({name: "Somename",age: 12})

// console.log(obj)

//~ Object constructor function

// function UserDetails(username,password,email){
//    this.password = password;
//    this.email = email;
//    this.username = username;
// }

// let obj = new UserDetails("Ajay","ajay123","ajay@email.com")
// console.log(obj)

//& Reading the object : 
//~ dot operator : 

// let object = {
//     name: "Somename",
//     age: 93,
//     birthYear: 2024,
//     dept: "CSE",
// }

// console.log(object.name)
// console.log(object.birthYear)
// console.log(object.age)
// console.log(object.dept)

// console.log(object)

//~ Bracket operator: 

// let object = {
//     name: "Somename",
//     age: 93,
//     birthYear: 2024,
//     dept: "CSE",
// }

// console.log(object['age'])

//~ Updation

// let UserObject = {
//     username: "rindhya",
//     password: "rindhya123",
//     email: "rindhya123@email.com",
// }

// console.log(`The password before updation ${UserObject.password}`)

// UserObject.password = "somethingveryhardtofind";

// UserObject['password'] = "somethingwhichcantbefound"

// console.log(`The password after updation ${UserObject.password}`)

//~ Deletion: 

//^ delete --> !important


// let UserObject = {
//     username: "rindhya",
//     password: "rindhya123",
//     email: "rindhya123@email.com",
// }

// console.log(`The password before deletion ${UserObject.password}`)
// console.log(UserObject)
// delete UserObject.password

// console.log(UserObject)
// console.log(`The password after deletion ${UserObject.password}`)


// ~ CRUD --Operation -----------------------------------------

//! Destructuring : 

// let someObject = {
//     student: "Devendran",
//     studentEmail: "devendran@gmail.com",
//     studentDept: "Machine Learning",
//     studentAge: 20,
// }

// let {student:a,studentEmail,studentAge,studentDept } = someObject;

// console.log(a)
// console.log(studentEmail)
// console.log(studentAge)
// console.log(studentDept)

//! Iterating over an object : 


// le+
// for (let sambit in someObject) {
    
//     console.log(someObject[sambit])
// }

// for (const element of someObject) {
//     console.log(someObject[element])
// }


