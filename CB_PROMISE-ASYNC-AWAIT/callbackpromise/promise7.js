let arrManipulate = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length > 0  &&  !arr.some((elem)=>typeof elem==='string')) {        
      let sum = arr.reduce((acc, elem) => acc + elem, 0);
      resolve(sum);
    } else {
      reject("array should be number");
    }
  });
};

// arrManipulate([1, 2, "3", 4, "5"])
arrManipulate([1, 2, 3, 4, 5])
  .then((val) => {    
    console.log(val);
    return val
  }).then((returnVal)=>{
    console.log(returnVal);
    return returnVal
  }).then((returnValue2)=>{
    console.log(returnValue2);
    
  })
  .catch((err) => {
    console.log(err);
  });
