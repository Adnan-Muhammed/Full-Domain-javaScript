

let chooseNum = (num)=>{

    return new Promise((res,rej)=>{
            setTimeout(()=>{
            if(num%2==0){
                res(num)
            }else{
                rej('not even')
            }
        },1000)
        })
}

let squareNum =(num)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(num*=2)
        },1000)
    })
}


let pointValue =(num)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(num+.5)
        },1000)
    })
}





chooseNum(10).then((value)=>{
    console.log('choose value',value);
    return squareNum(value)
})
.then((value)=>{
    console.log('multiple with two',value);
    return pointValue(value)
    
}).then((value)=>{
    console.log('final value is :', value);
    
})
.catch((err)=>{
    console.log(err);
})
