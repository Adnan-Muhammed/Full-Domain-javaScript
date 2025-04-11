const arr = [1, 2, 3, 0, 4, 5, 6];

const smallest = arr.reduce((acc, elem) => {
  if (acc > elem) {
    console.log(acc);
    console.log(acc , "acc > elem");
    return elem;
  } 
  else {
    console.log(acc ,  "acc < elem");
    return acc;
  }
}, Infinity);

console.log("Smallest:", smallest);
