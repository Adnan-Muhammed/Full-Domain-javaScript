// let  Promise1 = new Promise((resolve,reject)=>{
//     // resolve("solved")
//     reject("rejected")
// })

// let Promise2 = new Promise((resolve,reject)=>{
//     // reject("reject")
//     resolve("solved")
// })


// let promiseValue =  Promise.any([Promise1,Promise2])

// promiseValue.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
    
// })




let num1 =(cb)=>{
    cb(10) 
}


let num2 =(cb)=>{
    cb(10) 
}


let num3 =(cb)=>{
    cb(10) 
}

 num1((val1)=>{
    num2((val2)=>{
        num3((val3)=>{
            let sum =  val1+val2+val3
            return sum
        })
    })
})






    