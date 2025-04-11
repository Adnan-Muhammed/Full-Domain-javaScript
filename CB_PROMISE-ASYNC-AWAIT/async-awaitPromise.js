
let promise1 = (arr)=>{
    return new Promise((res,rej)=>{
        if(Array.isArray(arr) && arr.every((elem)=>typeof elem ==='number')){
            res(arr)
        }else{
            rej('should number array')
        }
    })
}

let promise2 =(arr)=>{
    return new Promise((res,rej)=>{
        let multipleArr = arr.map((elem)=>elem*2)
        
        res(multipleArr)
    })
}

let promise3 =(arr)=>{
    return new Promise((res,rej)=>{
        let sum =arr.reduce((acc,elem)=>acc+elem,0)
        
        res(sum)
    })
}

let arr = [ 8, 3, 2, 7, 6, 1,'3', 9, 5, 10, 4];





let arrayManipulate =async (arr)=>{

        let array1 = await promise1(arr).then((val)=>val).catch((err)=>{
            console.log(err) ;
            return[]}  // return[]   for further 
         )
        
        
        
        let array2 = await promise2(array1).then((val)=>val).catch((err)=>err)
        let sum = await promise3(array2).then((val)=>val).catch((err)=>err)

        console.log(sum);
    
}

arrayManipulate(arr)



let arrayManipulateCallBack = (arr) => {
    checkArray(arr, (err, array1) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(array1, '789');
        
        doubleArray(array1, (err, array2) => {
            if (err) {
                console.log(err);
                return;
            }

            sumArray(array2, (err, sum) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(sum);
            });
        });
    });
}
