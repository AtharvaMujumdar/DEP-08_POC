/*
It creates objects without using new keyword with the help of factory function
*/


//example-1: using factory function only

function createObj(name1,age1){
   return {
     name:name1,
     age:age1
   }
}

const obj = createObj("Alice",25);


//example-2: Using Classes

class Developer{
   constructor(name){
     role = "Developer";
     this.name = name;
   }
}

class Manager{
    constructor(name){
        role="Manager";
        this.name = name;
    }
}

function factory(role,name){
    if(role==="Developer"){
        return new Developer(name);
    }
    else if(role === "Manager"){
        return new Manager(name);
    }
}

const obj1 = factory("Developer","Alice");
console.log(obj1.name);