// DataTypes and Operators in JavaScript

// Data Types in JavaScript
// JavaScript is a loosely typed or a dynamic language. This means that you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. This also means that you can have the same variable as different types:

// Numbers
// Strings
// Booleans
// Arrays
// Objects
// Undefined
// Null
// NaN
// Infinity

// eg.
// var num = 42; // number
// var firstName = "Pradeep"; // string
// var isTrue = true; // boolean
// var arr = [1,2,3]; // array
// var obj = {name: "Pradeep", age: 25}; // object
// var empty = null; // null
// var notDefined = undefined; // undefined
// var result = 10 / "H"; // NaN
// var inf = 10 / 0; // Infinity


// Operators in JavaScript
// Operators are used to perform operations on variables and values.
// JavaScript has the following types of operators:
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// Conditional operators

// Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers:
// Addition: +
// Subtraction: -
// Multiplication: *
// Division: /
// Modulus: %
// Increment: ++
// Decrement: --


// Assignment Operators
// Assignment operators are used to assign values to variables:
// Assignment: =
// Addition assignment: +=
// Subtraction assignment: -=
// Multiplication assignment: *=
// Division assignment: /=
// Modulus assignment: %=

// Comparison Operators
// Comparison operators are used to compare two values:
// Equal: ==
// Not equal: !=
// Strict equal: ===
// Strict not equal: !==
// Greater than: >
// Greater than or equal: >=
// Less than: <
// Less than or equal: <=

// Logical Operators
// Logical operators are used to determine the logic between variables or values:
// Logical AND: &&   All the conditions should be true
// Logical OR: ||    Any one condition should be true
// Logical NOT: !    Inverts the value of a variable



// Conditional Operators
// Conditional operators are used to evaluate a condition:
// Ternary: ? :

// eg.
// var age = 10;
// var result = (age > 18) ? "Adult" : "Child";
// console.log(result); // Child

// JavaScript also has some special operators:
// typeof: Returns the type of a variable
// instanceof: Returns true if an object is an instance of an object type

// delete: Deletes an object
// new: Creates an instance of a user-defined object
// in: Returns true if a property is in an object
// void: Discards a return value

// typeof Operator
// The typeof operator returns the type of a variable or an expression:
// var num = 42;
// console.log(typeof num); // number

// instanceof Operator
// The instanceof operator returns true if an object is an instance of an object type:
// var obj = {};
// console.log(obj instanceof Object); // true

// delete Operator
// The delete operator deletes an object:
// var obj = {name: "Pradeep"};
// delete obj.name;
// console.log(obj); // {}

// new Operator
// The new operator creates an instance of a user-defined object:
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   var person = new Person("Pradeep", 25);
//   console.log(person); // Person { name: 'Pradeep', age: 25 }

