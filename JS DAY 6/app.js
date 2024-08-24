//! 1. splice method:
//~ This method is used for insertion of elements or deletion of elements 
//~ This method will afect the original array :
//~ It will return an empty array if inserting a element 
//~ It will return the deleted element in an array while performing deletion 
//* splice(Starting Index, Delete Count , n....(elements to be inserted))


// let colors = ["red","green","blue","yellow","pink"];
//~ ["red","green",`crimson` ,"blue","yellow","pink"];

// console.log(colors.splice(2,1,))
// console.log(colors)

//! 2. at method :
//~ It is used to access the paticular element in the array:
//~ This method will not affect the original array :
//~ It will return the element in the array or undefined

// let colors = ["red","green","blue","yellow","pink"];

// console.log(colors[1]) //! Similar to at 
// console.log(colors.at(10))


//! 3. join method: 

//~ To convert array to a single string with seperations : 
//~ It will not affect the original array :
//~ It will return a new string:

//* join("Seperators")

// let colors = ["red","green","blue","yellow","pink"];

// let newArray  = colors.join("");

// console.log(colors)
// console.log(typeof newArray)

//! 4. Slice method : 
//~ It is used to slice the array into fragments 
//~ It will return a new array of sliced values:
//~ It will not affect the original array:
//* splice(starting Index, last Index)
//~ Last index will be excluded : 

// let colors = ["red","green","blue","yellow","pink"];

// let newArray = colors.slice(1,3);

// console.log(colors)

// console.log(newArray)


// let arr = [1,2,3,4];

// arr.push(12);

// console.log(arr)

//! 5. reverse method:
//~ It is used to reverse the array 
//~ It will return the reversed array :
//~ It will affect the original array : 

//* reverse(No paramaters)

// let colors = ["red","green","blue","yellow","pink"];
// console.log(colors)
// console.log(colors.reverse())

// console.log(colors)


//! 6. flat method: 
//~ This method is used to flatten the array : meaning remove nested array 
//~ It will return a new array of all elements 
//~ It will not affect the original array :

//* flat(depth) --> how many layers to be flattened: 

// let colors = ["red","green","blue","yellow","pink",["navy","dodgerblue",["brown","black"]]];
// let newArray = colors.flat(2);
// console.log(colors)
// console.log(newArray)

// [element, [element,[elements]]]

//! 7. Includes methods:
//~ This method is used to check whether a element is present or not : 
//~ Will return a true or false values:

//* colors.includes(Element to be searched, starting point)

// let colors = ["red","green","blue","yellow","pink"];
// console.log(colors.includes("black",0))


//! 8. concat method: 
//~ It is used to add or join two arrays: 
//~ It will return a new array of the two merged two arrays :
//~ It will not affect the original array :

//* Array.concat("The array to be copied",) // elements

// let colors = ["red","green"];
// let cars = ["BMW","Benz"];

// const newArray = colors.concat(cars);

// console.log(newArray)
// console.log(colors)
// console.log(cars)


//! 9. Fill method:
//~ This method is used to fill a paticular element throughout the entire array : 
//~ It will affect the original array : 
//~ It will return the array of updated values:

//* numbers.fill(element to be filled, starting point , ending point)

//~ Ending point will be excluded:

// const numbers = ["one","two","three","four"]

// numbers.fill("msdhoni",2)

// console.log(numbers)

//! 10. IndexOf method:

//~ This method is used to get the index of the element in an array 
//~ This method will return the index of the element or it will return -1 in case no element is present

//* IndexOf(Element to be searched , starting point )

// const cars = ["Gwagon","bmw","lambo","ferrari","nano","alto"];

// const indexOfNano = cars.indexOf("bmw",2)

// console.log(indexOfNano)


//! 11.last index of()


//~  the index of the element in an array 
//~ execution works from the last : 
//~ This method will return the index of the eleme


// let colors = ["red","green","blue","yellow"];

// console.log(colors.lastIndexOf("yellow",1))

//! 12. find() method:
//~ This method is used to find one element in an array based on the condition
//~ This method will not affect original array : 
//~ This return only one element: which matches the condition:

//* find(callback with a condition)


// let colors = ["name","age","dept"]

// let colors = [1,2,3,4,5,6,7];

// function callback(element){
//     return element>5
// }

// let newColors = colors.find(callback)

// console.log(newColors)


//! 13. map() method:

//~ Map method is used to iterate and perform certain calculations or (rendering content);

//~ Map method return a new Array of updated values:
//~ map method doesn't affect the original array : 


//* map(callback) ===> callback(element,index,array)

// let numbers =[2,3,4,5,6];
// // 4,9,16,25,36

// let newArray = numbers.map((element,idx,array)=>{
//     return element**2;
// })

// let colors = numbers.map(el => el**2);


// console.log(colors)

// console.log(newArray)


// for(let i = 0;i<numbers.length;i++){
//     numbers[i] = numbers[i] **2;
// }

// console.log(numbers)


//! 14. filter();

//~ filter method is used to filter the array using certain conditions

//~ filter method return a new Array of updated values:
//~ filter method doesn't affect the original array : 


//* filter(callback) ===> callback(element,index,array)


// let array = [100,200,201,302,405,506];


// let newArray = array.map((element,index,array)=>{
//    return element%2===0;
// })
// console.log(newArray)
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~Map completed~~~~~~~~~~~~~~~~~~~~~~~~~~``")

// let newArray2 = array.filter((element,index,array)=>{
//     return element%2===0;
// })

// console.log(newArray2)



//! 15. some()
//~ some method is used to check atleast one element is passing the condition:
//~ some method will not affect the original array : 
//~ some method will return true or false;

//* some(callback) ===> callback(element,index,array)

// let numbers =[1,2,3,4,5];

// let ans = numbers.some((element,index,array)=>{
//     return element>2;
// })
// console.log(ans)

// console.log("------------------------------------------")

//! 16. every()

//~ every method is used to check whether all the elements is passing the condition:
//~ every method will not affect the original array : 
//~ every method will return true or false;

//* every(callback) ===> callback(element,index,array)

// let ans2 = numbers.every((element,index,array)=>{
//     return element>0;
// })

// console.log(ans2)


//! 17. reduce method()

let numbers=[1,2,3,4,5,6,7,8,9,10];

// let value = numbers.reduce((a,b,c,d)=>{
//    console.log(a,b,c,d)
// } ,10)

// console.log(value)


// let sum = numbers.reduce((acc,el)=>  acc+el, 0);
// console.log(sum)








