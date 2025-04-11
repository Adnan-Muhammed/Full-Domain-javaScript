

let weakMap = new WeakMap();

const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };
const obj3 = { name: "Object 3" };
const obj4 = { name: "Object 4" };


// Keys in weakMap: Only objects can be used as keys.  obj1, obj2, obj3

weakMap.set(obj1, 'Value associated with obj1');
weakMap.set(obj1, 'Value associated with obj1');
weakMap.set(obj2, [1,2,3]);
weakMap.set(obj2, [1,2,3]);
weakMap.set(obj3, 123)
weakMap.set(obj3, 123)
weakMap.set(obj4, {greet:"good morning"})
weakMap.set(obj4, {greet:"good morning"})


console.log(weakMap.get(obj1));

console.log(weakMap.has(obj1));// false
// console.log(weakMap.has(obj5));// true  // error

weakMap.delete(obj4)
console.log(weakMap.has(obj4)); // false




