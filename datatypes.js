// const uniqueKey = Symbol("unique");
// let uniqueKey2 = Symbol("unique");

// console.log(uniqueKey);
// console.log(uniqueKey2);


// // uniqueKey2 ='dd'


// // console.log(uniqueKey2);
// console.log(uniqueKey===uniqueKey2); // 



// const normalKey = "hello"
// const normalKey2 = "hello"

// console.log(normalKey === normalKey2);











const symbol1 = Symbol("description");
const symbol2 = Symbol("description");

// Both symbols are unique, even with the same description
// console.log(symbol1 === symbol2); // Output: false

const obj = {
  [symbol1]: "Value for symbol1",
  [symbol2]: "Value for symbol2"
};

// // Accessing properties
// console.log(obj[symbol1]); // Output: "Value for symbol1"
// console.log(obj[symbol2]); // Output: "Value for symbol2"

// // Demonstrating that Symbol keys do not conflict
// const anotherObj = {
//   normalKey: "This is a normal property"
// };

// anotherObj[symbol1] = "This is another value for symbol1";

// // Accessing properties from anotherObj
// console.log(anotherObj[symbol1]); // Output: "This is another value for symbol1"
// console.log(anotherObj.normalKey); // Output: "This is a normal property"




console.log(obj);
