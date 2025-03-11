/*
Constructor sdesign pattern allows us to create multiple instances that have same structure and methods.
*/

//example-1 through constructor function

function Person(name,age){
    this.name = name;
    this.age = age;
    this.getdetails = function(){
        console.log(`${this.name} ${this.age}`);
    }
}

const obj1 = new Person("Alice",30);
const obj2 = new Person("Bob",25);

console.log(obj1 === obj2); // gives false as they are two different instances


//example-2 througn classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Creating instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.getDetails()); // Output: Alice is 25 years old.
console.log(person2.getDetails()); // Output: Bob is 30 years old.
