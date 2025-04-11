let num1 =(cb)=>{
    cb(10)
}

let num2=(cb)=>{
    cb(3)
}
let num3 =(cb)=>{
    cb(1.3)
}

num1((val)=>{
    num2((val2)=>{
        num3((val3)=>{
            console.log(val+val2+val3);
        })
    })
})


let num1a =(cb)=>{
    setTimeout(()=>{
        cb(10)
    },1000)
}

let num2a=(value,cb)=>{
    setTimeout(()=>{
        cb(value+2)
    },1000)
}
let num3a =(value,cb)=>{
    setTimeout(()=>{
        cb(value+.5)
    },1000)
}

num1a((val)=>{
    num2a(val,(val2)=>{
        num3a(val2,(val3)=>{
            console.log(val3);
        })
    })
})