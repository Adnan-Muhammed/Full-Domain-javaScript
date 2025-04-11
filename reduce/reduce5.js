
  // using reduce function to find the second largest number

  const arr = [1, 2, 3, 4, 5, 6];

  const secondLargest = arr.reduce(
    (prev, cur) => {
      if (cur > prev[0]) {
        return [cur, prev[0]];
      } else if (prev[1] > cur) {
        return [prev[0], cur];
      } else {
        return prev;
      }
    },
    [-Infinity, -Infinity]
  )[1];
  console.log(secondLargest);