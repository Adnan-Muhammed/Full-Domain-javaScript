let sumAdd = (cb) => {
    setTimeout(()=>{
      cb(10)
    },1000)
  };
  let sumAdd2 = (cb) => {
    setTimeout(()=>{
      cb(20)
    },1000)
  };
    
  let sumAdd3 = (cb) => {
    setTimeout(()=>{
      cb(30)
    },1000)
  };
    
sumAdd((num) => {
    console.log(num);
    sumAdd2((num2)=>{
        console.log(num2);
        console.log(num+num2,"first and second");
        sumAdd3((num3)=>{
            console.log(num3);
            console.log(num+num2+num3,"first, second, third");
            
        })
    })
});
