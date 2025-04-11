
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
  




  let fetchDataChain=async(num)=> {
    try {
      const data1 = await fetchData1(num); // Wait for fetchData1 to resolve
      const data2 = await fetchData2(data1); // Use data1 in fetchData2
      const finalResult = await fetchData3(data2); // Use data2 in fetchData3
      console.log(`Final result: ${finalResult}`); // Log the final result
    } catch (err) {
      console.error(err); // Handle any errors
    }
  }
  
  fetchDataChain(10);
  