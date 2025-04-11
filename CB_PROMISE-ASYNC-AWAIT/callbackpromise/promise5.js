

let num =(data)=>{
    return new Promise((res,rej)=>{
        console.log(data);
        
        if(data%2==0){
            data*=2
            res(data)
        }else{
            rej('not even')
        }
    })
}

let data =8
num(data).then((val)=>{
    if(val>8){
        console.log(val);
        return `the value is ${val+val} `
    }
}).then((val)=>{
    console.log(val);
    
}).catch((err)=>{
    console.log(err);
})