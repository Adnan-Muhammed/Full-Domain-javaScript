function fetchData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(`Data fetched: ${data}`);
        } else {
          reject("Error: No data provided");
        }
      }, 1000);
    });
  }
  
  fetchData("Initial data")
    .then((val) => {
      console.log(val); 
    //   fetchData("More data");   fetchData is retun a promise 
    // so we return a promise itself
      return new Promise ((res,rej)=>{
        console.log(1);
        
        console.log('initial data in inner promise');
        res(val) 
      })
    })
    .then((secondVal) => {
      console.log(secondVal); 
      
    //   return fetchData("Final data");
    return new Promise((res,rej)=>{
        console.log(2);
        
        res(secondVal)
    })
    })
    .then((finalVal) => {
        console.log(3);
        
        console.log(`third and finalVal`);
        
      console.log(finalVal); 
    })
    .catch((err) => {
      console.log(err); // Error handling
    });
  