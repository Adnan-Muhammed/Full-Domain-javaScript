// Constructor function for Person
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to Person's prototype
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };


  
  // Constructor function for Student, inheriting from Person
  function Student(name, studentId) {
    Person.call(this, name); // Call the parent constructor
   
    this.studentId = studentId;
  }
  
  // Set up inheritance
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  // Adding a method to Student's prototype
  Student.prototype.study = function() {
    console.log(`${this.name} is studying`);
  };
  
  // Creating an instance of Student
  const student1 = new Student('Alice', 'S123');
  student1.sayHello(); // Output: Hello, my name is Alice
  student1.study();    // Output: Alice is studying
  