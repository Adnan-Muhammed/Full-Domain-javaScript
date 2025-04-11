// Simulating async operations with callbacks (callback hell)
function fetchData1(callback) {
    setTimeout(() => {
      console.log("Data 1 fetched");
      callback(null, "Data 1");
    }, 1000);
  }
  
  function fetchData2(callback) {
    setTimeout(() => {
      console.log("Data 2 fetched");
      callback(null, "Data 2");
    }, 1000);
  }
  
  function fetchData3(callback) {
    setTimeout(() => {
      console.log("Data 3 fetched");
      callback(null, "Data 3");
    }, 1000);
  }
  
  // Callback hell: deeply nested callbacks
  fetchData1((err, data1) => {
    if (!err) {
      fetchData2((err, data2) => {
        if (!err) {
          fetchData3((err, data3) => {
            if (!err) {
              console.log(data1, data2, data3);
            }
          });
        }
      });
    }
  });
  