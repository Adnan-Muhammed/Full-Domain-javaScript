function* numberGenerator(start, end) {
    for (let num = start; num <= end; num++) {
      yield num;
    }
  }
  
  const numGen = numberGenerator(1, 10)
//   console.log(numGen.next().value);
//   console.log(numGen.next().value);
// //   console.log(numGen.next());
//   console.log(numGen.next().value);


//   console.log(numGen[value]);
  


  
  
  
  // Calculate the sum
  let sum = 0;
  for (let value of numGen) {
    console.log(value,'kk');
    
    sum += value;
  }
  
  console.log(sum); // Output: 55
  