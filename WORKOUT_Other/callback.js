let num1 = (cb)=>{
    cb(10)
}
let num2 = (cb)=>{
    cb(10)
}
let num3 = (cb)=>{
    cb(10)
}


num1((val1)=>{
    num2((val2)=>{
        num3((val3)=>{
            console.log(val1+val2+val3);
            
        })
    })
})