

// let num1 =(cb)=>{
//     cb(1)
// }
// let num2 =(cb)=>{
//     cb(2)
// }
// let num3 =(cb)=>{
//     cb(3)
// }

// num1((val)=>{
//     num2((val2)=>{
//         num3((val3)=>{
//             console.log(val+val2+val3);
            
//         })
//     })
// })




// let num1 =(cb)=>{
//     setTimeout(()=>{
//         cb(1)
//     })
// }
// let num2 =(cb)=>{
//     setTimeout(()=>{
//         cb(1)
//     })
// }
// let num3 =(cb)=>{
//     setTimeout(()=>{
//         cb(1)
//     })
// }
// num1((val)=>{
//     num2((val2)=>{
//         num3((val3)=>{
//             console.log(val+val2+val3);
//         })
//     })
// })






let   data  = new Promise ((res,rej)=>res(10))
let   data2 = new Promise ((res,rej)=>rej(10))
let   data3 = new Promise ((res,rej)=>res(10))

data.then((val1)=>{
    console.log(val1);
    data2.then((val2)=>{
        console.log(val1+val2)
        data3.then((val3)=>{
            console.log(val1+val2+val3)
        }).catch((err)=>{
            console.log("error in ",3);
        })
    }).catch((err)=>{
        console.log("error in ",2);
    })
}).
catch((err)=>{
    console.log('its error',1);
    
})