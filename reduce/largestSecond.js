let arr = [1, 10, 3, 9, 4, 5, 6, 7, 8];

let findSecondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i]>secondLargest && arr[i]!==largest) {
      secondLargest=arr[i]
    }
  }
  return secondLargest
};

let res = findSecondLargest(arr);
console.log(res);
