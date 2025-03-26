// closure in javascript and Currying in javascript

// A closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished

// closure in javaScript are fundamental concept that allows a function to remember it's lexical scope
// even when the function is executed outside of that scope.
// A closure is created when a function is defined inside another function and it gains access to the outer function' variables.

// Key concept of closure:
// 1. Lexical Scope: Functions in javascript have access to variables defined in their outer scope.
// 2. Inner Function: An inner functions can access variables from it's parant function, even after the outer function has finished excuting.
// 3. Encapulation: Clousers allows you to create private variables or methods, which are not accessible outside the clouser.


function outer() {
  let counter = 0; // This is a variable in the outer function
  
  // Inner function forms a closure over the outer function's variables
  function inner() {
    counter++;  // This accesses 'counter' from the outer function
    console.log(counter);
  }
  
  return inner; // Return the inner function, so it can be used later
}

const closureFunction = outer(); // outer() is executed and returns the inner function
closureFunction(); // Output: 1
closureFunction(); // Output: 2
closureFunction(); // Output: 3

//
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
console.log(counter.getCount()); // Output: 1


// Curring In Javascript 
// Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// Curring is transform a function that takes multiple arguments into a sequence of functions, each taking a single argument, creating a chain of functions that eventually return the final result.

// for example:

function add(a){
  return function(b){
    return function(c){
      return a + b + c;

    }
  }
}
console.log(add(2)(3)(4)); // Output : 9

// eS6 syntax
const addES = (a) => (b) => (c) => a + b + c;
console.log(addES(2)(3)(4)); // Output : 9

// example 2

function sendAutoEmail(to){
  return function(subject){
    return function(message){
      console.log(`Sending email to ${to} with subject: ${subject} and message: ${message}`);
    }
  }
}
let step1 = sendAutoEmail("pradeep.bhosle@gmail.com");
let step2 = step1("New Order Confirmation ")
step2("Your order has been confirmed and is being processed.");

// es6 syntax
 
const sendAutoEmailES = (to) => (subject) => (message) => {
  console.log(`Sending email to ${to} with subject: ${subject} and message: ${message}`);
}
let step1Auto = sendAutoEmail("pradeep.bhosle@gmail.com");
let step2Auto = step1("New Order Confirmation ")
step2Auto("Your order has been confirmed and is being processed.");

