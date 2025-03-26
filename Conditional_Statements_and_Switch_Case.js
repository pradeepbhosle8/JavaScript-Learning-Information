// Conditional Statements and Switch Case

// Conditional Statements
// Conditional statements are used to perform different actions based on different conditions.
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed
//
// if statement 
// The if statement executes a block of code if a specified condition is true.
// Syntax
// if (condition) {
//   // block of code to be executed if the condition is true
// }
//
// eg.
// var time = 20;
// if (time < 18) {
//   console.log("Good day.");
// } else {
//   console.log("Good evening.");
// }

// else statement
// The else statement specifies a block of code to be executed if the condition is false.
// Syntax
// if (condition) {
//   // block of code to be executed if the condition is true
// } else {
//   // block of code to be executed if the condition is false
// }

// else if statement
// The else if statement specifies a new condition if the first condition is false.
// Syntax
// if (condition1) {
//   // block of code to be executed if condition1 is true
// } else if (condition2) {
//   // block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   // block of code to be executed if the condition1 is false and condition2 is false
// }

// switch statement
// The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.
// Syntax

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// This is how it works:
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// eg.
// var text;
// switch (new Date().getDay()) {
//   case 0:
//     text = "Sunday";
//     break;
//   case 1:
//     text = "Monday";
//     break;
//   case 2:
//     text = "Tuesday";
//     break;
//   case 3:
//     text = "Wednesday";
//     break;
//   case 4:
//     text = "Thursday";
//     break;
//   case 5:
//     text = "Friday";
//     break;
//   case 6:
//     text = "Saturday";
//     break;
//   default:
//     text = "Unknown Day";
// }
// console.log(text);

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution of inside the block.

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.


// Ternaary Operator if else
// var age = 10;
// var result = (age > 18) ? "Adult" : "Child";
// console.log(result); // Child
