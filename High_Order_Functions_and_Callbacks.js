// High order functions and callbacks 

// High order functions
// A function that takes another function as an argument or returns a function is called a high order function.
// Example
// function hello() {
//     return 'Hello';
// }
// function greet(fn) {
//     console.log(fn());
// }
// greet(hello);

// Callbacks
// A callback is a function passed as an argument to another function.
// Example
// function hello() {
//     return 'Hello';
// }
// function greet(fn) {
//     console.log(fn());
// }
// greet(hello);

// Example of callback function

function greetUser(name, callback){
  console.log("Hello " + name + "!");
  callback(); // this is the callback function
}

// callback function that will be passed to greetUser function
function sayGoodbye(){
  console.log("Goodbye!");
}

// passing the sayGoodbye as a callback function to greetUser function
greetUser("Pradeep Bhosle", sayGoodbye);


// Example of High order function

// A higher-order function that takes a function as an argument
function doubleNumber(arr, callback){
  return arr.map(callback); // Apply the callback to each element
}

// a function to double a number
function multiplyByTwo(num){
  return num * 2;
}

// using High order function
const number = [1, 2, 3, 4, 5];
const doubledNumber = doubleNumber(number, multiplyByTwo);
console.log(doubledNumber); // [2, 4, 6, 8, 10]