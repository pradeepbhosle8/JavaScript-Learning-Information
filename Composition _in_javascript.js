// Composition in Javascript

// Function composition is the pointwise application of one function to the result of another to produce a third function.

// compose = (fn1, fn2) => value => fn2(fn1(value));

// Understanding function composition:

// function composition is the process of chaining together multiple functions to form a new function.
// the compose function takes in two or more functions and return a new function that applies these functions in right to left order. This menas that rightmost is applied first, followed by the next function to the left and so on.

// Example:
// Imaging we have three functions : add5, square

function add(a,b){
  return a + b;
}

function square(val){
  return val * val;
}

function composeTwoFunctions(fn1, fn2){
  return function(a,b){
    return fn2(fn1(a,b));
  }
}
// es6 syntax
const composeTwoFunctionsES = (fn1, fn2) => (a,b) => fn2(fn1(a,b));


const task = composeTwoFunctions(add, square);
console.log(task(2,3)); // Output: 25

// another example

const compose1 = (...fns) => fns.reduce((f,g) => (...args) => f(g(...args)));
const digitize = n => [...`${n}`].map(i => parseInt(i));

const add05 = x => x + 5;
const multipleTest = (x,y) => x * y;

const composFun = compose1(digitize, add05, multipleTest);
console.log(composFun(10,5)); // Output: [1, 5, 5]
