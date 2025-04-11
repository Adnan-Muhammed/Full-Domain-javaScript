

// let num1 = (cb)=>{
//     cb(10)
// }

// let num2 =(cb)=>{
//     cb(20)
// }

// let num3 =(cb)=>{
//     cb(30)
// }

// num1((val)=>{
//     num2((val2)=>{
//         num3((val3)=>{
//             console.log(val+val2+val3);
            
//         })
//     })
// })





let num1 = (cb)=>{
    setTimeout(()=>{
        cb(10)
    },1000)
}

let num2 =(cb)=>{
    setTimeout(()=>{
        cb(20)
    },1000)
}

let num3 =(cb)=>{
    setTimeout(()=>{
        cb(30)
    },1000)
}

num1((val)=>{
    console.log('first');
    console.log(val);
    
    num2((val2)=>{
        console.log('second');
        console.log(val2);
        
        num3((val3)=>{
            console.log('third');
            console.log(val3);
            
            setTimeout(()=>{
                console.log('sum of three values'  , val+val2+val3);
            },1000)  
        })
    })
})