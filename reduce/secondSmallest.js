// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let findSmallest = (arr) => {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }
//   return secondSmallest;
// };

// let res = findSmallest(arr);
// console.log(res);






let arr = [1, 0, 4, 7, 3, 9, 2, 8, 6, 2];


let findSecondSmallest = (arr)=>{
  let smallest = Infinity
  let secondSmallest = Infinity
  for(i=0;i<arr.length;i++){
    if(arr[i]<smallest){
      secondSmallest = smallest;
      smallest = arr[i]
    }else if(arr[i]<secondSmallest && arr[i]!==smallest){
      secondSmallest = arr[i]
    }
  }
  return secondSmallest
}

let secondSmallest =findSecondSmallest(arr)
console.log(secondSmallest);
