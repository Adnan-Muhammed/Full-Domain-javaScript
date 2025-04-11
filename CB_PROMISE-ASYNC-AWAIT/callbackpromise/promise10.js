// Simulating asynchronous operations with dependencies

// First promise: fetches data1
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data 1 fetched");
        resolve(10); // Assume it resolves with the value 10
      }, 1000);
    });
  }
  
  // Second promise: depends on value from first promise
  function fetchData2(data1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Data 2 fetched based on Data 1: ${data1}`);
        resolve(data1 * 2); // Resolves with data1 * 2
      }, 1000);
    });
  }
  
  // Third promise: depends on value from second promise
  function fetchData3(data2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Data 3 fetched based on Data 2: ${data2}`);
        resolve(data2 + 5); // Resolves with data2 + 5
      }, 1000);
    });
  }
  
  // Using promises with dependency chaining
  fetchData1()
    .then((data1) => {
      // First promise resolved with data1
      return fetchData2(data1); // Pass data1 to the second promise
    })
    .then((data2) => {
      // Second promise resolved with data2
      return fetchData3(data2); // Pass data2 to the third promise
    })
    .then((finalResult) => {
      // Third promise resolved with finalResult
      console.log(`Final result: ${finalResult}`); // Output: Final result: 25
    })
    .catch((err) => {
      console.error(err); // Error handling if any promise fails
    });
  