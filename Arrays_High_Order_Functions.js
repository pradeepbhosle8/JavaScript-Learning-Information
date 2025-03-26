// Arrays - High Order Functions
//
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// example:
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function(number){
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// example:
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(number){
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// example:
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(total, number){
  return total + number;
}, 0);
console.log(sum); // 15

// The sort() method sorts the elements of an array in place and returns the sorted array.

// The forEach() method executes a provided function once for each array element.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// The fill() method fills all the elements of an array from a start index to an end index with a static value.
// The from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
// The pop() method removes the last element from an array and returns that element.
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// The shift() method removes the first element from an array and returns that removed element.
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// The toString() method returns a string representing the specified array and its elements.
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// The values() method returns a new Array Iterator object that contains the values for each index in the array.
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// The isArray() method determines whether the passed value is an Array.
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
