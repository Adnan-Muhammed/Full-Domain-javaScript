// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Here is your data!");  // The callback is called after data fetching is done
    }, 2000);  // Simulating a 2-second delay for data fetching
}

function processData(data) {
    console.log("Processing data: ", data);
}

fetchData(processData);  // Passing the processData function as a callback
let h = ['Fetching data...',
' Data fetched!',
'Processing data:  Here is your data! ']




function fetchData(callback) {
    console.log("Fetching data...");
    
        callback("Here is your data!");  // The callback is called after data fetching is done
     // Simulating a 2-second delay for data fetching
}

function processData(data) {
    console.log("Processing data: ", data);
}

fetchData(processData);  // Passing the processData function as a callback



