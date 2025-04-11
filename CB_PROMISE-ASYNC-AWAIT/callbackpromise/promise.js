let promise1 = new Promise((res,rej)=>{
    if(num ===1){
        res('solved')
    }else{
        rej('rejected')
    }
    
    promise1.then((num)=>{
        console.log(num);
        
    })
}).catch((err)=>{
    console.log(err);
    
})






let promise2 = new Promise((res,rej)=>{
    if(num ===1){
        res('solved')
    }else{
        rej('rejected')
    }
})
let promise3 = new Promise((res,rej)=>{
    if(num ===1){
        res('solved')
    }else{
        rej('rejected')
    }
})