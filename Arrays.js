// Array in JavaScript
// Array is a collection of elements. It can hold values of multiple data types.
// Array is a reference data type.
// Array is an ordered collection of elements.
// Array is a global object in JavaScript.
// Array is a special type of object in JavaScript.
// Array is a list-like object.

// Array Declaration

// Array can be declared in two ways:
// Using Array constructor
// Using Array literal
// Using Array constructor

// Syntax:
// var array_name = new Array();

// Example:
// var fruits = new Array();

// Using Array literal
// Syntax:
// var array_name = [];

// Example:
// var fruits = [];

// Array Initialization
// Array can be initialized in two ways:
// Using Array constructor
// Using Array literal

// Using Array constructor
// Syntax:
// var array_name = new Array(element1, element2, element3, ..., elementN);
// Example:
// var fruits = new Array('Apple', 'Banana', 'Mango');

// Using Array literal
// Syntax:
// var array_name = [element1, element2, element3, ..., elementN];
// Example:
// var fruits = ['Apple', 'Banana', 'Mango'];

// Accessing Array Elements
// Array elements can be accessed using index.
// Array index starts from 0.

// Syntax:
// array_name[index];

// Example:
// var fruits = ['Apple', 'Banana', 'Mango'];
// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Banana
// console.log(fruits[2]); // Mango


// Array Properties
// Array has following properties:
// Property	Description
// constructor	Returns the function that created the Array object's prototype
// length	Returns the number of elements in an array
// Array Methods


// Array has following methods:
// Method	Description

// concat()	Joins two or more arrays and returns a new array

// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var vegetables = ['Tomato', 'Potato', 'Onion'];
var food = fruits.concat(vegetables);
console.log(food); // ['Apple', 'Banana', 'Mango', 'Tomato', 'Potato', 'Onion']


// copyWithin()	Copies array elements within the array
// example:
var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
console.log(fruits.copyWithin(0, 2)); // ['Apple', 'Banana', 'Apple', 'Banana', 'Mango']


// entries()	Returns a key/value pair Array Iteration Object
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var iterator = fruits.entries();
console.log(iterator.next().value); // [0, 'Apple']
console.log(iterator.next().value); // [1, 'Banana']
console.log(iterator.next().value); // [2, 'Mango']


// every()	Checks if every element in an array pass a test
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.every(function(fruit){
  return fruit.length > 4;
}
);
console.log(result); // false

// fill()	Fill the elements in an array with a static value
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.fill('Orange')); // ['Orange', 'Orange', 'Orange']


// filter()	Creates a new array with every element in an array that pass a test
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.filter(function(fruit){
  return fruit.length > 4;
}
);
console.log(result); // ['Banana', 'Mango']


// find()	Returns the value of the first element in an array that pass a test
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.find(function(fruit){
  return fruit.length > 4;
}
);
console.log(result); // Banana


// findIndex()	Returns the index of the first element in an array that pass a test
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.findIndex(function(fruit){
  return fruit.length > 4;
}
);
console.log(result); // 1


// forEach()	Calls a function for each array element
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
fruits.forEach(function(fruit){
  console.log(fruit);
}
);
// Apple
// Banana
// Mango

// from()	Creates an array from an object
// example:
var fruits = Array.from('Apple');
console.log(fruits); // ['A', 'p', 'p', 'l', 'e']


// includes()	Check if an array contains the specified element
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.includes('Banana')); // true


// indexOf()	Search the array for an element and returns its position
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.indexOf('Banana'));
// 1

// isArray()	Checks whether an object is an array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(Array.isArray(fruits)); // true


// join()	Joins all elements of an array into a string
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.join()); // Apple,Banana,Mango


// keys()	Returns a Array Iteration Object, containing the keys of the original array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var iterator = fruits.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2


// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// example:
var fruits = ['Apple', 'Banana', 'Mango', 'Banana'];
console.log(fruits.lastIndexOf('Banana'));
// 3


// map()	Creates a new array with the result of calling a function for each array element
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.map(function(fruit){
  return fruit.length;
}
);
console.log(result); // [5, 6, 5]


// pop()	Removes the last element of an array, and returns that element
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.pop()); // Mango
console.log(fruits); // ['Apple', 'Banana']


// push()	Adds new elements to the end of an array, and returns the new length
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.push('Orange')); // 4
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']


// reduce()	Reduce the values of an array to a single value (going left-to-right)
// example:
var fruits = [10, 20, 30];
var result = fruits.reduce(function(total, num){
  return total + num;
}
);
console.log(result); // 60


// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// example:
var fruits = [10, 20, 30];
var result = fruits.reduceRight(function(total, num){
  return total + num;
}
);
console.log(result); // 60

// reverse()	Reverses the order of the elements in an array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.reverse()); // ['Mango', 'Banana', 'Apple']


// shift()	Removes the first element of an array, and returns that element
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.shift()); // Apple
console.log(fruits); // ['Banana', 'Mango']


// slice()	Selects a part of an array, and returns the new array
// example:
var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
console.log(fruits.slice(1, 3)); // ['Banana', 'Mango']


// some()	Checks if any of the elements in an array pass a test
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
var result = fruits.some(function(fruit){
  return fruit.length > 4;
}
);
console.log(result); // true


// sort()	Sorts the elements of an array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.sort()); // ['Apple', 'Banana', 'Mango']

// splice()	Adds/Removes elements from an array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.splice(2, 0, 'Orange')); // []

// toString()	Converts an array to a string, and returns the result
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.toString()); // Apple,Banana,Mango

// unshift()	Adds new elements to the beginning of an array, and returns the new length
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.unshift('Orange')); // 4
console.log(fruits); // ['Orange', 'Apple', 'Banana', 'Mango']

// valueOf()	Returns the primitive value of an array
// example:
var fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.valueOf()); // ['Apple', 'Banana', 'Mango']
