// let  promise = new Promise((res,rej)=>{
//     let data = 'adnan'
//     if(data){
//         res(data)
//     }else{
//         rej('rejected')
//     }
// })
// promise.then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err);
// })



let promise = new Promise((res, rej) => {
  let data = "adnan";
  if (data) {
    res(data);
  } else {
    rej("rejected");
  }
}).then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });



  