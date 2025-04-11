
function fetchData1(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 1 fetched");
        resolve(num); 
      }, 1000);
    });
  }
  
  function fetchData2(data1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Data 2 fetched based on Data 1: ${data1}`);
        resolve(data1 * 2); 
      }, 1000);
    });
  }
  
  function fetchData3(data2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Data 3 fetched based on Data 2: ${data2}`);
        resolve(data2 + 5); 
      }, 1000);
    });
  }
  
  fetchData1(10)
    .then((data1) => {
      return fetchData2(data1); 
    })
    .then((data2) => {
      return fetchData3(data2); 
    })
    .then((finalResult) => {
      console.log(`Final result: ${finalResult}`); 
    })
    .catch((err) => {
      console.error(err); 
    });
  