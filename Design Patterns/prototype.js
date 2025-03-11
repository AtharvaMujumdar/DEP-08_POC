/*
In prototype design pattern, objects are created by inheriting the propertiesa and methods of other objects. It helps in sharing of methods efficiently and thus helps in prototypal inheritance.

*/

// example-1: using function constructor with protottype

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.getDetails = function(){
    console.log(`${this.name} ${this.age}`);
}

const obj1 = new Person("Alice",30);
const obj2 = new Person("Bob",20);

console.log(obj1.getDetails === obj2.getDetails); // gives true as same funciton is being shared by two objects


// example-2: using protoptypal inheritance

const nameObj = {
    get: function(){
       console.log(this.name);
    }
};

const personObj = Object.create(nameObj);
personObj.name = "Alice";
personObj.get(); // logs Alice

console.log(Object.getPrototypeOf(personObj) === nameObj); // logs true
 

