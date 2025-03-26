// variable decleartion in js var let const

// var is function scope
// let is block scope
// const is block scope and can't be reassigned

// var can be reassigned
// let can be reassigned
// const can't be reassigned

// var can be hoisted
// let can't be hoisted
// const can't be hoisted

// var can be redeclared
// let can't be redeclared
// const can't be redeclared

// var can be updated
// let can be updated
// const can't be updated

// var can be declared without value
// let can't be declared without value
// const must be declared with value

// firstName is used camelCase
// FirstName is used Classes

var fullName = "Pradeep Bhosle";
console.log(fullName);

// variable scope in js is global and local
// global scope is accessible from anywhere in the code
// local scope is accessible only within the function

// eg.
// var name = "Ashwat";
if(true){
    var name = "Pradeep";
  }
  console.log(name);

// let 
// let scope is local
// let can't be hoisted
// let can be redeclared
// let can be updated


// if(true){
//     let name1 = "Pradeep";
//   }
//   console.log(name1); // name1 is not defined

// const
// const scope is local
// const can't be hoisted
// const can't be redeclared
// const can't be updated

const age = 10;
age = 20;
console.log(age); //Assignment to constant variable.
