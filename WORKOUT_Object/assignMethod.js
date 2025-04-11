// const basicInfo ={
//     name:"Jerry",
//     age:22,
// }
// const addressInfo={
//     place:"Trivandrum",
//     state:"kerala",
// }

// const fullDetails_Object =Object.assign({},basicInfo,addressInfo)// in object
// const fullDetails_Array =Object.assign([],basicInfo,addressInfo)// in object



//     // console.log(addedDetail_Array);


// const target = { a: 1, b: 2 };
// const source = {b: 4, c: 5 };
// const result = Object.assign(target,source);

// console.log(result); // { a: 1, b: 4, c: 5 }
// console.log(target); // { a: 1, b: 4, c: 5 } (target is also modified)



// const target2 = { a: 1, b: 2 };
// const source2 = [ {b: 4}, {c: 5} ];
// const result2 = Object.assign(target2,...source2);

// console.log(result2); // { a: 1, b: 4, c: 5 }
// console.log(target2); // { a: 1, b: 4, c: 5 } (target is also modified)

    

const proto = {
   name:
    "hello"
    }
  

let obj = Object.create(proto)

console.log(Object.getPrototypeOf(obj) === proto); // true

console.log(obj.keys)