let num1=(cb)=>{
    setTimeout(()=>{
        cb(10)
    },1000)
}
let num2=(cb)=>{
    setTimeout(()=>{
        cb(10)
    },1000)
}
let num3=(cb)=>{
    setTimeout(()=>{
        cb(10)
    },1000)
}


num1((val1)=>{
    num2((val2)=>{
        num3((val3)=>{
            console.log(val1+val2+val3);
            
        })
    })
})
