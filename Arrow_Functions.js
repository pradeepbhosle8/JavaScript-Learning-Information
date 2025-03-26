// Arrow Function in JavaScript

// Arrow functions allow us to write shorter function syntax:
// Instead of:
// var x = function(x, y) {
//     return x * y;
// }
//
// Use the arrow function syntax:
// var x = (x, y) => x * y;
//
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using the arguments object: Arrow functions do not have an arguments object.
// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions do not have a prototype property.
// Arrow functions cannot be used as generators.
// Arrow functions can be used as methods.
// Arrow functions can be used as event handlers.
// Arrow functions can be used in callbacks.
// Arrow functions can be used in promises.
// Arrow functions can be used in async/await.
// Arrow functions can be used in array methods.
// Arrow functions can be used in higher order array methods.
// Arrow functions can be used in DOM manipulation.
// Arrow functions can be used in timers.
// Arrow functions can be used in animations.
// Arrow functions can be used in form validation.
// Arrow functions can be used in AJAX.
// Arrow functions can be used in JSON.

// Example
// syntax: 
const sayHello = () => {
    console.log('Hello');
}
sayHello();
// or
var x = (x, y) => x * y;

// arguments keywords
// Arrow functions do not have their own arguments object.
 function addNumbers(){
  console.log('arguments')
 }

addNumbers(5, 10, 15, 20); // arguments is not defined. in arrow functions

// when we use aruments in arrow functions use spread operator
// Example
const addNumbers = (...args) => {
    console.log(args);
}
addNumbers(5, 10, 15, 20); // output is [5,10,15,20]

// this keyword
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Example
// this keyword in normal function is working
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.fullName()); // output is John Doe

// this keyword in arrow function is not working
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person1.fullName()); // output is undefined undefined


