// IIFE in Javascript

// IIFE stand for Immediately Invoked Function
// is a functions that euns the moment it is invoked or called in the javascript event loop.
// IIFE is a javascript function that runs as soon as it is defined.

// example of IIFE

// (function add(a,b){
//   console.log(a+b);
// })(4,5) // 9

// (function say(){
//   console.log('Hey Pradeep');
// })(); // Hey Pradeep

// Es6 arrow function IIFE
  
  // ((a,b)=>{
  //   console.log(a+b);
  // })(4,5) // 9
  
  //   (()=>{
  //     console.log('Hey Pradeep');
  //   })(); // Hey Pradeep  


    // 
    const data = (async ()=> await fetch('https://jsonplaceholder.typicode.com/todos/1'))();
    // data.then(data=>console.log(data));
    // or
    (async ()=>{
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      // console.log(data);
    })();

// example of IIFE

const withdrawBalance = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const printBalance = () => {
      console.log("Balance is ", balance);
    };
    printBalance();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = withdrawBalance(100); // Balance is 100
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // Amount 80 is withdrawn
console.log(firstAccount.withdraw(50)); // Amount 30 is withdrawn
console.log(firstAccount.printBalance); // undefined; this method is private
console.log(firstAccount.withdraw(40)); // Insufficient money
console.log(firstAccount.withdraw(20)); // undefined
