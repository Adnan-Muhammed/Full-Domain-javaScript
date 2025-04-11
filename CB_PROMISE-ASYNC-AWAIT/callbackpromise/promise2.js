let checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num,num+1);
    } else {
      reject(num, 'its not even');
    }
  });
};

// checkEven(1)
//   .then((val) => {
//     console.log(val, " is even");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  
  checkEven(2)
  .then((val,val2) => {
    console.log(val, " is even");
    console.log(val2, " is odd");
  })
  .catch((err,err2) => {
    console.log(err,err2);
  });

//   checkEven(4)
//   .then((val) => {
//     console.log(val, " is even");
//   })
//   .catch((err,err2) => {
//     console.log(err,err2);
//   });
