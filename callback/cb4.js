

let fetchData=(cb)=>{
    setTimeout(()=>{
        cb('hello')
    },1000)
}
let fetchData2=(cb)=>{
    setTimeout(()=>{
        cb('adnan')
    },1000)
}
let fetchData3=(cb)=>{
    setTimeout(()=>{
        cb("!")
    },1000)
}

let test = fetchData((val)=>{
    fetchData2((val2)=>{
        fetchData3((val3)=>{
            console.log(`${val} ${val2} ${val3}`);
            return `${val} ${val2} ${val3}`
            
        })
    })
})
