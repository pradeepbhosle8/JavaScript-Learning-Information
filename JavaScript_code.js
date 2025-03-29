// 01
const user = {
  profile:{
    name: 'Pradeep',
    social:null,
    getDetails(){
      return {verified :true}
    }
  }
};

const result = [
  user?.profile?.name,
  user?.profile?.social?.handel,
  user?.profile?.getDetails?.()?.verified,
  user.nonExistent?.property,
];

console.log(result); // ["Pradeep", undefined, true, undefined]

// 02

function* counter(){
  let count = 1;
  while(true){
    const reset = yield count++;

    if(reset){
      count = 1;
    }
  }
};
const gen = counter();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next(true).value);
console.log(gen.next().value);
// Output:
// 1
// 2
// 1
// 2

// 03 
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* take(iterable, limit) {
  for (const item of iterable) {
    if (limit <= 0) return;
    yield item;
    limit--;
  }
}

const fibs = [...take(fibonacci(), 5)];
fibs.push(fibs[0] + fibs[1]);
console.log(fibs); // [1, 1, 2, 3, 5, 2]

// 04

function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1())// 1
console.log(counter1())// 2
console.log(counter2())// 1
console.log(counter1())// 3
console.log(counter2())// 2
// 05
counter1();
counter1();
counter2();

const result01 = counter1() + counter2();
console.log(result); // 5

// 06

let x = 1;
function outer() {
  let x = 2;
  function inner() {
    console.log(x);
    let x = 3;
  }
  inner();
}
outer(); // RefrenceError: Cannot access 'x' before initialization
// Function inner is trying to access x before it is declared. This is called Temporal Dead Zone.

// 07

const counter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  }
};

const inc = counter.increment;
const boundInc = counter.increment.bind(counter);

console.log([
  counter.increment(),
  inc(),
  boundInc(),
  counter.count
]);
// Output: [1, NaN, 2, 2]

// 08
const cache = new WeakMap();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

cache.set(obj1, 'data1');
cache.set(obj2, 'data2');

obj2.newProp = 'test';

console.log(cache.has(obj1), cache.has(obj2), cache.has({ id: 1 }));
// Output: true, true, false

// 09

async function getData() {
  return Promise.resolve(1);
}

async function process() {
  try {
    const x = await getData();   //1
    const y = await Promise.resolve(x + 1); //2
    console.log(y + await Promise.resolve(1)); //2+1
  } catch(err) {
    console.log('Error');
  }
}

process(); // Output is:  3


// 10

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];


const result02 = users
  .filter(user => user.age > 25)
  .map(user => user.name.toUpperCase())
  .reduce((acc, name) => acc + name[0], '');

console.log(result02);  // Output: BC
// // Explanation: 

// const result01 = users.filter(user => user.age>25);
// console.log(result01);
// // [
// //   { id: 2, name: 'Bob', age: 30 },
// // ]

// const result02 = result01.map(user=> user.name.toUpperCase());
// console.log(result02)
// // [ 'ALICE', 'BOB', 'CHARLIE' ]

// const result03 = result02.reduce((acc,name) => acc+name[0], '');
// console.log(result03)
// // BC

// 11

class Task {
  constructor(name) {
    this.name = name;
  }
  async execute() {
    const result = await Promise.resolve(this.name);
    return { result };
  }
}

const task = new Task('test');
task.execute().then(console.log); // Output: { result: 'test' }

// 12

const ws = new WeakSet();
const obj01 = { id: 1 };
const obj02 = { id: 2 };

ws.add(obj01);
ws.add(obj02);
ws.delete(obj01);

const obj03 = { id: 2 };

console.log([
  ws.has(obj02),
  ws.has(obj01),
  ws.has(obj03),
  ws.has({ id: 2 })
]);
// Output: [true, false, false, false]

// 13

function outer() {
  let x = 10;
  
  function inner() {
    console.log(x);
    
    if(true) {
      let x = 20;
      console.log(x);
    }
    
    console.log(x);
  }
  
  inner();
}

outer();
// Output: 10, 20, 10


// 14

const userMap = new WeakMap(); // weakmap is new object. is a collection of key/value pairs whose keys must be objects

const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

userMap.set(user1, { visits: 10 });
userMap.set(user2, { visits: 5 });

// Later in the code...
const entries = [];
for (const obj of [user1, null, user2]) {
  if (obj !== null && userMap.has(obj)) {
    entries.push(userMap.get(obj).visits);
  }
}

console.log(entries.reduce((sum, visits) => sum + visits, 0));
// Output: 15

// 15
const company = {
  name: 'TechCorp',
  departments: {
    engineering: {
      head: { name: 'Alice', contact: null },
      staff: 50
    },
    marketing: null
  }
};

const engineeringContact = company.departments.engineering.head.contact;
const marketingHead = company.departments.marketing?.head?.name;
const financeStaff = company?.departments?.finance?.staff ?? 'Not available';

console.log(`${engineeringContact} - ${marketingHead} - ${financeStaff}`);
// Output: null - undefined - Not available

// 16

async function fetchData() {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve('first'), 2000);
  });
  
  console.log('start');
  const result = await promise;
  console.log(result);
  console.log('end');
}

fetchData();
const x01 = 'after';
console.log(x);
// Output: start, after, first, end

// 17
const handler = {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop] * 2;
    }
    return 100;
  }
};

const nums = new Proxy({ a: 5, b: 10 }, handler);
console.log(nums.a, nums.b, nums.c);
// Output: 10, 20, 100

// 18

const team = {
  captain: { name: 'Jack', age: 35 },
  players: ['Bob', 'Alice', 'Mike'],
  details: { founded: 2020, league: 'Premier' }
};

const { 
  captain: { name }, 
  players: [, second],
  details: { league: division = 'Amateur' } 
} = team;

console.log(`${name}-${second}-${division}`);
// Output: Jack-Alice-Premier

// 19

const config = {
  port: 0,
  timeout: null,
  retries: '',
  cache01: false,
  debug: undefined
};

const port = config.port ?? 3000;
const timeout = config.timeout ?? 5000;
const retries = config.retries ?? 3;
const cache01 = config.cache ?? true;
const debug = config.debug ?? false;

console.log([port, timeout, retries, cache, debug]);
// Output: [0, 5000, '', false, false]

// 20

async function demo() {
  console.log('1');
  
  setTimeout(() => console.log('2'), 0);
  
  Promise.resolve().then(() => {
    console.log('3');
    setTimeout(() => console.log('4'), 0);
  });
  
  await Promise.resolve();
  console.log('5');
  
  queueMicrotask(() => console.log('6'));
}

demo();
console.log('7');
// Output: 1, 7, 3, 5, 6, 2, 4

// 21

function* range(start, end) {
  let current = start;
  while (current <= end) {
    if (current % 3 === 0) {
      current++;
      continue;
    }
    yield current++;
  }
}

const gen01 = range(4, 10);
const result03 = [...gen01];
console.log(result03);
// Output: [ 4, 5, 7, 8, 10 ]


