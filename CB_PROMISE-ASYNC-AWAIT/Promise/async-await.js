
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

let finalValue = async (randomValue)=>{
    let val = await chooseNum(randomValue);
    let squaredValue = await squareNum(val)
    let finalValue = await pointValue(squaredValue)
    console.log(finalValue);
    
}
finalValue(10)

