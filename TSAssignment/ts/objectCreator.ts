//to store object
let object = {};
//assigning keys and values to the variables
let firstKey = 0;
let firstValue = "Hello";
let secondKey = 1;
let secondValue = "I am here";
let thirdKey = 2;
let thirdValue = "How are you";
 
//creating objects with the key and values
Object.assign(object, { [firstKey]: firstValue });
Object.assign(object, { [secondKey]: secondValue });
Object.assign(object, { [thirdKey]: thirdValue });
 
console.log(object);