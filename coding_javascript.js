// Coding Javascript

// 01
let arr = [1, 2, 3, 4, 5];

let slicedArray = arr.slice(1, 4);
let splicedArray = arr.splice(2, 2);
console.log(slicedArray, splicedArray) // [2, 3, 4] [3, 4]

console.log(slicedArray.length + splicedArray.length);  // 5

// 02
console.log(1+'2'+'2'); // 122

//03
let ax = 100;
let ay = ax++;
let az = ++ax;
console.log(ax, ay, az);
let an = (ax==ay) ? az++ : ++az;
console.log(an)


