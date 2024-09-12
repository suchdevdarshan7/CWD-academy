
// ! 1. fromCharCode();

//~ we use this method to find the ascii value of a paticular number
//~ it returns the ascii value
//~ it does not affect the original string

// ^ fromCharCode(The number);

// let number = 66;
// console.log(String.fromCharCode(number));


//! 2. trim();

//~ If we want to remove the spaces both in front and back then use trim method
//~ It returns a new string of removed whitespaces

//^ --> StringName.trim('')

// let str = `         I am the best           `;

// let newStr = str.trim('');
// console.log(str)
// console.log(newStr)

//! 3.trimStart();

//~ If we want to remove the spaces in front use trimStart method
//~ It returns a new string of removed whitespaces

// let str = `         I am the best           `;

// let newStr = str.trimStart('');
// console.log(str)
// console.log(newStr)


//! 4.trimEnd();

//~ If we want to remove the spaces in back use trimStart method
//~ It returns a new string of removed whitespaces

// let str1 = `         I am the best           `;

// let newStr1 = str.trimEnd('');
// console.log(str1)
// console.log(newStr1)

//! 5. Substring()

//~ If we want a substring outof a string then use this method
//~ It returns the new string of the given value

//^ --> string_Name.substring(startingIndex,lastIndex)
//& --> last index will be excluded : 


// let string = "HelloWorld";
// let newStr = string.substring(2, 5);

// console.log(string)
// console.log(newStr)

//! 6.split()

//~ If we want to split the string into different character or words use this method

//~ This method returns an array of splitted values

//^ ---> string_Name.split("From where should i split");


// let string = "I am a good person but also a bad person";

// let newStr = string.split(' ')

// console.log(newStr)

//! 7. startwith()

//~ If we want to check whether the string starts with a paticular value or character use this method

//~ This method returns true if the condition matches else false

//^ ---> string_Name.startsWith("Checking Character", starting index);


// let str = "Hello world!";

// let check = str.startsWith('el', 1);

// console.log(check)

//! 8. endsWith()

//~ If we want to check whether the string ends with a paticular value or character use this method

//~ This method returns true if the condition matches else false

//^ ---> string_Name.endsWith("Checking Character", starting index);


// let str = "Hello world!";

// let check = str.endsWith();

// console.log(check)


//! 9. replaceAll()

//~ If you want to replace all the character with a paticular character use this method
//~ It returns a string of replaced characters;

//^ --> string_name.replaceAll('Element_To_Be_Removed',"Element_To_BE_Filled")


// let string = 'tree free';

// let newString = string.replaceAll('e', 'a');

// console.log(newString)


//! 10. replace()

//~ If you want to replace only one of the character with a paticular character use this method
//~ It returns a string of replaced characters;

//^ --> string_name.replace('Element_To_Be_Removed',"Element_To_BE_Filled")


// let string = 'tree free';

// let newString = string.replaceAll('e', 'a');

// console.log(newString)

//! 11. includes()

//~ If you want check whether a paticular character or string is inside the string then use this method
//~ It returns a true or false based on the condition

//^ --> string_name.includes('string to be searched',"starting index")

// let string = "HiIamGoodBoy";

// let check = string.includes('i', 2);
// console.log(check)


//! Destructring strings:

let string = 'Hello world!';

let [x, y, z] = string;

console.log(x, y, z)

