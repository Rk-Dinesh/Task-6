class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    foo() {
      console.log(`my name is ${this.name} and I'm ${this.age} years old.`);
    }
  
  }
  
  // Create a new person object
  var john = new Person("John", 30, "male");
  
  john.foo();



  class Uber {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculatePrice() {
    
      let fare = 50;
  
      // Distance-based 
      fare += this.distance * 5;
  
      // Time-based 
      fare += this.time * 10 ;
  
      return fare;
    }
  }
  
  
var myRide = new Uber(10, 30);
  
var price = myRide.calculatePrice();
  
console.log(`Ride cost Rs.${price}.`);
  
 