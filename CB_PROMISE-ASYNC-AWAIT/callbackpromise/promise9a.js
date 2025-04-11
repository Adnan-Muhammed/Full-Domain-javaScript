// Simulating async operations with promises
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 1 fetched");
        resolve("Data 1");
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 2 fetched");
        resolve("Data 2");
      }, 1000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 3 fetched");
        resolve("Data 3");
      }, 1000);
    });
  }
  
  // Using promises to avoid callback hell
  fetchData1()
    .then((data1) => {
      console.log(data1); // Data 1
      return fetchData2(); // Returning another promise
    })
    .then((data2) => {
      console.log(data2); // Data 2
      return fetchData3(); // Returning another promise
    })
    .then((data3) => {
      console.log(data3); // Data 3
      // All data fetched in sequence
    })
    .catch((err) => {
      console.error(err); // Error handling
    });
  