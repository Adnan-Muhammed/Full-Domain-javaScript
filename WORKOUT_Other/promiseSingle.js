

let arrManipulate = (arr)=>{
    let squareArr =[]
    return new Promise((res,rej)=>{
    if(arr.length>0 && arr.every((elem)=>typeof elem==="number") ){
        console.log(904567);
        squareArr = arr.map((elem)=>elem+2)
        res(squareArr)
    }else{
        rej('rejected')
    }
    })
}



let arr = [1,2,3,4,5,6]

let promise =arrManipulate(arr)

promise.then((val)=>{
    console.log(val);
    
}).catch((err)=>{
    console.log(err);
    
})


