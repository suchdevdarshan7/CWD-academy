// let obj = {
//     name: "Something",
//     age: 12,
// }

// let { name: anotherName, age } = obj;

// console.log(anotherName)
// console.log(age)

//! Enhanced object literals :

// let username = "Somename";
// let password = "Somename@123";

// let obj = {
//     username,
//     password
// }

// console.log(obj)

//! Object methods:

//~ 1. Object.keys()

//^ --> To get all the keys in an object
//^ --> returns an array of all key values

// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }


// console.log(Object.keys(UserObj))

//~ 2.Object.values()

//^ --> To get all the  values in an object
//^ --> returns an array of all  values


// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }

// console.log(Object.values(UserObj));



//~ 3.Object.entries()

//^ --> To get all the  key values in an array format
//^ --> returns an array of arrays of key value pairs

// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }

// console.log(Object.entries(UserObj))

//~ 4.Object.hasOwn()

//^ --> To check whether a key is present or not
//^ --> returns true if the key is present or return false:


// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }

// console.log(Object.hasOwn(UserObj, "gender"))

//~ 5. Object.seal()

//^ If we want to not allow the user to delete, or add new values to the existing object we will use this:
//^ It will return the same sealed Object

// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }

// console.log(Object.seal(UserObj))


// console.log(UserObj)

//~ 6. Object.isSealed()

//^ If we want tocheck whether the object is sealed or not :
//^ It will return true or false;

// console.log(Object.isSealed(UserObj))


//~ 7. Object.freeze();

//^  If we want to not allow the user to delete, or add new values to the existing object
//^ The freezed object will be returned: 

// let UserObj = {
//     userName: "Myname",
//     password: "Mypassword",
//     age: 18,
//     dept: "cse",
// }

// console.log(Object.freeze(UserObj))

// delete UserObj.userName;
// UserObj.userName = "Idiot"
// console.log(UserObj)

//~ 8. Object.isFrozen()

//^ If we want tocheck whether the object is freezed or not :
//^ It will return true or false;

// console.log(Object.isFrozen(UserObj))


//~ 9. Object.assign()

//^ If we want to merge to objects then use this method 
//^ It will return the Object which is the target

//& Object.assign(target,source) --> target (final results will be added in the object)  source--> (copying object)

let obj1 = {
    a: 1,
    c: 3
}
let obj2 = {
    b: 2,
    d: 4
}

Object.assign(obj1, obj2);

//~ 10. Object.create()

//^ This method is used to create the object with respect to the other object 
//^ It will return an empty object 


let student = {
    college: "IIT delhi",
    dept: "cse",
    exam: "GATE",
}

let person1 = Object.create(student);

person1.name = "Rahul";

console.log(person1)