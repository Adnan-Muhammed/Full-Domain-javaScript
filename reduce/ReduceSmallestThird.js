let arr = [6, 5, 3, 2, 8, 7, 9, 4];

let thirdSmallest = arr.reduce((acc, elem) => {
  let [smallest, secondSmallest, thirdSmallest] = acc;

  if (elem < smallest) {
    // Update smallest, shift the second and third smallest
    return [elem, smallest, secondSmallest];
  } else if (elem < secondSmallest) {
    // Update second smallest, shift the third smallest
    return [smallest, elem, secondSmallest];
  } else if (elem < thirdSmallest) {
    // Update third smallest
    return [smallest, secondSmallest, elem];
  } else {
    return acc; // No update needed
  }
}, [Infinity, Infinity, Infinity]); // Initialize with three large values

console.log("Third smallest:", thirdSmallest[2]);
