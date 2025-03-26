// Local Storage in Javascript

// Local Storage is a way to store data in the browser. It allows you to store data without an expiration date. This means the data will not be deleted when the browser is closed, and will be available the next day, week, or year.
// localstorage is web api that allows you store data in th browser persistently across session. That is data is saved in key-value pairs 

// setItem(key, value):  store a key value pair in localstorage.
// key : The name of the item to store.
// value: The value of the item to store.

// localStorage.setItem('name', 'John Doe');
//
// getItem(key): Retrives the value of given key from localstoreage.
// key : The name of the item you want to retrive.

// let name = localStorage.getItem('name');
// console.log(name); // John Doe

// removeItem(key): Removes a specific key-value pair form localstoarege.
// localStorage.removeItem('name');

// clear(): Clears all data stored in localstorage for the ciurrent domain.
// localStorage.clear();

// key(index): Returns the name of the key at the given index in localStorage.
// let key = localStorage.key(0);
// console.log(key);  // Output: 'username' (if it's the first item)

// length: Returns the number of items stored in localStorage.
// let numberOfItems = localStorage.length;
// console.log(numberOfItems);  // Output: 1 (if only 1 item is stored)

// // Limitations of localStorage:
// Storage Size: Most browsers limit storage to 5MB per domain.

// No Expiry: Data in localStorage doesn't expire unless explicitly removed by the user or the script.