function* evenNumberGenerator() {
    let num = 0;
    
    while (num>10 ?false:true) {
        num += 2;
      yield num
    }
  }
  
  // Using the generator
  const evenGen = evenNumberGenerator();
  
  console.log(evenGen.next().value); 
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  console.log(evenGen.next().value);  
  