// Promises in Javascript
// Promises are way to handle asynchronous operations, such as fetching data from a server, reading file, or waiting for some event to occur. Promises allow you to write asynchronous code 

// What is Promise?
// A Promises is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 1. Pending:The promise is still begin excuted.(neither fulfilled nor rejected)
// 2. Fulfilled: The promise has been resolved and the value is available.
// 3. Rejected: The promise has been rejected and the reason of the rejection is available.

// 
// let promise = new Promise((resolve, reject) => {
// let success = true;
// if(success){
  // resolve('Promise is resolved');
// } else {
  // reject('Promise is rejected');
// }
//}  
//})


// Handeling Promise 
// Once a promise is created, you can handle its result using the then() nad catch() methods.

// .then() is called when the promise id fullfilled.
// .catch() is called when the promise is rejected.

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//  
//   if(success){
//     resolve('Promise is resolved');
//   } else {
//     reject('Promise is rejected');
//   }
// })
//
// promise.then((message) => {
//   console.log('Then: ' + message);
// }).catch((message) => {
//   console.log('Catch: ' + message);
// })

// Asynch/Await 
// asynch/await syntax is used to simplify woarking with promises. it makes asynchronous code look more like synchronous code.

// asynch : A function id declared a asynch to indicate that it will return a promise.
// await : The await keyword is used to wait for a promise to resolve or reject.

// Example with fetch API

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json()) // Convert the response to JSON
//   .then(data => console.log(data))    // Handle the resolved data
//   .catch(error => console.error(error));  // Handle errors