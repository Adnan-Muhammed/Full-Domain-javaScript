let weakSet =   new WeakSet()

let obj1 ={name: "Object One"}
let obj2 ={name: "Object Two"}
let obj3 ={name: "Object Three"}
let obj4 ={name: "Object Four"}



weakSet.add(obj1)

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
weakSet.delete(obj1)
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));


weakSet.add(obj3)

console.log(weakSet.get(obj3));

