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
      console.log(val); // Logs "Data fetched: Initial data"
      
      // Returning another promise
      return fetchData("More data");
    })
    .then((newVal) => {
      console.log(newVal); // Logs "Data fetched: More data"
      
      // Returning yet another promise
      return fetchData("Final data");
    })
    .then((finalVal) => {
      console.log(finalVal); // Logs "Data fetched: Final data"
    })
    .catch((err) => {
      console.log(err); // Error handling
    });
  