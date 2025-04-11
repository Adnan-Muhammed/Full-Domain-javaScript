
const arr = [1, 2, 3, 0, 4, 5, 6];

let secondSmallest = arr.reduce((acc, elem) => {
    let [smallest, secondSmallest] = acc;
  
    if (elem < smallest) {
      return [elem, smallest]; // Update both smallest and second smallest
    } else if (elem < secondSmallest) {
      return [smallest, elem]; // Update only second smallest
    } else {
      return acc; // No change
    }
  }, [Infinity, Infinity]);
  
  console.log("Second smallest:", secondSmallest[1]);
  