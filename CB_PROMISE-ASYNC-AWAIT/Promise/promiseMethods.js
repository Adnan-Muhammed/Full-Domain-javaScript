
let promise1 = new Promise((res,rej)=>{
    res("one")
})
let promise2 = new Promise((res,rej)=>{
    res("two")
})
let promise3 = new Promise((res,rej)=>{
    res("three")
})

let promises = Promise.all([promise1,promise2,promise3])

promises.then((val)=>{
    console.log(typeof val,val);  
}).catch((err)=>{
    console.log(typeof err, err);
})