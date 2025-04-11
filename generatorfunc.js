function* evenNumbers(max) {
    let num = 0;
    while (num <= max) {
      yield num;
      num += 2;
    }
  }
  
  // Example usage
  const evens = evenNumbers(10);
  
  console.log(evens.next().value); // 0
  console.log(evens.next().value); // 2
  console.log(evens.next().value); // 4
  console.log(evens.next().value); // 6
  console.log(evens.next().value); // 8
  console.log(evens.next().value); // 10
  console.log(evens.next().value); // undefined (no more values)
  