// Loops in Javascript
// Loops can execute a block of code a number of times.

// JavaScript supports different kinds of loops:
// for loop
// while loop
// do while loop
// for in loop
// for of loop

// for loop
// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }

// eg.
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// while loop
// The while loop loops through a block of code as long as a specified condition is true.
// Syntax
// while (condition) {
//   // code block to be executed
// }

// eg.
// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do while loop
// The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// Syntax
// do {
//   // code block to be executed
// }
// while (condition);

// eg.
// var i = 0;
// do {
//   console.log(i);
//   i++;
// }
// while (i < 5);

// for in loop
// The JavaScript for/in statement loops through the properties of an object.
// Syntax
// for (variable in object) {
//   // code block to be executed
// }

// eg.
// var person = {fname:"Pradeep", lname:"Bhosle", age:25};
// var text = "";
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }

// console.log(text);

// for of loop
// The JavaScript for/of statement loops through the values of an iterable object.
// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

// eg.
var cars = ["BMW", "Volvo", "Mini"];
var x;
for (x of cars) {
  console.log(x);
}

