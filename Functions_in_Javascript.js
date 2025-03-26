// Function in Javascript

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// Syntax
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// Parameters
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to the function.

// eg. 
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));


// Function Return
// When JavaScript reaches a return statement, the function will stop executing.
// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":
// Example
// Calculate the product of two numbers, and return the result:
// function myFunction(p1, p2) {
//   return p1 * p2;   // The function returns the product of p1 and p2
// }

// Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)

// Function Syntax
// Function Declaration
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }

// Function Expression
// var x = function (parameter1, parameter2, parameter3) {
//   // code to be executed
// };

// Function Constructor
// var myFunction = new Function("a", "b", "return a * b");

// Function Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// Hoisting applies to variable declarations and to function declarations.
// Example
// myFunction(5);

// function myFunction(y) {
//   return y * y;
// }

// Function Scope
// In JavaScript there are two types of scope:
// Local scope
// Global scope

// JavaScript has function scope: Each function creates a new scope.
// Scope determines the accessibility (visibility) of these variables.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Example
// // code here can NOT use carName
// function myFunction() {
//   var carName = "Volvo";
//   // code here CAN use carName
// }

// Function Parameters
// Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.
// Example
// // p1 and p2 are parameters
// function myFunction(p1, p2) {
//   return p1 * p2;   // The function returns the product of p1 and p2
// }

