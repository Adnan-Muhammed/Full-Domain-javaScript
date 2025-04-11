const obj = {
    greetings: function (greet, punctuation) {
      console.log(`${greet} ${this} ${punctuation}`);
    },
  };
  
  const person = "adil";
  
  // Create a bound function with `this` set to `person`
  const boundGreetings = obj.greetings.bind(person);
  
  // Call the bound function with arguments
  boundGreetings();  // Output: hello adil !
  